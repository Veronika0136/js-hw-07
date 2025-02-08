const onInput = document.querySelector('input#name-input');
const onSpan = document.querySelector('span#name-output');

onInput.addEventListener('input', e => {
  console.log(e);
  e.target.textContent.trim();
 
  if(e.target.value.includes(" ") || e.target.value === ""){
    onSpan.textContent = "Anonymous";
  } else {
    onSpan.textContent = e.target.value;
  }
  
});
