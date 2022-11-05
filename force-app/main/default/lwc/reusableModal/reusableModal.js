import { LightningElement } from 'lwc';

export default class ReusableModal extends LightningElement {

       closeHandler(){
              this.dispatchEvent(new CustomEvent('close'))
       }

       footerSlotHandler(){
              const footer = this.template.querySelector('.slds-modal__footer ')
              if(footer){
                     footer.classList.remove('slds-hide')
              }
       }

       headerSlotHandler(){
              const header = this.template.querySelector('.slds-modal__header')
              if (header) {
                     header.classList.remove('slds-hide')
              }
       }
}