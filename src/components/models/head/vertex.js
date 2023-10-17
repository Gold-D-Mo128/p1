export const vertexShader = `
uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;


void main(){
  vUv = uv;
  vNormal = normal;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1 );
}
`;
