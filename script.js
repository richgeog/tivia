$(document).ready(function() {
  $.getJSON('faqs.json',
    function(data) {
      var output = "";
        for( i = 0; i < data.Info[0].faqs.length; i++) {
          output += "<button class='accor'>" + "<h2>" + data.Info[0].faqs[i].question + "</h2>" + "</button>" + "<section class='answer'>" + "<p>" + data.Info[0].faqs[i].answer + "</p>" + "</section>";
      }
        document.getElementById("question").innerHTML = output;

    var acc = document.getElementsByClassName("accor");
    var i;
      for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
        }
      }
    });
});
