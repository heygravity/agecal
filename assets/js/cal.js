function myAge(){
    var ageY = document.getElementById('age').value.slice(0,4);
    var ageM = document.getElementById('age').value.slice(5,7);
    var ageD = document.getElementById('age').value.slice(8,10);
    //var age = ageY + ageM + ageD;
    var currentDateY = new Date().toJSON().slice(0, 4);
    var currentDateM = new Date().toJSON().slice(5, 7);
    var currentDateD = new Date().toJSON().slice(8, 10);
    /*var currentDate = currentDateY + currentDateM + currentDateD;
    var calAge = currentDate-age;
    var vlength = calAge.toString().length;
    //alert(vlength);
    //alert(calAge);
    if(vlength==2){
        alert(calAge+" Days");
    }
    else{
        //let temp = calAge.toString();
        //alert(temp.slice(0,2)+" Years Old");
        
    }*/
    var Y = currentDateY-ageY;
    var M = currentDateM-ageM;
    var D = currentDateD-ageD;
    if(M==0 && D==0){
        alert((Y-1)+" Years ");
    }
    else if(M<0){
        alert((Y-1)+" Years ");
    }
    else{
        alert(Y+" Years "+M+" Months "+D+" Days Old");
    }
    //alert(Y+" Years "+M+" Months "+D+" Days Old");
}