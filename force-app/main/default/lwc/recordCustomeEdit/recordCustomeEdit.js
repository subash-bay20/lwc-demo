import { LightningElement } from 'lwc';
import ACCOUNT from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordCustomeEdit extends LightningElement {
    objectName = ACCOUNT
    inputHandler=''
    handleClick(e){
        this.inputHandler = e.target.value 
        console.log(e.target.value);
    }
    submitHandler(e){
        e.preventDefault();
        const inputCmp = this.template.querySelector('lightning-input')
        const inputValue = inputCmp.value
        if (!inputValue.includes('ram')){
            inputCmp.setCustomValidity("The Account name 'ram'")
            console.log("i am on");
        }else{
            inputCmp.setCustomValidity("")
            const field = e.detail.fields
             field.Name = inputValue
            this.template.querySelector('lightning-record-edit-form').submit(field)
            console.log("i am noooo");
        }
        inputCmp.reportValidity()
        console.log(inputValue);
    }
    sucessHandler(e){
        const toastHandler = new ShowToastEvent({
            title:'Success',
            message:'Create Sucessfully.ID : ' +e.detail.id,
            variant:'success'
        })
        this.dispatchEvent(toastHandler)
    }

    errorHandler(e){
        const toastHandler = new ShowToastEvent({
            title: 'Eerror',
            message: e.detail.message,
            variant: 'error'
        })
        this.dispatchEvent(toastHandler)
    }
}