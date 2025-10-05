const wordRotates = document.getElementById('word-rotates');
function manageClick() {
    if (wordRotates.classList.contains('rotating-click')) {
        return;
    }

    wordRotates.classList.add('rotating-click');
    const animationTime = 300;
    setTimeout(() => {
        wordRotates.classList.remove('rotating-click');   
    }, animationTime); 
}

wordRotates.addEventListener('click', manageClick);

const imaget = document.getElementById('temblorwn')

function manageImaget() {
    imaget.classList.toggle('temblor-happens');
}


imaget.addEventListener('click', manageImaget);
