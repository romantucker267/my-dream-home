export function createPlayer(camera) {
  const speed = 0.1;

  function update(input) {
    if (input['KeyW']) camera.position.z -= speed;
    if (input['KeyS']) camera.position.z += speed;
    if (input['KeyA']) camera.position.x -= speed;
    if (input['KeyD']) camera.position.x += speed;
  }

  return { update };
}