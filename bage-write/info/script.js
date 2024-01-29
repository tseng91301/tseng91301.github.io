var bage_inf = {}
var ip_addr
function gettime(){
    // 創建一個新的日期時間對象，設置為當前時間
    var currentDate = new Date();

    // 取得年、月、日、時、分、秒
    var year = currentDate.getFullYear();
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // 因為 getMonth() 返回的是 0 到 11，所以需要加 1
    var day = ('0' + currentDate.getDate()).slice(-2);
    var hours = ('0' + currentDate.getHours()).slice(-2);
    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
    var seconds = ('0' + currentDate.getSeconds()).slice(-2);

    // 生成您所需的格式，例如：2024-01-26 09:45:37
    var formattedDateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

    console.log(formattedDateTime); // 輸出到控制台
    return formattedDateTime;

}
async function refresh_bage_inf(){
    bage_inf["title"] = $("#basic_inf").find("#title").val();
    bage_inf["brief"] = $("#basic_inf").find("#brief").val();
    bage_inf["from"] = $("#basic_inf").find("#from").val();
    bage_inf["detail"] = $(".editormd-markdown-textarea").val();
    bage_inf["date"] = gettime();
}
async function generate_bage_preview(){
    await refresh_bage_inf();
    var body_v = "";
    body_v += '<h2 id="title">'+bage_inf['title']+'</h2>';
    body_v += '<p id="content">'+bage_inf['brief']+'</p>';
    body_v += '<p id="from">From: '+bage_inf['from']+'</p>';
    body_v += '<p id="date">Date: '+bage_inf['date']+'</p>';
    
    return body_v;
}
$(document).ready(function(){
    get_json_file("https://remote-ip-check.onrender.com/ip")
        .then(data => {
            console.log("Remote IP: "+data["ip"])
            ip_addr = data["ip"];
            //ip_addr = "192.168.0.7";
            step2();
        })
        .catch(error => {
            console.error("Error: "+error);
        })
    
})

function step2(){
    $("#bage_preview-button").click(function(){
        generate_bage_preview()
            .then((ret) => {
                $("#preview").html(ret)
            })
    })
    $("#bage_commit").click(function(){
        refresh_bage_inf()
            .then(function(){
                $.ajax({
                    url: "http://"+ip_addr+"/bage_upl.php",
                    type: "POST",
                    dataType: 'json',
                    data: {
                        "data": bage_inf
                    },
                    success: function(response) {
                        console.log(response);
                        alert("提交成功!");
                        location.reload();
                    },
                    error: function(xhr, status, error) {
                        // Handle error
                        console.log(error);
                        console.log(status);
                        console.error(xhr.responseText);
                    }
                })
            })
    })
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