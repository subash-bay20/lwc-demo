import { LightningElement } from 'lwc';

export default class DemoChildSlot extends LightningElement {

    footerChangeHandler(){
        const footerEle = this.template.querySelector('.slds-card__footer')
        if(footerEle){
            footerEle.classList.remove('slds-hide')
        }
    }
}