define(["require", "exports", "react", "react-dom", "./Components/Car"], function (require, exports, React, ReactDOM, Car_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReactCar = /** @class */ (function () {
        function ReactCar() {
        }
        ReactCar.prototype.run = function () {
            var car = {
                id: 1,
                make: "Tesla",
                model: "Model 3"
            };
            ReactDOM.render(React.createElement(Car_1.Cars, { car: car }), $(".react")[0]);
        };
        return ReactCar;
    }());
    exports.ReactCar = ReactCar;
});
//# sourceMappingURL=reactCar.js.map