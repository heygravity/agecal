function myAge(){
    var ageY = document.getElementById('age').value.slice(0,4);
    var ageM = document.getElementById('age').value.slice(5,7);
    var ageD = document.getElementById('age').value.slice(8,10);
    var age = ageY + ageM + ageD;
    var currentDateY = new Date().toJSON().slice(0, 4);
    var currentDateM = new Date().toJSON().slice(5, 7);
    var currentDateD = new Date().toJSON().slice(8, 10);
    var currentDate = currentDateY + currentDateM + currentDateD;
    var calAge = currentDate-age;
    var vlength = calAge.toString().length;
    //alert(vlength);
    if(vlength==2){
        alert(calAge+" Days");
    }
}