export const fragmentShader = `
uniform float time;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

// Define a function to generate Perlin noise
float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float PI = 3.141592653589793238;

float speed = 0.1; // Adjust the speed of the noise animation
float scale = .4; // Adjust the scale of the noise

void main() {
  // Calculate the noise value based on time and UV coordinates
  vec2 noiseInput = vUv * scale + vec2(time * speed);
  float noiseValue = random(noiseInput);

  // Displace the fragment position along the normal vector using noise
  float displacement = (noiseValue - 1.9) * 0.9; // Adjust the displacement range

  vec3 displacedPosition = vPosition + vNormal * displacement;

  // Calculate the diffuse lighting based on the original normal
  // Modify the light direction to include noise over time
  float noiseFactor = 0.1; // Adjust the noise intensity
  vec3 lightDirection = normalize(vec3(1., 1, 1.) + noiseFactor * vec3(sin(0.1), cos(0.4), 2.0));

  float diff = dot(vNormal, lightDirection);
  
  // Apply color modulation based on the displaced normal and time
  vec4 waterColor = vec4(0.26, 0.58, 0.29, 1.0) * (abs(sin(diff * -10.0 + time)));
  // 0.26	0.67	0.54


  gl_FragColor = waterColor;
}

`;
