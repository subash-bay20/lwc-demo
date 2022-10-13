import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavigateToRelatedRelationdhip extends NavigationMixin(LightningElement) {

    navigate() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '0011y00000WIsPSAA1',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        })
    }
    navigateToWeb() {
        var difination = {
            componentDef: ''
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: "https://myaccount.google.com/"
            }
        })
    }


    navigateTolwc() {
        var difination = {
            componentDef: 'c:navigateToLWCtarget',
            attributes: {
                recordId: '255822485'
            }
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'one/one.app#' + btoa(JSON.stringify(difination))
            }
        })
    }
}

