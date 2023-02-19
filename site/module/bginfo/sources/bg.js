//adjust
adjustsizeinbg();
function adjustsizeinbg(){
    document.getElementById('ctpan').style.width=document.getElementById('all').style.width;
    setTimeout(adjustsizeinbg,20);
}
function adjustonce(){
    try{
        var optall=document.getElementById('optall');
        var optall_td=optall.getElementsByTagName('td');
        optall_td.nowrap='nowrap';
    }catch{
        setTimeout(adjustonce, 100);
    }
}

//adjust
//reloading
var reloaded=getCookie('reloaded');
if(reloaded=='1'){
    setCookie('reloaded','0',100);
}else{
    setCookie('reloaded','1',100);
    location.reload();
}
//reloading



var showopttmp1=0;
function showopt(){
    
    if(showopttmp1==0){
        closeall();
        document.getElementById('optall').style.width='100%';
        document.getElementById('optall').style.height='1080px';
        document.getElementById('optall').style.zIndex='97';
        document.getElementById('optall-1_table').style.display='block';
        document.getElementById('optall-1_table').style.zIndex='98';
        showopttmp1=1;
        //var optall=document.getElementById('optall');
        //optall.addEventListener('click',closeall);
    }else if(showopttmp1==1){
        //document.getElementById('optall').style.width='60px';
        //document.getElementById('optall').style.height='60px';
        //document.getElementById('optall').style.zIndex='0';
        //document.getElementById('optall-1_table').style.display='none';
        //document.getElementById('optall-1_table').style.zIndex='0';
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
        setTimeout(() => {
            document.getElementById(idname).style.backgroundColor=defcolor;
        }, 200);
        closeall();
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
        document.getElementById('optall-1_table-2_table').style.display='block';
        clickcontentstmp1=1;

    }else if(clickcontentstmp1==1){
        document.getElementById('optall-1_table-2_table').style.display='none';
        
        clickcontentstmp1=0;
        document.getElementById('optall-1_table-2_table-2_table').style.display='none';
        toolslay1tmp1=0;
    }
    
}
var toolslay1tmp1=0;
function clicktools(){
    if(toolslay1tmp1==0){
        document.getElementById('optall-1_table-2_table-2_table').style.display='block';
        toolslay1tmp1=1;

    }else if(toolslay1tmp1==1){
        document.getElementById('optall-1_table-2_table-2_table').style.display='none';
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

//userblock
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
//whethershowloginform();
function whethershowloginform(){
    try{
        getCookie('onlinesta');
    }catch{
        console.log('waiting[getCookie(\'onlinesta\')...');
    }finally{
        if(getCookie('onlinesta')=='1'){
            document.getElementById('userarealoginform').style.display='block';
            document.getElementById('userareaerror').style.display='none';
        }else{
            document.getElementById('userarealoginform').style.display='none';
            document.getElementById('userareaerror').style.display='block';
            setTimeout(whethershowloginform,200);
        }
        
    }
    
}
function submitlogin(){
    var loginssid=document.getElementById('loginssid').value;
    var loginpass=document.getElementById('loginpass').value;
    var back=postform({ssid:loginssid,pass:loginpass},'/api/login.php');
    console.log(back.responseText);
    if(back.responseText.indexOf("[postsendE2]")!=-1){
        resetonlinesta();
        alert('伺服器錯誤，請嘗試重新整理頁面(session ID丟失)');  
    }
    if(back.responseText.indexOf("[loginE2]")){
        alert('Exception: 帳號密碼有誤，請再試一次');
    }
    if(back.responseText.indexOf("[registermailresendS1]")){
        alert('以重新傳送Email');
    }
}

function closeall(){
    showopttmp1=0;
    clickcontentstmp1=0;
    toolslay1tmp1=0;
    document.getElementById('optall-1_table-2_table').style.display='none';
    document.getElementById('optall').style.width='60px';
    document.getElementById('optall').style.height='60px';
    document.getElementById('optall').style.zIndex='0';
    document.getElementById('optall-1_table').style.display='none';
    document.getElementById('optall-1_table').style.zIndex='0';
    document.getElementById('optall-1_table-2_table-2_table').style.display='none';
    //document.getElementById('contactall').style.zIndex='0';
    //document.getElementById('contactall').style.display='none';
}

/*check server online or not */
if(getCookie('onlinesta')==''){
    //checkserver();
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
        setCookie('onlinesta','1',30);
        getremotesessionid();
        
        //setTimeout(checkserver,1000);
    }
}
function getremotesessionid(){
    cookiereply=$.ajax({
        url:"https://blacktechserver.ddnsking.com/api/getsession.php",
        method:"get",
        async:false
    });
    try{
        console.log(cookiereply.responseText);
    }catch{
        console.log("retrying[getremotesessionid()]");
        setTimeout(getremotesessionid,200);
    }finally{
        if(cookiereply.responseText!=undefined){
            setCookie('PHPSESSID',cookiereply.responseText,30);
        }else{
            setTimeout(getremotesessionid,200);
        }
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
function setCookie(cname, cvalue, exmins,domain) {
    const d = new Date();
    d.setTime(d.getTime() + (exmins*60*1000));
    let expires = "expires="+ d.toUTCString();
    var cookietmp=cname + "=" + cvalue + ";" + expires + ";path=/; secure";
    if(domain!=undefined){
        cookietmp+="domain="+domain+';';
    }
    document.cookie = cookietmp;
}

function resetonlinesta(){
    setCookie('onlinesta','');
    setCookie('PHPSESSID','');
    location.reload();
}

/* Post data to serverside*/
function postform(postcontent,serverpath){
    postcontent['sendto']=serverpath;
    postcontent['PHPSESSID']=getCookie('PHPSESSID');
    console.log(postcontent)
    aaa=$.ajax({
        url:"https://blacktechserver.ddnsking.com/api/postsend.php",
        method:"post",
        async:false,
        data:postcontent
    });
    return(aaa);
}
