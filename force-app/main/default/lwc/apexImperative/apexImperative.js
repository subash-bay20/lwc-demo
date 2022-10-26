import { LightningElement } from 'lwc';
import Acc_List from '@salesforce/apex/AccountController.getAccountList'
export default class ApexImperative extends LightningElement {
    accountlist
    clickHandler(){
        Acc_List().then(result=>{
           this.accountlist = result
           console.log(result);
        }).catch(error=>{
            console.error(error)
        })
    }
}