import {SceneBuilder} from "../utils/SceneBuilder";

export class BaseState {
    constructor(stateMachine) {
        this.stateMachine = stateMachine;
        this.controller = stateMachine.game.controller;
    }

    changeState(newState) {
        this.stateMachine.changeState(newState);
    }

    async onEnter() {
        console.log('%cEntered: ', 'color: green; font-weight: bold;', this.constructor.name);
    }

    async onExit() {
        this.controller.clearScene();
        console.log('%cExited: ', 'color: red; font-weight: bold;', this.constructor.name);
    }

    onUpdate(delta) {

    }
}