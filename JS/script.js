// Get form elements, including the image input
const generateBtn = document.getElementById("generate");
const printBtn = document.getElementById("print");
const imageInput = document.getElementById("image");

// Event listener for Generate Resume button
generateBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const summary = document.getElementById("summary").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const imageFile = imageInput.files[0];

    // Create a formatted resume with the uploaded image
    const formattedResume = `
        <img src="${imageFile ? URL.createObjectURL(imageFile) : 'placeholder.jpg'}" alt="Profile Image" width="150">
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
    `;

    const otherResume = `
    <h4>Summary</h4>
    <p>${summary}</p>
    <h4>Experience</h4>
    <p>${experience}</p>
    <h4>Education</h4>
    <p>${education}</p>
    `;

    // Save the formatted resume data to localStorage
    localStorage.setItem('resumeData', formattedResume);
    localStorage.setItem('otherData', otherResume)

    // Open the preview.html page in a new window/tab
    window.open('preview.html', '_blank');
});

// ...
