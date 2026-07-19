import { triggerRandomEvent } from '../house/events.js';

export function startDirector() {
  setInterval(() => {
    if (Math.random() < 0.2) {
      triggerRandomEvent();
    }
  }, 10000);
}