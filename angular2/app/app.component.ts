import {Component} from 'angular2/core';
import {CourseComponent} from './course.component';
import {AuthorsComponent} from './authors.component';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><courses></courses><authors></authors>',
    directives: [CourseComponent, AuthorsComponent]
})
export class AppComponent { }