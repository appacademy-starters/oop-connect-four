window.addEventListener('DOMContentLoaded', event => {
    let turnCountr = 0;
    let playerColor;
    if (turnCountr % 2) {
        playerColor = 'black';
    } else {
        playerColor = 'red';
    }
    document.querySelectorAll('.click-target')
    .forEach(target => {
        target.addEventListener('mouseenter', event => {
            event.target.style.backgroundColor = playerColor;
            console.log('Triggered mouse enter',event.target.id);
        });
        target.addEventListener('mouseleave', event => {
            event.target.style.backgroundColor = 'initial';
            console.log('Triggered mouse leave');
        });
    });
    document.getElementById('column-0')
    .classList.add('full');
});
