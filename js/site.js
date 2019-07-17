window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//===============ACCORDION JS===============================//

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//===============CONACT PAGE JS===============================//
document.getElementById("submit").addEventListener("click", confirm);

function confirm(event) {
  for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
    if (document.getElementsByTagName("input").item(i).value === "" || (document.getElementsByTagName("input").item(i).type === "radio") && (document.getElementsByTagName("input").item(i).checked === false)) {
      return false;
    } else {
      fname = document.getElementById("fname").value;
      lname = document.getElementById("lname").value;
      name = document.getElementById("fname").value;
      alert("Thank you " + fname + " " + lname + ". We value your commentary and will be in contact with you shortly.");
      return true;
    }
  }
}

//=======responsive nav===//

