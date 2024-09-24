import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from '../services/photo-service.service';
import { MenubarComponent } from '../componentes/menubar/menubar.component';

@Component({
    selector: 'galleria-item-without-thumbnails-demo',
    templateUrl: './index.component.html',
    standalone: true,
    imports: [GalleriaModule, MenubarComponent],
    providers: [PhotoService]
})
export class galleria1 implements OnInit {
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

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
      this.photoService.getImages().then((images) => {
        this.images = images;
      });
    }
}