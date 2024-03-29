import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();
  

//creating a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

//creating the vectors
const points = [];
points.push(new THREE.Vector3(-10,0,0));
points.push(new THREE.Vector3(0,10,0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(-20,0,0));
points.push(new THREE.Vector3(0,20,0));
points.push(new THREE.Vector3(20, 0, 0));
points.push(new THREE.Vector3(-20,0,0));
points.push(new THREE.Vector3(0,20,0));
points.push(new THREE.Vector3(20, 0, 0));

//geometry takes the lines from the object vectors
const geometry = new
  THREE.BufferGeometry().setFromPoints(points);

//connecting the lines with the material
const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);
  line.rotation.x += 0.01;
  line.rotation.y += 0.08;
  renderer.render(scene, camera);
}
animate();