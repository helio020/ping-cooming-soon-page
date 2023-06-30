const email = document.getElementById('email')
const button = document.getElementById('btn')
const error = document.getElementById('error')
const error2 = document.getElementById('error2')

// Validação de formulário: erro de campo vazio

button.addEventListener('click', () => {
    if (!email.value){
        email.style.borderColor = 'hsl(354, 100%, 66%)'
        error.style.visibility = 'visible'
        error2.removeAttribute('style')
    }  
})

email.addEventListener('focus', () => {
    email.style.borderColor = 'hsl(223, 100%, 88%)'
    error.removeAttribute('style')
    error2.removeAttribute('style')
})

// Validação de formulário: erro de formatação

email.addEventListener('input', () => {
    email.setCustomValidity('')
    email.checkValidity()
})

email.addEventListener('invalid', () => {
    email.style.borderColor = 'hsl(354, 100%, 66%)'
    error2.style.visibility = 'visible'
    document.getElementsByName('email')[0].placeholder = 'example@email/com'
    email.style.webkitTextFillColor = 'hsl(209, 33%, 12%)'
})

