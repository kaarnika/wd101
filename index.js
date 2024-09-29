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

    const tableBody = document.getElementById('userTableBody');
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const passwordCell = newRow.insertCell(2);
    const dobCell = newRow.insertCell(3);
    const termsCell = newRow.insertCell(4);

    nameCell.innerText = name;
    emailCell.innerText = email;
    passwordCell.innerText = password;
    dobCell.innerText = dob;
    termsCell.innerText = termsAccepted ? 'true' : 'false';

    document.getElementById('registrationForm').reset();
});
