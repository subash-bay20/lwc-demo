import { LightningElement, wire } from 'lwc';
import GET_ACC from '@salesforce/apex/CSVcontroller.getAccounts'
import { exportCSVFile } from 'c/utilityCSV'
export default class CvsDemo extends LightningElement {

       accData
       acc_header = {
              Id: 'Record Id',
              Name: 'Name',
              AnnualRevenue: 'Annual Revenue',
              Industry: 'Industry',
              phone: 'Phone No.'
       }
       @wire(GET_ACC)
       accountHandler({ data, error }) {
              if (data) {
                     console.log(data);
                     this.accData = data
              }
              if (error) {
                     console.error(error);
              }
       }
       clickHandler() {
              exportCSVFile(this.acc_header, this.accData, 'Account_Records')
       }
}
