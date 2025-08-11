import {Component, ElementRef, HostListener, QueryList, ViewChildren} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-draw-rectangle',
  templateUrl: './draw-rectangle.component.html',
  styleUrls: ['./draw-rectangle.component.css'],
  imports: [NgStyle],
  standalone: true,
})
export class DrawRectangleComponent {
  items = Array.from({length: 20}, (_, i) => ({name: `Item ${i + 1}`, selected: false}));

  startX = 0;
  startY = 0;
  rectLeft = 0;
  rectTop = 0;
  rectWidth = 0;
  rectHeight = 0;
  isDrawing = false;

  initialSelected: boolean[] = [];
  isAdditive = false;
  removeMode = false; // yangi: tanlash o‘rniga olib tashlash rejimi

  @ViewChildren('selectItem', {read: ElementRef})
  itemElements!: QueryList<ElementRef>;

  onMouseDown(event: MouseEvent) {
    this.isDrawing = true;
    this.isAdditive = event.ctrlKey || event.shiftKey;
    this.initialSelected = this.items.map(i => i.selected);

    const areaRect = (event.target as HTMLElement).closest('.drawing-area')!.getBoundingClientRect();
    this.startX = event.clientX - areaRect.left;
    this.startY = event.clientY - areaRect.top;
    this.rectLeft = this.startX;
    this.rectTop = this.startY;
    this.rectWidth = 0;
    this.rectHeight = 0;

    // Sichqoncha ostida element bormi va u tanlanganmi — shuni tekshiramiz
    const clickedElementIndex = this.getItemIndexAtPosition(event.clientX, event.clientY);
    if (clickedElementIndex !== -1 && this.items[clickedElementIndex].selected) {
      this.removeMode = true; // Tanlangan ustidan boshlangan → olib tashlash rejimi
    } else {
      this.removeMode = false;
      if (!this.isAdditive) {
        this.items.forEach(i => i.selected = false);
      }
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDrawing) return;

    const area = document.querySelector('.drawing-area') as HTMLElement;
    const areaRect = area.getBoundingClientRect();

    const currentX = event.clientX - areaRect.left;
    const currentY = event.clientY - areaRect.top;

    this.rectLeft = Math.min(this.startX, currentX);
    this.rectTop = Math.min(this.startY, currentY);
    this.rectWidth = Math.abs(currentX - this.startX);
    this.rectHeight = Math.abs(currentY - this.startY);

    this.updateSelection();
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.rectWidth < 3 && this.rectHeight < 3) {
      this.items.forEach((_, i) => this.items[i].selected = this.initialSelected[i]);
    }
    this.isDrawing = false;
  }

  private updateSelection() {
    const rect = {
      left: this.rectLeft,
      top: this.rectTop,
      right: this.rectLeft + this.rectWidth,
      bottom: this.rectTop + this.rectHeight
    };

    this.itemElements.forEach((el, index) => {
      const elRect = el.nativeElement.getBoundingClientRect();
      const areaRect = (document.querySelector('.drawing-area') as HTMLElement).getBoundingClientRect();

      const elBox = {
        left: elRect.left - areaRect.left,
        top: elRect.top - areaRect.top,
        right: elRect.right - areaRect.left,
        bottom: elRect.bottom - areaRect.top
      };

      const overlaps = !(
        rect.right < elBox.left ||
        rect.left > elBox.right ||
        rect.bottom < elBox.top ||
        rect.top > elBox.bottom
      );

      if (this.removeMode) {
        // Olib tashlash rejimi → faqat selection ichidagilarni bekor qilamiz
        this.items[index].selected = this.initialSelected[index] && !overlaps;
      } else if (this.isAdditive) {
        this.items[index].selected = this.initialSelected[index] || overlaps;
      } else {
        this.items[index].selected = overlaps;
      }
    });
  }

  // Sichqoncha qaysi item ustida bosilganini topadi
  private getItemIndexAtPosition(x: number, y: number): number {
    let foundIndex = -1;
    this.itemElements.forEach((el, i) => {
      const rect = el.nativeElement.getBoundingClientRect();
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        foundIndex = i;
      }
    });
    return foundIndex;
  }
}
