import * as PIXI from 'pixi.js';

export class Sprite extends PIXI.Sprite {
    constructor(config, texture) {
        super(texture);
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.anchor.set(config.anchor?.x || 0, config.anchor?.y || 0);

        if (config.width) {
            this.width = config.width;
        }

        if (config.height) {
            this.height = config.height;
        }
    }
}