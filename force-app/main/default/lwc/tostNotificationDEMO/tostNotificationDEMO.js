import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class TostNotificationDEMO extends LightningElement {

    toastHandler1(){
        this.showToast('Successfully Created','Your Account is Successfully Created {1}','success')
    }
    toastHandler2(){
        this.showToastEaW('Error','Your Account is Successfully Created {1}','Error')
    }
    toastHandler3(){
        this.showToastEaW('Warning','Your Account is Successfully Created {2}','warning')
    }
    toastHandler4(){
        this.showToast('About','Your Account is Successfully Created {1}','brand')
    }
    showToast(title,message,variant){
    const eve = new ShowToastEvent({
        title,
        message,
        variant,
        messageData:['salesforce',{
            url:'https://www.salesforce.com/products/what-is-salesforce/',
            label:'Click Here'
        },{url:'https://www.facebook.com/',
        label:'Click Here'}],
        mode:'pester'
    })
    this.dispatchEvent(eve)
}


    showToastEaW(title,message,variant){
        const eve = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:['salesforce',{
                url:'https://www.salesforce.com/products/what-is-salesforce/',
                label:'Click Here'
            },{url:'https://www.facebook.com/',
            label:'Click Here'}],
            mode:'sticky'
        })
        this.dispatchEvent(eve)
    }
}
