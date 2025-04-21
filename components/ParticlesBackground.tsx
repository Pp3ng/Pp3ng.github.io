import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticlesBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    // Initialize Three.js scene
    if (!mountRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 100;
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // transparent background
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    const sizeArray = new Float32Array(particlesCount);

    // Color palette similar to the previous particlesJS config
    const colorPalette = [
      new THREE.Color("#1e3c72"), // Deep blue
      new THREE.Color("#2a5298"), // Strong blue
      new THREE.Color("#4caf50"), // Vibrant green
      new THREE.Color("#006400"), // Dark green
      new THREE.Color("#00bfae"), // Teal
      new THREE.Color("#0288d1"), // Bright blue
    ];

    // Random positions, colors and sizes for particles
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Random position within a sphere
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;

      posArray[i] = x;
      posArray[i + 1] = y;
      posArray[i + 2] = z;

      // Random color from palette
      const color =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colorsArray[i] = color.r;
      colorsArray[i + 1] = color.g;
      colorsArray[i + 2] = color.b;

      // Random size
      sizeArray[i / 3] = Math.random() * 1.5 + 0.5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorsArray, 3)
    );

    particlesGeometry.setAttribute(
      "size",
      new THREE.BufferAttribute(sizeArray, 1)
    );

    // Create custom shader material to render circles instead of squares
    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          // Create a circular shape instead of a square
          float r = 0.5;
          vec2 coords = gl_PointCoord - vec2(0.5);
          float len = length(coords);
          
          float alpha = 1.0 - smoothstep(r - 0.05, r, len);
          
          // Soft edge
          gl_FragColor = vec4(vColor, alpha * 0.6);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    // Create points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const targetMouse = new THREE.Vector2();

    const handleMouseMove = (event: MouseEvent) => {
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);

      if (
        !particlesRef.current ||
        !rendererRef.current ||
        !sceneRef.current ||
        !cameraRef.current
      )
        return;

      // Smooth mouse following
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Rotate particles based on mouse position
      particlesRef.current.rotation.x = mouse.y * 0.3;
      particlesRef.current.rotation.y = mouse.x * 0.3;

      // Slow rotation
      particlesRef.current.rotation.z += 0.001;

      // Animate particles
      const positions = particlesRef.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] +=
          Math.sin(frame * 0.001 + positions[i] * 0.01) * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;

      // Render the scene
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);

      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }

      if (particlesRef.current && sceneRef.current) {
        sceneRef.current.remove(particlesRef.current);
      }

      if (particlesRef.current?.geometry) {
        particlesRef.current.geometry.dispose();
      }

      if (particlesRef.current?.material) {
        (particlesRef.current.material as THREE.Material).dispose();
      }

      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default ParticlesBackground;
