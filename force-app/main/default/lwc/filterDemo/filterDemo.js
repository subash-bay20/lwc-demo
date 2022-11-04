import { LightningElement, wire } from 'lwc';
import GET_Contact from '@salesforce/apex/FilterClass.getContactList'
export default class FilterDemo extends LightningElement {

       heading = ['Id', 'Name', 'Title', 'Email']
       fullData = []
       filterData = []
       filterBy = 'Name'
       timer

       shortBy = 'Name'
       sortDirection = 'asc'

       @wire(GET_Contact)
       contactHandler({ data, error }) {
              if (data) {
                     console.log(data);
                     this.fullData = data
                     this.filterData = data
              }
              if (error) {
                     console.error(error);
              }
       }
       get filterByOptions() {
              return [
                     { label: 'All', value: 'All' },
                     { label: 'Id', value: 'Id' },
                     { label: 'Name', value: 'Name' },
                     { label: 'Title', value: 'Title' },
                     { label: 'Email', value: 'Email' },
              ]
       }

       get sortByOptions() {
              return [
                     { label: 'Id', value: 'Id' },
                     { label: 'Name', value: 'Name' },
                     { label: 'Title', value: 'Title' },
                     { label: 'Email', value: 'Email' },
              ]
       }

       filterByHandler(e) {
              this.filterBy = e.target.value
       }
       inputHandler(e) {
              const { value } = e.target
              window.clearTimeout(this.timer)
              if (value) {
                     this.timer = window.setTimeout(() => {
                            console.log(value);
                            this.filterData = this.fullData.filter(eachObj => {
                                   if (this.filterBy === 'All') {
                                          return Object.keys(eachObj).some(key => {
                                                 return eachObj[key].toLowerCase().includes(value)
                                          })
                                   }
                                   else {
                                          const val = eachObj[this.filterBy] ? eachObj[this.filterBy] : ''
                                          return val.toLowerCase().includes(value)
                                   }
                            })
                     }, 1000)
              } else {
                     this.filterData = [...this.fullData]
              }
       }


       /*** SORTING LOGIC****/
       shortByHandler(e) {
              this.shortBy = e.target.value
              this.filterData = [...this.shortedBy(this.filterData)]
       }
       shortedBy(data) {
              const dataClone = [...data]
              dataClone.sort((a, b) => {
                     if (a[this.shortBy] === b[this.shortBy]) {
                            return 0;
                     }
                     return this.sortDirection === 'desc' ?
                            a[this.shortBy] > b[this.shortBy] ? -1 : 1 :
                            a[this.shortBy] < b[this.shortBy] ? -1 : 1
              })
              return dataClone
       }

}