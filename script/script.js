const containerMain_div = document.getElementsByClassName("container-main")[0];
const containerSub_div = document.getElementsByClassName("container-sub")[0];
const hero_div = document.getElementsByClassName("hero")[0];

function mediaQuery (x) {
	if (x.matches) {
		containerMain_div.appendChild(hero_div);
	} else {
		containerSub_div.appendChild(hero_div);
	}
}

const x = window.matchMedia("(min-width: 770px)");
mediaQuery(x);
x.addListener(mediaQuery);

//---------------------------------------------------

const email_input = document.getElementsByName("email")[0];
const submit_btn = document.getElementById("submit");
const warning_p = document.getElementsByClassName("warning")[0];
const error_img = document.getElementsByClassName("error")[0];

submit_btn.addEventListener("click" , function () {
	let email = email_input.value;
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		warning_p.style.display = "none";
	} else if (email == "") {
		error_img.style.display = "block";
	} else {
		warning_p.style.display = "block";
	}
})

email_input.addEventListener("input", function() {
	warning_p.style.display = "none";
	error_img.style.display = "none";
})