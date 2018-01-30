#pragma strict

function Update(){
	var prefix = "Ammo  : ";
	var suffix = " /30";

	
	guiText.text = prefix + bulletshooter.ammo + suffix;
	
}