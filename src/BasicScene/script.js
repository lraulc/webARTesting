import * as THREE from "three";

// Scene
const scene = new THREE.Scene();

// Red Cube
const geo = new THREE.BoxGeometry(1,1,1);
const mat = new THREE.MeshBasicMaterial(
    {
        color: "red",
    }
)

const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

// Camera
const sizes = 
{
    x : 800,
    y : 500
}

const camera = new THREE.PerspectiveCamera(
    45,
    sizes.x / sizes.y,
    0.1,
    1000
)
camera.position.z = 3
// camera.position.x = 1
scene.add(camera);

//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer(
    {
        canvas:canvas,
        antialias: true
    }
)
renderer.setSize(sizes.x, sizes.y);
renderer.render(scene, camera);