import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACC from '@salesforce/schema/Account'
export default class GetPicklistValuesRecordType extends LightningElement {

    ratingOption
    industryOption
    selectedIndustry
    selectedRating

    @wire(getObjectInfo, { objectApiName: ACC })
    objectInfo
    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACC,
        recordTypeId: '$objectInfo.data.defaultRecordTypeId'
    })
    picklistHandler({ data, error }) {
        if (data) {
            console.log(data);
            this.ratingOption = [...this.picklistGenerator(data.picklistFieldValues.Rating)]
            this.industryOption = [...this.picklistGenerator(data.picklistFieldValues.Industry)]
        }
        if (error) {
            console.error(error);
        }
    }
    picklistGenerator(data) {
        return data.values.map(item => ({ label: item.label, value: item.value }))
    }

    handleChange(e) {
        const {name,value} = e.target
        console.log(name + `-->` + value)
        if (name === "Rating"){
        this.selectedRating = value
        }
        if (name === "Industry"){
            this.selectedIndustry = value
        }
    }
}