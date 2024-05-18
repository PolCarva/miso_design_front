"use client"

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface ModelViewerProps {
  src: string;
  className?: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ src, className }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf3f3f2); // Set the background color to white
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Add lights to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Load the GLB model
    const loader = new GLTFLoader();
    loader.load(src, (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Add a point light to the model to ensure it is always illuminated
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(0, 5, 5); // Position the light above and in front of the model
      model.add(pointLight); // Add the light to the model itself

      renderer.render(scene, camera);
    }, undefined, (error) => {
      console.error('An error happened while loading the GLB model:', error);
    });

    // Set camera position
    camera.position.z = 4;

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = mountRef.current?.clientWidth || window.innerWidth;
      const height = mountRef.current?.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      controls.dispose();
      renderer.dispose();
    };
  }, [src]);

  return <div onClick={e => e.stopPropagation()} ref={mountRef} className={className || ""} />;
};

export default ModelViewer;
