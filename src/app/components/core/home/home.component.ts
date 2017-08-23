import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { DataTableModule, SelectItem } from 'primeng/primeng';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HomeComponent {
    project: any[];
    ngOnInit() {
        this.project = [
            { name: "A", issue: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', status: "New" },
            { name: "A", issue: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', status: "In Progress" },
            { name: "B", issue: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', status: "New" },
            { name: "C", issue: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', status: "Completed" },
            { name: "C", issue: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', status: "Completed" },
            { name: "C", issue: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', status: "Testing" },
            { name: "C", issue: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', status: "Testing" },
            { name: "C", issue: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', status: "Completed" }]            
    }
}
