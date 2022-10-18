import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import Account_Source from '@salesforce/schema/Account.AccountSource'
import Annual_Revenue from '@salesforce/schema/Account.AnnualRevenue'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class RecordFormDemo extends LightningElement {

    objectName = ACCOUNT_OBJECT
    fieldList = [NAME_FIELD, Account_Source, Annual_Revenue, TYPE_FIELD, INDUSTRY_FIELD]

    handleSuccess(e) {
        console.log(e.detail.id);
        var tostEvent = new ShowToastEvent({
            title: "Account created SucessFully",
            message: "Record ID: " + e.detail.id,
            variant: "success"
        })
        this.dispatchEvent(tostEvent)
    }
}