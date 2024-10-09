import * as PIXI from 'pixi.js';

export class Card extends PIXI.Container {
  constructor() {
    super();

    this.sprite = new PIXI.Sprite();
    this.addChild(this.sprite);
    this.frontSideShowing = true;
  }

  init(textureFront, textureBack) {
    this.textureFront = textureFront;
    this.textureBack = textureBack;

    this.setTexture(this.frontSideShowing);
  }

  startRotationAnimation(durationMs) {
    const startTime = performance.now(); // Track when animation starts
    const halfDuration = durationMs / 2;

    const animateRotation = (currentTime) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / durationMs, 1); // Normalize time to 0..1

      // Calculate scale based on cosine curve (simulating Y-axis rotation)
      const angle = t * Math.PI; // From 0 to Pi (half rotation)
      this.sprite.scale.x = Math.cos(angle); // Simulate Y-axis rotation by modifying scale.x

      // Swap texture when the card is "on its side" (at the halfway point)
      if (elapsed >= halfDuration && this.frontSideShowing) {
        this.toggleTexture();
      }

      // Continue the animation if it's not complete
      if (t < 1) {
        requestAnimationFrame(animateRotation); // Continue with next frame
      } else {
        this.sprite.scale.x = 1; // Ensure final scale is correct
      }
    };

    requestAnimationFrame(animateRotation); // Start the first frame
  }

  toggleTexture() {
    this.frontSideShowing = !this.frontSideShowing;
    this.setTexture(this.frontSideShowing);
  }

  setTexture(isFrontSide) {
    this.sprite.texture = isFrontSide ? this.textureFront : this.textureBack;
  }
}