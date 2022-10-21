import { LightningElement, wire } from 'lwc';
import USER_ID from '@salesforce/user/Id'
import { getRecord } from 'lightning/uiRecordApi'
import NAME from '@saleforce/schema/User.Name'
import EMAIL from '@saleforce/schema/User.Email'
export default class WireServiceDemo extends LightningElement {

    fields = [NAME, EMAIL]
    userDetail

    userId = USER_ID
    @wire(getRecord, {recordId:'0051y00000MAPLNAA5',fields})
    userDetailHandler({data, error}){
       if(data){
           this.userDetail = data.fields
       }
       if(error){
            console.error(error)
       }
    }
    @wire(getRecord, {recordId: '0051y00000MAPLNAA5',fields})
    usernewdetail
}