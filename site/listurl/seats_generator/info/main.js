var seat_sta={}
var all_seat_num=0;
function confirm_seatnum(){
    document.getElementById('number_check_area').style.display='none';
    clear_seat();
    var seats=document.getElementById('seats_arrange');
    var row_number=document.getElementById('row_number').value;
    var col_number=document.getElementById('col_number').value;
    document.getElementById('black_board').colSpan=row_number;
    var seatstmp=0;
    var seatstmp2="";
    for(var a=0;a<col_number;a++){
        //console.log("<tr>");
        seatstmp2+="<tr>";
        for(var b=0;b<row_number;b++){
            //console.log("<td id=\"seat_"+seatstmp+"\"></td>");
            seatstmp2+="<td id=\"seat_"+seatstmp+"\" onclick=\"change_seat_sta('seat_"+seatstmp+"')\" style=\"background-color: #73ff73;\"></td>";
            eval("seat_sta.seat_"+seatstmp+"=1");
            seatstmp++;
            
        }
        //console.log("</tr>");
        seatstmp2+="</tr>";
    }
    all_seat_num=seatstmp;
    seats.innerHTML+=seatstmp2;
    showseatlast();
    document.getElementById('confirm_seat_butt').style.display='block';
}
function clear_seat(){
    seat_sta={}
    var seats=document.getElementById('seats_arrange');
    seats.innerHTML="";
    seats.innerHTML+="<tr><th colspan=\"4\" id=\"black_board\">黑板</th></tr>";

}
function change_seat_sta(seat_id){
    if(seat_sta[seat_id]==0){
        document.getElementById(seat_id).style.backgroundColor="#73ff73";
        seat_sta[seat_id]=1;
    }else{
        document.getElementById(seat_id).style.backgroundColor="#ff4848";
        seat_sta[seat_id]=0;
    }
    showseatlast();
    
}
function checkseats(){
    seats_num=0
    for(a=0;a<all_seat_num;a++){
        //console.log("checking seat_"+a);
        if(seat_sta['seat_'+a]==1){
            seats_num++;
        }
    }
    return seats_num;
}
function showseatlast(){
    document.getElementById('number_of_seats').innerHTML="共有"+checkseats()+"個座位";
}
function confirm_seat(){
    document.getElementById('number_check_area').style.display='block';
}
var end_number=0;
function confirm_end_number(){
    end_number=document.getElementById('end_number').value;
    var aa=document.getElementById('not_in_list');
    var seats_num=checkseats();
    var checks=""
    for(var a=1;a<=end_number;a++){
        checks+="<input type=\"checkbox\" id=\"no_"+a+"\"> "+a+" 號<br/>"
    }
    aa.innerHTML=checks;
    aa.innerHTML+="<button id=\"not_in_list_confirm\" onclick=\"confirm_not_in_list(seats_num,end_number)\">確認不排入之座號</button>";
}
function confirm_not_in_list(seats_num,end_number){
    var in_number=0
    in_number_det=[];
    for(a=1;a<=end_number;a++){
        if(document.getElementById("no_"+a).checked==false){
            in_number_det[in_number]=a;
            in_number++;

        }
    }
    console.log(in_number);
    if(in_number>seats_num){
        alert("警告：選擇排入的人數大於座位數，可能無法全部排入");
    }
    in_number_det=shuffle_array(in_number_det);
    console.log(in_number_det);
    var avail_seat=0;
    for(a=0;a<all_seat_num;a++){
        document.getElementById('seat_'+a).innerHTML="";
    }
    for(a=0;a<in_number;a++){
        console.log(avail_seat);
        while(seat_sta['seat_'+avail_seat]==0&&avail_seat<seats_num){
            avail_seat++;
            console.log(avail_seat);
        }
        document.getElementById('seat_'+avail_seat).innerHTML=in_number_det[a];
        avail_seat++;

    }
    window.location="#number_of_seats";

}
function shuffle_array(in_array){
    in_array_length=in_array.length;
    var out_array=[];
    for(a=0;a<in_array_length;a++){
        randnum=Math.floor(Math.random()*10000);
        //console.log(randnum);
        if(randnum>2500&&randnum<7500){
            console.log(100)
            in_array.reverse();
            out_array.push(in_array[in_array.length-1]);
            in_array.pop();
        }else{
            console.log(200)
            out_array.push(in_array[in_array.length-1]);
            in_array.pop();
        }
    }
    return out_array;
}