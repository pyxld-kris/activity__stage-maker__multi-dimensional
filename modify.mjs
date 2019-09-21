/**** WELCOME! *********************************************/
/**
 * Modify the stage, using an array, to allow your character
 * to reach the goal!
 * 
 * Change the 'stageArray' variable to alter the level!
 *    Possible array entry values:
 *      * 1: Solid Block
 *      * 0: Empty Space
 * 
 * ----------------------------------------------------------
 * After making a change: save this file, then press the refresh
 * button above the game window!
 * ----------------------------------------------------------
 */
/**************** Start Modifying Here! *********************/

var stageArray = [
  [0,0,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,0,0]
];


/**** GOODBYE! ************************************************/
/**** Stop Modifying Here! (Unless you want to experiment!) ***/

/*/
/*/
/*/
/*/
/*/
/*/
/*/
/*/
/*/
/*/
/*/

/* eslint-disable */ // Stops codesandbox from giving us annoying errors

var scene = this;
let gameWidth = scene.game.config.width; // easy access and readability
let gameHeight = scene.game.config.height; // easy access and readability

scene.solidBlocks = [];

let blockHeight = parseInt(gameHeight/stageArray.length);
for (let i=0; i<stageArray.length; i++) {
  let blockWidth = parseInt(gameWidth/stageArray[i].length);
  for (let j=0; j<stageArray[i].length; j++) {
    if (stageArray[i][j] === 1) {
      // Create a block
      let newBlock = scene.physics.add.staticSprite(
          blockWidth/2+blockWidth*j+2,
          blockHeight/2+blockHeight*i+2,
          this.generateRectangleSprite(blockWidth-4, blockHeight-4)
        )
      scene.solidBlocks.push(newBlock);
    }
  }

}
