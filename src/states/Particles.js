import { BaseState } from "./Base";
import { ParticlesSceneConfig } from "../config/Config";
import * as particles from '@pixi/particle-emitter'

export class ParticlesState extends BaseState {
    constructor(stateMachine) {
        super(stateMachine);
        this.emitter = null;
    }

    async onEnter() {
        await super.onEnter();

        this.controller.buildScene(ParticlesSceneConfig);
        this.setHomeButtonHandler();

        const particleContainer = this.controller.getElement('ParticlesContainer');
        const fireParticle = this.controller.getTexture('fire_particle');
        const {emitterConfig} = ParticlesSceneConfig;
        const updatedConfig = particles.upgradeConfig(emitterConfig, [fireParticle]);
        this.emitter = new particles.Emitter(particleContainer, updatedConfig);

        this.emitter.emit = true;
        this.controller.ticker.add(this.updateEmitter, this);
    }

    updateEmitter(delta) {
        if (this.emitter) {
            this.emitter.update(delta * 0.01);
        }
    }

    async onExit() {
        this.clearHomeButtonHandler();

        if (this.emitter) {
            this.emitter.destroy();
            this.emitter = null;
        }

        return super.onExit();
    }
}