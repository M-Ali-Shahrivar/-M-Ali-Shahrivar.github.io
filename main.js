const chevron = document.getElementById("chevron");
// const tabone = document.getElementById("tabone");

document.getElementById("tabs-container").addEventListener("click", () => {
  var acc = document.getElementsByClassName("accordion");
  var chev = document.getElementsByClassName("custom-chevron");
  var labels = document.getElementsByClassName("tab-label");
  var i;

  for (i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", function () {
      console.log(labels[i]);
      // labels[i].style.backgroundColor = "red";
      // if (acc[i].checked) {
      //   chev[i].style.transform = "rotate(180deg)";
      //   console.log("accordion:", acc[i], "-", acc[i].checked);
      // } else {
      //   chev[i].style.transform = "rotate(0deg)";
      // }
    });
  }
});
