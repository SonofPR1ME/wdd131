
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.querySelector('body').classList.add('dark');
        document.querySelector('#content').classList.add('dark');
        document.querySelector('.dark').style.backgroundColor = 'black';
        document.querySelector('.dark').style.color = 'white';
        document.querySelector('.dark').style.border = '1px solid white';
        logo.setAttribute('src', 'images/byui-logo-white.png');
    } else {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
        document.querySelector('#content').style.border = '1px solid black';
        logo.setAttribute('src', 'images/byui-logo-blue.webp');
    }
}           
                    