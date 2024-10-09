import * as PIXI from 'pixi.js';
import {SceneBuilder} from "../utils/SceneBuilder";

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

    buildScene(config) {
        this.sceneBuilder.buildScene(config);
    }

    enableButton(name) {
        const buttonContainer = this.getElement(name);
        const button = buttonContainer ? buttonContainer.children[0] : null;
        if (button) {
            button.eventMode = 'dynamic';
            button.filters = [];
        } else {
            console.warn(`Button ${name} not found or invalid`);
        }
    }

    disableButton(name) {
        const buttonContainer = this.getElement(name);
        const button = buttonContainer ? buttonContainer.children[0] : null;
        if (button) {
            button.filters = [new AdjustmentFilter({saturation: 0, brightness: 0.7})];
            button.eventMode = 'none';
        } else {
            console.warn(`Button ${name} not found or invalid`);
        }
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
            storedHandler.push({ event, callback });
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

    removeAllButtonHandlers() {
        for (const name in this.eventHandlers) {
            this.removeButtonHandler(name);
        }

        this.eventHandlers = {};
    }

    clearScene() {
        while (this.stage.children.length > 0) {
            this.stage.removeChildAt(0);
        }
    }
}