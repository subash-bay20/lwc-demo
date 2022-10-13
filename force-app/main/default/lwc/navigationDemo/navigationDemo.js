import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils'
export default class NavigationDemo extends NavigationMixin(LightningElement) {

    homeHandler() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage'
            , attributes: {
                pageName: 'home'
            }
        })

    }

    chatterHandler() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage'
            , attributes: {
                pageName: 'chatter'
            }
        })

    }
    recordHandler() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage'
            , attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })

    }

    recordHandlerDefaultValues() {
        const defaultValue = encodeDefaultFieldValues({
            FirstName: 'ram',
            LastName: 'shyam',
            LeadSource: 'Other'
        })
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage'
            , attributes: {
                objectApiName: 'Contact',
                actionName: 'new',
            }, state: {
                defaultFieldValues: defaultValue
            }
        })


    }

    recordHandlerViewList(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage'
            , attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state:{
                filterName:'Recent'
            }
        })
    }

    navigateToFile() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
             attributes: {
                objectApiName: 'ContentDocument',
                actionName:'home'
             }
        })
    }


    recordHandlerViewMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
             attributes: {
                 recordId:'0031y00000QfNbqAAF' ,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        })
    }
    recordHandlerEditMode() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0031y00000QfNbqAAF',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        })
    }
}