import { Component} from '@angular/core';

@Component({
    selector: 'mw-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    firstMediaItem = {
        id: 1,
        name: 'Firebug',
        category: 'Science Fiction',
        year: '2000',
        watchedOn: 1294166565384,
        isFavorite: false
    }

    onMediaItemDelete(mediaItem){}
}
