var MyCalculator;
(function (MyCalculator) {
    var SimpleCalculator = (function () {
        function SimpleCalculator() {
        }
        SimpleCalculator.prototype.Calc = function (operator) {
            if (operator == '+') {
                this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
            }
            if (operator == '-') {
                this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber);
            }
            if (operator == '*') {
                this.result = parseInt(this.firstNumber) * parseInt(this.secondNumber);
            }
            if (operator == '/') {
                this.result = parseInt(this.firstNumber) / parseInt(this.secondNumber);
            }
        };
        return SimpleCalculator;
    }());
    angular.module("MyCalculator").controller("CalculatorController", SimpleCalculator);
})(MyCalculator || (MyCalculator = {}));
//# sourceMappingURL=CalculatorController.js.map