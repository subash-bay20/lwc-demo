import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldDisplayValue, getFieldValue } from 'lightning/uiRecordApi';
import NAME from '@salesforce/schema/Account.Name'
import ANNUAL_Revenue from '@salesforce/schema/Account.AnnualRevenue'
import OWNER_NAME from '@salesforce/schema/Account.Owner.Name'
export default class GetFieldDisplayValuesDemo extends LightningElement {


    owner_name
    Annual_Revenue
    Name
    name
    owner
    AnnualRevenue

    @api recordId

    @wire(getRecord, { recordId: '$recordId', fields: [NAME, ANNUAL_Revenue, OWNER_NAME] })
    //   for all fields
    // @wire(getRecord, { recordId: '$recordId',layoutTypes:['Full'],mode:['View']})
    accountHandler({ data }) {
        if (data) {
            console.log(data);
            this.name = getFieldDisplayValue(data, NAME)
            this.AnnualRevenue = getFieldDisplayValue(data, ANNUAL_Revenue)
            this.owner = getFieldDisplayValue(data, OWNER_NAME)

        }
    }

    @wire(getRecord, { recordId: '$recordId', fields: [NAME, ANNUAL_Revenue, OWNER_NAME] })
    accountFieldHandler({ data }) {
        if (data) {
            console.log(data);
            this.Name = getFieldValue(data, NAME)
            this.Annual_Revenue = getFieldValue(data, ANNUAL_Revenue)
            this.owner_name = getFieldValue(data, OWNER_NAME)

        }
    }

}