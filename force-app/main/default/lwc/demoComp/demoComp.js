import { LightningElement,track } from 'lwc';

export default class DemoComp extends LightningElement {

    
    Name="Ram";
    title="LWC";
    @track address={
        city:"ktm",
        country:"china"
    }
    forTitle(event){
        this.title = event.target.value;
    }
    forTrack(event){
       this.address.country= event.target.value;
    }
    // getter  example
    user=["ram","shyam","gita"]
    get userName(){
        return this.user[0].toUpperCase();
    }

    n1=3
    n2=5
    get mul(){
        return this.n1 + this.n2 
    }

}