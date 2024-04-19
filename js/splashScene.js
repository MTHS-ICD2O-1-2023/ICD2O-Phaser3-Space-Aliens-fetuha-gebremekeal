/* global Phaser */

// Created by: Fetuha
//
// Created on: Apr 2024
// This is the Splash Scene

/**
 * This class is the Splash Scene
 */
class SplashScene extends Phaser.scene {
  /**
 * This method is the constructor.
 */
  constructor() {
    super({ key: "splashScene" })
  }

  /**
   * Can be defined on your own scenes.
   * This method is called by the Scene Manager when the scene starts,
   *  before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.camera.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    // pass
  }
}

export default SplashScene
  