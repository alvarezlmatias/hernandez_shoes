const user = JSON.parse(localStorage.getItem('login_success')) || false;
if(!user){
    window.location.href = '../pages/login.html'
};

const logout = document.querySelector('#logout');

logout.addEventListener('click', ()=>{
    Swal.fire({
        title: '¡Hasta la próxima!',
        text: 'Gracias por visitar nuestro sitio',
        icon: 'success',
        iconColor: 'green',
        confirmButtonText: 'Cerrar sesión'
    }).then((result)=>{
        window.location.href = './pages/login.html';
        localStorage.removeItem('login_success')
    });
})