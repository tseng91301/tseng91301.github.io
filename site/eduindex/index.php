
<!DOCTYPE html>
<html>
	
        <head>
            <meta charset="utf-8"/>
	        <title>教學文首頁</title>
	        <link href="/module/style.css" rel="stylesheet" >
			
        </head>
        <body>
			
            <div class="wrap">
                <div class="header">
                    <h1>歡迎來到Blacktech server的教學網頁</h1>
                </div>
                <div class="content">
                    <div class="left">
						
                    </div>
                    <div class="center">
						<?php
                            //echo($_COOKIE["passstr"]);
                            session_start();
                            if($_SESSION['login']==2){
                                setcookie("refl","",time()-3600);
                                setcookie("refl","/eduindex",time()+3600,"/");
                                //echo("<meta http-equiv=\"refresh\" content=\"0;/login.php\">");
                                
                            }else{
                                    
                                    echo("<h2>Blacktech server的教學網頁目錄</h2>
                                            <ol start=\"1\" type=\"I\">
                                            <li>程式設計</li>
                                            <li>伺服器管理&架設</li>
                                            <ol start=\"1\" type=\"1\">
                                                <li><a href=\"/eduindex/serverbuild/\" target=\"_blank\">Android手機建立Kali伺服器</a></li>
                                            </ol>
                                        
                                        </ol>");
                                
                            }
                        ?>
					</div>
                </div>
                
                <div class="clearfix"></div>
                <div class="footer">
				</div>
            </div>
			<script src="/module/jquery.min.js"></script>
			<script>
				$(function(){
					/*公共部分
					 * 導航欄
					 * footer CopyRight
					 */
					$(".left").load("/module/content.php");
					$(".footer").load("/module/footer.html");
					
				});
			</script>
        </body>
</html>