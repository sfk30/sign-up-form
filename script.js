const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm-password')
const error = document.getElementById('error')
const submit_btn = document.getElementById('submit-btn')

submit_btn.addEventListener('click', (e) => {
    let messages = []
    if (password.value != confirm_password.value) {
        e.preventDefault()
        messages.push('*Passwords do not match')
        error.innerText = messages
    }
})