function OpenMenu1(){
	document.getElementById("yellow-bar").style.height = "auto";
	document.getElementById("yellow-bar").setAttribute("onclick", "CloseMenu1()");
}

function CloseMenu1(){
	document.getElementById("yellow-bar").style.height = "10vh";
	document.getElementById("yellow-bar").setAttribute("onclick", "OpenMenu1()");
}

function OpenMenu2(){
	document.getElementById("white-bar").style.height = "auto";
	document.getElementById("white-bar").setAttribute("onclick", "CloseMenu2()");
}

function CloseMenu2(){
	document.getElementById("white-bar").style.height = "10vh";
	document.getElementById("white-bar").setAttribute("onclick", "OpenMenu2()");

}