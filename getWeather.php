<!DOCTYPE html>
<html>
<head>
<title>REISE::Home Page</title>
<script type="text/javascript" src="//code.jquery.com/jquery-3.2.1.min.js"></script>

<script type="text/javascript">
$(document).ready(function(){
	//alert('working');
	$.ajax({
		url: 'http://52.36.211.72:5555/gateway/WeatherUnderground/v1/forecast10day/q/chennai.json',
		dataType: 'GET',
		headers: {'x-Gateway-APIKey': '875e02b6-b1c4-496a-b255-847fa5939ada' },
		success:function(results){
			alert(results);
		}
	});
});
</script>

</head>

<body>
	
	
</body>

</html>
