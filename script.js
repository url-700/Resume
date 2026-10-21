
// ==============================
// LITHEESH RESUME - JAVASCRIPT
// ==============================

// Print or save resume as PDF
const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", function () {
    window.print();
});

// Profile image fallback
const profileImage = document.getElementById("profileImage");
const profileFallback = document.getElementById("profileFallback");

function showFallback() {
    profileImage.style.display = "none";
    profileFallback.style.display = "block";
}

function showProfileImage() {
    profileImage.style.display = "block";
    profileFallback.style.display = "none";
}

profileImage.addEventListener("load", showProfileImage);
profileImage.addEventListener("error", showFallback);

// Check whether profile image exists
if (profileImage.complete) {
    if (profileImage.naturalWidth > 0) {
        showProfileImage();
    } else {
        showFallback();
    }
}

// Pause marquee when the page is not visible
document.addEventListener("visibilitychange", function () {
    const marquee = document.querySelector(".marquee-track");

    if (!marquee) return;

    marquee.style.animationPlayState =
        document.hidden ? "paused" : "";
});

// Update the browser title
document.title = "Litheesh | Professional Resume";
