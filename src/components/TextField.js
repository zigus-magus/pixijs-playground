import * as PIXI from 'pixi.js';

export class TextField extends PIXI.Text {
    constructor(config) {
        super(config.text || '', config.style);
        this.position.set(config.position.x || 0, config.position.y || 0);
        this.anchor.set(config.anchor?.x || 0, config.anchor?.y || 0);
    }
}