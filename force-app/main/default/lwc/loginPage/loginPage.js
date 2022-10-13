import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class LoginPage extends LightningElement {


    startHandler(){
        this.showToast('Sucess','Sucessfully Started','success')
    }
    cancelHandler(){
        this.showToast('Cancle','Are you sure you want to cancle','Error')
    }
    showToast(title,message,variant){
        const eve = new ShowToastEvent({
            title,
            message,
            variant
        })
        this.dispatchEvent(eve)
    }
}