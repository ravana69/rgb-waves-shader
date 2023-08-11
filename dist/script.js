import GlslCanvas from 'https://cdn.skypack.dev/glslCanvas@0.1.7';

const canvas = document.createElement("canvas");
const sandbox = new GlslCanvas(canvas);
const shader = document.getElementById('fragment-shader').innerHTML;

document.body.appendChild(canvas);
sandbox.load(shader);