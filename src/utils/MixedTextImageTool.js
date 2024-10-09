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
            ['text', 'emoji', 'text']
        ];
        const config = this.getRandomElement(configurations);
        const fontSize = Math.floor(Math.random() * 20) + 20;

        config.forEach(type => {
            let text = ''


            if (type === 'text') {
                this.getRandomElement(this.textOptions);
            } else {
                this.getRandomElement(this.emojiOptions);
            }

            const text =
            container.addChild(new PIXI.Text(, { fontSize }));
        });

        return container;
    }
}