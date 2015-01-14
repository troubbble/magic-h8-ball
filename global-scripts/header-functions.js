// The header template function:
$(function() {
	//1. The data object:
	var headerData = {logo:"images/signatures/signature2-resize.png", infoButton:"images/info-button/info-button.png"};

	//2. Retrieve the html template:
	var headerTemplateScript = $("#header-template").html();

	//3. Compile the template:
	var theHeaderTemplate = Handlebars.compile(headerTemplateScript);

	//4. Append the template with the interpolated data:
	$(".theHeader").append(theHeaderTemplate(headerData));
});

// The hidePageInfo-template function:
function hpiTemplate() {
	var hidePageInfoData = {hide: "Hide ->"};

	var hidePageInfoScript = $('#hidePageInfo-template').html();

	var hidePageInfoTemplate = Handlebars.compile(hidePageInfoScript);

	$(".hidePageInfo").append(hidePageInfoTemplate(hidePageInfoData));
}

function infoButtonHover() {
	// mouseover:
	$('.infoButton').hover(function() {
		$(this).attr("src", "images/info-button/info-button-hover.png");
		$('.tooltipInfo').css("display", "block");
	},
	// mouseout:
	function() {
		$(this).attr("src", "images/info-button/info-button.png");
		$('.tooltipInfo').css("display", "none");
	});
}

// for OFM and other pages a directory level deeper than the index page:
function infoButtonHoverUpDirectory() {
	// mouseover:
	$('.infoButton').hover(function() {
		$(this).attr("src", "../images/info-button/info-button-hover.png");
		$('.tooltipInfo').css("display", "block");
	},
	// mouseout:
	function() {
		$(this).attr("src", "../images/info-button/info-button.png");
		$('.tooltipInfo').css("display", "none");
	});
}

function togglePageInfo() {
	$('#pageInfo').toggle('slide', {direction: "right"}, 600);
}

function headerInfo() {
	$( ".infoButton" ).click(function() {
		togglePageInfo();
	});

	$('.hidePageInfo').click(function() {
		togglePageInfo();
	});
}