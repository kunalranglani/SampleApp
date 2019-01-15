/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />

import { Car } from './models';

$(() => {
    const program = new Program();
    program.run();
});

export class Program {
    public run(): void {
        const camry: Car = {
            id: 1,
            make: "Toyota",
            model: "Camry"
        };

        this._print(camry);
    }

    private _print(car: Car) {
        $(".print").append(`<div>This is a ${car.make} ${car.model}`);
    }
}