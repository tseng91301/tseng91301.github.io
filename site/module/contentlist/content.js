
var b=0;
var a=0;
var c=0;
function clickcontents(){
    if(a==0){
        document.getElementById('contentbg').style.height="900px";
        document.getElementById('contentinfo1').style.display = "block";
        a=1;
        return;
    }else if(a==1){
        document.getElementById('contentbg').style.height="70px";
        document.getElementById('contentinfo1').style.display ="none";
        document.getElementById('toolscontent').style.display ="none";
        a=0;
        b=0;
    }
}

function clicktoolscontent(){
    if(b==0){
        document.getElementById('toolscontent').style.display = "block";
        b=1;
        return;
    }else if(a==1){
        document.getElementById('toolscontent').style.display ="none";
        b=0;
    }
}

function clickcontactwindow(){
    if(c==0){
        document.getElementById('contactwindow').style.display = "block";
        c=1;
        return;
    }else if(c==1){
        document.getElementById('contactwindow').style.display ="none";
        c=0;
    }
}
var clickreportbug_var1=0;
function clickreportbug(){
    if(clickreportbug_var1==0){
        document.getElementById('bugreportwindow').style.zIndex="4";
        document.getElementById('bugreportform').style.display ="block";
        document.getElementById('bugreportimg').style.display ="none";
        clickreportbug_var1=1;
    }else if(clickreportbug_var1==1){
        document.getElementById('bugreportwindow').style.zIndex="2";
        document.getElementById('bugreportform').style.display ="none";
        document.getElementById('bugreportimg').style.display ="block";
        clickreportbug_var1=0;
    }
}
var defcolor='rgba(0,6,92,1)';
var clickcolor='rgb(0 5 72)';
function clickbutt(buttid,linkto){
    //alert(buttid);
    document.getElementById(buttid).style.backgroundColor=clickcolor;
    if(linkto!=undefined){
        location=linkto;
    }else{
        setTimeout(() => {
            document.getElementById(buttid).style.backgroundColor=defcolor;
        }, 300);
    }
    
}
