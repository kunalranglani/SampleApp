import * as React from "react";
import * as ReactDOM from "react-dom";
import { Cars } from "./Components/Car";
import { Car } from "./models"

export function run() {
    const car: Car = {
        id: 1,
        make: "Tesla",
        model: "Model 3"
    };

    ReactDOM.render(
        <Cars car={car} />, $(".print")[0]
    );
}