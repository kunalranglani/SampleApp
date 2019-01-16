define(["require", "exports", "./reactCar"], function (require, exports, reactCar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    $(function () {
        var program = new Program();
        program.run();
    });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.prototype.run = function () {
            var pilot = {
                id: 1,
                make: "Honda",
                model: "Pilot"
            };
            this._print(pilot);
            var tesla = new reactCar_1.ReactCar();
            tesla.run();
        };
        Program.prototype._print = function (car) {
            $(".jquery").append("<div>This is a " + car.make + " " + car.model);
        };
        return Program;
    }());
    exports.Program = Program;
});
//# sourceMappingURL=main.js.map