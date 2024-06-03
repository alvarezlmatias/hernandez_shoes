const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);
    if(!validUser){
        return Swal.fire({
            title: '¡Lo sentimos!',
            text: 'Usuario y/o contraseña incorrectos',
            icon: 'warning',
            iconColor: 'orange',
            confirmButtonText: 'Aceptar'
        });
    }
    Swal.fire({
        text: '¡Bienvenid@ a Hernández Shoes!',
        icon: 'success',
        iconColor: 'green',
        confirmButtonText: 'Ingresar'
    }).then((result)=>{
        window.location.href = '../index.html';
        localStorage.setItem('login_success', JSON.stringify(validUser))
    });
})