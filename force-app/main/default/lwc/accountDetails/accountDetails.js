import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class AccountDetails extends LightningElement {
    handleSubmit(event) {
        event.preventDefault(); //stop default action

        //Send event to parent to go to next page
        let fields = event.detail.fields;
        let recordInput = { allowSaveOnDuplicate: true, apiName: ACCOUNT_OBJECT.objectApiName, fields };
        this.dispatchEvent(new CustomEvent('next', {detail: recordInput}));
    }
}