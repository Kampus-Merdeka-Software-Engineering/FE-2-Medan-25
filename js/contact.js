
document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var message = document.getElementById('message').value;

        var data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phoneNumber,
            feedback: message
        };

        fetch('https://be-2-medan-25-production.up.railway.app/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(responseData => {
                // Tanggapan dari server
                console.log('Success:', responseData);

                // Tambahkan logika atau tindakan lainnya setelah pengiriman berhasil                        
                Swal.fire({
                    title: "Terimakasih Atas Feedbacknya",                            
                    icon: "success"
                });
            })
            .catch(error => {
                console.error('Error:', error);
                // Tambahkan logika atau tindakan lainnya untuk penanganan kesalahan                        
                alert('Terjadi kesalahan: ' + error.message);
            });
    });
});
