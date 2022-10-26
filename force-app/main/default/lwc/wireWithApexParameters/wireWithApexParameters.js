import { LightningElement, wire } from 'lwc';
import FILTER_ACCOUNT from '@salesforce/apex/AccountController.filterAccountByTypeType'
export default class WireWithApexParameters extends LightningElement {
    selectedType = ''
    @wire(FILTER_ACCOUNT, { type: '$selectedType' })
    filterAccounts

    get typeOption() {
        return [
            { label: 'Customer - Channel', value:'Customer - Channel'},
            { label: 'Customer - Direct', value: 'Customer - Direct' },
            { label: 'Prospet', value: 'Prospet' },
            { label: 'Channel Partner / Reseller', value: 'Channel Partner / Reseller' },
            { label: 'Technology Partner', value: 'Technology Partner' },
            { label: 'Other', value: 'Other' },


        ]
    }

    changeHandler(e){
        this.selectedType = e.target.value
    }
}