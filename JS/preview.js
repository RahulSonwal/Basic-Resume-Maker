// Get resume data from localStorage
const resumeData = localStorage.getItem('resumeData');
const otherData = localStorage.getItem('otherData');

// Get the resume preview element
const resumePreview = document.getElementById('resume-preview');
const otherPreview = document.getElementById('other-preview');

// Populate the resume preview with the saved data
if (resumeData) {
    resumePreview.innerHTML = resumeData;
}
if (otherData) {
    otherPreview.innerHTML = otherData;
}

// Event listener for Print Resume button
const printBtn = document.getElementById('print');
printBtn.addEventListener('click', () => {
    // Print the resume preview
    window.print();
});


