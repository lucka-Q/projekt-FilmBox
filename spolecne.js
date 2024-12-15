const menuItemsShowClass = "show"
const menuIconBars = "fa-bars"
const menuIconXmark = "fa-xmark"

const hamburgerButton = document.querySelector("#menu-tlacitko")
const hamburgerButtonIcon = hamburgerButton.querySelector("i")
const menuItems = document.querySelector("#menu-polozky")

function menuOnClick() {
    if (menuItems.classList.contains(menuItemsShowClass)) {
        menuItems.classList.remove(menuItemsShowClass)
        setBurgerIcon(menuIconBars)
    } else {
        menuItems.classList.add(menuItemsShowClass)
        setBurgerIcon(menuIconXmark)
    }
}

function setBurgerIcon(iconClass) {
    if (!hamburgerButtonIcon.classList.contains(iconClass)) {
        if (iconClass === menuIconBars) {
            hamburgerButtonIcon.classList.remove(menuIconXmark)
        } else {
            hamburgerButtonIcon.classList.remove(menuIconBars)
        }
        hamburgerButtonIcon.classList.add(iconClass)
    }
}


hamburgerButton.addEventListener("click", menuOnClick)