'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // burger menu
        const body = document.querySelector('.body'),
            menu = body.querySelector('.header__nav-wrapper'),
            menuItem = menu.querySelectorAll('.header__nav-item'),
            burger = body.querySelector('.header__nav-burger');

        burger.addEventListener('click', () => {
            burger.classList.toggle('header__nav-burger_active');
            menu.classList.toggle('header__nav-wrapper_active');
            body.classList.toggle('body_burger-open');
        });

        menuItem.forEach((item) => {
            item.addEventListener('click', () => {
                burger.classList.remove('header__nav-burger_active');
                menu.classList.remove('header__nav-wrapper_active');
                body.classList.remove('body_burger-open');
            });
        });

        body.addEventListener('click', (e) => {
            if (e.target.classList.contains('overlay')) {
                burger.classList.remove('header__nav-burger_active');
                menu.classList.remove('header__nav-wrapper_active');
                body.classList.remove('body_burger-open');
            }
        });

    // lang
    const langCurrent = document.querySelector('.header__lang-current'),
        langMenu = document.querySelector('.header__lang-menu'),
        langItems = document.querySelectorAll('.header__lang-menu-item'),
        langCurrentImg = document.querySelector('#header__lang-current-img');


    langCurrent.addEventListener('click', () => {
        langMenu.classList.add('header__lang-menu_active');
    });

    for (let i = 0; i < langItems.length; i++) {
        let langItem = langItems[i];
        langItem.addEventListener('click', changeLanguage);
    }

    function changeLanguage() {
        langCurrentImg.src = '../images/langs/' + this.dataset.lang + '.svg';
        langMenu.classList.remove('header__lang-menu_active');
    }

    // matches
    const matchesTabs = document.querySelectorAll('.matches__tab'),
        matchesItemLinks = document.querySelectorAll('.matches__item-link');

    matchesTabs.forEach(button => {
        button.addEventListener('click', () => {
            const sideBar = button.parentElement,
                tabsContainer = sideBar.parentElement,
                tabName = button.dataset.forTab,
                tabToActive = tabsContainer.querySelector(`.matches__content[data-tab="${tabName}"]`);

            matchesTabs.forEach(tab => {
                tab.classList.remove('matches__tab_active');
            });

            tabsContainer.querySelectorAll('.matches__content').forEach(content => {
                content.classList.remove('matches__content_active');
            });

            button.classList.add('matches__tab_active');
            tabToActive.classList.add('matches__content_active');
        });
    });


    matchesItemLinks.forEach(item => {
        item.addEventListener('click', () => {
            item.nextElementSibling.classList.toggle('matches__submenu_active');

            if (item.nextElementSibling.classList.contains('matches__submenu_active')) {
                item.lastElementChild.lastElementChild.src = './images/matches-flags/arrow-active.png';
            } else {
                item.lastElementChild.lastElementChild.src = './images/matches-flags/arrow.png';
            }


        })
    })
});