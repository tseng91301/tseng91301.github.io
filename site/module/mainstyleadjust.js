//adjust
adjustsize();
function adjustsize(){
    //all

    if(document.body==null){
        setTimeout(adjustsize,20);
    }

    if(document.body.clientWidth<=900){
        document.getElementById('all').style.width='900px';
    }else{
        document.getElementById('all').style.width=document.body.clientWidth+'px';
    }
    //pageinfo
    if(document.getElementById('pageinfo')==null){
        setTimeout(adjustsize,20);
    }else{
        document.getElementById('pageinfo').style.width=document.getElementById('all').style.width;
    }
    
    
    setTimeout(adjustsize,20);
}
//adjust