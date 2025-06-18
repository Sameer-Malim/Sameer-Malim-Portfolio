function showDiv(index) {
    let divs = document.querySelectorAll('#container .content');
    divs.forEach((div, i) => {
        if (i === index - 1){
            div.classList.add('active')
        } else {
            div.classList.remove('active')
        }
    });
}