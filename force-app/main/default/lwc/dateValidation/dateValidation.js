import { LightningElement } from 'lwc';

export default class DateValidation extends LightningElement {

       startDate
       endDate
       error
       dateHandler(e) {
              const { name, value } = e.target
              this[name] = value
       }
       submitHandler() {
            if(this.validateDate(this.startDate, this.endDate)){
              console.log('Valid date');
            }else{
              this.error ='Enter correct date'
            }
       }
       validateDate(startDate, endDate) {
              return new Date(startDate).getTime() < new Date(endDate).getTime()
       }
}