import * as PIXI from 'pixi.js';

export class TextField extends PIXI.Text {
    constructor(config) {
        super(config.text || '', config.style);
    }
}