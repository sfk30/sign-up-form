const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm-password')
const error = document.getElementById('error')
const submit_btn = document.getElementById('submit-btn')

submit_btn.addEventListener('click', (e) => {
    if (password.value != confirm_password.value) {
        e.preventDefault()
        error.innerText = '*Passwords do not match'
    }
})