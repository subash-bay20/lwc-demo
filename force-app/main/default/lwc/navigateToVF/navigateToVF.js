import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToVF extends NavigationMixin(LightningElement) {
    navigateVF(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/NavigateVFpage'
            }
        }).then(generateUrl=>{
            console.log(generateUrl)
            window.open(generateUrl, "_blank")
        })
    }
}