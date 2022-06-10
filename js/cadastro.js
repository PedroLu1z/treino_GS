var nome = document.getElementById('nome')

nome.addEventListener('focus', () => {
    nome.style.borderColor = "4A5F6A";
})

var idade = document.getElementById('idade')

nome.addEventListener('focus', () => {
    idade.style.borderColor = "4A5F6A";
})

var city = document.getElementById('city')

city.addEventListener('focus', () => {
    city.style.borderColor = "4A5F6A";
})

var email = document.getElementById('email')

email.addEventListener('focus', () => {
    email.style.borderColor = "4A5F6A";
})

var password = document.getElementById('password')

password.addEventListener('blur', () => {
    password.style.borderColor = "#ccc"
})

