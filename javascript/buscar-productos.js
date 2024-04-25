document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.trim().toLowerCase();
            
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Agregar evento de click a las tarjetas para redireccionar al detalle
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const detalleURL = card.querySelector('a.btn-detalle').getAttribute('href');
            window.location.href = detalleURL;
        });
    });
});