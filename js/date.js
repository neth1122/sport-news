// display date for header

function displayDateTime() {
    var time = new Date();
    var datetime = time.toLocaleString();
    document.getElementById("date").innerHTML = datetime;
}

window.onload = function () {
    displayDateTime();
};

//update every second
setInterval(displayDateTime, 1000);

//Initial update
displayDateTime();

// Show the pop-up and blur the background
function showPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
    document.body.classList.add("popup-active"); // Add blur effect
}

// Close the pop-up and remove the blur effect
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
    document.body.classList.remove("popup-active"); // Remove blur effect
}