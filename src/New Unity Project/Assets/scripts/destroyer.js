#pragma strict
var howlongisthisalive : float=5;
var Explosion : GameObject;
function Start () {
Destroy (gameObject, howlongisthisalive);
Instantiate(Explosion,transform.position,transform.rotation);

}

function Update () {

}