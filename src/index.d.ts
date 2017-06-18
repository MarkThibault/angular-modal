// Type definitions for Angular Modal
export as namespace angularModal;
export = angularModal;

declare namespace angularModal {
    interface ModalController {
        inj: any;
        close(data: any);
    }
    interface ModalSettings extends angular.dialog.IDialogOpenOptions {
        inj: any;
    }
    interface ModalService {
        //showSpinner: boolean;
        usingAngularModalCtrl: boolean;
        openModal(modalSettings: ModalSettings);
    }
}