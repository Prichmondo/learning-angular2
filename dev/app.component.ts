import {Component} from 'angular2/core';
import {MyComponent} from './my.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <my-component></my-component>
    `,
    directives: [MyComponent]
})
export class AppComponent {
   
}