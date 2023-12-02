const darkMode = document.querySelector('#dark')
const lightMode = document.querySelector('#light')
const htmlStyle = document.querySelector('html')

darkMode.addEventListener('click', () => {
    htmlStyle.classList.value = 'dark'
})

lightMode.addEventListener('click', () => {
    htmlStyle.classList.value = ''
})