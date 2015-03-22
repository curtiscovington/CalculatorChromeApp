
Polymer({
  ready: function() {
    this.result = 0;
    this.lastResult = 0;
  },
  operation: null,
  numbers: [],
  clickNumber: function(event, detail, sender) {
    if (this.clear) {
      this.clear = false;
      this.result = "";
    }

    if (parseInt(this.result) == 0) {
      this.result = "";
    }
    this.result += sender.value;
   // this.$.input.value += sender.value;
  },
  performOperation: function() {
    this.clear = true;
    this.numbers.push(parseFloat(this.result));
    if (this.operation != null) {

        var previous = this.numbers[this.numbers.length-2];
        this.result = this.operation(previous, this.result);

        this.numbers.push(parseFloat(this.result));
    }
  },
  clickPlusMinus: function() {
    var num = parseFloat(this.result);
    num *= -1;
    this.result = num;
  },
  clickDecimal: function() {
    this.result += ".";
  },
  clickClearAll: function(event, detail, sender) {
    this.operation = null;
    this.result = 0;
    this.clear = false;
  },
  clickCalculate: function(event, detail, sender) {
    this.performOperation();
    this.operation = null;
  },
  clickAdd: function(event, detail, sender) {
    this.performOperation();
    // console.log(this.lastResult);
    // this.result = 0;
    this.operation = function(a, b) {
      a = parseFloat(a);
      b = parseFloat(b);
      console.log(a+b);
      return a + b;
    }
  },
  clickSubtract: function(event, detail, sender) {
    this.performOperation();
    // console.log(this.lastResult);
    // this.result = 0;
    this.operation = function(a, b) {
      a = parseFloat(a);
      b = parseFloat(b);
      console.log(a-b);
      return a - b;
    }
  },
  clickMultiply: function(event, detail, sender) {
    this.performOperation();
    // console.log(this.lastResult);
    // this.result = 0;
    this.operation = function(a, b) {
      a = parseFloat(a);
      b = parseFloat(b);
      console.log(a*b);
      return a * b;
    }
  },
  clickDivide: function(event, detail, sender) {
    this.performOperation();
    // console.log(this.lastResult);
    // this.result = 0;
    this.operation = function(a, b) {
      a = parseFloat(a);
      b = parseFloat(b);
      console.log(a/b);
      return a / b;
    }
  }
});
