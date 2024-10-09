import { BaseState } from "./BaseState";
import { States } from "../constants/States";
import { Button } from "../components/Button"; // Assuming you have a Button component

export class LobbyState extends BaseState {
    constructor(stateMachine) {
        super(stateMachine);
    }

    async onEnter() {
        await super.onEnter();

        this.createButtons();
    }

    createButtons() {
        const buttonConfigs = [
            { text: 'Cards', state: States.Cards },
            { text: 'Texts', state: States.Texts },
            { text: 'Particles', state: States.Particles }
        ];

        const buttonY = 300; // Y position for all buttons
        const buttonSpacing = 50; // Space between buttons

        buttonConfigs.forEach((config, index) => {
            const button = new Button({
                text: config.text,
                x: 400, // X position (centered)
                y: buttonY + index * buttonSpacing
            });

            button.on('pointerdown', () => {
                this.changeState(config.state);
            });

            this.controller.addElementToScene(config.text, button);
        });
    }

    async onExit() {
        await super.onExit();
    }
}