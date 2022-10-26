import { LightningElement, wire } from 'lwc';
import Acc_List from '@salesforce/apex/AccountController.getAccountList'
export default class ApexWire_Demo extends LightningElement {

    AccountList
    @wire(Acc_List)
    accounts

    @wire(Acc_List)
    AccountHandler({ data, error }) {
        if (data) {
            this.AccountList = data.map(item => {
                let newType = item.Type === 'Customer - Channel' ? 'Chennel' :
                    item.Type === 'Customer - Direct' ? 'Direct' : '--------'
                    return {...item,newType}
            })
        }
        if(error){
            console.error(error)
        }
    }
}