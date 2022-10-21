import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME from '@salesforce/schema/Account.Name'
import ANNUAL_Revenue from '@salesforce/schema/Account.AnnualRevenue'
import OWNER_NAME from '@salesforce/schema/Account.Owner.Name'
export default class RecordIdAdaptor extends LightningElement {
    
    name
    owner
    AnnualRevenue

    @api recordId

    @wire(getRecord, { recordId: '$recordId', fields: [NAME, ANNUAL_Revenue, OWNER_NAME] })
        //   for all fields
    // @wire(getRecord, { recordId: '$recordId',layoutTypes:['Full'],mode:['View']})
    accountHandler({data}) {
        if (data) {
            console.log(data);
            this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value

            this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value

            this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value
        }
    }

}