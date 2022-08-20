readonline();
function readonline(){
    try{
        getCookie('onlinesta');
    }catch{
        console.log('retrying[readonline()]...');
        setTimeout(readonline,500);
    }finally{
        let onlinesta=getCookie('onlinesta');
        if(onlinesta==1){
            document.getElementById('serverstatext').style.color='#00df85';
            document.getElementById('serverstatext').innerHTML='伺服器在線上';
            document.getElementById('serverstadetail').innerHTML='&emsp;&emsp;現在您可以使用網站中的所有功能，點擊右上角圖示進行登入或註冊等帳號選項';
        }else if(onlinesta==0){
            document.getElementById('serverstatext').style.color='#ff3a3a';
            document.getElementById('serverstatext').innerHTML='伺服器已離線';
            document.getElementById('serverstadetail').innerHTML='&emsp;&emsp;目前沒辦法登入或註冊，但您可以在這個網頁裡面找到一些線上小工具';
        }
    }
}