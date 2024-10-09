import { gameApp } from "./core/Application";
import { AssetsLoader } from "./utils/AssetsLoader";
import {GameController} from "./mvc/Controller";
import {SceneBuilder} from "./utils/SceneBuilder";
import {StateMachine} from "./core/StateMachine";

const game = gameApp.getApp();
game.assetsLoader = new AssetsLoader();
game.controller = new GameController(game);
game.stateMachine = new StateMachine(game);

game.ticker.add((delta) => game.stateMachine.update(delta));
