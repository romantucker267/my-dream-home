import { createRenderer } from './engine/renderer.js';
import { setupLighting } from './engine/lighting.js';
import { setupInput } from './engine/input.js';
import { createPlayer } from './player/player.js';
import { createHouse } from './house/house.js';
import { initAudio } from './engine/audio.js';
import { saveGame, loadGame } from './engine/save.js';

const { scene, camera, renderer } = createRenderer();
setupLighting(scene);

const player = createPlayer(camera);
const input = setupInput();

createHouse(scene);
initAudio(camera);

function animate() {
  requestAnimationFrame(animate);

  player.update(input);
  renderer.render(scene, camera);
}

animate();

window.addEventListener('beforeunload', () => {
  saveGame({
    position: camera.position
  });
});