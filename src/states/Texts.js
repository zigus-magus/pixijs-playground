import { BaseState } from "./BaseState";
import { MixedTextImageTool } from "../utils/MixedTextImageTool";

export class TextsState extends BaseState {
    constructor(stateMachine) {
        super(stateMachine);
        this.mixedTextImageTool = new MixedTextImageTool(this.controller.assetsLoader);
    }

    async onEnter() {
        await super.onEnter();
        this.startGeneratingMixedObjects();
    }

    async onExit() {
        await super.onExit();
        clearInterval(this.interval);
    }

    startGeneratingMixedObjects() {
        this.interval = setInterval(() => {
            const mixedObject = this.mixedTextImageTool.createMixedObject();
            mixedObject.x = Math.random() * 800; // Random x position
            mixedObject.y = Math.random() * 600; // Random y position
            this.controller.addElementToScene('mixedObject', mixedObject);
        }, 2000);
    }
}