import { LightningElement, api } from 'lwc';
import generatePDF from '@salesforce/apex/pdfController.generatePDF'
export default class PdfGenaration extends LightningElement {

       @api recordId
       imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/1/13/Wattpad_logo.png'

       invoiceData = {
              invoiceNo: '420',
              invoiceCreated: 'Tuesday, November 1, 2022',
              companyName: "demoCompany",
              address: 'ghantaghar '
       }
       clientData = {
              client: 'test',
              userName: 'demo User',
              phone: '9817415655'
       }
       services = [
              { name: 'amount ', amount: 1000.00 },
              { name: 'test 2 ', amount: 1000.00 },
              { name: 'Test 5 ', amount: 1000.00 },
       ]
       get totalAmount() {
              return this.services.reduce((total, service) => {
                     return total = total + service.amount
              }, 0)
       }

       pdfGenerator() {
              let pdf = this.template.querySelector('.container')
              console.log(pdf.outerHTML);
              generatePDF({
                     recordId: this.recordId, htmlData: pdf.outerHTML
              }).then(result => {
                     console.log('attachmentId', result);
                     window.open(`https://force-page-2148-dev-ed.scratch.file.force.com/servlet/servlet.FileDownload?file=${result.Id}`)
              }).catch(error=>{
                     console.error(error)
              })
       }
}