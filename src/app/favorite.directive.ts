import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[mwFavorite]'
})
export class FavoriteDirective{
    @HostBinding('class.is-favorite') isFavorite = true;
    @Input() set mwFavorite(value){
        console.log('value= '+value);
        this.isFavorite = value;
    }

}

