function viewMore(i) {
    var x = document.getElementsByClassName("viewmore")[i];
    var y = document.getElementsByClassName("viewmore-button")[i];

    if (x.style.display === "block") {
      x.style.display = "none";
      y.innerHTML="View more +";
    } else {
      x.style.display = "block";
      y.innerHTML="View less -";
    }
};

$(".viewmore-button").click(function() {
   var i = $(".viewmore-button").index(this);
   viewMore(i);
});
