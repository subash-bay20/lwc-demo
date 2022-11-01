import { LightningElement } from 'lwc';
// import ANIMATE from '@salesforce/resourceUrl/animate'
// import { loadStyle } from 'lightning/platformResourceLoader'
// const Book_url = 'https://www.googleapis.com/books/v1/volumes?q='
export default class BookApp extends LightningElement {
       quary = 'Thanos'
       books
       timer
       isLibLoade = false
       renderedCallback() {
              if (this.isLibLoade) {
                     return
              } else {
                     Promise.all([
                            loadStyle(this, ANIMATE + '/animate/animate.min.css')
                     ]).then(() => {
                            console.log('Animate Successfully')
                     }).catch(() => {
                            console.error(error);
                     })
              }
       }
       connectedCallback() {
              this.fetchData()
       }
       fetchData() {
              fetch(Book_url + this.quary)
                     .then(response => response.json())
                     .then(data => {
                            console.log(data)
                            this.books  = data
                      } )
                     .catch(error => console.error(error))
       }

       fetchBookhandler(e){
              this.quary = e.target.value
              window.clearTimeout(this.timer)
              this.timer = setTimeout(()=>{
                     this.fetchData()
              },1000)
       }

}