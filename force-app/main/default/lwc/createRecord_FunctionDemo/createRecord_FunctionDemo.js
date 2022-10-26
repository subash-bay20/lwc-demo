import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT from '@salesforce/schema/Contact'
export default class CreateRecord_FunctionDemo extends LightningElement {
    formFields={}
    changeHandler(e) {
        const { name, value } = e.target
        this.formFields[name] = value
    }
    createHandler() {
        const recordInput = { apiName: CONTACT.objectApiName, fields: this.formFields }
        createRecord(recordInput).then(result => {
            this.ToastHandler('Created', `Successfully Created ${result.id}`)
            this.template.querySelector('form.createForm').reset()
            this.formFields ={}
        }).catch(error=>{
            this.ToastHandler('Error', error.body.message , 'error') 
        })
    }
    ToastHandler(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant: variant || 'success'
        }))
    }
}