const accordion_header = document.querySelectorAll(".accordion_header");

accordion_header.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class
    accordion_header.forEach((header) => {
      if (header !== item) {
        header.classList.remove("active");
        header.nextElementSibling.style.height = "0px";
      }
    });

    // Toggle active class
    item.classList.toggle("active");

    // Set the height
    if (item.classList.contains("active")) {
      item.nextElementSibling.style.height =
        item.nextElementSibling.scrollHeight + "px";
    } else {
      item.nextElementSibling.style.height = "0px";
    }
  });
});
