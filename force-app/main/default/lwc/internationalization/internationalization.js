import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';
import DIR from '@salesforce/i18n/dir';


export default class Internationalization extends LightningElement {
dir = 'ltr'
number = 255212565.12
formatedNumber = new Intl.NumberFormat('np-EG',
{
 style:'currency',
 currency:'IRs',
currencyDisplay:'symbol'
}).format(this.number)

}