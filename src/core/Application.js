import * as PIXI from 'pixi.js';
import { initialGameConfig } from "../config/Config";
import Stats from "stats.js/src/Stats";

class GameApplication {
    static instance;

    constructor() {
        if (GameApplication.instance) return GameApplication.instance;

        this.app = new PIXI.Application({ ...initialGameConfig });
        document.getElementById('canvasContainer').appendChild(this.app.view);
        this.createFPSMeter();

        globalThis.__PIXI_APP__ = this.app;

        GameApplication.instance = this;
    }

    createFPSMeter() {
        this.stats = new Stats();
        this.stats.showPanel(0);
        this.stats.dom.className = 'fps-meter';
        document.body.appendChild(this.stats.dom);
        this.startGameLoop();
    }

    startGameLoop() {
        const loop = () => {
            this.stats.begin();
            this.update();
            this.stats.end();
            requestAnimationFrame(loop);
        };
        loop();
    }

    update() {

    }

    getApp() {
        return this.app;
    }
}

export const gameApp = new GameApplication();