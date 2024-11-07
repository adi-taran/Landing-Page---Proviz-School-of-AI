// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show the application form modal
document.getElementById('apply-button').onclick = function() {
    document.getElementById('application-form').style.display = 'block';
};

// Close the application form modal
document.querySelector('.close-button').onclick = function() {
    document.getElementById('application-form').style.display = 'none';
};

// Handle form submission
document.getElementById('applicationForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Basic form validation
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const statement = document.getElementById('statement').value;

    if (!name || !phone || !email || !statement) {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate form submission
    alert('Application submitted successfully!');

    // Reset the form fields
    this.reset();
    document.getElementById('application-form').style.display = 'none';
};