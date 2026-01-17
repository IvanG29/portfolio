function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function changeLanguage(event) {
    const languageButton = document.getElementById("language-button");
    const clickedLink = event.target;

    const currentButtonText = languageButton.textContent;

    languageButton.textContent = clickedLink.textContent;

    clickedLink.textContent = currentButtonText;

    myFunction();

    event.preventDefault();
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.getElementById('myButton').addEventListener('click',
    function () {
        const target = document.getElementById('target-block');
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });



let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("second__my-slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3500);
}

document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accardion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const extraText = button.nextElementSibling;

            if (extraText.style.display === 'none' || extraText.style.display === '') {
                extraText.style.display = 'block';
            } else {
                extraText.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accardion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');

        });
    });
});