import { LightningElement } from 'lwc';

export default class C2pParentComp extends LightningElement {

    showModal=false
    msg
    ClickHandler(){
        this.showModal = true
    }
    closeHandler(e){
        this.showModal = false
        this.msg =  e.detail.msg
    }
}