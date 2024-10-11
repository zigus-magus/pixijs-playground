import {States} from "../constants/States";

export class BaseState {
    constructor(stateMachine) {
        this.stateMachine = stateMachine;
        this.controller = stateMachine.game.controller;
    }

    async onEnter() {
        console.log('%cEntered: ', 'color: green; font-weight: bold;', this.constructor.name);

    }

    changeState(newState) {
        this.stateMachine.changeState(newState);
    }

    setHomeButtonHandler() {
        this.controller.setButtonHandler('HomeButton', () => this.changeState(States.Lobby));
    }

    clearHomeButtonHandler() {
        this.controller.removeButtonHandler('HomeButton', () => this.changeState(States.Lobby));
    }

    async onExit() {
        this.controller.clearScene();

        console.log('%cExited: ', 'color: red; font-weight: bold;', this.constructor.name);
    }

    onUpdate(delta) {

    }
}