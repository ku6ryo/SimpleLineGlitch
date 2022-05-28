precision mediump float;

uniform sampler2D uImage;
uniform sampler2D uNoise;
uniform float uTime;
uniform float uRandom;

varying vec2 vUv;

void main() {
  vec3 n = texture2D(uNoise, vec2(uRandom, vUv.y)).rgb;
  vec3 c = texture2D(uImage, vUv + n.xy * uRandom).rgb;
  gl_FragColor = vec4(c, 1.0);
}