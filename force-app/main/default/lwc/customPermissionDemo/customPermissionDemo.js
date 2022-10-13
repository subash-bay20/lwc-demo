import { LightningElement } from 'lwc';
import viewAllData from '@salesforce/userPermission/ViewAllData'
import MyCustomPermission from '@salesforce/customPermission/CustomPermission'
export default class CustomPermissionDemo extends LightningElement {

    get viewAllDataAvailable(){
        return viewAllData
    }

    get MyCustomPermissionAvailable(){
        return MyCustomPermission
    }
}