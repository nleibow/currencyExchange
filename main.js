$('#search').click(function(event){	
	console.log("lil guys running");
	event.preventDefault();
	var $startCur = $("#startCur").val();
	var $endCur = $("#endCur").val();
	var $amount = $("#amount").val();
	var getStock = $.ajax({

		method: "GET",
		url: "http://globalcurrencies.xignite.com/xGlobalCurrencies.json/ConvertRealTimeValue?From=" + $startCur + "&To="+ $endCur + "&Amount=" + $amount,
	}).done(function(){
		console.log(getStock);
	})});