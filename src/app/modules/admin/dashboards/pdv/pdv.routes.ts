import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { PdvComponent } from 'app/modules/admin/dashboards/pdv/pdv.component';
import { PdvService } from 'app/modules/admin/dashboards/pdv/pdv.service';

export default [
    {
        path: '',
        component: PdvComponent,
        resolve: {
            data: () => inject(PdvService).getData(),
        },
    },
] as Routes;
