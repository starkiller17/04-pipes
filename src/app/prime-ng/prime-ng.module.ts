import { NgModule } from '@angular/core';

// PrimeNG
import { ButtonModule} from 'primeng/button';
import { CardModule} from 'primeng/card';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    DynamicDialogModule,
    FieldsetModule,
    CardModule,
    MenubarModule,
    RippleModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
