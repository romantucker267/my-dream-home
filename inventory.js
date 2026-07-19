const inventory = [];

export function addItem(item) {
  inventory.push(item);
  updateUI();
}

export function hasItem(item) {
  return inventory.includes(item);
}

function updateUI() {
  const el = document.getElementById('inventory');
  el.innerHTML = inventory.map(i => `<div>${i}</div>`).join('');
}