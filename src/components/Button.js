import * as PIXI from 'pixi.js';

export class Button extends PIXI.Container {
    constructor({ text, x, y }) {
        super();
        this.x = x;
        this.y = y;

        const buttonGraphics = new PIXI.Graphics();
        buttonGraphics.beginFill(0x0000ff);
        buttonGraphics.drawRect(0, 0, 200, 50);
        buttonGraphics.endFill();
        this.addChild(buttonGraphics);

        const buttonText = new PIXI.Text(text, { fill: 0xffffff });
        buttonText.anchor.set(0.5);
        buttonText.x = 100;
        buttonText.y = 25;
        this.addChild(buttonText);

        this.eventMode = 'dynamic'; // Updated to use eventMode instead of interactive
        this.buttonMode = true;
    }
}