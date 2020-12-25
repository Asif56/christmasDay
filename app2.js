//Variables for setup

// let container;
// let camera;
// let renderer;
// let scene;
// let house;

// function init() {
//   container = document.querySelector(".scene");

//   //Create scene
//   scene = new THREE.Scene();

  // const fov = 35;
  // const aspect = container.clientWidth / container.clientHeight;
  // const near = 0.1;
  // const far = 1000;

//   //Camera setup
//   camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.set(0, 5, 30);

  // const ambient = new THREE.AmbientLight(0x404040, 2);
  // scene.add(ambient);

  // const light = new THREE.DirectionalLight(0xffffff, 2);
  // light.position.set(50, 50, 100);
  // scene.add(light);
//   //Renderer
//   renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//   renderer.setSize(container.clientWidth, container.clientHeight);
//   renderer.setPixelRatio(window.devicePixelRatio);

//   container.appendChild(renderer.domElement);

//   //Load Model
//   let loader = new THREE.GLTFLoader();
//   loader.load("./house/scene.gltf", function(gltf) {
//     scene.add(gltf.scene);
//     house = gltf.scene.children[0];
//     animate();
//   });
// }

// function animate() {
//   requestAnimationFrame(animate);
//   house.rotation.z += 0.009;
//   renderer.render(scene, camera);
// }

// init();

// function onWindowResize() {
//   camera.aspect = container.clientWidth / container.clientHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(container.clientWidth, container.clientHeight);
// }

// window.addEventListener("resize", onWindowResize);





let container;
let camera;
let renderer;
let scene;
let house;

function init(){

  // container = document.querySelector(".scene");
  container = document.querySelector(".scene");


  // create scene 
  // scene = new THREE.Scene();
  scene = new THREE.Scene();


const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 1000;

// camra setup 
  // camera =new THREE.PerspectiveCamera(fov,aspect,near,far);
  // camera.position.set(0, 5, 30);

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 6.5, 25);

  const ambient = new THREE.AmbientLight(0x404040, 3);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 1.5);
  light.position.set(1, 10, 1);
  scene.add(light);
  // renderer

  // renderer=new THREE.WebGLRenderer({antialias: true, alpha: true});
  // renderer.setSize(container.clientWidth,container.clientHeight)
  // renderer.setPixelRatio(window.devicePixelRatio)
  

  // container.appendChild(renderer.domElement);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  let loader = new THREE.GLTFLoader();
  loader.load("./house/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0];
    animate();
  });

  // Load Model
  // let loader = new THREE.GLTFLoader();
  // loader.load("./house/scene.gltf",function(gltf){
  //   scene.add(gltf.scene);
  //   house = gltf.scene.children[0];
  // //  renderer.render(scene, camera);

  //   animate();
  // })
  
}
function animate() {
  requestAnimationFrame(animate);
  house.rotation.z += 0.006;
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
