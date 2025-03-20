const Home = (() => {
    const div =  document.createElement('div');
        div.setAttribute('class', 'div');
    const _h1 = document.createElement('h1');
        _h1.setAttribute('class', 'headline');
        _h1.textContent = 'Welcome to the home of spices';
    const _p = document.createElement('p');
        _p.textContent = 'We are delighted to have you, We give a blend of pleasure and medicine for your utmost wellbeing.';

        div.appendChild(_h1);
        div.appendChild(_p);

        const createDiv = () => {
            return div
        }
    return {
        createDiv,
    }
})();

const homePage = Home.createDiv();
export default homePage;

