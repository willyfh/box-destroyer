#pragma strict

function Update(){
	
	if (BulletHit.score==10){
		guiText.text = "YOU WIN";
	}
	if (bulletshooter.ammo==0 && BulletHit.score<10){
		guiText.text = "YOU LOSE";
	
	}
	
}