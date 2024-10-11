import {BaseState} from "./Base";
import {Card} from "../components/Card";
import {CardsSceneConfig} from "../config/Config";
import gsap from "gsap";

export class CardsState extends BaseState {
    CARDS_FLY_INTERVAL = 1000;
    CARD_MOVE_DURATION = 2000;

    constructor(stateMachine) {
        super(stateMachine);

        this.elements = {};
        this.leftDeck = [];
        this.rightDeck = [];
        this.leftDeckText = null;
        this.rightDeckText = null;
        this.cardMoveIntervalId = null;
    }

    async onEnter() {
        await super.onEnter();
        this.controller.buildScene(CardsSceneConfig);
        this.initElements();
        this.createLeftDeck();
        this.setHomeButtonHandler();
        this.startMovingCards();
    }

    initElements() {
        this.leftDeckText = this.controller.getElement('leftDeckText');
        this.rightDeckText = this.controller.getElement('rightDeckText');
    }

    createLeftDeck() {
        const {cardsQuantity, leftDeckPosition} = CardsSceneConfig;
        let {x, y} = leftDeckPosition;
        for (let i = 0; i < cardsQuantity; i++) {
            const front = this.controller.getTexture('card_front');
            const back = this.controller.getTexture('card_back');
            const card = new Card(front, back, i);
            card.x = x;
            card.y = y + i;

            this.leftDeck.push(card);
            this.controller.addElementToScene(`card_${i}`, card);
        }
    }

    startMovingCards() {
        this.cardMoveIntervalId = setInterval(() => {
            this.moveCards();
        }, this.CARDS_FLY_INTERVAL); // Trigger the movement every 1 second
    }

    moveCards() {
        if (this.leftDeck.length === 0) return;

        const { rightDeckPosition , cardsQuantity} = CardsSceneConfig;
        const card = this.leftDeck.pop();
        card.zIndex = cardsQuantity - card.id;
        this.updateCardCount(); 
        
        gsap.to(card, {
            duration: this.CARD_MOVE_DURATION / 1000,
            x: rightDeckPosition.x,
            y: rightDeckPosition.y + this.rightDeck.length,
            onUpdate: () => {},
            onComplete: () => {
                this.rightDeck.push(card);
                this.updateCardCount();
                if (card && card.parent) {
                    card.parent.sortableChildren = true;
                }
            }
        });

        card.startRotationAnimation(this.CARD_MOVE_DURATION);
    }

    updateCardCount() {
        console.assert(this.leftDeckText && this.rightDeckText, 'Text elements are not initialized');

        this.leftDeckText.text = `Left: ${this.leftDeck.length}`;
        this.rightDeckText.text = `Right: ${this.rightDeck.length}`;
    }

    clearCardMoveInterval() {
        if (this.cardMoveIntervalId) {
            clearInterval(this.cardMoveIntervalId);
            this.cardMoveIntervalId = null;
        }
    }

    async onExit() {
        await super.onExit();

        this.clearHomeButtonHandler();
        this.clearCardMoveInterval();

        this.leftDeck.length = 0;
        this.rightDeck.length = 0;
    }
}