import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PdvService } from './pdv.service';

@Component({
    selector: 'pdv',
    templateUrl: './pdv.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatTableModule , 
        MatPaginatorModule
    ],
})
export class PdvComponent {
    dataSource:any;
    
    constructor(
        private _pdvService: PdvService,
    ){}

    ngOnInit(): void{
    this._pdvService.data$.
    subscribe((data) => {
        // Store the data
        this.dataSource = data.pdv;
        console.log(data); 
       
    });

    } 
}
