import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import CONTACT from '@salesforce/schema/Contact'
const COLS = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Email', fieldName: 'Email', type: 'email', editable: true },
    { label: 'Phone', fieldName: 'Phone', editable: true }
]
export default class UpdateRecordDemo extends LightningElement {
    columns = COLS
    draftValues = []
    contacts = []
    @wire(getListUi, {
        objectApiName: CONTACT,
        listViewApiName: 'AllContacts'
    })
    listViewHandler({ data, error }) {
        if (data) {
            console.log(data);
            this.contacts = data.records.records.map(item => {
                return {
                    "Id": this.getValue(item, 'Id'),
                    "Name": this.getValue(item, 'Name'),
                    "Title": this.getValue(item, 'Title'),
                    "Email": this.getValue(item, 'Email'),
                    "Phone": this.getValue(item, 'Phone')
                }
            })
        }
        if (error) {
            console.error(error)
        }
    }
    getValue(data, field) {
        return data.fields[field].value
    }
    saveHandler(e) {
        console.log(JSON.stringify(e.detail.draftValues));
        const recordInputs = e.detail.draftValues.map(draft=>{
            const fields = {...draft}
            return {fields:fields}
        })
        const promises = recordInputs.map(recordInput=>updateRecord(recordInput))
        Promise.all(promises).then(()=>{
            console.log('update Sucessfully');
        }).catch(error=>{
            console.error('failed to update ', error);
        })
    }

}