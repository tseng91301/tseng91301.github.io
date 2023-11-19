s_filt_by_start_end_num=1;
s_filt_by_start_end_data=[];
function imp_jq(){
    $(document).ready(function(){
        console.log("jq imported")
    })
}
try{
    imp_jq();
}catch{
    setTimeout(imp_jq,100);
}finally{
    $(document).ready(function(){
        $("#s_filt_by_word_sb").click(function(){
            var text_input=$("#text_input").val();
            var search_t=$("#s_filt_by_word_inp").val();
            var pattern_t=add_space(search_t);
            console.log(pattern_t);
            res=re_search(text_input,pattern_t)
        })
    })
    $(document).ready(function(){
        $("#s_filt_by_start_end_add").click(function(){
            s_filt_by_start_end_backup();
            var inner=$("#s_filt_by_start_end_inp").html();
            s_filt_by_start_end_num+=1;
            inner+=' + <input id="s_filt_by_start_end_inp_'+String(s_filt_by_start_end_num)+'_1" type="text">___<input id="s_filt_by_start_end_inp_'+String(s_filt_by_start_end_num)+'_2" type="text">';
            $("#s_filt_by_start_end_inp").html(inner);
            s_filt_by_start_end_restore();
        })
        $("#s_filt_by_start_end_del").click(function(){
            var inner=$("#s_filt_by_start_end_inp").html();
            s_filt_by_start_end_backup();
            inner2=inner.split(" + ");
            s_filt_by_start_end_num-=1;
            if(s_filt_by_start_end_num==0){
                alert("The filter only has one word left!");
                s_filt_by_start_end_num=1;
                return;
            }
            out="";
            for(var a=0;a<s_filt_by_start_end_num;a++){
                if(a!=0){
                    out+=" + ";
                }
                out+=inner2[a];
            }
            $("#s_filt_by_start_end_inp").html(out);
            s_filt_by_start_end_restore();
        })
        $("#s_filt_by_start_end_sb").click(function(){
            var text_input=$("#text_input").val();
            search_t="";
            for(var a=0;a<s_filt_by_start_end_num;a++){
                var s1=$("#s_filt_by_start_end_inp_"+String(a+1)+"_1").val();
                var s2=$("#s_filt_by_start_end_inp_"+String(a+1)+"_2").val();
                if(a!=0){
                    search_t+="[\\s]{1,}";
                }
                search_t+=s1+"[A-Za-z]{0,}"+s2;
            }
            search_t=add_space(search_t);
            res=re_search(text_input,search_t)
        })
    })
}

function re_search(w_inp,s_inp){
    var pattern=new RegExp(s_inp);
    console.log(pattern);
    var w_arr=w_inp.split('\n');
    var w_arr_l=w_arr.length;
    var outp=[]
    var found=0;
    for(var a=0;a<w_arr_l;a++){
        var matches=w_arr[a].match(pattern);
        if(matches){
            found=1;
            for(var b=0;b<matches.length;b++){
                outp.push({"word":matches[b],"nearby_rows":[w_arr[a],w_arr[a+1]]});
            }
        }
    }
    if(!found){
        alert("Text can't be find!");
        return;
    }
    res_dump(outp);
    location.href="#s_res_text"
    return outp;
}
function res_dump(inparr){
    var l=inparr.length;
    var out="";
    for(var a=0;a<l;a++){
        out+=String(a+1)+": "+inparr[a]['word']+"\non: \n";
        var l2=inparr[a]['nearby_rows'].length;
        console.log(l2);
        for(var b=0;b<l2;b++){
            try{out+="  "+String(inparr[a]['nearby_rows'][b])+"\n";}
            catch{
                console.log("String is undefinded")
            }
        }
        out+="----------------\n";
    }
    $("#s_res_text").html(out);
}
function add_space(inp){
    return("(?<=^|[^A-Za-z])"+inp+"(?=[^A-Za-z]|$)");
}
function s_filt_by_start_end_backup(){
    s_filt_by_start_end_data=[];
    for(var a=0;a<s_filt_by_start_end_num;a++){
        s_filt_by_start_end_data.push([$("#s_filt_by_start_end_inp_"+String(a+1)+"_1").val(),$("#s_filt_by_start_end_inp_"+String(a+1)+"_2").val()])
    }
}
function s_filt_by_start_end_restore(){
    for(var a=0;a<s_filt_by_start_end_num;a++){
        $("#s_filt_by_start_end_inp_"+String(a+1)+"_1").val(s_filt_by_start_end_data[a][0]);
        $("#s_filt_by_start_end_inp_"+String(a+1)+"_2").val(s_filt_by_start_end_data[a][1]);
    }
}