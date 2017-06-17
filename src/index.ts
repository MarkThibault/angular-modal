import * as angular from "angular";
import "ng-dialog";
import * as ngDialog from "ng-dialog";

import ModalController from "./modal.controller";
import ModalService from "./modal.service";
import { ModalComponentController, ModalComponent } from "./modal.component";

angular
    .module("angularModalModule", ["ngDialog"])
    .config(["ngDialogProvider", (
        ngDialogProvider: ngDialog.IDialogProvider
    ) => {
        const defaultOptions: ngDialog.IDialogOptions = {
            className: "ModalWrapper",
            plain: false,
            showClose: false,
            closeByDocument: true,
            closeByEscape: true,
            closeByNavigation: true
        };
        ngDialogProvider.setDefaults(defaultOptions);
    }])
    .controller("AngularModalController", ModalController)
    .service("angularModalService", ModalService)
    .controller("angularModalComponentController", ModalComponentController)
    .component("angularModal", new ModalComponent());