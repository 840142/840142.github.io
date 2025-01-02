document.addEventListener('DOMContentLoaded', function() {
    // Změní text, když je kliknuto na odkaz
    const aboutSection = document.getElementById('about');
    const changeTextButton = document.createElement('button');
    changeTextButton.textContent = 'Změnit text';
    aboutSection.appendChild(changeTextButton);

    changeTextButton.addEventListener('click', function() {
        aboutSection.querySelector('p').textContent = 'Text byl změněn po kliknutí!';
    });
});
