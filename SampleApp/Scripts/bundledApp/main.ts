/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />

import { Car } from './models';

$(() => {
    const program = new Program();
    program.run();
});

export class Program {
    public run(): void {
        const pilot: Car = {
            id: 1,
            make: "Honda",
            model: "Pilot"
        };

        this._print(pilot);
    }

    private _print(car: Car) {
        $(".print").append(`<div>This is a ${car.make} ${car.model}`);
    }
}