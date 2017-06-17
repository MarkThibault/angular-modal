import ModalService from "./modal.service";

export class ModalComponent implements ng.IComponentOptions {
    bindings: any = {
        size: "@",
        spinner: "=",
        type: "@",
    };
    controller = ModalComponentController;
    templateUrl = require("./modal.component.html");
    transclude: any = {
        "angularModalHeader": "?angularModalHeader",
        "angularModalContent": "?angularModalContent",
        "angularModalFooter": "?angularModalFooter"
    };
}

export class ModalComponentController {
    contentTranscludePresent: any;
    currentIcon: string;
    footerTranscludePresent: any;
    headerTranscludePresent: any;
    spinner: boolean;
    type: string;

    actionIcon = this.$sce.trustAsHtml(require("./icons/action-circle-icon.svg"));
    addIcon = this.$sce.trustAsHtml(require("./icons/add-circle-icon.svg"));
    confirmIcon = this.$sce.trustAsHtml(require("./icons/confirmation-circle-icon.svg"));
    deleteIcon = this.$sce.trustAsHtml(require("./icons/delete-circle-icon.svg"));
    editIcon = this.$sce.trustAsHtml(require("./icons/edit-circle-icon.svg"));
    errorIcon = this.$sce.trustAsHtml(require("./icons/error-circle-icon.svg"));
    infoIcon = this.$sce.trustAsHtml(require("./icons/info-circle-icon.svg"));
    previewIcon = this.$sce.trustAsHtml(require("./icons/preview-circle-icon.svg"));
    warningIcon = this.$sce.trustAsHtml(require("./icons/warning-triangle-icon.svg"));

    static $inject = ["$transclude", "angularModalService", "$sce"];
    constructor(
        private $transclude: any,
        private angularModalService: ModalService,
        private $sce: ng.ISCEService
    ) {
        this.headerTranscludePresent = this.$transclude.isSlotFilled("angularModalHeader");
        this.contentTranscludePresent = this.$transclude.isSlotFilled("angularModalContent");
        this.footerTranscludePresent = this.$transclude.isSlotFilled("angularModalFooter");
        this.setIcon();
    }

    $onInit() {
        // this.autoHideSpinner();
    }

    private setIcon() {
        switch (this.type) {
            case "action":
                this.currentIcon = this.actionIcon;
                break;
            case "add":
                this.currentIcon = this.addIcon;
                break;
            case "confirmation":
                this.currentIcon = this.confirmIcon;
                break;
            case "delete":
                this.currentIcon = this.deleteIcon;
                break;
            case "edit":
                this.currentIcon = this.editIcon;
                break;
            case "error":
                this.currentIcon = this.errorIcon;
                break;
            case "information":
                this.currentIcon = this.infoIcon;
                break;
            case "preview":
                this.currentIcon = this.previewIcon;
                break;
            case "warning":
                this.currentIcon = this.warningIcon;
                break;
            default:
                this.currentIcon = "Bad type name used";
        }
    }

    // private autoHideSpinner() {
    //     if (this.spinner) {
    //         this.angularModalService.showSpinner = true;

    //         if (this.angularModalService.showSpinner && this.angularModalService.usingangularModalCtrl) {
    //             this.angularModalService.hideSpinner();
    //         }
    //     }
    // }
}