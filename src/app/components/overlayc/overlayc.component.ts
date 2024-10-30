import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-overlayc',
  templateUrl: './overlayc.component.html',
  styleUrls: ['./overlayc.component.css']
})
export class OverlaycComponent {
  private overlayRef!: OverlayRef;

  constructor(
    private overlay: Overlay,
    private positionBuilder: OverlayPositionBuilder,
    private viewContainerRef: ViewContainerRef
  ) {}

  @ViewChild('overlayTemplate') overlayTemplate!: TemplateRef<any>;

  // Method to open the overlay
  openOverlay() {
    const element = document.getElementById('trigger-button');

    if (element) {
      const positionStrategy = this.positionBuilder
        .flexibleConnectedTo(element)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }
        ]);

      this.overlayRef = this.overlay.create({ positionStrategy });
      const overlayPortal = new TemplatePortal(this.overlayTemplate, this.viewContainerRef);
      this.overlayRef.attach(overlayPortal);
    } else {
      console.error('Trigger button not found!');
    }
  }

  closeOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}
