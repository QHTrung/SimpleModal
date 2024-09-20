const modalBtnList = document.querySelectorAll('.show-modal');
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const closeBtnEl = document.querySelector('.close-modal');

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};
const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};
for (let i = 0; i < modalBtnList.length; i++) {
  modalBtnList[i].addEventListener('click', openModal);
}
closeBtnEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

// press Esc key on keyboard
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});
