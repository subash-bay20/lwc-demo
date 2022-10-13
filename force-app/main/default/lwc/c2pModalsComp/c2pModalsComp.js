import { LightningElement } from 'lwc';

export default class C2pModalsComp extends LightningElement {
    
    closeHandler(){
        const closeModal= new CustomEvent('close',{
            detail:{ 
                msg:'Successfully Worked...'
            }
    });
        this.dispatchEvent(closeModal);
    }
    
    footerHandler(){
        console.log('footer is called');
    }

}
