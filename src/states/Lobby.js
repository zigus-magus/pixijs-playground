import { BaseState } from "./Base";
import {lobbySceneConfig} from "../config/Config";
import {States} from "../constants/States";

export class LobbyState extends BaseState {
    constructor(stateMachine) {
        super(stateMachine);
    }

    async onEnter() {
        await super.onEnter();

        this.controller.buildScene(lobbySceneConfig);
        this.controller.setButtonHandler('CardsButton', () => this.changeState(States.Cards));
        this.controller.setButtonHandler('TextsButton', () => this.changeState(States.Texts));
        this.controller.setButtonHandler('ParticlesButton', () => this.changeState(States.Particles));
    }

    async onExit() {
        await super.onExit();

        this.controller.removeButtonHandler('CardsButton', () => this.changeState(States.Cards));
        this.controller.removeButtonHandler('TextsButton', () => this.changeState(States.Texts));
        this.controller.removeButtonHandler('ParticlesButton', () => this.changeState(States.Particles));
    }
}
