import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { data as pdvData } from 'app/mock-api/dashboards/pdv/pdvData';
import { cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class PdvMockApi {
    private data : any = pdvData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/dashboards/pdv')
            .reply(() => [200, cloneDeep(this.data)]);
    }
}
