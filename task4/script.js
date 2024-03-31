const link = document.querySelector('a')

link.addEventListener('click', function(e) {
    let Text = prompt('Введите текст');
    this.textContent = Text;
    e.preventDefault();
})