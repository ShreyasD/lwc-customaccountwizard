import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';

export default class CustomAccountWizardReview extends LightningElement {
    @api contact;
    @api account;

    handleSubmit() {
        let accountToCreate = this.account;

        //Create Account and get Id
        createRecord(accountToCreate).then(account => {
            console.log('account: ' + JSON.stringify(account));
            let accountId = account.id; //this took some finding

            //Create Contact and parent with Account Id
            const fields = {};
            Object.assign(fields, this.contact.fields);
            fields.AccountId = accountId;

            let contactToCreate = { allowSaveOnDuplicate: true, apiName: 'Contact', fields };
            console.log('contactToCreate: ' + JSON.stringify(contactToCreate));
            //createContact
            createRecord(contactToCreate).then(contact => {
                let contactId = contact.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account and Contact created successfully!',
                        variant: 'success',
                    }),
                );

                //Send Event to navigate
                let detail = {};
                detail.accountId = accountId;
                detail.contactId = contactId;
                this.dispatchEvent(
                    new CustomEvent('submit', {detail: detail})
                );
            }).catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating contact',
                        message: error.message,
                        variant: 'error',
                    }),
                );
            });
        })
        .catch(error => { 
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating account',
                    message: error.message,
                    variant: 'error',
                }),
            );
        });
    }

    handlePrevious() {
        //Send event to parent to go to next page
        this.dispatchEvent(new CustomEvent('previous'));
    }
}