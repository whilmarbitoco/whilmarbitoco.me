window.onload = function() {
  document.querySelector(".spinner-box").style.display = "none";
}


function hide(className) {
  const divsToHide = document.getElementsByClassName(className);

  for (var i = 0; i < divsToHide.length; i++) {

    if (divsToHide[i].style.display === "none") {

      divsToHide[i].style.display = "block";
    } else {

      divsToHide[i].style.display = "none";
    }
  }
}


function toggle(id) {
    hide(id);
  var upArrow = document.querySelector('#' + id + ' .down.arrow');
  var downArrow = document.querySelector('#' + id + ' .up.arrow');

  if (upArrow.style.display === "none") {
    upArrow.style.display = "inline-block";
    downArrow.style.display = "none";
  } else {
    downArrow.style.display = "inline-block";
    upArrow.style.display = "none";
  }
}
