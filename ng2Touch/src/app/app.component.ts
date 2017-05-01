import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('item') private item: ElementRef;
  private translatedX: number; 
  private translatedY: number; 
  private touchStartClientX: number; 
  private touchStartClientY: number;

  public ngOnInit(): void {
    this.translatedX = 0;
    this.translatedY = 0;
    this.touchStartClientX = 0;
    this.touchStartClientY = 0;
  }

  private onTouchStart(event: any): void {
    console.log(event);
    event.preventDefault();
    this.touchStartClientX = event.changedTouches[0].clientX;
    this.touchStartClientY = event.changedTouches[0].clientY;
  }

  private onTouchMove(event): void {

    this.translate(  this.getDeltaX(event)+this.translatedX,  this.getDeltaY(event)+this.translatedY);
  }

  private onTouchEnd(event): void {
    console.log('Move end');
    this.translatedX = this.translatedX + this.getDeltaX(event);
    this.translatedY = this.translatedY + this.getDeltaY(event);
  }

  private translate(x: number, y:number): void {
    this.item.nativeElement.style.transform = "translate3D(" + x + "px," + y + "px,0)";
  }

  private getDeltaX(event: any): number{
    
    if(event.changedTouches){
      console.log(event.changedTouches[0].clientX - this.touchStartClientX);
      return event.changedTouches[0].clientX - this.touchStartClientX;
    }
    return 0;
  }
  
  private getDeltaY(event: any): number{
    if(event.changedTouches){
      console.log(event.changedTouches[0].clientY - this.touchStartClientY);
      return event.changedTouches[0].clientY - this.touchStartClientY;
    }
    return 0;
  }

}
