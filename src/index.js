import './style.css';
import { nav, navBox, home, menu, contact } from './navbar';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';


const restaurantPage = () => {

    const element = document.querySelector('#content');
    const main = document.createElement('main');
    
    navBox.appendChild(home);
    navBox.appendChild(menu);
    navBox.appendChild(contact);
    nav.appendChild(navBox);
    main.appendChild(homePage);
    
    element.appendChild(nav);
    element.appendChild(main);

    const btns = document.querySelectorAll('.nav-btn');

    return btns.forEach(btn => {
        btn.addEventListener('click', e => {
            if (e.target.textContent === 'Home') {

                if (main.contains(menuPage)) {
                    return main.replaceChild(homePage, menuPage)
                } else if (main.contains(contactPage)) {
                    return main.replaceChild(homePage, contactPage)
                } else {
                    return main.appendChild(homePage);
                }

            } else if (e.target.textContent === 'Menu') {

                if (main.contains(homePage)) {
                    return main.replaceChild(menuPage, homePage)
                } else if (main.contains(contactPage)) {
                    return main.replaceChild(menuPage, contactPage)
                } else {
                    return main.appendChild(menuPage);
                }

            } else if (e.target.textContent === 'Contact') {
                
                if (main.contains(homePage)) {
                    return main.replaceChild(contactPage, homePage)
                } else if (main.contains(menuPage)) {
                    return main.replaceChild(contactPage, menuPage)
                } else {
                    return main.appendChild(contactPage);
                }

            }
            
        })
    })
}

export default restaurantPage();