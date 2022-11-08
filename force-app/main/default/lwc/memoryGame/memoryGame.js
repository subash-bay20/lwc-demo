import { LightningElement } from 'lwc';
// import { loadStyle } from 'lightning/platformResourceLoader';
// import FONTAWESOME from '@salesforce/resourceUrl/fontawesome';
export default class MemoryGame extends LightningElement {

    // totalTime = '00:00'
    // timeRef
    // reset = false
    // isLoaded = false
    // moves = 0
    // showCongratulations = false
    // matchCard = []
    // openCards = []
    // cards = [
    //     { id: 1, listClass: "card", type: "diamond", icon: "fa fa-diamond" },
    //     { id: 2, listClass: "card", type: "bicycle", icon: "fa fa-bicycle" },
    //     { id: 3, listClass: "card", type: "bug", icon: "fa fa-bug" },
    //     { id: 4, listClass: "card", type: "facebook", icon: "fa fa-facebook-square" },
    //     { id: 5, listClass: "card", type: "gratipay", icon: "fa fa-gratipay" },
    //     { id: 6, listClass: "card", type: "birthday", icon: "fa fa-birthday-cake" },
    //     { id: 7, listClass: "card", type: "video", icon: "fa fa-video-camera" },
    //     { id: 8, listClass: "card", type: "clock", icon: "fa fa-clock-o" },
    //     { id: 9, listClass: "card", type: "gratipay", icon: "fa fa-gratipay" },
    //     { id: 10, listClass: "card", type: "diamond", icon: "fa fa-diamond" },
    //     { id: 11, listClass: "card", type: "facebook", icon: "fa fa-facebook-square" },
    //     { id: 12, listClass: "card", type: "video", icon: "fa fa-video-camera" },
    //     { id: 13, listClass: "card", type: "bug", icon: "fa fa-bug" },
    //     { id: 14, listClass: "card", type: "bicycle", icon: "fa fa-bicycle" },
    //     { id: 15, listClass: "card", type: "clock", icon: "fa fa-clock-o" },
    //     { id: 16, listClass: "card", type: "birthday", icon: "fa fa-birthday-cake" },
    // ]
    // get gameRating() {
    //     let stars = this.moves <= 12 ? [1, 2, 3] : this.moves >= 13 && this.moves <= 16 ? [1, 2] : [1]
    //     return this.matchCard.length === 16 ? stars : []
    // }
    // back() {
    //     this.reset = false
    //     this.totalTime = '00:00'
    //     this.moves = 0
    //     this.showCongratulations = false
    //     this.matchCard = []
    //     this.openCards = []
    //     window.clearInterval(this.timeRef)
    //     let elem = this.template.querySelectorAll('.card')
    //     Array.from(elem).forEach(item => {
    //         item.classList.remove("show", "open", "match", "disabled")
    //     })
    //     let array = [...this.cards]
    //     let counter = array.length
    //     while (counter > 0) {
    //         let index = Math.floor(Math.random() * counter)
    //         counter--
    //         let temp = array[counter]
    //         array[counter] = array[index]
    //         array[index] = temp
    //     }
    //     this.cards = [...array]
    // }
    // displayCard(e) {
    //     let currentCard = e.target
    //     currentCard.classList.add("open", "show", "disabled")
    //     this.openCards = this.openCards.concat(e.target)
    //     const len = this.openCards.length
    //     if (len === 2) {
    //         this.moves = this.moves + 1
    //         if (this.moves === 1) {
    //             this.timer()
    //         }
    //         if (this.openCards[0].type === this.openCards[1].type) {
    //             this.matchCard = this.matchCard.concat(this.openCards[0], this.openCards[1])
    //             this.matched()
    //         } else {
    //             this.unmatched()
    //         }
    //     }
    // }
    // matched() {
    //     this.openCards[0].classList.add("match", "disabled")
    //     this.openCards[1].classList.add("match", "disabled")
    //     this.openCards[0].classList.remove("show", "open")
    //     this.openCards[1].classList.remove("show", "open")
    //     this.openCards = []
    //     if (this.matchCard.length === 16) {
    //         window.clearInterval(this.timeRef)

    //         this.showCongratulations = true
    //     }
    // }
    // unmatched() {
    //     this.openCards[0].classList.add("unmatched")
    //     this.openCards[1].classList.add("unmatched")

    //     this.action("DISABLE")

    //     setTimeout(() => {
    //         this.openCards[0].classList.remove("show", "open", "unmatched")
    //         this.openCards[1].classList.remove("show", "open", "unmatched")
    //         this.action("ENABLE")
    //         this.openCards = []

    //     }, 1100)
    // }
    // action(action) {
    //     let cards = this.template.querySelectorAll('.card')
    //     console.log(this.cards);
    //     Array.from(cards).forEach(item => {
    //         if (action === "ENABLE") {
    //             let ismatched = item.classList.contains('match')
    //             if (!ismatched) {
    //                 item.classList.remove("disabled")
    //             }
    //         }
    //         if (action === "DISABLE") {
    //             item.classList.add("disabled")
    //         }
    //     });
    // }
    // playOn() {
    //     this.reset = false
    // }
    // resetHandler() {
    //     this.reset = true
    // }
    // timer() {
    //     let startTime = new Date()
    //     this.timeRef = setInterval(() => {
    //         let diff = new Date().getTime() - startTime.getTime()
    //         let d = Math.floor(diff / 1000)
    //         const m = Math.floor(d % 3600 / 60);
    //         const s = Math.floor(d % 3600 % 60);
    //         const mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : ""
    //         const sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : ""
    //         this.totalTime = mDisplay + sDisplay

    //     }, 1000)
    // }
    // renderedCallback() {
    //     if (this.isLoaded) {
    //         return
    //     }
    //     else {
    //         loadStyle(this, FONTAWESOME + "/fontawesome/css/font-awesome.min.css").then(() => {
    //             console.log("FONTAWESOME LOADED SUCCESSFULLY.......");
    //         }).catch(error => {
    //             console.error(error);
    //         })
    //         this.isLoaded = true
    //     }
    // }
}   