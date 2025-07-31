import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule],
  exports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule],
})
export class MaterialModule {}
