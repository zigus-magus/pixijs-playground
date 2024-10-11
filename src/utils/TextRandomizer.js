import * as PIXI from 'pixi.js';
import {initialGameConfig, mixedObjectsConfig} from "../config/Config";

export class TextRandomizer {
    static getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    static getMixedText() {
        let text = '';
        const config = TextRandomizer.getRandomElement(mixedObjectsConfig.patterns);
        config.forEach(type => text += TextRandomizer.getRandomElement(mixedObjectsConfig[type]) + ' ');

        return text;
    }

    static generateTextFieldConfig() {
        const { width, height } = initialGameConfig;
        const config = mixedObjectsConfig.defaultObject;

        config.position = { x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height) };
        config.text = TextRandomizer.getMixedText();
        config.style.fontSize = Math.floor(Math.random() * 40) + 20;
        config.style.fill = TextRandomizer.getRandomElement(mixedObjectsConfig.colors);

        return config;
    }
}