import { BaseState } from "./Base";
import {TextsSceneConfig} from "../config/Config";

export class TextsState extends BaseState {
    EMIT_INTERVAL = 2000;
    MAX_OBJECTS = 1000;

    constructor(stateMachine) {
        super(stateMachine);

        this.objectsCount = 0;
    }

    async onEnter() {
        await super.onEnter();

        this.controller.buildScene(TextsSceneConfig);
        this.setHomeButtonHandler();
        this.startGeneratingMixedObjects();
    }

    startGeneratingMixedObjects() {
        this.interval = setInterval(() => {
            if (this.objectsCount >= this.MAX_OBJECTS) {
                clearInterval(this.interval);
                return;
            }

            this.controller.addRandomTextElement();
            this.objectsCount++;
        }, this.EMIT_INTERVAL);
    }

    async onExit() {
        this.objectsCount = 0;
        clearInterval(this.interval);
        this.clearHomeButtonHandler();

        return super.onExit();
    }
}