document.addEventListener("DOMContentLoaded", function () {
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
});

