const onInput = document.querySelector('input#name-input');
const onSpan = document.querySelector('span#name-output');

onInput.addEventListener('input', e => {
  onSpan.textContent = e.target.value.trim();

  if (e.target.value.trim() === '' || e.target.value.trim() === ' ') {
    onSpan.textContent = 'Anonymous';
  }
});
