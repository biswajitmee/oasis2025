import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useEffect, useState } from "react";
import { PerspectiveCamera } from "@react-three/drei";

 

const HalfRoll = ({ images, reverse = false, cursorX = 0, cursorY = 0, yOffset = 0, onImageClick }) => {
  const groupRef = useRef();
  const rotationVelocity = useRef(0);
  const dampingFactor = 0.96;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the device is mobile based on screen width
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
    updateIsMobile(); // Initial check
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      rotationVelocity.current += event.deltaY * 0.00002; // Adjust rotation velocity based on scroll
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

useFrame(() => {
  if (groupRef.current) {
    rotationVelocity.current *= dampingFactor; // Apply damping to slow down rotation over time
    rotationVelocity.current += 0.00005; // Add a small constant rotation for continuous movement
    groupRef.current.rotation.y -= rotationVelocity.current; // Rotate the wheel based on velocity
    groupRef.current.position.y = yOffset + cursorY * 0.2; // Add cursor movement effect (Y-axis)
    groupRef.current.position.x = cursorX * 0.2; // Add cursor movement effect (X-axis)
  }
});


  return (
    <group ref={groupRef} rotation={[Math.PI / 2, 0, 0]}>
      {images.map((src, index) => {
        const angle = (index / images.length) * Math.PI * 2; // Distribute images evenly around the wheel
        const radius = isMobile ? 12 : 14; // Adjust radius for mobile

        const x = Math.sin(angle) * radius; // X-coordinate
        const z = Math.cos(angle) * radius; // Z-coordinate

        const geometry = useMemo(() => {
          // Adjust geometry based on whether it's mobile
          const plane = isMobile
            ? new THREE.PlaneGeometry(8, 8, 30, 30) // Mobile geometry
            : new THREE.PlaneGeometry(16, 10, 30, 30); // Default geometry

          const positions = plane.attributes.position.array;
          const curveIntensity = 3;

          for (let i = 0; i < positions.length; i += 3) {
            const y = positions[i + 1];
            positions[i + 2] = -Math.pow(y / 10, 2) * curveIntensity;
          }

          plane.attributes.position.needsUpdate = true;
          return plane;
        }, [isMobile]); // Recompute geometry when `isMobile` changes

        const texture = useLoader(THREE.TextureLoader, src);

        return (
          <mesh
            key={index}
            position={[x, 0, z]}
            rotation={[0, Math.atan2(x, z), 1.568]}
            geometry={geometry}
            onClick={() => onImageClick(src)}
          >
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
          </mesh>
        );
      })}
    </group>
  );
};



 

export default function VerticalGallery() {
  const images = useMemo(
    () => [
      "/image1.jpg",
      "/image2.jpg",
      "/image3.jpg",
      "/image4.jpg",
      "/image5.jpg",
      "/image6.jpg",
      "/image7.jpg",
      "/image8.jpg",
    ],
    []
  );

  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const normalizedX = (event.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (event.clientY / window.innerHeight) * 2 - 1;
      setCursorX(normalizedX);
      setCursorY(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
     
    <Canvas style={{ height: "100vh", width: "100%", zIndex:1,  }}>
        <PerspectiveCamera
          makeDefault
          rotation={[-0.12, 1.5, 0]}
          position={[3, 0, 1]}
          fov={42}
          near={0.1}
          far={1000}
        />
 
        <HalfRoll images={images} cursorX={cursorX} cursorY={cursorY} onImageClick={setSelectedImage} />

        <ambientLight intensity={3} />
        {/* <directionalLight  position={[3, 0, 1]} /> */}
      </Canvas>
    
      

      
    </>
  );
}

