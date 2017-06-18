import * as angular from "angular";
import * as ngDialog from "ng-dialog";

import * as Modal from "./index.d";

export default class ModalService {
    showSpinner: boolean = false;
    usingAngularModalCtrl: boolean = false;

    static $inject = ["ngDialog", "$timeout"];
    constructor(
        private ngDialog: angular.dialog.IDialogService,
        private $timeout: ng.ITimeoutService
    ) { }

    openModal(modalSettings: Modal.ModalSettings) {
        modalSettings.template = angular.isString(modalSettings) ? modalSettings : modalSettings.template;
        modalSettings.controller = modalSettings.controller ? modalSettings.controller : "AngularModalController";
        modalSettings.controllerAs = modalSettings.controllerAs ? modalSettings.controllerAs : "modal";
        modalSettings.plain = modalSettings.plain ? modalSettings.plain : false;
        modalSettings.resolve = {
            injected: () => {
                return modalSettings.inj ? modalSettings.inj : null;
            }
        };
        return this.ngDialog.open(modalSettings);
    }

    // hideSpinner(time?) {
    //     // Default time for spinner is 400 
    //     time = time ? time : 400;
    //     return this.$timeout(() => {
    //         angular.element(".Modal-content").show("blind");
    //         angular.element(".Modal-loadingContainer").hide("blind");
    //     }, time);
    // }
};

