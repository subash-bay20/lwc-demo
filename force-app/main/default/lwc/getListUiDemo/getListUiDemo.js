import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT from '@salesforce/schema/Contact'
export default class GetListUiDemo extends LightningElement {

    @wire(getListUi, { objectApiName: CONTACT, listViewApiName: 'AllContacts' })
    listViewHandler({ data, error }) {
        if (data) {
            console.log(data)
        }
        if (error) {
            console.error(error)
        }
    }
}