function openModal(filename) {
    const modal = document.getElementById('jsonEditorModal');
    modal.style.display = 'block';

    fetch(filename)
        .then(response => response.text())
        .then(data => {
            document.getElementById('jsonEditor').value = data;
        })
        .catch(error => console.error('Error loading JSON:', error));
}


function closeModal() {
    document.getElementById('jsonEditorModal').style.display = 'none';
}
function saveJSON() {
    const jsonData = document.getElementById('jsonEditor').value;
    
    localStorage.setItem(filename, jsonData);

    alert('JSON data saved to localStorage: ' + jsonData);
    closeModal();
}


function displaySubscribers() {
    const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    const subscribersList = document.getElementById('subscribersList');
    subscribersList.innerHTML = '<h2>Subscribers</h2>';
    subscribedEmails.forEach(email => {
        subscribersList.innerHTML += '<div>' + email + '</div>';
    });
}
function openModalBasedOnCondition(condition) {
    let filename;
    if (condition === 'condition1') {
        filename = 'index.json';
    } else if (condition === 'condition2') {
        filename = 'index2.json';
    }
    // Add more conditions as needed

    // Call openModal with the determined filename
    openModal(filename);
}


document.addEventListener('DOMContentLoaded', function () {
    displaySubscribers();

    const subscribeForm = document.getElementById("subscribeForm");
    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = document.getElementById('email').value;
        let subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
        subscribedEmails.push(emailInput);
        localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
        alert("Thank you for subscribing to our newsletter!");
        displaySubscribers();
        document.getElementById('email').value = "";
    });
});