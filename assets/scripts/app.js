

arrow.forEach(el => {
    el.addEventListener("click", function(){
        el.style.transform = el.style.transform === 'rotate(180deg)' ? '' : 'rotate(180deg)';
        // Prendere il paragrafo in base a el selezionato
        //paragh.style.display = paragh.style.display === 'block' ? 'none' : 'block';
    });
    
});
