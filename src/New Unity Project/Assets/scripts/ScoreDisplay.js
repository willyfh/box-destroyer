#pragma strict

function Update(){
	var prefix = "Score : ";
	var suffix = " /10";

	
	guiText.text = prefix + BulletHit.score + suffix;
	
}