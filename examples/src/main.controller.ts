import ModalService from "../../src/modal.service";

export default class MainController {

    static $inject = ["angularModalService"];
    constructor(
        private angularModalService: ModalService
    ) {}

    openSizeExampleModal(size) {
        const settings = {
            template: "/SizeExample",
            inj: size
        };
        const modal = this.angularModalService.openModal(settings);
        modal.closePromise.then((data) => {
            console.log(data.value);
        });
    }

    openTypeExampleModal(type) {
        const settings = {
            template: "/TypeExample",
            inj: type
        };
        const modal = this.angularModalService.openModal(settings);
        modal.closePromise.then((data) => {
            console.log(data.value);
        });
    }

    openResizeModalToIdModal() {
        const settings = {
            template: "/ResizeModalToIdExample",
            inj: {
                resizeModalId: "ResizeModal"
            }
        };
        const modal = this.angularModalService.openModal(settings);
    }
}