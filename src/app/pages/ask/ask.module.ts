import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AskPageRoutingModule } from './ask-routing.module';

import { AskPage } from './ask.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AskPageRoutingModule,
    TranslateModule
  ],
  declarations: [AskPage]
})
export class AskPageModule {}
