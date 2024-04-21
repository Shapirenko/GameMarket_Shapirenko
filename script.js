const stars = document.querySelectorAll('.rating span');

        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                resetStars();
                for (let i = 0; i <= index; i++) {
                    stars[i].style.color = '#669bbc'; /* Хіппі-блакитний */
                }
            });
        });

        function resetStars() {
            stars.forEach(star => {
                star.style.color = '#780000'; /* Темно-бордовий */
            });
        }