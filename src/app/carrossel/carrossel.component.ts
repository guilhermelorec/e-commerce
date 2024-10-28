import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CarrosselService } from './carrossel.service';
import { ICarrosselShow } from './carrossel.types';

@Component({
    selector: 'app-carrossel',
    templateUrl: './carrossel.component.html',
    standalone: true,
    imports: [CarouselModule, ButtonModule, TagModule],
    styleUrl: './carrossel.component.scss'
})
export class CarrosselComponent {

    constructor(private carrosselService: CarrosselService) {}

    carrossel: ICarrosselShow[] = []
    responsiveOptions: any[] | undefined;



    ngOnInit() {

        this.carrosselService.popularCarrossel().subscribe(data => {
            this.carrossel = data;
            console.log(this.carrossel)
        });
        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
}