export const popup = () => {
    const btns = document.querySelectorAll('.js-call-popup');
    const popup = document.querySelector('.js-popup');
    const overlay = document.querySelector('.js-overlay');
    const close = document.querySelector('.js-close');
    const body = document.body;

    if(btns.length === 0 || !popup) return;

    for(const btn of btns) {
        btn.addEventListener('click', () => {
            popup.classList.toggle('popup--show');
            overlay.classList.toggle('overlay--show');
            body.classList.toggle('lock');
        });
    }

    overlay.addEventListener('click', closePopup);
    close.addEventListener('click', closePopup);

    function closePopup() {
        popup.classList.remove('popup--show');
        overlay.classList.remove('overlay--show');
        body.classList.remove('lock');
    }
}
