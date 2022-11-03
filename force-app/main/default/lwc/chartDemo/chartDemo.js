import { LightningElement, wire } from 'lwc';
import GET from '@salesforce/apex/OppurtinitiesController.getOppurtinities'
export default class ChartDemo extends LightningElement {
       pieChartLabels =[]
       pieChartData =[]
       @wire(GET)
       oppurtunitiesHandler({data,error}){
              if(data){
                     console.log(data);
                     const result = data.reduce((json, val) => ({ ...json, [val.StageName]: (json[val.StageName] | 0) + 1 }), {})
                     if(Object.keys(result).length){
                            this.pieChartLabels = Object.keys(result)
                            // this.pieChartData = JSON.stringify((Object.values(result)))
                     }
              }
              if(error){
                    console.log('not working');
              }
       }
}
