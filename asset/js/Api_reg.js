// Post data dari Login form
function postRegFormData(event) {
    event.preventDefault();

    // Ambil data dari form
    const form = event.target;
    const username = form.querySelector('[name="username"]').value;
    const email = form.querySelector('[name="email"]').value;
    const password = form.querySelector('[name="password"]').value;

    // Buat objek data
    const data = {
        user_name: username,
        email: email,
        password: password
    };

    // Kirim data sebagai JSON
    fetch('https://be-jayapura-5-production.up.railway.app/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Proses Registrasi Telah Berhasil.');
                form.reset();
            } else {
                alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
            }
        })
        .catch(error => console.error('Error sending Registrasi data:', error));
}


// Event listener untuk form submission
document.querySelector('#registrasiForm').addEventListener('submit', postRegFormData);