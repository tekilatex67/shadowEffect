const hero = document.querySelector('.hero');

let walk = 100;


function handleShadow(e) {

    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: posX, offsetY: posY } = e;

    if (e.target != this) {
        posX = posX + e.target.offsetLeft;
        posY = posY + e.target.offsetTop;
    }

    let walkX = Math.round((posX * walk / width) - (walk / 2));
    let walkY = Math.round((posY * walk / height) - (walk / 2));

    document.querySelector('h1').style.textShadow = `${walkX}px ${walkY}px 5px #FD746C,
                                                    ${walkY}px ${walkX * -1}px 5px #78ffd6,
                                                    ${walkY * -1}px ${walkX}px 5px #4CA1AF,
                                                    ${walkX}px ${walkY * - 1}px 5px #d9a7c7`;
}

document.querySelector('h1').addEventListener('mouseover', function() {
    hero.addEventListener('mousemove', handleShadow);
}, { once: true })