


document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContentLinks = document.querySelectorAll('.dropdown-content a');

    dropdownContentLinks.forEach(link => {
        link.addEventListener('click', function() {
            dropdownButton.textContent = this.getAttribute('data-value');
        });
    });
});
