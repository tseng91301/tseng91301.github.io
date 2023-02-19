//during playing
var keyinput=0;

function changekeyinput(event){
    if(!event){event=window.event;}
    var keycode=event.keyCode || event.which;
    //console.log(keycode)
    if(keycode==115){
        keyinput=1;
        console.log("s_down_keyinput="+keyinput);
    }
}
function changekeyinput2(event){
    if(!event){event=window.event;}
    var keycode=event.keyCode || event.which;
    //console.log(keycode)
    if(keycode==83){
        console.log("s_up")
        keyinput=0;
    }
}
document.addEventListener('keypress',changekeyinput);
document.addEventListener('keyup',changekeyinput2);
function changegamemode(){
    if(keyinput==0){
        keyinput=1;
        document.getElementById('gamemode').innerHTML='旗標模式';
    }else{
        keyinput=0;
        document.getElementById('gamemode').innerHTML='挖掘模式';
    }
}
function click_chunk(x,y){

    console.log("click_chunk"+x+","+y);
    if(bomb_list[x][y]=='x'){
        give_bomb_color(x,y,true);
        gameover();
    }
    check_block(x,y,side_length-1,bomb_list)
}
function clickshield(x,y){
    console.log("clickshield"+x+","+y);
    console.log("keyinput="+keyinput);
    if(keyinput==0){
        unshield(x,y)
    }
    if(keyinput==1){
        skeptical(x,y)
    }
}
function unshield(x,y){
    unshield_no_click(x,y);
    click_chunk(x,y);
}
function unshield_no_click(x,y){
    if(skeptical_list[x][y]!=1||gameover_val==1){
        document.getElementById(x+'_'+y+'shield').style.display='none';
        document.getElementById(x+"_"+y).innerHTML+='<p id="'+x+'_'+y+'text" onclick="click_chunk('+x+','+y+')">'+bomb_list[x][y]+'</p><div>\n';
        document.getElementById(x+'_'+y+'text').style.display='block'; 
    }
}
function give_bomb_color(x,y,special=false,map=bomb_list){
    if(bomb_list[x][y]=='x'){
        if(special){
            exploded_bomb.x=x;
            exploded_bomb.y=y;
            document.getElementById(x+'_'+y).style.backgroundColor='red';
        }else{
            document.getElementById(x+'_'+y).style.backgroundColor='yellow';
        }
        
    }
}
function check_block(x,y,max,map=bomb_list){
    if(checked_chunk_list[x][y]==1){
        return;
    }
    console.log(map[x][y]);
    console.log(check_skeptical(x,y,max));
    if(map[x][y]>check_skeptical(x,y,max)){
        console.log("旗標數不足，請重新計算");
        return null;
    }else if(map[x][y]<check_skeptical(x,y,max)){
        console.log("旗標數過多，請重新計算");
        return null;
    }
    if(map[x][y]==0){
        unshield_no_click(x,y);
        unshield_around(x,y,max,skeptical_list);
        checked_chunk_list[x][y]=1;
    }else if(map[x][y]!='x'){
        unshield_around(x,y,max,skeptical_list);
        checked_chunk_list[x][y]=1;
        return;
    }
    if(x>0){
        if(map[x-1][y]==0){
            check_block(x-1,y,max,map);
        }
    }
    if(y>0){
        if(map[x][y-1]==0){
            check_block(x,y-1,max,map);
        }
    }
    if(x<max){
        if(map[x+1][y]==0){
            check_block(x+1,y,max,map);
        }
    }
    if(y<max){
        if(map[x][y+1]==0){
            check_block(x,y+1,max,map);
        }
    }
    if(x>0&&y>0){
        if(map[x-1][y-1]==0){
            check_block(x-1,y-1,max,map);
        }
    }
    if(x>0&&y<max){
        if(map[x-1][y+1]==0){
            check_block(x-1,y+1,max,map);
        }
    }
    if(x<max&&y>0){
        if(map[x+1][y-1]==0){
            check_block(x+1,y-1,max,map);
        }
    }
    if(x<max&&y<max){
        if(map[x+1][y+1]==0){
            check_block(x+1,y+1,max,map);
        }
    }
    
}
function game_check_bomb(x,y,map=bomb_list){
    if(map[x][y]=='x'&&gameover_val==0){
        console.log('choose error,game over=====================================');
        give_bomb_color(x,y,true);
        return 1;
    }else{
        return 0;
    }
}
function unshield_around(x,y,max,map=skeptical_list){
    console.log("unshield_around");
    
    if(x>0){
        if(map[x-1][y]==0){
            if(game_check_bomb(x-1,y)==1){
                gameover();
                return;
            }
            console.log(x-1,y);
            unshield_no_click(x-1,y);
            //check_block(x-1,y);
        }
    }
    if(y>0){
        if(map[x][y-1]==0){
            if(game_check_bomb(x,y-1)==1){
                gameover();
                return;
            }
            console.log(x,y-1);
            unshield_no_click(x,y-1);
            //check_block(x,y-1);

        }
    }
    if(x<max){
        if(map[x+1][y]==0){
            if(game_check_bomb(x+1,y)==1){
                gameover();
                return;
            }
            console.log(x+1,y);
            unshield_no_click(x+1,y);
            //check_block(x+1,y);

        }
    }
    if(y<max){
        if(map[x][y+1]==0){
            if(game_check_bomb(x,y+1)==1){
                gameover();
                return;
            }
            console.log(x,y+1);
            unshield_no_click(x,y+1);
            //check_block(x,y+1);

        }
    }
    if(x>0&&y>0){
        if(map[x-1][y-1]==0){
            if(game_check_bomb(x-1,y-1)==1){
                gameover();
                return;
            }
            console.log(x-1,y-1);
            unshield_no_click(x-1,y-1);
            //check_block(x-1,y-1);

        }
    }
    if(x>0&&y<max){
        if(map[x-1][y+1]==0){
            if(game_check_bomb(x-1,y+1)==1){
                gameover();
                return;
            }
            console.log(x-1,y+1);
            unshield_no_click(x-1,y+1);
            //check_block(x-1,y+1);

        }
    }
    if(x<max&&y>0){
        if(map[x+1][y-1]==0){
            if(game_check_bomb(x+1,y-1)==1){
                gameover();
                return;
            }
            console.log(x+1,y-1);
            unshield_no_click(x+1,y-1);
            //check_block(x+1,y-1);

        }
    }
    if(x<max&&y<max){
        if(map[x+1][y+1]==0){
            if(game_check_bomb(x+1,y+1)==1){
                gameover();
                return;
            }
            console.log(x+1,y+1);
            unshield_no_click(x+1,y+1);
            //check_block(x+1,y+1);

        }
    }
}
function skeptical(x,y){
    //console.log(document.getElementById('1_7shield').style.display);
    console.log("skeptical"+x+","+y);
    if(document.getElementById(x+'_'+y+'shield').style.display=='none'){
        return;
    }
    console.log("skeptical");
    if(skeptical_list[x][y]==0){
        skeptical_list[x][y]=1;
    }else{
        skeptical_list[x][y]=0;
    }
    
    load_skeptical_list();
    
}
function check_skeptical(x,y,max,map=skeptical_list){
    var tmp1=0;
    console.log('checkskeptical('+x+','+y+');')
    if(x>0){
        if(map[x-1][y]==1){
            tmp1++;
        }
    }
    if(y>0){
        if(map[x][y-1]==1){
            tmp1++;
        }
    }
    if(x<max){
        if(map[x+1][y]==1){
            tmp1++;
        }
    }
    if(y<max){
        if(map[x][y+1]==1){
            tmp1++;
        }
    }
    if(x>0&&y>0){
        if(map[x-1][y-1]==1){
            tmp1++;
        }
    }
    if(x>0&&y<max){
        if(map[x-1][y+1]==1){
            tmp1++;
        }
    }
    if(x<max&&y>0){
        if(map[x+1][y-1]==1){
            tmp1++;
        }
    }
    if(x<max&&y<max){
        if(map[x+1][y+1]==1){
            tmp1++;
        }
    }
    return tmp1;
}
function load_skeptical_list(){
    var win=1;
    var skeptical_amount=0;
    for(var b=0;b<side_length;b++){
        for(var a=0;a<side_length;a++){
            if(skeptical_list[a][b]==1){
                //console.log(12121)
                skeptical_amount++;
                document.getElementById(a+'_'+b+'shield').innerHTML='!';
            }else{
                document.getElementById(a+'_'+b+'shield').innerHTML='';
            }
            if(!((bomb_list[a][b]=='x'&&skeptical_list[a][b]==1)||bomb_list!='x')){
                console.log("!win");
                win=0;
            }
        }
    }
    if(skeptical_amount!=bomb_amount){
        win=0;
    }
    console.log("win="+win);
    if(win){
        
        win_game();
        return;
    }
}
function gameover(win=0){
    if(!win){alert('踩到地雷，遊戲結束');}
    gameover_val=1;
    for(var b=0;b<side_length;b++){
        for(var a=0;a<side_length;a++){
            give_bomb_color(a,b,(a==exploded_bomb.x&&b==exploded_bomb.y))
            unshield_no_click(a,b);
        }
    }
}
function win_game(){
    alert('你贏了，Congratulation');
    gameover(1);
}
