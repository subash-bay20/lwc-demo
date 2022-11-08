import { LightningElement } from 'lwc';
// import { loadScript } from 'lightning/platformResourceLoader'
// import CHART_JS from '@salesforce/resourceUrl/ChartJS'
export default class Charts2Demo extends LightningElement {

       // chart
       // isChartInit
       // // @api type
       // // @api chartHeading
       // // @api chartData
       // // @api chartLabels
       // renderedCallback() {
       //        if (this.isChartInit) {
       //               return;
       //        }
       //        loadScript(this, CHART_JS + '/chartJs/Chart.js').then(() => {
       //               this.isChartInit = true
       //               console.log('Loaded Successfully');
       //               this.loadChart()

       //        }).catch(e => {
       //               console.log('tEST ', e)
       //        })
       // }

       // loadChart() {
       //        window.Chart.platform.disableCSSInjection = true
       //        const canvas = document.createElement('canvas')
       //        this.template.querySelector('div.chart').appendChild(canvas)
       //        const ctx = canvas.getContext('2d');
       //        this.chart = new window.Chart(ctx, this.config())
       // }
       // config() {
       //        return {
       //               type: 'doughnut',
       //               data: {
       //                      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
       //                      datasets: [{
       //                             label: '# of Votes',
       //                             data: [12, 19, 3, 5, 22, 3],
       //                             backgroundColor: [
       //                                    'red',
       //                                    'green',
       //                                    'rgba(255, 206, 86)',
       //                                    'rgba(75, 192, 192)',
       //                                    'rgba(153, 102, 255)',
       //                                    'rgba(255, 159, 64)'
       //                             ],
       //                             borderColor: [
       //                                    'black',
       //                                    'black',
       //                                    'black',
       //                                    'black',
       //                                    'black',
       //                                    'black'
       //                             ],
       //                             borderWidth: 1
       //                      }]
       //               },
       //               options: {
       //                      legend:{
       //                             position:'right'
       //                      },
       //                      scales: {
       //                             y: {
       //                                    beginAtZero: true
       //                             }
       //                      }
       //               }
       //        };
       // }
}