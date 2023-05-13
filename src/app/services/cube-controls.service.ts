import { Injectable } from '@angular/core';
import { CubePosition } from 'src/types/cube.position.model';

@Injectable({
  providedIn: 'root'
})
export class CubeControlsService {
  public cubePosition:CubePosition = {
    x_position: 0,
    y_position: 0,
    z_position: 2,
    x_rotation: 0,
    y_rotation: 0,
    z_rotation: 0
  }
  get x_position():number|undefined {return this.cubePosition.x_position;}
  get y_position():number|undefined {return this.cubePosition.y_position;}
  get z_position():number|undefined {return this.cubePosition.z_position;}
  get x_rotation():number|undefined {return this.cubePosition.x_rotation;}
  get y_rotation():number|undefined {return this.cubePosition.y_rotation;}
  get z_rotation():number|undefined {return this.cubePosition.z_rotation;}

  set _x_position(x:number) {this.cubePosition.x_position = x;}
  set _y_position(y:number) {this.cubePosition.y_position = y;}
  set _z_position(z:number) {this.cubePosition.z_position = z;}
  set _x_rotation(x:number) {this.cubePosition.x_rotation = x;}
  set _y_rotation(y:number) {this.cubePosition.y_rotation = y;}
  set _z_rotation(z:number) {this.cubePosition.z_rotation = z;}
}
