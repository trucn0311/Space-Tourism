let closeIcon = document.querySelector(".close-icon");
let hamburgerIcon = document.querySelector(".navbar-toggler");
let dropDow = document.querySelector(".navbar-collapse");
hamburgerIcon.addEventListener("click", showDropDown);

function closeNav() {
  // hamburgerIcon.style.display = "none";
  if (dropDow.style.display === "none") {
    dropDow.style.display = "block";
    hamburgerIcon.style.display = "none";
  } else {
    dropDow.style.display = "none";
    hamburgerIcon.style.display = "block";
  }
}
function showDropDown() {
  dropDow.style.display = "block";
}
