export function radio() {
    const radios = document.querySelectorAll('.js-radio');

    if (radios.length === 0) {
        return;
    }

    for(const radio of radios) {
        radio.addEventListener('click', function(e) {
            e.preventDefault();

            let input = radio.querySelector('input[type="radio"]');

            if(input.checked) return;
            input.checked = !input.checked;
        });
    }
}