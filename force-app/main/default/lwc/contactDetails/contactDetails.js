import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class ContactDetails extends LightningElement {
    handleSubmit(event) {
        event.preventDefault(); //stop default action

        //Send event to parent to go to next page
        let fields = event.detail.fields;
        fields.AccountId = '';
        let recordInput = { allowSaveOnDuplicate: true, apiName: CONTACT_OBJECT.objectApiName, fields };
        this.dispatchEvent(new CustomEvent('next', {detail: recordInput}));
    }

    handlePrevious(event) {
        event.preventDefault(); //stop default action

        //Send event to parent to go to next page
        let fields = event.detail.fields;
        fields.AccountId = '';
        let recordInput = { allowSaveOnDuplicate: true, apiName: CONTACT_OBJECT.objectApiName, fields };
        this.dispatchEvent(new CustomEvent('previous', {detail: recordInput}));
    }
}