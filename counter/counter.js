const GOAL = 8;
let count = 0;

const value = document.getElementById('value');
const water = document.getElementById('water');
const toast = document.getElementById('toast');

let toastTimer;

function update() {
  value.textContent = count;
  water.style.height = (count / GOAL * 100) + '%';

  if (count === GOAL) {
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }
}

document.getElementById('btnIncrease').addEventListener('click', () => {
  if (count < GOAL) { count++; update(); }
});

document.getElementById('btnDecrease').addEventListener('click', () => {
  if (count > 0) { count--; update(); }
});

document.getElementById('btnReset').addEventListener('click', () => {
  count = 0; update();
});