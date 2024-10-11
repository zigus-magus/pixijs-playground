import * as PIXI from 'pixi.js';

export class Card extends PIXI.Container {
  constructor(textureFront, textureBack, id) {
    super();

    this.id = id;
    this.sprite = new PIXI.Sprite();
    this.sprite.anchor.set(0.5);
    this.addChild(this.sprite);

    this.textureFront = textureFront;
    this.textureBack = textureBack;
    this.frontSideShowing = true;

    this.setTexture(this.frontSideShowing);
  }

  startRotationAnimation(durationMs) {
    const halfDuration = durationMs / 2;
    const startTime = performance.now();

    const animateRotation = (currentTime) => {
      const elapsed = currentTime - startTime;
      const timeline = Math.min(elapsed / durationMs, 1);
      const angle = timeline * Math.PI;

      this.sprite.scale.x = Math.cos(angle);

      if (elapsed >= halfDuration && this.frontSideShowing) {
        this.toggleTexture();
      }

      if (timeline < 1) {
        requestAnimationFrame(animateRotation);
      } else {
        this.sprite.scale.x = 1; // Ensure final scale is correct
      }
    };

    requestAnimationFrame(animateRotation);
  }

  toggleTexture() {
    this.frontSideShowing = !this.frontSideShowing;
    this.setTexture(this.frontSideShowing);
  }

  setTexture(isFrontSide) {
    this.sprite.texture = isFrontSide ? this.textureFront : this.textureBack;
  }
}