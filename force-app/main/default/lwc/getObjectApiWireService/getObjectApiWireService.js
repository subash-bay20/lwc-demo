import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi'
import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACC_OBJEECT from '@salesforce/schema/Account'
import OPP_OBJEECT from '@salesforce/schema/Opportunity'
export default class GetObjectApiWireService extends LightningElement {

    @wire(getObjectInfo, { objectApiName: ACC_OBJEECT })
    objectInfo
    // propertoOFwire({ data, error }) {
    //     if (data) {
    //         console.log(data);
    //         this.defaultRecordTypeId = data.defaultRecordTypeId
    //     }
    //     if (error) {
    //         console.error(error);
    //     }
    // }
    objectInfos
    objectApiNames = [ACC_OBJEECT, OPP_OBJEECT]
    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    objectInfosHandler({ data }) {
        if (data) {
           this.objectInfos = data
        }
    }
}