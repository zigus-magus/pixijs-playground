import {GameView} from "./View";
import {GameModel} from "./Model";

export class GameController {
    constructor(game) {
        this.assetsLoader = game.assetsLoader;
        this.view = new GameView(game.stage, this.assetsLoader);
        this.ticker = game.ticker;
        //this.model = new GameModel();
    }

    addElementToScene(name, element) {
        this.view.addElement(name, element);
    }

    removeElementFromScene(name, element) {
        this.view.removeElement(name, element);
    }

    getElement(name) {
        return this.view.getElement(name);
    }

    addRandomTextElement() {
        this.view.addRandomTextElement();
    }

    setHomeButtonVisibility(visible) {
        this.view.setHomeButtonVisibility(visible);
    }

    buildScene(config) {
        this.view.buildScene(config);
    }

    createSceneObject(objectConfig) {
        this.view.addSceneObject(objectConfig);
    }

    getTexture(name) {
        return this.assetsLoader.getTexture(name);
    }

    setButtonHandler(name, callback) {
        this.view.setButtonHandler(name, callback)
    }

    removeButtonHandler(name, callback) {
        this.view.removeButtonHandler(name, callback);
    }

    clearScene() {
        this.view.clearScene();
    }
}