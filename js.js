$(document).ready(function () {


	$.getJSON("http://www.sonoacustica.com.ar/data.json", function(json) {
	    console.log(json); // this will show the info it in firebug console
	});

    var json = (function () {
      var json = null;
      $.ajax({
          "async": false,
          "global": false,
          "url": "http://www.sonoacustica.com.ar/data.json",
          "dataType": "json",
          "success": function (data) {
              json = data;
          }
      });
      return json;
    })();

	var g = new Dygraph(document.getElementById("stock_div"), json,
	  {
	    customBars: true,
	    logscale: true
	  });

	var linear = document.getElementById("linear");
	var log = document.getElementById("log");
	var setLog = function(val) {
		g.updateOptions({ logscale: val });
		linear.disabled = !val;
		log.disabled = val;
	};
	linear.onclick = function() { setLog(false); };
	log.onclick = function() { setLog(true); };


  }
);