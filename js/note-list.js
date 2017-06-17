    $(document).ready(function () {
		$('.formcontainer').show();
		$('.resultcontainer').hide();

        $(function () {
            $("#Startdate").datepicker();
        });
        $(function () {
            $("#Enddate").datepicker();
        });
           
	
		$('.portlet')
			.addClass('ui-widget ui-widget-content ui-corner-all')
			.find('.portlet-header')
				.addClass('ui-widget-header ui-corner-all')
				.prepend('<span class="ui-icon ui-icon-minusthick"></span>')
			.end()
			.find('.portlet-content')
				.text('Lorem ipsum dolor sit amet, consectetuer adipiscing elit');

		$('.portlet-header .ui-icon').on('click', function() {
			$(this).toggleClass('ui-icon-minusthick ui-icon-plusthick');
			$(this).closest('.portlet').toggleClass('portlet-minimized');
		});
		
		
		$('#uservaluesubmit').click(function(){
			//alert('working');
			var city=$('#city').val();
			var state=$('#state').val();
			var country=$('#country').val();
			$.getJSON({
				url: 'http://52.36.211.72:5555/gateway/WeatherUnderground/v1/forecast10day/q/'+city+'.json',
				headers: {'x-Gateway-APIKey': '875e02b6-b1c4-496a-b255-847fa5939ada','Accept':'application/json' },
				success: function(results){
					console.log(results.forecast.simpleforecast.forecastday.length);
					for(i=0;i<results.forecast.simpleforecast.forecastday.length; i++){
						var pretty=results.forecast.simpleforecast.forecastday[0].date['pretty'];
						var highcelsius=results.forecast.simpleforecast.forecastday[0].high['celsius'];
						var highfahrenheit=results.forecast.simpleforecast.forecastday[0].high['fahrenheit'];
						var lowcelsius=results.forecast.simpleforecast.forecastday[0].low['celsius'];
						var lowfahrenheit=results.forecast.simpleforecast.forecastday[0].low['fahrenheit'];
						var icon_url=results.forecast.simpleforecast.forecastday[0].icon_url;
						var conditions=results.forecast.simpleforecast.forecastday[0].conditions;
						$('#pretty').text(pretty);
						$('#highcelsius').text(highcelsius);
						$('#highfahrenheit').text(highfahrenheit);
						$('#lowcelsius').text(lowcelsius);
						$('#lowfahrenheit').text(lowfahrenheit);
						$('#icon_url').attr('src',icon_url);
						$('#conditions').text(conditions);
					}
					
					$('.formcontainer').hide();
					$('.resultcontainer').show();
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {            
                     console.log(textStatus,errorThrown);
				}
			});
		});
		

    });
