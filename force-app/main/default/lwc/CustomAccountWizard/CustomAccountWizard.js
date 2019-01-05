import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class CustomAccountWizard extends NavigationMixin(LightningElement) {

    //Object Storage
    contactDetails = {};
    accountDetails = {};

    //Wizard Status
    @track showAccountDetailsForm = false;
    @track showContactDetailsForm = false;
    @track showReviewDetails = false;
    @track showResults = false;

    //event data
    @track contactId;
    @track accountId;

    constructor() {
        super();

        this.updateWizardState(true, false, false, false);
    }
    
    handleNext(event) {
        console.log('handleNext');
        if(this.showAccountDetailsForm) {
            //Store Account Information
            this.accountDetails = event.detail;
            console.log('this.accountDetails:' + JSON.stringify(this.accountDetails));

            this.updateWizardState(false, true, false, false);
        } else if (this.showContactDetailsForm) {
            //Store Contact Information
            this.contactDetails = event.detail;
            console.log('this.contactDetails:' + JSON.stringify(this.contactDetails));

            this.updateWizardState(false, false, true, false);
        } else if (this.showReviewDetails) {
            this.accountId = event.detail.accountId;
            this.contactId = event.detail.contactId;
            console.log('CustomAccountWizard->this.accountId: ' + this.accountId + ' this.contactId: ' + this.contactId);
            this.updateWizardState(false, false, false, true);
        }
    }

    handlePrevious() {
        console.log('handlePrevious');
        if (this.showContactDetailsForm) {
            this.updateWizardState(true, false, false, false);
        } else if (this.showReviewDetails) {
            this.updateWizardState(false, true, false, false);
        }
    }

    updateWizardState(showAccountDetailsForm, showContactDetailsForm, showReviewDetails, showResults) {
        this.showAccountDetailsForm = showAccountDetailsForm;
        this.showContactDetailsForm = showContactDetailsForm;
        this.showReviewDetails = showReviewDetails;
        this.showResults = showResults;
    }

    navigateToAccount() {
        console.log('accountId: ' + this.accountId);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.accountId,
                objectApiName: 'Account',
                actionName: 'view',
            },
        });
    }

    navigateToContact() {
        console.log('contactId: ' + this.contactId);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contactId,
                objectApiName: 'Contact',
                actionName: 'view',
            },
        });
    }
}