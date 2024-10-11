import * as PIXI from 'pixi.js';

export class SceneSprite extends PIXI.Sprite {
    constructor(config, texture) {
        super(texture);
        this.position.set(config.position.x || 0, config.position.y || 0);
        this.anchor.set(config.anchor?.x || 0, config.anchor?.y || 0);

        if (config.width) {
            this.width = config.width;
        }

        if (config.height) {
            this.height = config.height;
        }
    }
}