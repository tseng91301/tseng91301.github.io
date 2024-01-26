var information;
var notification;
$(document).ready(function(){
    get_json_file("info/information.json")
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
    get_json_file("info/notify.json")
        .then(data => {
            notification = data;
            console.log(data)

        })
})

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

async function get_json_file(f_name){
    var data_out
    try{
        const response = await fetch(f_name);
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