// your code goes here
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const counterValue = document.getElementById('counterValue');
const statusMessage = document.getElementById('statusMessage');

let count = 0;

increaseBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

function updateCounter() {
  counterValue.textContent = count;

  if (count === 0) {
    statusMessage.textContent = 'Start Counting!';
  } else if (count > 0) {
    statusMessage.textContent = `Counting up! Current value: ${count}`;
  } else {
    statusMessage.textContent = `Counting down! Current value: ${count}`;
  }
}
