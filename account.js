document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profile-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const profilePicture = document.getElementById('profile-picture').files[0];

        // Construct form data object
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('profilePicture', profilePicture);

        // Send AJAX request
        fetch('/update-profile', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Profile updated successfully
                alert('Profile updated successfully!');
            } else {
                // Error updating profile
                alert('Error updating profile. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error updating profile:', error);
            alert('An error occurred while updating profile. Please try again later.');
        });
    });
});
 // Fetch the current user's information and populate the name field
 window.addEventListener('DOMContentLoaded', () => {
    const currentUser = getCurrentUser(); // Function to get current user's information
    if (currentUser) {
        document.getElementById('name').value = currentUser.name;
        document.getElementById('email').value = currentUser.email;
        // Populate other fields as needed
    }
});

// Example function to get current user's information (replace with your actual implementation)
function getCurrentUser() {
    // Assuming you have some way to retrieve the user's information from backend or localStorage
    return {
        name: "John Doe", // Replace with the actual name of the current user
        email: "johndoe@example.com" // Replace with the actual email of the current user
    };
}