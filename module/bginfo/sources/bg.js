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
        }, 300);
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
}