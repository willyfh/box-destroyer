#pragma strict
var cam1 : Camera;
var cam2 : Camera;
var changecamera : boolean=false;
var zoom : boolean=true;
function Update () {
	if (Input.GetKeyDown ("c")){
		if (cam1.enabled == true){
			cam1.enabled=false;
   			cam2.enabled = true;
			zoom =false;
			changecamera=true;
   		}
	}
  if (changecamera==true){
	if (zoom==false){
		if (SmoothFollow.distance<4){
			SmoothFollow.distance=SmoothFollow.distance+0.1;
		}else{
			zoom=true;
		}
	}else{
		if (SmoothFollow.distance>1){
			SmoothFollow.distance=SmoothFollow.distance-0.1;
		}else{
			changecamera=false;
			cam2.enabled = false;
			cam1.enabled=true;
   		 	
		}	
	}
  }
}