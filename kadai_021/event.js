const newText = "ボタンをクリックしました";
const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
    text.textContent = newText;
    }, 2000);
});
