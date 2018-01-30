#pragma strict

static var score : int = 0;
var Explosion : GameObject;
var shooted : AudioClip;

function OnCollisionEnter(collision:Collision){
	if(collision.gameObject.tag =="bullet"){
		score++;
		
		Destroy(gameObject);
		AudioSource.PlayClipAtPoint(shooted, transform.position);
		Destroy(collision.gameObject);
		Instantiate(Explosion,transform.position,transform.rotation);
		
	}
}