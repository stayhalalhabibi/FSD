// COUNTER PROGRAM
let count = 0;
const countable = document.getElementById('countable');
const decreaseBtn = document.getElementById('d');
const increaseBtn = document.getElementById('i');
const resetBtn = document.getElementById('r');

decreaseBtn.addEventListener('click', () => {
    count--;
    countable.textContent = count;
});

increaseBtn.addEventListener('click', () => {
    count++;
    countable.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countable.textContent = count;
});
