
window.addEventListener("DOMContentLoaded", (event) => {
  var stat = 0;
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  document.addEventListener("scroll", navbarShrink);
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

var i = false;
function wait() {
    if (i == false) {
        document.getElementById("formBtn").textContent = "Please wait...";
        i = true;
        popup();
    }
}
//ANONYMOUS LOGIN FUNCTION


var check = 0;
function popup() {
  if (check == 0) {
    document.getElementsByClassName("popup")[0].classList.add("active");
    check=1;
  } else window.location = "#projects";
  // console.log("popup");
}

// POP-UP close function
function popClose() {
  document.getElementById("formBtn").style.background = "#64a19d";
  document.getElementById("formBtn").textContent = "Submit your first request";
  document.getElementsByClassName("popup")[0].classList.remove("active");
  document.getElementById("projects").style.display = "block";
  // console.log("popup close");
}

function form1() {
  document.getElementById("text").style.visibility = "visible";
  document.getElementById("text").textContent = "Form";
}

function form2() {
  document.getElementById("text").style.visibility = "hidden";
}

function insta1() {
  document.getElementById("text").style.visibility = "visible";
  document.getElementById("text").textContent = "Instagram";
}

function insta2() {
  document.getElementById("text").style.visibility = "hidden";
}
function facebook1() {
  document.getElementById("text").style.visibility = "visible";
  document.getElementById("text").textContent = "Facebook";
}

function facebook2() {
  document.getElementById("text").style.visibility = "hidden";
}
function mail1() {
  document.getElementById("text").style.visibility = "visible";
  document.getElementById("text").textContent = "Mail";
}

function mail2() {
  document.getElementById("text").style.visibility = "hidden";
}


