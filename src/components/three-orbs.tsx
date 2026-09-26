import { useEffect, useRef } from "react";

export function ThreeOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let disposed = false;
    let frame = 0;
    let observer: ResizeObserver | undefined;
    let renderer: import("three").WebGLRenderer | undefined;

    async function setup() {
      const THREE = await import("three");
      if (disposed || !container) return;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      camera.position.z = 9;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      } catch {
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
      const cyan = new THREE.MeshPhysicalMaterial({ color: 0x2bd7ed, metalness: 0.38, roughness: 0.16, clearcoat: 1, clearcoatRoughness: 0.08 });
      const violet = new THREE.MeshPhysicalMaterial({ color: 0xa061eb, metalness: 0.42, roughness: 0.17, clearcoat: 1 });
      const firstSphere = new THREE.Mesh(new THREE.SphereGeometry(0.72, 48, 48), cyan);
      const secondSphere = new THREE.Mesh(new THREE.SphereGeometry(0.43, 48, 48), violet);
      const meshes = [firstSphere, secondSphere];
      firstSphere.position.set(-1.25, 1.65, -0.4);
      secondSphere.position.set(1.55, -1.65, 0.4);
      meshes.forEach((mesh) => scene.add(mesh));
      scene.add(new THREE.AmbientLight(0xffffff, 1.9));
      const light = new THREE.PointLight(0xffffff, 75);
      light.position.set(-3, 4, 5);
      scene.add(light);
      const violetLight = new THREE.PointLight(0xab62ff, 38);
      violetLight.position.set(3, -2, 3);
      scene.add(violetLight);

      function resize() {
        if (!renderer || !container) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
      observer = new ResizeObserver(resize);
      observer.observe(container);
      resize();
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      function draw(time: number) {
        if (!renderer) return;
        if (!reducedMotion) {
          firstSphere.position.y = 1.65 + Math.sin(time * 0.00075) * 0.16;
          secondSphere.position.y = -1.65 + Math.sin(time * 0.0009 + 1.8) * 0.13;
          meshes.forEach((mesh) => { mesh.rotation.y += 0.004; });
        }
        renderer.render(scene, camera);
        frame = requestAnimationFrame(draw);
      }
      frame = requestAnimationFrame(draw);
    }
    setup();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className="pointer-events-none absolute inset-0" />;
}