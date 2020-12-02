addEventListener("keydown", function (e) {
    if (e.keyCode === 13 || e.keyCode === 13) {
        solve(e);
    }
});

addEventListener("keydown", function (e) {
    if (e.keyCode === 46 || e.keyCode === 8 || e.keyCode === 67) {
        clr(e);
    }
});

addEventListener("keydown", function (e) {
	if (e.keyCode === 96 || e.keyCode === 48) {
        dis('0', e);
    }
    if (e.keyCode === 97 || e.keyCode === 49) {
        dis('1', e);
	}
	if (e.keyCode === 98 || e.keyCode === 50) {
        dis('2', e);
	}
	if (e.keyCode === 99 || e.keyCode === 51) {
        dis('3', e);
	}
	if (e.keyCode === 100 || e.keyCode === 52) {
        dis('4', e);
	}
	if (e.keyCode === 101 || e.keyCode === 53) {
        dis('5', e);
	}
	if (e.keyCode === 102 || e.keyCode === 54) {
        dis('6', e);
	}
	if (e.keyCode === 103 || e.keyCode === 55) {
        dis('7', e);
	}
	if (e.keyCode === 104 || e.keyCode === 56) {
        dis('8', e);
	}
	if (e.keyCode === 105 || e.keyCode === 57) {
        dis('9', e);
	}
	if (e.keyCode === 111) {
        dis('/', e);
	}
	if (e.keyCode === 106) {
        dis('*', e);
	}
	if (e.keyCode === 107) {
        dis('+', e);
	}
	if (e.keyCode === 109) {
        dis('-', e);
	}
});

function dis(val) 
{ 
	document.getElementById("result").value+=val 
} 
		
function solve() 
{ 
	let x = document.getElementById("result").value 
	let y = eval(x) 
	document.getElementById("result").value = y 
}

function clr() 
{ 
	document.getElementById("result").value = "" 
} 
