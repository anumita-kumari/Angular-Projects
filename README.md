# DemoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<table mat-table [dataSource]="eventList">
  <ng-container *matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef>Id</th>
    <td mat-cell *matCellDef="let element">{{ element.id }}</td>
  </ng-container>
  <ng-container *matColumnDef="title">
    <th mat-header-cell *matHeaderCellDef>title</th>
    <td mat-cell *matCellDef="let element">{{ element.title }}</td>
  </ng-container>
  <ng-container *matColumnDef="description">
    <th mat-header-cell *matHeaderCellDef>Description</th>
    <td mat-cell *matCellDef="let element">{{ element.description }}</td>
  </ng-container>
  <ng-container *matColumnDef="category">
    <th mat-header-cell *matHeaderCellDef>Category</th>
    <td mat-cell *matCellDef="let element">{{ element.category }}</td>
  </ng-container>
  <ng-container *matColumnDef="date">
    <th mat-header-cell *matHeaderCellDef>Date</th>
    <td mat-cell *matCellDef="let element">{{ element.date }}</td>
  </ng-container>
  <ng-container *matColumnDef="location">
    <th mat-header-cell *matHeaderCellDef>Location</th>
    <td mat-cell *matCellDef="let element">{{ element.location }}</td>
  </ng-container>
  <ng-container *matColumnDef="organizer">
    <th mat-header-cell *matHeaderCellDef>Organizer</th>
    <td mat-cell *matCellDef="let element">{{ element.organizer }}</td>
  </ng-container>
  <ng-container *matColumnDef="availableSeats">
    <th mat-header-cell *matHeaderCellDef>Available Seats</th>
    <td mat-cell *matCellDef="let element">{{ element.availableSeats }}</td>
  </ng-container>
  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let rows; columns: displayedColumns"></tr>
</table>
