import {Component} from 'angular2/core';
import {TestComponent} from './test.component';

@Component({
    selector: 'my-component',
    template: `
        Hi, I'm <span [style.color]="inputElement.value === 'yes' ? 'red' : ''">{{name}}</span>, <span [class.is-awesome]="inputElement.value === 'yes'">It's awesome</span>
        <br><br>
        <input type="text" #inputElement (keyup)="0">
        <br><br>
        <button [disabled]="inputElement.value !== 'yes'">only Yes</button>
        <test><test>
    `,
    styleUrls: ['src/css/my-component.css'],
    directives: [TestComponent]
})

export class MyComponent implements OnInit {
    name : string;
    
    ngOnInit():any {
        this.name = "Test";    
    }
}