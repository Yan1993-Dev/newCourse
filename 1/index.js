// const btn = document.querySelector('.btn__first')
// setTimeout(() => {
//     btn.style.padding = '200px';
//     btn.style.background = 'red';
//     btn.setAttribute('big-button', 'Look at me')
// }, 2000)

// (function() {
//     let ownMenu = event => {
//         console.log(event)
//     }
//     window.addEventListener(
//         "keydown",
//         ownMenu
//     )
// })

(function () {
    const button = document.querySelector('.button-to-top_js');

    if(!button)
        return;

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        })

        window.addEventListener('scroll', (e) => {
            if(window.pageYOffset > 350) {
                button.classList.remove('button-to-top_hidden')
            }
            if(window.pageYOffset <= 350) {
                button.classList.add('button-to-top_hidden')
            }
        })
})();




(function () {
    const contextmenu = document.querySelector('.contextmenu_js');
    if(!contextmenu) {
        return;
    }
    const btn = contextmenu.querySelector('.contextmenu__button_js');

    if(!btn) {
        return;
    }

    function closeMenu() {
        window.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('click', clickHandler);
        window.removeEventListener('keydown', keydownHandler);
        contextmenu.classList.add('contextmenu_hidden')
    }

    btn.addEventListener('click', () => {
        closeMenu();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })

    function scrollHandler(e) {
        closeMenu();
    }

    function clickHandler(e) {
        if(!contextmenu.contains(e.target)) {
            closeMenu();
        }
    }

    function keydownHandler(e) {
        if(e.keyCode === 27) {
            closeMenu();  
        }
    }

    window.addEventListener('contextmenu', e => {
        e.preventDefault();
        contextmenu.style.top = `${e.clientY}px`;
        contextmenu.style.left = `${e.clientX}px`;
        contextmenu.classList.remove('contextmenu_hidden');
        window.addEventListener('scroll', scrollHandler);
        window.addEventListener('click', clickHandler);
        window.addEventListener('keydown', keydownHandler);
    })
})();