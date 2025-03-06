// // scripts.js

// // Example script to add interactivity if needed (like profile link functionality or animation)
document.addEventListener('DOMContentLoaded', function () {
    const profileIcon = document.querySelector('.profile-icon');
    if (profileIcon) {
        profileIcon.addEventListener('click', function() {
            alert('You clicked the profile icon!');
        });
    }

    function handleImageUpload(inputId, imageId) {
        const fileInput = document.getElementById(inputId);
        const imageElement = document.getElementById(imageId);

        fileInput.addEventListener("change", function () {
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    imageElement.src = e.target.result;
                    fileInput.classList.add("hidden");
                };
                reader.readAsDataURL(file);
            }
        });
    }
    handleImageUpload("upload1", "photo1");
    handleImageUpload("upload2", "photo2");
    handleImageUpload("upload3", "photo3");
    handleImageUpload("upload4", "photo4");
    handleImageUpload("upload5", "photo5");
    handleImageUpload("upload6", "photo6");

});

/* Temp 3 js */
document.addEventListener('DOMContentLoaded', function () {
    const profileIcon = document.querySelector('.profile-icon');
    
    profileIcon.addEventListener('click', function() {
        alert('You clicked the profile icon!');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll(".photo-frame");

    photos.forEach((photo) => {
        const img = photo.querySelector("img");
        const fileInput = photo.querySelector(".file-input");

        
        photo.addEventListener("click", function () {
            fileInput.click();
        });

        
        fileInput.addEventListener("change", function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    });
});
