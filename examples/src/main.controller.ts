import * as angularModal from "../../src/index.d";

export default class MainController {

    static $inject = ["angularModalService"];
    constructor(
        private angularModalService: angularModal.ModalService
    ) {}

    openSizeExampleModal(size) {
        const settings: angularModal.ModalSettings = {
            template: "/SizeExample",
            inj: size
        };
        const modal = this.angularModalService.openModal(settings);
        modal.closePromise.then((data) => {
            console.log(data.value);
        });
    }

    openTypeExampleModal(type) {
        const settings: angularModal.ModalSettings = {
            template: "/TypeExample",
            inj: type
        };
        const modal = this.angularModalService.openModal(settings);
        modal.closePromise.then((data) => {
            console.log(data.value);
        });
    }

    openResizeModalToIdModal() {
        const settings: angularModal.ModalSettings = {
            template: "/ResizeModalToIdExample",
            inj: {
                resizeModalId: "ResizeModal"
            }
        };
        const modal = this.angularModalService.openModal(settings);
    }
}