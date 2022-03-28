import ReminderDateTime from '@salesforce/schema/Task.ReminderDateTime';
import { LightningElement, api } from 'lwc';

export default class FlowHeaderLWCBanner extends LightningElement {
    @api Title;
    @api iconName;
    @api backgroundcolor;
    @api textcolor;
    @api iconbackgroundcolor;

    renderedCallback() {
        this.setCSSVariable();
    }

    setCSSVariable() {
        var local = document.body.style;
        local.setProperty('--backgroundcolor', this.backgroundcolor);
        local.setProperty('--textcolor', this.textcolor);
        local.setProperty('--iconbackgroundcolor', this.iconbackgroundcolor);
    }
}