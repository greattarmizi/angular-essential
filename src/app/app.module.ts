import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { MediaItemFormComponent } from './media-item-form.component';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule 
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        MediaItemFormComponent
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}