import { LightningElement, api, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';
export default class GetRecordUiDemo extends LightningElement {

    formfields = [{ fieldName: 'AccountNumber', 'label': 'Account Number' },
                  { fieldName: 'Name', 'label': 'Name' },
                  { fieldName: 'AnnualRevenue', 'label': 'AnnualRevenue' },
                  { fieldName: 'Phone', 'label': 'Phone Number' },

                ]
    @api recordId

    @wire(getRecordUi, { recordIds: '$recordId', layoutTypes: 'Full', modes: 'Edit' })
    recordUiHandler({ data, error }) {
        if (data) {
            console.log(data);
            this.formfields=this.formfields.map(item=>{
                return {...item, value:data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if (error) {
            console.error(error)
        }
    }
}