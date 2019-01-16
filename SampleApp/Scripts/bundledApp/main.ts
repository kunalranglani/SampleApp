import { Car } from './models';
import { ReactCar } from './reactCar'

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

        const tesla = new ReactCar();
        tesla.run();
    }

    private _print(car: Car) {
        $(".jquery").append(`<div>This is a ${car.make} ${car.model}`);
    }
}