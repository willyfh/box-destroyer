#pragma strict
var myBulletPrefab : Rigidbody;
var ShootForce : int = 20;
var ShootClip : AudioClip;
var gun : GameObject;
static var ammo : int = 30;
function Start () {}
function Update () {
			
			
			if ((Input.GetButtonDown("Fire1")) && ammo>0){
				var Bullet : Rigidbody = Instantiate(myBulletPrefab, transform.position,transform.rotation);
				Bullet.velocity = transform.TransformDirection(Vector3(0,0,ShootForce));
				audio.PlayOneShot(ShootClip);
				//gun.animation.Play("shoot");
				//gun.animation.PlayQueued("idle");
				ammo--;
			}
}