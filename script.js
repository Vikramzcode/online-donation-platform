const form = document.getElementById('donation-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('/donate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount, name, email })
    })
    .then((res) => res.json())
    .then((data) => {
        window.location.href = data.redirectUrl;
    })
    .catch((err) => console.error(err));
});
