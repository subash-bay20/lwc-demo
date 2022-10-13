import { LightningElement,wire } from 'lwc';
import Sample from '@salesforce/messageChannel/subash__c';
import { MessageContext, publish} from 'lightning/messageService';
export default class LmsComponentA extends LightningElement {


    textValue
    @wire(MessageContext)
        context
    
        inputHandler(e){
            this.textValue = e.target.value
        }

        SendHandler(){
            const message={
                lmsData:{
                    value:this.textValue
                }
            }
            publish(this.context,Sample,message)
        }


}