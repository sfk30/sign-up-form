const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const error = document.getElementById('error')
const phoneNumber = document.getElementById('phone-number')
const submitBtn = document.getElementById('submit-btn')




submitBtn.addEventListener('click', (e) => {
    if (password.value != confirmPassword.value) {
        e.preventDefault()
        error.innerText = '*Passwords do not match'
    }
})

phoneNumber.addEventListener('input', (e) => {
    var pattern = /[0-9]{11}$/
    var currentValue = e.target.value
    var valid = pattern.test(currentValue)

    if(valid) {
        error.innerText = ''
    } else { 
        error.innerText = '*Phone numbers should contain 11 digits only'
    }
})