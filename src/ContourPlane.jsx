import React, { useRef } from 'react';
import {  useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Custom ShaderMaterial for contour texture
const ContourShader = {
  uniforms: {
    uTime: { value: 0 }, // Uniform for time-based animation
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  },
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uResolution;

    float plot(vec2 st, float pct){
      return smoothstep( pct-0.02, pct, st.y) -
             smoothstep( pct, pct+0.02, st.y);
    }

    void main() {
      vec2 st = gl_FragCoord.xy / uResolution.xy; // Normalize coordinates
      float noise = sin(st.x * 10.0 + uTime) * cos(st.y * 10.0 + uTime); // Generate wavy lines

      float pct = abs(noise);
      vec3 color = vec3(0.0);

      color.r = plot(st, pct);
      color.g = plot(st, pct * 1.5);
      color.b = plot(st, pct * 2.0);

      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export default function ContourPlane() {
  const meshRef = useRef();

  // Animate the shader's uTime uniform
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value += delta * 2.0; // Adjust speed
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 10, 1, 1]} />
      <shaderMaterial
        attach="material"
        args={[ContourShader]}
        transparent={true}
        uniforms={ContourShader.uniforms}
        vertexShader={ContourShader.vertexShader}
        fragmentShader={ContourShader.fragmentShader}
      />
    </mesh>
  );
}

 