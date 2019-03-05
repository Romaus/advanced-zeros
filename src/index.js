module.exports = function getZerosCount(number, base) {
  arrSimpleBase = [];
  for (i = 2; i <= base; i++) {
    if (base%i == 0) {
      arrSimpleBase.push(i);
      base /= i;
      i--;
    }
  }
  arrSimpleBaseZeros = [];
  for (i = 0; i < arrSimpleBase.length; i++) {
    let tempNumber = number;
    let countZeros = 0;
    while(tempNumber >= arrSimpleBase[i]) {
      countZeros += Math.floor(tempNumber/arrSimpleBase[i]);
      tempNumber = Math.floor(tempNumber/arrSimpleBase[i]);
    }
    arrSimpleBaseZeros.push(countZeros); 
  }
  let minZeros = arrSimpleBaseZeros[0];
  for(i = 0; i < arrSimpleBase.length; i++) {
    let power = 0;
    for(j = 0; j < arrSimpleBase.length; j++) {
      if(arrSimpleBase[i] == arrSimpleBase[j]) {
        power++;
      }
    }
    arrSimpleBaseZeros[i] = Math.floor(arrSimpleBaseZeros[i]/power);
    if (arrSimpleBaseZeros[i] < minZeros) {
      minZeros = arrSimpleBaseZeros[i];
    }
  }
  return minZeros
}