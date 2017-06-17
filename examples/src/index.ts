import "./app.scss";
import "./favicon.png";

import * as angular from "angular";
import "../../dist/angular-modal";
import MainController from "./main.controller";

angular
    .module("app", ["angularModalModule"])
    .controller("MainController", MainController);