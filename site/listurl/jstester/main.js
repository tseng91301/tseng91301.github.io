function executecode(){
    var dd=document.getElementById('codehere').value;
    console.log(dd)
    try{
        eval(dd);

    }catch{
        alert("error");

    }finally{
        return;
    }
}
function clearcode(){
   document.getElementById('codehere').value='';
    
}