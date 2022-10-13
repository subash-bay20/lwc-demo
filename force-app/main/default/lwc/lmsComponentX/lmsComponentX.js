import { LightningElement, wire } from 'lwc';
import Sample from '@salesforce/messageChannel/subash__c';
import { subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    reciveMessage

    subscription
            @wire (MessageContext)
            context
            connectedCallback(){
                this.subscribeMessage()
            }
    
            subscribeMessage(){
              this.subscription = subscribe(this.context,Sample,(message)=>{this.handelMesage(message)},{scope:APPLICATION_SCOPE})
            }
            handelMesage(message){
                this.reciveMessage = message.lmsData.value ? message.lmsData.value : 'NO message Send???????????'
            }
            unsubscribeMessage(){
                unsubscribe(this.subscription)
                this.subscription = null 
            }
}


