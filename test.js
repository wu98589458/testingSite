var ps = [
	'What a lovely day it is!',
	'Do you not think it is a lovely day?',
	'Well, I think it is a lovely day regardless!'];
var cur = 0;


function popupDanger() {
	alert('DANGER: You clicked something you shouldn\'t have!');
}

function show(id) {
	document.getElementById(id).style.display = "block";
}

function hide(id) {
	document.getElementById(id).style.display = "none";
}

function script(div_id) {
	document.getElementById(div_id).innerHTML = '<p>' + ps[cur] + '</p>';
	if (cur >= ps.length-1) {
		cur = 0;
	}
	else {
		cur++;
	}

}

function counter(div_id, i) {
	var id = setInterval(count,1000);
	function count() {
		if (i>=0) {
			document.getElementById(div_id).innerHTML = '<p>' + i + '</p>';
			i += -1;
		}
		else {
			clearInterval(id);
		}
	}
}
	
