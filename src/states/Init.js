import {BaseState} from "./Base";
import {States} from "../constants/States";

export class InitState extends BaseState {
    constructor(stateMachine) {
        super(stateMachine);
    }

    async onEnter() {
        await this.loadAssets();
        await super.onEnter();

        return this.changeState(States.Lobby);
    }

    async loadAssets() {
        return this.controller.assetsLoader.loadAssets('/assetsConfig.json')
            .catch((error) => console.error('Failed to load assets:', error));
    }

    async onExit() {
        return super.onExit();
    }
}