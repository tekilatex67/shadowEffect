const hero = document.querySelector('.hero');
let title = document.querySelector('h1');
let walk = 50;


function moveShadow(e) {

    let { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: positionX, offsetY: positionY } = e;

    if (e.target != this) {
        positionX = positionX + e.target.offsetLeft;
        positionY = positionY + e.target.offsetTop;
    }

    let walkX = Math.round((positionX / width * walk) - (walk / 2));
    let walkY = Math.round((positionY / height * walk) - (walk / 2));

    title.style.textShadow = `${walkX * -1}px ${walkY * -1}px 4px #4444`;

}







hero.addEventListener('mousemove', moveShadow);