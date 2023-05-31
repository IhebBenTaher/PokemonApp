import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {
  private initialColor:string="#f5f5f5";
  private initialType:string="solid";
  private defaultColor:string="#009688";
  private defaultHeight:number=200;
  constructor(private el:ElementRef) { 
    this.setBorder(this.initialColor,this.initialType);
    this.setHeight(this.defaultHeight);
  }
  @Input('pokemonBorderCard')borderColor:string;
  @HostListener('mouseenter') onMouseEnter(){
    let a:string[]=this.borderColor.split(" ",2);
    this.setBorder(a[0]||this.defaultColor,a[1]||this.initialType);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor,this.initialType);
  }
  private setBorder(borderType:string,color:string){
    this.el.nativeElement.style.border=borderType+' 4px '+color;
  }
  private setHeight(height:number){
    this.el.nativeElement.style.height=height+'px';
  }
}
