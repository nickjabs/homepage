// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the popup and close links
  var showPopup1Link = document.getElementById("showPopup1");
  var closePopup1Link = document.getElementById("closePopup1");
  var projectPopup1 = document.getElementById("projectPopup1");

  // Function to show the popup
  function showPopup1() {
    projectPopup1.style.display = "block";
  }

  // Function to close the popup
  function closePopup1() {
    projectPopup1.style.display = "none";
  }

  // Add a click event listener to the "show" link
  if (showPopup1Link) {
    showPopup1Link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the link from jumping to the top
      showPopup1();
    });
  }

  // Add a click event listener to the "close" link
  if (closePopup1Link) {
    closePopup1Link.addEventListener("click", function (event) {
      event.preventDefault();
      closePopup1();
    });
  }

  // Close the popup if the user clicks anywhere outside of it
  window.addEventListener("click", function (event) {
    if (event.target === projectPopup1) {
      closePopup1();
    }
  });

  // Close the popup if the user presses the Escape key
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePopup1();
    }
  });
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the popup and close links for the second popup
  var showPopup2Link = document.getElementById("showPopup2");
  var closePopup2Link = document.getElementById("closePopup2");
  var projectPopup2 = document.getElementById("projectPopup2");

  // Function to show the second popup
  function showPopup2() {
    projectPopup2.style.display = "block";
  }

  // Function to close the second popup
  function closePopup2() {
    projectPopup2.style.display = "none";
  }

  // Add a click event listener to the "show" link for the second popup
  if (showPopup2Link) {
    showPopup2Link.addEventListener("click", function (event) {
      event.preventDefault();
      showPopup2();
    });
  }

  // Add a click event listener to the "close" link for the second popup
  if (closePopup2Link) {
    closePopup2Link.addEventListener("click", function (event) {
      event.preventDefault();
      closePopup2();
    });
  }

  // Close the second popup if the user clicks anywhere outside of it
  window.addEventListener("click", function (event) {
    if (event.target === projectPopup2) {
      closePopup2();
    }
  });

  // Close the second popup if the user presses the Escape key
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePopup2();
    }
  });
});
