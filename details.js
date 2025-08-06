// details.js
document.addEventListener('DOMContentLoaded', function () {
    // --- Main Project Details Toggle ---
    const detailsBtns = document.querySelectorAll('.details-btn');

    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.dataset.target;
            const detailsPanel = document.querySelector(targetId);

            if (detailsPanel) {
                detailsPanel.classList.toggle('show');
                if (detailsPanel.classList.contains('show')) {
                    this.textContent = 'Hide Details';
                } else {
                    this.textContent = 'View Details';
                }
            }
        });
    });

    // --- Code Snippet Toggle ---
    const codeToggles = document.querySelectorAll('.code-toggle');

    codeToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (content.classList.contains('show')) {
                content.classList.remove('show');
            } else {
                content.classList.add('show');
            }
        });
    });
});