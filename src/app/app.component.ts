import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CubeControlsService } from './services/cube-controls.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'threeJsPrueba';
  @ViewChild("element") element?: ElementRef<HTMLDivElement>;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private cube!: THREE.Mesh;

  constructor(private elementRef: ElementRef, private _cubeControls:CubeControlsService) {}

  ngAfterViewInit(): void {
    this.initThree();
    this.addCube();
    this.addPlane();
    this.addLight();
    this.animate();
  }

  private initThree(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, this.element!.nativeElement.offsetWidth / this.element!.nativeElement.offsetHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.element!.nativeElement.offsetWidth, this.element!.nativeElement.offsetHeight);
    this.element?.nativeElement.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  private addCube(): void {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.castShadow = true;
    this.scene.add(this.cube);
  }

  private addPlane():void{
    const geometry = new THREE.PlaneGeometry(20,20,32,32)
    const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const plane = new THREE.Mesh(geometry, material)
    plane.receiveShadow = true;
    this.scene.add(plane);

  }

  private addLight(): void {
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 10);
    this.scene.add(light);
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.cube.position.set(
      this._cubeControls.x_position!,
      this._cubeControls.y_position!,
      this._cubeControls.z_position!
      );
    this.cube.rotation.set(
      this._cubeControls.x_rotation!,
      this._cubeControls.y_rotation!,
      this._cubeControls.z_rotation!
    )

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }


}
