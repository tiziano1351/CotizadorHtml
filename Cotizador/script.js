document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del DOM
    var modal = document.getElementById('myModal');
    var btnAceptar = document.getElementById('btnAceptar');
    var closeModal = document.getElementById('closeModal');

    // Mostrar la ventana modal al hacer clic en el botón
    btnAceptar.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Ocultar la ventana modal al hacer clic en la "X"
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Ocultar la ventana modal si se hace clic fuera de ella
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
