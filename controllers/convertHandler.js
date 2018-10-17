/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    // var regex = /[0-9]+(\.[0-9]+)?/;
    // var number = input.match(regex);
    // var numerator = Number(input.match(regex)[0]);
    // if (number.length == 2) {
    //   var denumerator = Number(input.match(regex)[1]);
    //   result = numerator / denumerator;
    //   return result;
    // }
    // result = numerator;
    
    var unit = input.match(/[a-zA-Z]+/)[0];
    var num = input.split(unit)[0];
    var matchDivisor = Boolean(num.match(/[/]/));
    
    if (input === unit) { // no numeric input
      return 1;
    }
    
    if (matchDivisor) {
      var numerator = num.split('/')[0];
      var denumerator = num.split('/')[1];
      
      if (num.split('/')[2]) {
        return 'invalid number'
      }
      
      if (numerator.length === 0 || denumerator.length === 0) {
        return 'invalid number'
      }
      
      result = Number(numerator) / Number(denumerator);
    } else {
      result = Number(num);
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var units = ['gal','l','mi','km','lbs','kg'];
    
    var unit = input.match(/[a-zA-Z]+/)[0].toLowerCase();
    
    return units.some((elm) => unit === elm) ? unit : 'invalid unit'
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    
    return expect[input.indexOf(initUnit)];
  };

  this.spellOutUnit = function(unit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];

    return expect[input.indexOf(unit)];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    if (initUnit === 'mi') {
      result = initNum * miToKm;
    } else if (initUnit === 'km') {
      result = initNum / miToKm;
    } else if (initUnit === 'lbs') {
      result = initNum * lbsToKg;
    } else if (initUnit === 'kg') {
      result = initNum / lbsToKg;
    } else if (initUnit === 'gal') {
      result = initNum * galToL;
    } else if (initUnit === 'l') {
      result = initNum / galToL;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
