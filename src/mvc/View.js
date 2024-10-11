import * as PIXI from 'pixi.js';
import {SceneBuilder} from "../utils/SceneBuilder";
import {TextRandomizer} from "../utils/TextRandomizer";
import gsap from 'gsap';

export class GameView {
    constructor(stage, assetsLoader) {
        this.stage = stage;
        this.elements = {};
        this.eventHandlers = {};
        this.assetsLoader = assetsLoader
        this.sceneBuilder = new SceneBuilder(this.assetsLoader, this.addElement.bind(this));
    }

    addElement(name, element) {
        if (element && element instanceof PIXI.DisplayObject) {
            this.elements[name] = element;
            this.stage.addChild(element);
            return element;
        } else {
            console.error(`Element ${name} is invalid or not a PixiJS DisplayObject`);
            return null;
        }
    }

    addRandomTextElement() {
        const config = TextRandomizer.generateTextFieldConfig();
        this.addSceneObject(config);
        this.smoothAppear(config.name);
    }

    smoothAppear(name, duration = 1) {
        const element = this.getElement(name);
        if (element) {
            element.alpha = 0;
            gsap.to(element, {
                alpha: 1,
                duration: duration,
                onComplete: () => {
                    gsap.killTweensOf(element);
                }
            });
        } else {
            console.warn(`Element ${name} not found or invalid`);
        }
    }

    removeElement(name) {
        const element = this.elements[name];
        if (element && element instanceof PIXI.DisplayObject) {
            this.stage.removeChild(element);
            delete this.elements[name];
        } else {
            console.warn(`Element ${name} does not exist or is not a PixiJS DisplayObject`);
        }
    }

    getElement(name) {
        if (!this.elements[name]) {
            console.warn(`Element ${name} not found`);
            return null;
        }

        return this.elements[name];
    }

    setHomeButtonVisibility(visible) {
        const homeButton = this.getElement('HomeButton');
        if (homeButton) {
            homeButton.visible = visible;
        }
    }

    buildScene(config) {
        this.sceneBuilder.buildScene(config);
    }

    addSceneObject(objectConfig) {
        this.sceneBuilder.addSceneObject(objectConfig);
    }

    setButtonHandler(name, callback, event = 'pointerdown') {
        const buttonContainer = this.getElement(name);
        const button = buttonContainer ? buttonContainer.children[0] : null;
        const storedHandler = this.eventHandlers[name];

        if (button) {
            button.on(event, callback);
            if (!storedHandler) {
                this.eventHandlers[name] = [];
            }
            this.eventHandlers[name].push({ event, callback });
        } else {
            console.warn(`Button ${name} not found or invalid`);
        }
    }

    removeButtonHandler(name, callback, event = 'pointerdown') {
        const buttonContainer = this.getElement(name);
        const button = buttonContainer ? buttonContainer.children[0] : null;
        const storedHandler = this.eventHandlers[name];

        if (button && storedHandler) {
            const handlerToRemove = callback || storedHandler.callback;

            button.off(event, handlerToRemove);
            delete this.eventHandlers[name];
        } else {
            console.warn(`Button "${name}" not found or invalid, or no handler set`);
        }
    }

    clearScene() {
        while (this.stage.children.length > 0) {
            this.stage.removeChildAt(0);
        }
    }
}