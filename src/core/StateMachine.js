import {States} from "../constants/States";
import {InitState} from "../states/InitState";
import {LobbyState} from "../states/Lobby";
import {TextsState} from "../states/Texts";
import {CardsState} from "../states/CardsState";
import {ParticlesState} from "../states/Particles";

export class StateMachine {
    constructor(game, initialState = States.Init) {
        this.game = game;
        this.states = {
            [States.Init]: new InitState(this),
            [States.Lobby]: new LobbyState(this),
            [States.Cards]: new CardsState(this),
            [States.Texts]: new TextsState(this),
            [States.Particles]: new ParticlesState(this)
        };

        this.currentState = null;

        this.changeState(initialState);
    }

    changeState(newState) {
        const state = this.states[newState];

        if (!state) {
            console.error(`State ${newState} does not exist!`);
            return;
        }

        if (this.currentState === state) {
            console.warn(`State ${newState} is already active!`);
            return;
        }

        if (this.currentState) {
            this.currentState.onExit();
        }

        this.currentState = state;
        this.currentState.onEnter();
    }

    update(delta) {
        if (this.currentState && this.currentState.onUpdate) {
            this.currentState.onUpdate(delta);
        }
    }
}