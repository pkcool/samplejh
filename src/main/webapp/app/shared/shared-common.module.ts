import { NgModule } from '@angular/core';

import { SamplejhSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SamplejhSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SamplejhSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SamplejhSharedCommonModule {}
