function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
function displayEntries() {
    const entries = JSON.parse(localStorage.getItem('userEntries')) || [];

    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = '';  

    entries.forEach(entry => {
        const newRow = tableBody.insertRow();

        const nameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const passwordCell = newRow.insertCell(2);
        const dobCell = newRow.insertCell(3);
        const termsCell = newRow.insertCell(4);

        nameCell.innerText = entry.name;
        emailCell.innerText = entry.email;
        passwordCell.innerText = entry.password;
        dobCell.innerText = entry.dob;
        termsCell.innerText = entry.termsAccepted ? 'true' : 'false';
    });
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsAccepted = document.getElementById('terms').checked;

    const age = calculateAge(dob);
    if (age < 18 || age > 55) {
        alert("Age must be between 18 and 55.");
        return;
    }

    const newEntry = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        termsAccepted: termsAccepted
    };

    let entries = JSON.parse(localStorage.getItem('userEntries')) || [];
    
    entries.push(newEntry);

    localStorage.setItem('userEntries', JSON.stringify(entries));

    displayEntries();

    document.getElementById('registrationForm').reset();
});

window.onload = function() {
    displayEntries();
};
