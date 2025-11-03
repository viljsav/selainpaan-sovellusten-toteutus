let count = 0;

function countUp() {
    count++;
    document.getElementById("clickCount").innerText = count;

    if (count == 10) {
        document.getElementById("clickCount").innerText = "You clicked 10 times! Why?";
        count = 0;
    }
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    const msg = `Form sent! Name: ${name}, email: ${email}`

    document.getElementById('formMessage').innerText = msg;
}
