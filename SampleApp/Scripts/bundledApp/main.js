/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />
define(["require", "exports"], function (require, exports) {
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
        };
        Program.prototype._print = function (car) {
            $(".print").append("<div>This is a " + car.make + " " + car.model);
        };
        return Program;
    }());
    exports.Program = Program;
});
//# sourceMappingURL=main.js.map