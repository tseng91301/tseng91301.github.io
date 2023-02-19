var bomb_list=[];
var skeptical_list=[];
var side_length=20;
var bomb_amount=25;
var gameover_val=0;
var checked_chunk_list=[];
var exploded_bomb={}
function generate_game(){
    gameover_val=0;
    checked_chunk_list=[];
    for(var x=0;x<side_length;x++){
        checked_chunk_list[x]=[]
        for(var y=0;y<side_length;y++){
            checked_chunk_list[x][y]=0;
        }
    }
    side_length=document.getElementById('game_width').value;
    bomb_amount=document.getElementById('bomb_amount').value;
    var gamesec=document.getElementById('gamesec');
    gamesec.innerHTML="";
    
    
    var gamesec_data="";
    for(var b=0;b<side_length;b++){
        gamesec_data+="<tr>\n"
        for(var a=0;a<side_length;a++){
            gamesec_data+="<td id=\""+a+"_"+b+"\"></td>\n";
        }
        gamesec_data+="</tr>\n";
    }
    gamesec.innerHTML=gamesec_data;
    create_bomb_list(side_length,bomb_amount);
    for(var b=0;b<side_length;b++){
        for(var a=0;a<side_length;a++){
            givecolor(a,b);
            document.getElementById(a+"_"+b).innerHTML='<div id="'+a+'_'+b+'shield" class="chunk_shield" onclick="clickshield('+a+','+b+')">'
            //document.getElementById(a+"_"+b).innerHTML+='<p id="'+a+'_'+b+'text" onclick="click_chunk('+a+','+b+')">'+bomb_list[a][b]+'</p><div>\n';
        }
    }
}
function givecolor(x,y){
    switch (bomb_list[x][y]) {
        case 0:
            eval("document.getElementById('"+x+"_"+y+"').style.color='#b7b7b7'");
            break;
        case 1:
            eval("document.getElementById('"+x+"_"+y+"').style.color='black'");
            break;
        case 2:
            eval("document.getElementById('"+x+"_"+y+"').style.color='#4492ff'");
            break;
        case 3:
            eval("document.getElementById('"+x+"_"+y+"').style.color='#ff9927'");
            break;
        case 4:
            eval("document.getElementById('"+x+"_"+y+"').style.color='#ff0a0a'");
            break;
        case 5:
            eval("document.getElementById('"+x+"_"+y+"').style.color='#ee00ff'");
            break;
        case 6:
            eval("document.getElementById('"+x+"_"+y+"').style.color='#00aa8f'");
            break;
        case 7:
            eval("document.getElementById('"+x+"_"+y+"').style.color='#1400ff'");
            break;
        case 8:
            eval("document.getElementById('"+x+"_"+y+"').style.color='#00b139'");
            break;
        default:
            //eval("document.getElementById('"+x+"_"+y+"').style.backgroundColor='red'");
            break;
    }
}

function create_bomb_list(size,amount){
    var bomb_loc=[];
    var size2=size**2;
    
    for(var a=0;a<amount;a++){
        var number=grnerate_random_number(size2);
        while(bomb_loc.indexOf(number)!=-1){
            number=grnerate_random_number(size2);
        }
        bomb_loc[a]=number;
    }
    //console.log(bomb_loc)
    for(var a=0;a<size;a++){
        bomb_list[a]=[];
        skeptical_list[a]=[];
        for(b=0;b<size;b++){
            bomb_list[a][b]=null;
            skeptical_list[a][b]=0;
        }
    }
    for(var a=0;a<amount;a++){
        var tmp1=bomb_loc[a];
        //console.log(tmp1);
        //console.log(size2)
        //console.log("bomb_list["+Math.floor(tmp1/size)+"]["+tmp1%size+"]='x'");
        bomb_list[Math.floor(tmp1/size)][func1(tmp1%size)]='x';
    }
    //console.log(bomb_list);
    for(var b=0;b<size;b++){
        for(var a=0;a<size;a++){
            var bomb_num=check_bomb(a,b,size-1,bomb_list);
            bomb_list[a][b]=bomb_num;
        }
    }
    console.log(bomb_list);
}
function func1(num){
    if(num==0){
        return 0;
    }else{
        return num-1;
    }
}
function check_bomb(x,y,max,map){
    if(map[x][y]=='x'){
        return 'x';
    }
    var tmp1=0;
    if(x>0){
        if(map[x-1][y]=='x'){
            tmp1++;
        }
    }
    if(y>0){
        if(map[x][y-1]=='x'){
            tmp1++;
        }
    }
    if(x<max){
        if(map[x+1][y]=='x'){
            tmp1++;
        }
    }
    if(y<max){
        if(map[x][y+1]=='x'){
            tmp1++;
        }
    }
    if(x>0&&y>0){
        if(map[x-1][y-1]=='x'){
            tmp1++;
        }
    }
    if(x>0&&y<max){
        if(map[x-1][y+1]=='x'){
            tmp1++;
        }
    }
    if(x<max&&y>0){
        if(map[x+1][y-1]=='x'){
            tmp1++;
        }
    }
    if(x<max&&y<max){
        if(map[x+1][y+1]=='x'){
            tmp1++;
        }
    }
    return tmp1;
}
function grnerate_random_number(max){
    randnum=Math.floor(Math.random()*max);
    //console.log(randnum)
    return randnum;
}
try{
    var gamesec=document.getElementById('gamesec');
}catch{
    setTimeout(() => {
        var gamesec=document.getElementById('gamesec');
    }, 100);
}finally{
    //generate_game();
}


