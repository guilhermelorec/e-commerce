import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { MenubarComponent } from '../componentes/menubar/menubar.component';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'galleria-item-without-thumbnails-demo',
    templateUrl: './index.component.html',
    standalone: true,
    imports: [GalleriaModule, MenubarComponent, ImageModule, ButtonModule, AvatarModule, TagModule],
    providers: []
})
export class galeria1 implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    ngOnInit(): void {
        
    }
}