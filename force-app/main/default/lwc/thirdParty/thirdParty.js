import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate'
import {loadScript,loadStyle} from 'lightning/platformResourceLoader'
export default class ThirdParty extends LightningElement {
    currentDate='';
    isLibLoade=false
    renderedCallback(){
        if(this.isLibLoade){
            return
            }else
            {
            Promise.all([
                loadScript(this, MOMENT+'/moment.js'),
                loadStyle(this, ANIMATE+'/animate/animate.min.css')
            ]).then(()=>{
                this.setDateOnScreen()
            }).catch(()=>{
                console.error(error);
            })
        }
    }
    setDateOnScreen(){
        // buqjaj, 30 tera’ jar Hut 2022 13:03 
        this.currentDate = moment().format('LLLL'); 
    }
}



























