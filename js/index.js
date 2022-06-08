function load_effect() {
    let element = document.getElementsByClassName('top__title');
    if (!element) return;
    for (let i = 0; i < element.length; i++) {
        element[i].classList.add('is-show');
    }
}
setTimeout(load_effect, 600);