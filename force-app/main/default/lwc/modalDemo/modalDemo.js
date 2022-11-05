import { LightningElement } from 'lwc';

export default class ModalDemo extends LightningElement {
       isClicked = false
       clickHandler() {
              console.log('open.........');
              this.isClicked = true
       }
       cancelHandler() { 
              this.isClicked = false
              this.secondIsClicked = false
       }

       secondIsClicked = false
       clickSecondHandler() {
              console.log('second open.........');
              this.secondIsClicked = true
       }
}