// firstFade loads when page loads
function firstFade() {
	document.getElementById('coreText').innerHTML="Ask a 'yes' or 'no' question";
	$('.core').fadeTo(2300, 1)
	.fadeTo(2000, 0, function() {
		document.getElementById('coreText').innerHTML="<br/>and shake me.";
	})
	.fadeTo(2000, 1)
	.fadeTo(2000, 0, function() {
		document.getElementById('btnShake').style.visibility="visible";
	});
}
//Sarah - copied part of the firstFade function so the button would show up//

function btnAppear() {
	document.getElementById('btnShake').style.visibility="visible";
}

function numberGenerator() {
	var number = Math.random();
	// 8 answers: 3 affirmatives, 2 negatives, and 3 evasions.

	// 1
	if (number < 0.125) {
		document.getElementById('coreText').innerHTML="<br/>How the fuck should I know?";
	}
	// 2
	else if (number < 0.25) {
		document.getElementById('coreText').innerHTML="<br/>Do I look like I give a shit?";
	}
	// 3
	else if (number < 0.375) {
		document.getElementById('coreText').innerHTML="<br/>You fucking bet. ";
	}
	// 4
	else if (number < 0.5) {
		document.getElementById('coreText').innerHTML="<br/>No chance in hell.";
	}
	// 5
	else if (number < 0.625) {
		document.getElementById('coreText').innerHTML="<br/>If you were on your death bed, maybe.";
	}
	// 6
	else if (number < 0.75) {
		document.getElementById('coreText').innerHTML="<br/>Well that's the dumbest question I've heard all day. Congrats, asshole.";
	}
	// 7
	else if (number < 0.875) {
		document.getElementById('coreText').innerHTML="<br/>Not fucking likely.";
	}
	// 8
	else {
		document.getElementById('coreText').innerHTML="<br/>Come again? I wasn't listening.";
	}
}

function shake() {
	// 1: 
	// 	shake (simultaneous)
	//	core disappears  (simultaneous)
	// 	shake button disappears (simultaneous)

	// 2: 
	// 	core reappears (callback)

	// 3: 
	// shake button reappears (callback)

	numberGenerator();

	// shake
	$('.subheader').effect('bounce', {times:2}, "slow", function() {
		// core reappears
		$('.core').fadeTo(1000, 1, function() {
		// shake button reappears
		document.getElementById('btnShake').style.visibility="visible";
		});
	});

	// core disappears
	$('.core').fadeTo(0, 0);

	// shake button disappears
	document.getElementById('btnShake').style.visibility="hidden";
}