function viewMore(i) {
    var x = document.getElementsByClassName("viewmore")[i];
    var y = document.getElementsByClassName("viewmore-button")[i];

    if (x.style.display === "none") {
        x.style.display = "block";
        // x.style.opacity = 100;
        // x.style.transition = 'opacity 1s ease-out';
        y.innerHTML="View less 	&#11167;";
    } else {
        x.style.display = "none";
        y.innerHTML="View more 	&#11167;";
    }
};

$(".viewmore-button").click(function() {
   var i = $(".viewmore-button").index(this);
   viewMore(i);
});
