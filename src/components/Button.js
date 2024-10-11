import * as PIXI from 'pixi.js';

export class Button extends PIXI.Container {
    constructor({ text, position, width, height }, texture) {
        super();
        this.x = position.x;
        this.y = position.y;

        const buttonGraphics = new PIXI.Sprite(texture);
        buttonGraphics.width = width;
        buttonGraphics.height = height;
        this.addChild(buttonGraphics);

        if (text) {
            const buttonText = new PIXI.Text(text, { fontFamily: 'Kenney', fill: 0x000000 });
            buttonText.anchor.set(0.5);
            buttonText.x = buttonGraphics.width / 2;
            buttonText.y = buttonGraphics.height / 2 - 2;
            this.addChild(buttonText);
        }

        buttonGraphics.eventMode = 'dynamic';
        buttonGraphics.buttonMode = true;

        this.on('pointerdown', () => {
            this.scale.set(0.95);
        });

        this.on('pointerup', () => {
            this.scale.set(1);
        });

        this.on('pointerupoutside', () => {
            this.scale.set(1);
        });
    }
}