import {BaseState} from "./BaseState";
import {Card} from "../components/Card";
import * as PIXI from "pixi.js";

export class CardsState extends BaseState {
    CARDS_FLY_INTERVAL = 1000;
    CARD_MOVE_DURATION = 2000;
    cardMoveIntervalId = null; // Store the interval ID

    constructor(stateMachine) {
        super(stateMachine);

        this.elements = {};
        this.leftStack = [];
        this.rightStack = [];
        this.animations = [];
        this.leftDeckText = null;
        this.rightDeckText = null;
    }

    async onEnter() {
        await super.onEnter();

        this.addHomeButton();
        this.createLeftDeck();
        this.addTexts();

        this.startMovingCards();
    }

    async onExit() {
        await super.onExit();

        if (this.cardMoveIntervalId) {
            clearInterval(this.cardMoveIntervalId);
            this.cardMoveIntervalId = null;
        }

        this.leftStack.length = 0;
        this.rightStack.length = 0;
    }

    createLeftDeck() {
        let x = 100;
        let y = 300;
        for (let i = 0; i < 144; i++) {
            const card = new Card();
            card.x = x + i;
            card.y = y + i;

            const frontTexture = this.controller.assetsLoader.getTexture('card_front');
            const backTexture = this.controller.assetsLoader.getTexture('card_back');
            card.init(frontTexture, backTexture);

            this.leftStack.push(card);
            this.controller.addElementToScene(`card_${i}`, card);
        }
    }

    startMovingCards() {
        this.cardMoveIntervalId = setInterval(() => {
            this.moveCardAlongCurve();
        }, this.CARDS_FLY_INTERVAL); // Trigger the movement every 1 second
    }

    moveCardAlongCurve() {
        if (this.leftStack.length === 0) return;

        const card = this.leftStack.pop();
        this.updateCardCount(); // Update the card count after popping a card

        // Include the offset in the end position
        const endX = 800 + this.rightStack.length;
        const endY = 300 + this.rightStack.length;

        const startX = card.x;
        const startY = card.y;

        const controlX = (startX + endX) / 2; // Mid-point control for quadratic curve
        const controlY = startY - 200; // Curve upwards

        const animation = {
            card,
            time: 0,
            duration: this.CARD_MOVE_DURATION,
            update: (delta) => {
                // Increment the elapsed time
                animation.time += delta * 16.6667; // delta is typically in frames, convert to ms

                const t = Math.min(animation.time / animation.duration, 1); // Normalize time to 0..1

                // Quadratic Bezier curve calculation
                card.x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlX + t * t * endX;
                card.y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlY + t * t * endY;

                if (t < 1) {
                    // Animation continues
                    return true;
                } else {
                    // Animation completes
                    this.rightStack.push(card);
                    this.updateCardCount();
                    card.zIndex = this.rightStack.length;
                    if (card && card.parent) {
                        card.parent.sortableChildren = true;
                    }
                    return false;
                }
            }
        };

        // Add the animation to the animations list
        this.animations.push(animation);

        // Start the rotation animation (assuming it uses the same update mechanism)
        card.startRotationAnimation(this.CARD_MOVE_DURATION);
    }

    onUpdate(delta) {
        // Update all active animations
        this.animations = this.animations.filter(animation => {
            return animation.update(delta);
        });
    }

    updateCardCount() {
        console.assert(this.leftDeckText && this.rightDeckText, 'Text elements are not initialized');

        this.leftDeckText.text = `Left Deck: ${this.leftStack.length}`;
        this.rightDeckText.text = `Right Deck: ${this.rightStack.length}`;
    }

    addTexts() {
        this.leftDeckText = new PIXI.Text(``, {
            fontSize: 24,
            fill: 0xffffff,
        });
        this.rightDeckText = new PIXI.Text(``, {
            fontSize: 24,
            fill: 0xffffff,
        });

        this.leftDeckText.x = 50;
        this.leftDeckText.y = 50;
        this.rightDeckText.x = 1000; // Position to the right side
        this.rightDeckText.y = 50;

        this.controller.addElementToScene('leftDeckText', this.leftDeckText);
        this.controller.addElementToScene('rightDeckText', this.rightDeckText);
    }
}