#pragma strict

function Start () {

}

function Update () {
if (BulletHit.score==10 || (bulletshooter.ammo==0 && BulletHit.score<10)){
			GetComponent(GUIText).enabled = true;
		}
}