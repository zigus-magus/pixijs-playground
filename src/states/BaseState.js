import {homeButtonConfig} from "../config/Config";
import {States} from "../constants/States";

export class BaseState {
    constructor(stateMachine) {
        this.stateMachine = stateMachine;
        this.controller = stateMachine.game.controller;
    }

    addHomeButton() {
        this.controller.createSceneObject(homeButtonConfig);
        this.controller.setButtonHandler(homeButtonConfig.name,
            () => this.changeState(States.Lobby));
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