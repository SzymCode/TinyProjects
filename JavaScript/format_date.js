var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {dd = '0' + dd;}
if (mm < 10) {mm = '0' + mm;}

today = mm + '/' + dd + '/' + yyyy;
console.log('MM/DD/YYYY: ' + today);

today = dd + '/' + mm + '/' + yyyy;
console.log('DD/MM/YYYY: ' + today);
