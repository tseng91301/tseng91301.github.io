//adjust
adjustsizeinbg();
function adjustsizeinbg(){
    document.getElementById('ctpan').style.width=document.getElementById('all').style.width;
    setTimeout(adjustsizeinbg,20);
}

//adjust



var showopttmp1=0;
function showopt(){
    
    if(showopttmp1==0){
        closeall();
        document.getElementById('optall').style.width='100%';
        document.getElementById('optall').style.height='1080px';
        document.getElementById('optall').style.zIndex='97';
        document.getElementById('optlay1').style.display='block';
        document.getElementById('optlay1').style.zIndex='98';
        showopttmp1=1;
        //var optall=document.getElementById('optall');
        //optall.addEventListener('click',closeall);
    }else if(showopttmp1==1){
        document.getElementById('optall').style.width='60px';
        document.getElementById('optall').style.height='60px';
        document.getElementById('optall').style.zIndex='0';
        document.getElementById('optlay1').style.display='none';
        document.getElementById('optlay1').style.zIndex='0';
        showopttmp1=0;
        closeall();
    }
    
}
function clickbackarrow(){
    closeall();
}
var clickedcolor='#535353';
function clickbutt(idname,linkto){
    var defcolor=document.getElementById(idname).style.backgroundColor;
    document.getElementById(idname).style.backgroundColor=clickedcolor;
    if(linkto!=undefined){
        location=linkto;
    }else{
        setTimeout(() => {
            document.getElementById(idname).style.backgroundColor=defcolor;
        }, 200);
    }
}
var clickcontentstmp1=0;
function clickcontents(){
    if(clickcontentstmp1==0){
        document.getElementById('contentslay1').style.display='block';
        clickcontentstmp1=1;

    }else if(clickcontentstmp1==1){
        document.getElementById('contentslay1').style.display='none';
        
        clickcontentstmp1=0;
        document.getElementById('toolslay1').style.display='none';
        toolslay1tmp1=0;
    }
    
}
var toolslay1tmp1=0;
function clicktools(){
    if(toolslay1tmp1==0){
        document.getElementById('toolslay1').style.display='block';
        toolslay1tmp1=1;

    }else if(toolslay1tmp1==1){
        document.getElementById('toolslay1').style.display='none';
        toolslay1tmp1=0;
    }
    
}

var clickcontacttmp1=0;
function clickcontact(){
    closeall();
    if(clickcontacttmp1==0){
        document.getElementById('contactall').style.display='block';
        document.getElementById('contactall').style.zIndex=80;
        clickcontacttmp1=1;

    }else if(clickcontacttmp1==1){
        
        document.getElementById('closebuttondisactive').style.display='none';
        document.getElementById('closebuttonactive').style.display='block';
        setTimeout(() => {
            document.getElementById('contactall').style.display='none';
            document.getElementById('contactall').style.zIndex=0;
            document.getElementById('closebuttondisactive').style.display='block';
            document.getElementById('closebuttonactive').style.display='none';
        }, 200);
        
        
        clickcontacttmp1=0;
    }
}
var showusertmp1=0;
function showuser(){
    closeall();
    if(showusertmp1==0){
        document.getElementById('userarea').style.display='block';
        document.getElementById('userarea').style.zIndex=80;
        showusertmp1=1;

    }else if(showusertmp1==1){
        
        document.getElementById('closebuttondisactive').style.display='none';
        document.getElementById('closebuttonactive').style.display='block';
        setTimeout(() => {
            document.getElementById('userarea').style.display='none';
            document.getElementById('userarea').style.zIndex=0;
            document.getElementById('closebuttondisactive').style.display='block';
            document.getElementById('closebuttonactive').style.display='none';
        }, 200);
        
        
        showusertmp1=0;
    }
}

function closeall(){
    showopttmp1=0;
    clickcontentstmp1=0;
    toolslay1tmp1=0;
    document.getElementById('contentslay1').style.display='none';
    document.getElementById('optall').style.width='60px';
    document.getElementById('optall').style.height='60px';
    document.getElementById('optall').style.zIndex='0';
    document.getElementById('optlay1').style.display='none';
    document.getElementById('optlay1').style.zIndex='0';
    document.getElementById('toolslay1').style.display='none';
    document.getElementById('contactall').style.zIndex='0';
    document.getElementById('contactall').style.display='none';
}

/*check server online or not */
if(getCookie('onlinesta')==''){
    checkserver();
}

function checkserver(){
    console.log("checking for server...");
    serverreply=$.ajax({
        url:"https://blacktechserver.ddnsking.com/checkonline.php",
        method:"get",
        async:false
    });
    //console.log(serverreply);
    
    if(serverreply.responseText==undefined){
        onlinesta=0;
        console.log("server not found!");
        setCookie('onlinesta','0',60);
        //setTimeout(checkserver,1000);
    }else{
        onlinesta=1;
        console.log(onlinesta);
        console.log("server online!");
        setCookie('onlinesta','1',1);
        //setTimeout(checkserver,1000);
    }
}

//https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exmins) {
    const d = new Date();
    d.setTime(d.getTime() + (exmins*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function resetonlinesta(){
    setCookie('onlinesta','');
    location.reload();
}
