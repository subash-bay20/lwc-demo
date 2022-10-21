import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY from '@salesforce/schema/Account.Industry'
import TYPE from '@salesforce/schema/Account.Type'
import ACCOUNT from '@salesforce/schema/Account'
export default class GetPicklistValues extends LightningElement {
    
    industryOptions = []
    selectedIndustry = '';
    typeOptions = []
    selectedType = ''
    
    @wire(getObjectInfo, { objectApiName: ACCOUNT })
    objectIn
    @wire(getPicklistValues, { recordTypeId: '$objectIn.data.defaultRecordTypeId', fieldApiName: INDUSTRY })
    industryObject({ data, error }) {
        if (data) {
            console.log(data);
            this.industryOptions = [...this.generatePickList(data)]
        }
        if (error) {
            console.error(error);
        }
    }
    generatePickList(data) {
        return data.values.map(item => ({ label: item.label, value: item.value }))
    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
    // Second picklist type
    @wire(getPicklistValues, { recordTypeId: '$objectIn.data.defaultRecordTypeId', fieldApiName: TYPE })
    typeObject({ data, error }) {
        if (data) {
            console.log(data);
            this.typeOptions = [...this.generatePickList(data)]
        }
        if (error) {
            console.error(error);
        }
    }
    handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }

}