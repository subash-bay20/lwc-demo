import { LightningElement, wire } from 'lwc';
import USER_ID from '@salesforce/user/Id'
import { getRecord } from 'lightning/uiRecordApi'
export default class WireServiceDemo extends LightningElement {

    userDetail

    userId = USER_ID
    @wire(getRecord, {recordId:'0051y00000MAPLNAA5', fields:['User.Name','User.Email']})
    userDetailHandler({data, error}){
       if(data){
           this.userDetail = data.fields
       }
       if(error){
            console.error(error)
       }
    }
    @wire(getRecord, { recordId: '0051y00000MAPLNAA5', fields: ['User.Name', 'User.Email'] })
    usernewdetail
}