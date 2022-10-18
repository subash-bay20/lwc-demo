import { LightningElement } from 'lwc';
import CONTACT  from '@salesforce/schema/Contact'
import NAME from '@salesforce/schema/Contact.Name'
import TITLE from '@salesforce/schema/Contact.Title'
import PHONE  from '@salesforce/schema/Contact.Phone'
import EMAIL  from '@salesforce/schema/Contact.Email'
import ACCOUNT  from '@salesforce/schema/Contact.AccountId'
export default class RecordEdidPage extends LightningElement {

    objectName = CONTACT
    fields = {
        account : ACCOUNT  ,
        name : NAME ,
        title : TITLE ,
        phone : PHONE ,
        email : EMAIL ,
    }

    resetHandler(){
        const inputFields = this.template.querySelectorAll('lightning-input-field')
        if(inputFields){
            Array.from(inputFields).forEach(element => {
                element.reset() 
            });
        }
    }
}