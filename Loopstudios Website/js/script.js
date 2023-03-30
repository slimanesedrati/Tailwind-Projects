let toggle = document.getElementById("menu-btn")
let menu = document.getElementById("menu")

toggle.addEventListener('click',() => {
    toggle.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
    overlay.classList.toggle('flex')
    overlay.classList.toggle('hidden')
    }
)