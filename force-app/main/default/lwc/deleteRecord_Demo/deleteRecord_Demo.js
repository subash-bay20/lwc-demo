import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { deleteRecord } from 'lightning/uiRecordApi';

export default class DeleteRecord_Demo extends LightningElement {
    recordId
    cahangeHandler(e) { 
        this.recordId = e.target.value
        console.log(this.recordId);
    }

    deleteHandler() {
        deleteRecord(this.recordId).then(() => {
            // console.log(result);
            this.showToast('Deleted!!!','Deleted Sucessfully.......','success')
        }).catch(error => {
            console.error(error)
            this.showToast('Not Deleted!!!', error.body.message, 'error')
        })
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title,
            message,
            variant,
        });
        this.dispatchEvent(event);
    }
}
