namespace MyCalculator {

    class SimpleCalculator {
        public result;
        public firstNumber;
        public secondNumber;

        Calc(operator: string) {
            if (operator == '+')
            {
               this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
            }
            if (operator == '-')
            {
               this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber);
            }
            if (operator == '*')
            {
               this.result = parseInt(this.firstNumber) * parseInt(this.secondNumber);
            }
            if (operator == '/')
            {
               this.result = parseInt(this.firstNumber) / parseInt(this.secondNumber);
            }


        }
    }

    angular.module("MyCalculator").controller("CalculatorController", SimpleCalculator)
}
