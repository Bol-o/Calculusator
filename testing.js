var stri = '123';


for (let i = 0; i < stri.length; i++){
    console.log(parseInt(stri[i],10))
    if (parseInt(stri[i],10) > 0 && parseInt(stri[i],10) < 9 ){
    console.log((parseInt(stri[i],10)+1) + ' ' + typeof (parseInt(stri[i],10)+1))
}
}
var number = parseInt(stri,10);

