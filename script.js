// VALUEs
var FoV = 75;
var z_near = 0.1;
var z_far = 1000;
var ratio = window.innerWidth / window.innerHeight;


//Mesh CUBO
var cube_geo = new THREE.BoxGeometry(1, 1, 1);
var cube_color = new THREE.MeshBasicMaterial({color: 0x33cc11});
var cube = new THREE.Mesh(cube_geo, cube_color);


//Mesh TRANGOLO
var tri_geo = new THREE.Geometry();
tri_geo.vertices.push(
	new THREE.Vector3(-1.0,-1.0,2.0),
	new THREE.Vector3(0.0 ,0.5,1.0),
	new THREE.Vector3(2.0 ,0.0,0.0)
);
tri_geo.faces.push(
	new THREE.Face3(0,2,1) 
);
var tri_color = new THREE.MeshBasicMaterial( {color:0x4433cc} );
var triangle = new THREE.Mesh(tri_geo,tri_color);


//SCENA - più mesh insieme
var scene = new THREE.Scene();
scene.add(cube);
scene.add(triangle);


// CAMERA
var camera = new THREE.PerspectiveCamera(FoV,ratio,z_near,z_far);
camera.position.z = 6.5;

//Rendering a CANVAS In APPENDING
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Rendering a CANVAS Su una già esistente
//var renderer = new THREE.WebGLRenderer( {canvas:document.getElementById("canvasID")} );


renderer.render(scene, camera);


var animate = function ()
{
	requestAnimationFrame(animate);

    //You spin my head right round, right round When you go down, when you go down down
	scene.rotation.x += 0.01;
    scene.rotation.y += 0.01;

    //"Stampa" la scena
	renderer.render(scene, camera);
};

//You spin me right round, baby right round like a record, baby right round round round
animate();

