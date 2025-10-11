        document.addEventListener('DOMContentLoaded', () => {
            const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

            smoothScrollLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault(); // デフォルトのアンカーリンクの動作をキャンセル

                    const targetId = this.getAttribute('href'); 
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            const productCards = document.querySelectorAll('.product-card');

            productCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.classList.add('is-hovering');
                });
                card.addEventListener('focus', () => {
                    card.classList.add('is-hovering');
                });

                card.addEventListener('mouseleave', () => {
                    card.classList.remove('is-hovering');
                });
                card.addEventListener('blur', () => {
                    card.classList.remove('is-hovering');
                });

                card.addEventListener('touchstart', () => {
                    card.classList.add('is-hovering');
                });
                card.addEventListener('touchend', () => {
                    setTimeout(() => {
                        card.classList.remove('is-hovering');
                    }, 300);
                });
            });
        });
