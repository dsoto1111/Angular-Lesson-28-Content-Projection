import { Component, TemplateRef, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
    offsetHeight!: string;

    buttonStyle = {display: 'block',
                   margin: 'auto',
                   width: '10%'};

    toggle: boolean = false;

    @ViewChild('cRef', {read: ViewContainerRef}) vcf!: ViewContainerRef;
    @ViewChild('tRef') tempRef!: TemplateRef<any>;

    ngAfterViewInit(): void {
        this.vcf.createEmbeddedView(this.tempRef);
    }
}
