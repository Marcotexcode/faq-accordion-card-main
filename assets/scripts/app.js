
const paraghAll = document.querySelectorAll('.card_body_right_paragh');
const arrowAll = document.querySelectorAll('.arrow');

containerText.forEach(el => {
    const arrow = el.querySelector('.arrow');
    const paragh = el.querySelector('.card_body_right_paragh');

    arrow.addEventListener("click", function(){

        paraghAll.forEach(element => {
           if (element !== paragh) {
               element.classList.remove('active');
           }
        });

        arrowAll.forEach(el => {
            if (el !== arrow) {
                el.style.transform = '';
            }
        });

        arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)';

        paragh.classList.toggle('active');
    });
});


