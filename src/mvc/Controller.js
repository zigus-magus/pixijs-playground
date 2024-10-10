import {GameView} from "./View";
import {GameModel} from "./Model";

export class GameController {
    constructor(game) {
        this.assetsLoader = game.assetsLoader;
        this.view = new GameView(game.stage, this.assetsLoader);
        this.model = new GameModel();
    }

    addElementToScene(name, element) {
        this.view.addElement(name, element);
    }

    removeElementFromScene(name, element) {
        this.view.removeElement(name, element);
    }

    buildScene(config) {
        this.view.buildScene(config);
    }

    createSceneObject(objectConfig) {
        this.view.addSceneObject(objectConfig);
    }

    setButtonHandler(name, callback) {
        this.view.setButtonHandler(name, callback)
    }

    clearScene() {
        this.view.clearScene();
    }
}