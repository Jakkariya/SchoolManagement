import { Component, Input } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {

  @Input() collapsed=true;
  @Input() screenWidth=0;

  getBodyClass():String{
    let styleClass='';
    if(this.collapsed && this.screenWidth > 768){
      styleClass='body-trimmed';
    }
    else if(this.collapsed && this.screenWidth<=768 && this.screenWidth>0){
      styleClass='body-md-screen';
    }
    return styleClass;

  }

}
