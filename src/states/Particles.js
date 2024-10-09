import {BaseState} from "./BaseState";
import {States} from "../constants/States";

export class ParticlesState extends BaseState {
    constructor(stateMachine) {
        super(stateMachine);
    }

    async onEnter() {
        await super.onEnter();


    }

    async onExit() {
        await super.onExit();
    }

    onUpdate(delta) {

    }
}