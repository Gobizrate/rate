document.querySelectorAll('.star').forEach((star) => {
    star.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        const stars = this.parentElement.querySelectorAll('.star');
        
        // Loop through all stars in this group
        stars.forEach((s, i) => {
            if (i < index) {
                s.classList.add('text-yellow-500');  // Change to yellow
                s.classList.remove('text-slate-800'); // Remove default color
            } else {
                s.classList.remove('text-yellow-500');
                s.classList.add('text-slate-800');
            }
        });
    });
});

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const index = parseInt(star.getAttribute('data-index'));
            stars.forEach((s, i) => {
                s.classList.toggle('active-star', i < index);
            });
        });
    });