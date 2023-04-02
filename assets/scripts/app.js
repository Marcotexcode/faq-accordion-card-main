
const paraghAll = document.querySelector('.card_body_right_paragh');

containerText.forEach(el => {
    const arrow = el.querySelector('.arrow');
    const paragh = el.querySelector('.card_body_right_paragh');

    arrow.addEventListener("click", function(){
        paraghAll.classList.remove('active');

        arrow.style.transform = arrow.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)';
        paragh.classList.toggle('active');
    });
});


