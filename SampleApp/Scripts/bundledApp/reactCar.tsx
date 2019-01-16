/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Car } from './models';
import { Cars } from "./Components/Car";

export class ReactCar {
    public run(): void {
        const car: Car = {
            id: 1,
            make: "Tesla",
            model: "Model 3"
        };

        ReactDOM.render(
            <Cars car={car} />, $(".react")[0]
        );
    }
}