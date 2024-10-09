import {BaseState} from "./BaseState";
import {States} from "../constants/States";

export class InitState extends BaseState {
    constructor(stateMachine) {
        super(stateMachine);
    }

    async onEnter() {
        await super.onEnter();

        await this.loadAssets();

        return this.changeState(States.Lobby);
    }

    async loadAssets() {
        await this.controller.assetsLoader.loadAssets('/assetsConfig.json').catch((error) => console.error('Failed to load assets:', error));
    }

    async onExit() {
        await super.onExit();
    }
}