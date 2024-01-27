var information;
var notification;
var ip_addr
$(document).ready(function(){
    get_json_file("https://remote-ip-check.onrender.com/ip")
        .then(data => {
            //ip_addr = data["ip"];
            ip_addr = "192.168.0.7";
            step2();
        })
        .catch(error => {
            console.error("Error: "+error);
        })
})

function step2(){
    get_json_file("http://"+ip_addr+"/info/information.json")
        .then(data => {
            information = data;
            set_body_content()
                .then(function(){
                    $(".card").click(function(){
                        magnify(this);
                        specified_motion(this);
                    })
                })
        })
        .catch(error => {
            console.error("Error: "+error)
        })
    get_json_file("http://"+ip_addr+"/info/notify.json")
        .then(data => {
            notification = data;
            console.log(data)

        })
        .catch(error => {
            console.error("Error: "+error)
        })
}

function magnify(attr){
    if ($(attr).hasClass('active')) {
        $(attr).removeClass('active');
        $(attr).find("#detail").css("display", "none");
    } else {
        $('.box').removeClass('active'); // 移除所有元素的 active 类
        $(attr).addClass('active'); // 将点击的元素添加 active 类
        $(attr).find("#detail").css("display", "block");
    }
}

async function get_json_file(url){
    var data_out
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        data_out = await response.json();
        return data_out
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        return []
    }
}

async function set_body_content(){
    var num = information.length
    var body_v = ""
    for(var a=0; a<num; a++){
        body_v += '<div class="card" id="' + information[a]['id'] + '">';
        body_v += '<h2 id="title">' + information[a]['title'] + '</h2>';
        body_v += '<p id="brief">' + information[a]['brief'] + '</p>';
        body_v += '<p id="detail" style="display: none;">' + information[a]['detail'] + '</p>';
        body_v += '</div>';
    }
    $("#main_content").html(body_v)
}