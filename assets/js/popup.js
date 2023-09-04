// ... Your existing code ...

document.addEventListener("DOMContentLoaded", function () {
  const showPopupLinks = document.querySelectorAll(
    ".content a[id^='showPopup']"
  );
  const closePopupButtons = document.querySelectorAll("[id^='closePopup']");
  const projectPopups = document.querySelectorAll(".popup");

  console.log("Script loaded");

  showPopupLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(`Show popup ${index + 1} clicked`);
      projectPopups[index].style.display = "block";
    });
  });

  closePopupButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log(`Close popup ${index + 1} clicked`);
      projectPopups[index].style.display = "none";
    });
  });

  // Additional event listener for the new popup (projectPopup3)
  const newPopup = document.querySelector("#projectPopup3");
  const newPopupShowLink = document.querySelector("#showPopup3");
  const newPopupCloseButton = document.querySelector("#closePopup3");

  newPopupShowLink.addEventListener("click", (event) => {
    event.preventDefault();
    newPopup.style.display = "block";
  });

  newPopupCloseButton.addEventListener("click", () => {
    newPopup.style.display = "none";
  });
});
