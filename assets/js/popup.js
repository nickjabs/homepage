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
});
