import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('table', { read: ViewContainerRef })
  private viewContainerRef!: ViewContainerRef
  private componentRef!: ComponentRef<TableComponent>

  addComponent() {
    this.componentRef = this.viewContainerRef.createComponent(TableComponent);
  }
  deleteComponent() {
    this.viewContainerRef.clear();
  }
}
