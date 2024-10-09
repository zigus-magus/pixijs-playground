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

    builtScene(config) {
        this.view.buildScene(config);
    }

    clearScene() {
        this.view.clearScene();
    }
}