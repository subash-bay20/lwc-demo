import { LightningElement } from 'lwc';

export default class Quize extends LightningElement {
    selected={}
    answers=0
    isSubmitted = false
     qQuestions=[{
         id:"Question-1",
         Question:"first question",
         option:{
             a:"1",
             b:"2",
             c:"3"
         },
         answer:"a"
     },
  
     {
         id:"Question-2",
         Question:"first question",
         option:{
             a:"1",
             b:"2",
             c:"3"
         },
         answer:"a"
     },
 
     {
         id:"Question-3",
         Question:"first question",
         option:{
             a:"1",
             b:"2",
             c:"3"
         },
         answer:"a"
     },
 
    {
         id:"Question-4",
         Question:"first question",
         option:{
             a:"1",
             b:"2",
             c:"3"
         },
         answer:"a"
     },
 
     // {
     //     id:"Question-5",
     //     Question:"first question",
     //     option:{
     //         a:"1",
     //         b:"2",
     //         c:"3"
     //     },
     //     answer:"a"
     // },
 
     // {
     //     id:"Question-6",
     //     Question:"first question",
     //     option:{
     //         a:"1",
     //         b:"2",
     //         c:"3"
     //     },
     //     answer:"a"
     // },
 
     // {
     //     id:"Question-7",
     //     Question:"first question",
     //     option:{
     //         a:"1",
     //         b:"2",
     //         c:"3"
     //     },
     //     answer:"a"
     // },
 
     // {
     //     id:"Question-8",
     //     Question:"first question",
     //     option:{
     //         a:"1",
     //         b:"2",
     //         c:"3"
     //     },
     //     answer:"a"
     // },
 
     // {
     //     id:"Question-9",
     //     Question:"first question",
     //     option:{
     //         a:"1",
     //         b:"2",
     //         c:"3"
     //     },
     //     answer:"a"
     // },
 
     // {
     //     id:"Question-10",
     //     Question:"first question",
     //     option:{
     //         a:"1",
     //         b:"2",
     //         c:"3"
     //     },
     //     answer:"a"
     // }
 ]
 get notSelectedAll(){
     return !(Object.keys(this.selected).length === this.qQuestions.length)
 }
 get scored(){
     return `slds-text-heading_large ${this.qQuestions.length===this.answers?'slds-text-color_success':'slds-text-color_error'}`
 }
 changeHandler(event){
 console.log("name",event.target.name);
 console.log("value",event.target.value);
 const{name,value}= event.target
 this.selected={...this.selected,[name]:value}
 }
 submitHandler(event){
     event.preventDefault()
     let correct = this.qQuestions.filter(item=>this.selected[item.id] === item.answer)
     this.answers = correct.length
     console.log("this.answers",this.answers)
     this.isSubmitted=true
 }
 resetHandler(){
     this.selected ={}
     this.answers=0
     this.isSubmitted = false
 } 

}
