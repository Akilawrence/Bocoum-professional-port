document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const topnav = document.querySelector('.topnav');

    navToggle.addEventListener('change', function () {
        if (navToggle.checked) {
            topnav.style.maxHeight = topnav.scrollHeight + 'px';
        } else {
            topnav.style.maxHeight = null;
        }
    });
});
