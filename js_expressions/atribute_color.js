$('td[headers="ATRIBUTO"]').each(function() {  
	
	if ( $(this).text() != '' ) {

		if ( $(this).text() == 'STATUS1' ) {
			$(this).css({"background-color":"#FFF888"});
		}

		if ( $(this).text() == 'STATUS2' ) {
			$(this).css({"background-color":"#b8ffd9"});
		}
	}
});
