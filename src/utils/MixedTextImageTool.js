import * as PIXI from 'pixi.js';

export class MixedTextImageTool {
    constructor(assetsLoader) {
        this.assetsLoader = assetsLoader;
        this.textOptions = ["Hello", "World", "Price", "Discount"];
        this.emojiOptions = ["😀", "😎", "🤑", "🤩", "💸", "💎"];
    }

    getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    createMixedObject() {
        const container = new PIXI.Container();
        const configurations = [
            ['emoji', 'text', 'emoji'],
            ['emoji', 'emoji', 'emoji'],
            ['emoji', 'emoji', 'text'],
            ['text', 'emoji', 'text'],
            ['text', 'text', 'text'],
            ['text', 'text', 'emoji']
        ];
        const config = this.getRandomElement(configurations);
        const fontSize = Math.floor(Math.random() * 20) + 20;
        let text = '';
        config.forEach(type => {
            if (type === 'text') {
                text += this.getRandomElement(this.textOptions) + ' ';
            } else {
                text += this.getRandomElement(this.emojiOptions) + ' ';
            }
        });

        container.addChild(new PIXI.Text(text,{ fontSize }));

        return container;
    }
}