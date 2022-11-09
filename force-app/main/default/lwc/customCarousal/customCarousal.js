import { api, LightningElement, track } from 'lwc';

const class_Hidden = 'slds-hide'
const class_Show = 'slds-show'
const classDot_Hidden = 'dot'
const classDot_Show = 'dot active'
const Defaut_timer = 3000
// const Defaut_Slider_Width = 700
export default class CustomCarousal extends LightningElement {

       slideIndex = 1
       slides = []
       timer

       // customWidth = Defaut_Slider_Width
       // @api showFull = false
        enableAutoScroll  =false
       @api slideTimer = Defaut_timer
       @api
       get slidesData() {
              return this.slides
       }


       set slidesData(data) {
              this.slides = data.map((item, index) => {
                     return index === 0 ? {
                            ...item,
                            slideIndex: index + 1,
                            cardClasses: class_Show,
                            dotClasses: classDot_Show
                     } : {
                            ...item,
                            slideIndex: index + 1,
                            cardClasses: class_Hidden,
                            dotClasses: classDot_Hidden
                     }
              })
       }

       autoScroll() {
              this.enableAutoScroll = !this.enableAutoScroll
              if (this.enableAutoScroll) {
                     this.timer = window.setInterval(() => {
                            this.slideSelectionHandler(this.slideIndex + 1)
                     }, Number(this.slideTimer))
              }
              else {
                     window.clearInterval(this.timer)
                     this.slideSelectionHandler(slideIndex)
              }
       }


       // connectedCallback() {
       //        this.enableAutoScroll = !this.enableAutoScroll
       // }

       // disconnectedCallback() {
       //        window.clearInterval(this.timer)
       // }
       prevHandler() {
              let slideIndex = this.slideIndex - 1
              this.slideSelectionHandler(slideIndex)
       }
       nextHandler() {
              let slideIndex = this.slideIndex + 1
              this.slideSelectionHandler(slideIndex)
       }
       slideSelectionHandler(id) {
              if (id > this.slides.length) {
                     this.slideIndex = 1
              } else if (id < 1) {
                     this.slideIndex = this.slides.length
              } else {
                     this.slideIndex = id
              }
              this.slides = this.slides.map((item) => {
                     return this.slideIndex === item.slideIndex ? {
                            ...item,
                            cardClasses: class_Show,
                            dotClasses: classDot_Show
                     } : {
                            ...item,
                            cardClasses: class_Hidden,
                            dotClasses: classDot_Hidden
                     }
              })
       }

       currentSlide(e) {
              let slideIndex = Number(e.target.dataset.id)
              this.slideSelectionHandler(slideIndex)
       }
}