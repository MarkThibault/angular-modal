import * as ngDialog from "ng-dialog";
import ModalService from "./modal.service";

export default class ModalController {
    inj: any;

    private ngDialogId: string;

    static $inject = ["$scope", "angularModalService", "ngDialog", "injected"];
    constructor(
        private $scope: ngDialog.IDialogScope,
        private angularModalService: ModalService,
        private ngDialog: ngDialog.IDialogService,
        private injected: any
    ) {
        this.ngDialogId = this.$scope.ngDialogId;
        this.inj = this.injected;
        this.angularModalService.usingAngularModalCtrl = true;

        if (this.injected && this.injected.resizeModalId) {
            this.resizeModalToId(this.injected.resizeModalId);
        }
    }

    close(data?: any) {
        this.ngDialog.close(this.ngDialogId, data);
        this.angularModalService.showSpinner = false;
    }

    private resizeModalToId(elementId) {
        let baseElement = document.getElementById(this.injected.resizeModalId);
        this.$scope.$watch(
            () => { return document.getElementById(this.ngDialogId); },
            (newValue, oldValue) => {
                let modalContent;
                if (newValue !== oldValue) {
                    document.getElementById(this.ngDialogId).className += " ModalWrapper--resizeModal";
                    modalContent = document.getElementById(this.ngDialogId).getElementsByClassName("ngdialog-content")[0];
                    sizeModalToBaseElement();
                    window.addEventListener("resize", function(){ sizeModalToBaseElement(); }, true);
                }
                function sizeModalToBaseElement() {
                    modalContent.style.top = baseElement.getBoundingClientRect().top + "px";
                    modalContent.style.left = baseElement.getBoundingClientRect().left + "px";
                    modalContent.style.width = baseElement.offsetWidth + "px";
                    modalContent.style.height = baseElement.offsetHeight + "px";
                }
            }
        );
    }
}