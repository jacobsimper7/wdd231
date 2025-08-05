document.querySelectorAll('.info-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) modal.showModal();
    });
});

document.querySelectorAll('dialog .close-modal').forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('dialog').close();
    });
});