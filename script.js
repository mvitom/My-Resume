document.addEventListener('DOMContentLoaded', function () {
    const skillsSection = document.getElementById('skills');
    const skillNumbers = document.querySelectorAll('.number');
    const progressBars = document.querySelectorAll('.progress-bar');
    let hasScrolled = false;

    function checkScroll() {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            if (!hasScrolled) {
                loadNumbers();
                hasScrolled = true;
            }
        } else {
            if (hasScrolled) {
                resetNumbers();
                hasScrolled = false;
            }
        }
    }

    function loadNumbers() {
        skillNumbers.forEach((number, index) => {
            const target = +number.getAttribute('data-target');
            const progressBar = progressBars[index];
            const updateCount = () => {
                const count = +number.innerText.replace('%', '');
                const increment = target / 250; //speed

                if (count < target) {
                    number.innerText = Math.ceil(count + increment) + '%';
                    progressBar.style.width = Math.ceil(count + increment) + '%';
                    setTimeout(updateCount, 10); //speed
                } else {
                    number.innerText = target + '%';
                    progressBar.style.width = target + '%';
                }
            };
            updateCount();
        });
    }

    function resetNumbers() {
        skillNumbers.forEach((number, index) => {
            number.innerText = '0%';
            progressBars[index].style.width = '0%';
        });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll); //check on load if the section is already in view
});


 //VIDEO

 document.querySelectorAll('#projects .card').forEach(card => {
    const video = card.querySelector('.video');

    card.addEventListener('mouseover', () => {
        video.play();
    });

    card.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0; // Reset video to start
    });
});
const element = document.getElementById("yearFooter");
const d = new Date();
let year = d.getFullYear();
element.innerHTML = "© "+ year + " Michal Vitoš";