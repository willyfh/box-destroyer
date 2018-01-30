#pragma strict

var cam1 : Camera;
var cam2 : Camera;
 
function Start() {
    cam1.enabled = true;
    cam2.enabled = false;
}
 
function Update() {
 
    if (BulletHit.score==10 || (bulletshooter.ammo==0 && BulletHit.score<10)) {
    	if (SmoothFollow.distance<30){
    	SmoothFollow.distance=SmoothFollow.distance+0.1;}
        cam1.enabled = false;
        cam2.enabled = true;
    }
 
}