document.querySelectorAll('.menu').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.menu.active').classList.remove('active')
        item.classList.add('active')
    })
})