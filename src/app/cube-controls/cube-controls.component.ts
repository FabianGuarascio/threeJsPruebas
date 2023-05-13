import { Component,inject } from '@angular/core';
import { CubeControlsService } from '../services/cube-controls.service';
import { CubePosition } from 'src/types/cube.position.model';

@Component({
  selector: 'app-cube-controls',
  templateUrl: './cube-controls.component.html',
  styleUrls: ['./cube-controls.component.scss']
})
export class CubeControlsComponent {
  private _cubeControls = inject(CubeControlsService)
  public cubePosition = this._cubeControls.cubePosition

  setTransformAxis(evt:any,axis:'x'|'y'|'z',transform:'position'|'rotation'){
    type CubeServicePropertys = keyof CubeControlsService
    const value = Number(evt.target.value)
    const property:CubeServicePropertys = `_${axis}_${transform}`
    this._cubeControls[property] = value
  }
}
