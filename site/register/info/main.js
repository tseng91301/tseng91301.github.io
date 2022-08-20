getregisterconfirmpass();
var registerconfirmpass;
function getregisterconfirmpass(){
    
    if(document.getElementById('registerconfirmpass')==undefined){
        setTimeout(getregisterconfirmpass,200);
    }else{
        registerconfirmpass=document.getElementById('registerconfirmpass');
        return;
    }
}
a1();
function a1(){
    try{
        registerconfirmpass.addEventListener('input',checkconfirmpassvalue);
    }catch{
        console.log('retrying[a1]')
        setTimeout(a1,200);
    }finally{
        
        return;
    }
}

var samepass=0;
function checkconfirmpassvalue(){
    var pass1=document.getElementById('registerpass').value;
    var pass2=document.getElementById('registerconfirmpass').value;
    if(pass1==pass2){
        samepass=1;
        document.getElementById('registerconfirmpass').style.backgroundColor='#a0ff9e'
    }else{
        samepass=0;
        document.getElementById('registerconfirmpass').style.backgroundColor='#ff7e57bf'
    }
}
var registermail;
var registerssid;
var registerpass;
function completeregisterform(){
    console.log(7886);
    registermail=document.getElementById('registermail').value;
    registerssid=document.getElementById('registerssid').value;
    registerpass=document.getElementById('registerpass').value;
    if(samepass==1){
        document.getElementById('registerformsubmit').innerHTML="處理中，請稍後...";
        var registerback=postform({ssid:registerssid,pass:registerpass,mail:registermail},'/api/register/registeremailcheck.php');
        console.log(registerback);
        eval(registerback.responseText);
    }
}

function registermailresend(){
    var registermailresendback=postform({mail:registermail},'/api/register/registermailresend.php');
    console.log(registermailresendback.responseText);
    if(registermailresendback.responseText.indexOf("[registermailresendE2]")!=-1){
        alert("Exception: 已達重新傳送次數限制，請於5分鐘後再試");
    }
    if(registermailresendback.responseText.indexOf("[registermailresendE1]")!=-1){
        alert("Exception: 傳送錯誤Email，請返回重試");
    }
    if(registermailresendback.responseText.indexOf("[registermailresendS1]")!=-1){
        alert("以重新傳送郵件");
    }
    //eval(registermailresendback.responseText);
}

function checkemail(){
    var checkemaildigit=document.getElementById('emailconfirm').value;
    var checkemailback=postform({mail:registermail,digit:checkemaildigit},'/api/register/registerfinal.php');
    eval(checkemailback.responseText);
}