import { LightningElement, wire } from 'lwc';
import getACC from '@salesforce/apex/MapController.getAccount'
export default class MapDemo extends LightningElement {

       mapMarkersPoint = []
       markerTitle = 'Account location'
       @wire(getACC)
       accountHandler({ data, error }) {
              if (data) {
                     console.log(data);
                     this.formatResponse(data)
              }
              if (error) {
                     console.error(error);
              }
       }

       formatResponse(data) {
              this.mapMarkersPoint = data.map(item => {
                     return {
                            location: {
                                   Street: item.BillingStreet || '',
                                   City: item.BillingCity || '',
                                   Postalcode: item.BillingPostalCode || '',
                                   Country: item.BillingCountry || '',
                                   State: item.BillingState || '',
                            },
                            icon: 'utility:salesforce1',
                            title: item.Name,
                            value:item.Name,
                            description: item.description
                     }
              })
              this.selectMarker = this.mapMarkersPoint && this.mapMarkersPoint[0].value
       }

       callmarkerHandler(e){
              this.selectMarker = e.detail.selectMarkerValue
       }
}