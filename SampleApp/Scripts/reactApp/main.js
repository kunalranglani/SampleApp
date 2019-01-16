define(["require", "exports", "react", "react-dom", "./Components/Car"], function (require, exports, React, ReactDOM, Car_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function run() {
        var car = {
            id: 1,
            make: "Tesla",
            model: "Model 3"
        };
        ReactDOM.render(React.createElement(Car_1.Cars, { car: car }), $(".print")[0]);
    }
    exports.run = run;
});
//# sourceMappingURL=main.js.map