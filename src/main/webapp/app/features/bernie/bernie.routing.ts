import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BerniePage } from './bernie.page';
import { UserRouteAccessService } from '../../shared';

const routes: Routes = [
    {
        path: '', component: BerniePage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.bernie.home.title',
            source: 'http://www.bernierebuttals.org',
            tags: ['drag-n-drop', 'forms']
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':claimId', component: BerniePage,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'greatBigExampleApplicationApp.bernie.home.title',
            source: 'http://www.bernierebuttals.org',
            tags: ['drag-n-drop', 'forms']
        },
        canActivate: [UserRouteAccessService]
    }
];

export const routedComponents = [BerniePage];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BernieRouting { }
