const newText = "ボタンをクリックしました";
const btn = document.getElementById('btn');
const text = document.getElementById('text');
btn.addEventListener('click', () =>{
    text.textContent = newText;
});