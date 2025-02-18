document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');

    const links = document.querySelectorAll('.links a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 1000); // Match the duration of the fade-out animation
        });
    });
});
