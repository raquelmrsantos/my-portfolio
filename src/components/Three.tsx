'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three/webgpu';
import { pass } from 'three/tsl';
import { dotScreen } from 'three/addons/tsl/display/DotScreenNode.js';
import { rgbShift } from 'three/addons/tsl/display/RGBShiftNode.js';

interface ThreeProps {
  children: React.ReactNode;
}

const Three = ({ children }: ThreeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current; // <-- capture once

    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGPURenderer;
    let postProcessing: THREE.PostProcessing;
    let object: THREE.Object3D;

    const init = () => {
      renderer = new THREE.WebGPURenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container?.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        1,
        1000,
      );
      camera.position.z = 400;

      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x000000, 1, 1000);

      object = new THREE.Object3D();
      scene.add(object);

      const geometry = new THREE.SphereGeometry(1, 4, 4);
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        flatShading: true,
      });

      for (let i = 0; i < 100; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position
          .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
          .normalize();
        mesh.position.multiplyScalar(Math.random() * 400);
        mesh.rotation.set(
          Math.random() * 2,
          Math.random() * 2,
          Math.random() * 2,
        );
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50;
        object.add(mesh);
      }

      scene.add(new THREE.AmbientLight(0xcccccc));

      const light = new THREE.DirectionalLight(0xffffff, 3);
      light.position.set(1, 1, 1);
      scene.add(light);

      // postprocessing
      postProcessing = new THREE.PostProcessing(renderer);

      const scenePass = pass(scene, camera);
      const scenePassColor = scenePass.getTextureNode();

      const dotScreenPass = dotScreen(scenePassColor);
      dotScreenPass.scale.value = 0.3;

      const rgbShiftPass = rgbShift(dotScreenPass);
      rgbShiftPass.amount.value = 0.001;

      postProcessing.outputNode = rgbShiftPass;
    };

    const onWindowResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    const animate = () => {
      if (object) {
        object.rotation.x += 0.005;
        object.rotation.y += 0.01;
      }
      if (postProcessing) {
        postProcessing.render();
      }
      requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (renderer) {
        renderer.dispose();
      }
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    const intervalTime = 50; // Update every 50ms
    const increment = 1; // Increment by 1%

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#e8e8e8',
        }}
      >
        <div ref={containerRef} style={{ opacity: 0.15 }}></div>
        <div
          className='font-spline-sans-mono uppercase text-center flex flex-col items-center justify-center h-full pointer-events-none absolute inset-0'
          style={{ zIndex: 10 }}
        >
          <div
            className='text-2xl mb-4 text-black'
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}
          >
            Loading
          </div>
          <div
            className='text-xl text-black'
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}
          >
            {progress}%
          </div>
          <div
            className='text-sm mt-8 text-black'
            style={{
              opacity: 0.7,
              textShadow: '0 0 10px rgba(255,255,255,0.8)',
            }}
          >
            [ UNDER CONSTRUCTION ]
          </div>
        </div>
      </div>
    );
  }
  return <>{children}</>;
};
export default Three;
