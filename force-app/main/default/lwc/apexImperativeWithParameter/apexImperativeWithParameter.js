import { LightningElement } from 'lwc';
import Acc_List from '@salesforce/apex/AccountController.searchAccount'
export default class ApexImperativeWithParameter extends LightningElement {
    searchKey = ''
    timer 
    accounts
    changeHandler(e) {
        this.searchKey = e.target.value
        this.timer = setTimeout(()=>{
            this.callApex()
        },1000)
    }
    callApex(){
        Acc_List({ searchKey: this.searchKey })
            .then(result => {
                this.accounts = result
            }).catch(error => {
                console.error(error)
            })
    }
}