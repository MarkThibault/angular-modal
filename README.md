# Angular Modal

Angular Modal is an Angular based service, controller and component that wraps ngDialog.

## Getting Started

### Prerequisites

### Installing

Add the following to your dependencies:
```
"angular-modal": "git://github.com/MarkThibault/angular-modal.git",
```

### Usage

#### Inject Into App
```
angular
    .module("app", ["angularModalModule"])
```

#### Open From Controller
```
import * as angularModal from "angular-modal";

export default class MainController {

    static $inject = ["angularModalService"];
    constructor(
        private angularModalService: angularModal.ModalService
    ) {}

    openModal() {
        const settings: angularModal.ModalSettings = {
            template: require("./modal-template.html"),
            inj: {
                injectedContent: "Content text."
            }
        };
        const modal = this.angularModalService.openModal(settings);
        modal.closePromise.then((data) => {
            console.log(data.value);
        });
    }
}
```

#### Template
```
<angular-modal type="information" size="small">
    <angular-modal-header>Header Text</angular-modal-header>
    <angular-modal-content>
        <p>
            {{modal.inj.injectedContent}}
        </p>
    </angular-modal-content>
    <angular-modal-footer>
        <button class="Button Button--primary" type="submit" ng-click="modal.close('submit')">Submit</button>
        <button class="Button Button--secondary" type="button" ng-click="modal.close('secondary')">Secondary</button>
        <button class="Button Button--cancel" type="button" ng-click="modal.close()">Cancel</button>
    </angular-modal-footer>
</angular-modal>
```

## Running the tests


## Deployment



## Built With


## Contributing

## Versioning

## Authors

## License

## Acknowledgments
