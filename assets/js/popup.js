document.addEventListener("DOMContentLoaded", function () {
  const showPopupLink = document.querySelector(".content a#showPopup");
  const closePopupButton = document.getElementById("closePopup");
  const projectPopup = document.getElementById("projectPopup");

  console.log("Script loaded");

  showPopupLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    console.log("Show popup clicked");
    projectPopup.style.display = "block";
  });

  closePopupButton.addEventListener("click", () => {
    console.log("Close popup clicked");
    projectPopup.style.display = "none";
  });
});
