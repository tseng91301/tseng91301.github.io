<!DOCTYPE html>
<html>
        <head>
            <meta charset="utf-8"/>
	        <title>手機建立Kali伺服器教學</title>
	        <link href="/module/style.css" rel="stylesheet" >
			
        </head>
        <body>
			
            <div class="wrap">
                <div class="header">
                    <h1>Android手機建立Kali伺服器教學(root)</h1>
                </div>
                <div class="content">
                    <div class="left" style="height:4885px"></div>
                    <div class="center">
					<?php
						//echo($_COOKIE["passstr"]);
						session_start();
						if($_SESSION['login']==2){
							setcookie("refl","/eduindex/severbuild/",time()+360,"/");
							//echo("<meta http-equiv=\"refresh\" content=\"0;/login.php\">");
						}else{
							
								
								echo("<h2>0.重要須知:</h2>
									<p style=\"font-size: 32px\">&emsp;&emsp;本教學致力於使大眾認識伺服器的建構，請勿利用其作為非法用途，否則後果自負!!</p>
									<h3>目錄&快速跳轉</h3>
									<ol start=\"1\" type=\"1\">
										<li><a href=\"#t1\">準備裝置&資源</a></li>
										<li><a href=\"#t2\">系統安裝</a></li>
										<li><a href=\"#t3\">基本設定</a></li>
										<li><a href=\"#t4\">網站伺服器搭建</a></li>
									</ol>
									<div id=\"t1\">
										<h3>準備裝置&資源</h3>
										<h4>硬體方面:</h4>
										<ol start=\"1\" type=\"I\" style=\"font-size: 25px;\">
											<li style=\"color: red;\"><strong>一支舊的Android手機</strong></li>
											<li style=\"color: red;\">一台路由器+速度還行的網路連線</li>
											<li style=\"color: red;\"><strong>一台電腦</strong></li>
											<li>一條電腦對手機的傳輸線</li>
											<li>一顆沒在使用的充電器+充電線</li>
											<li>一張micro SD記憶卡</li>
										</ol>
										<h4>軟體方面:</h4>
										<ol start=\"1\" type=\"I\" style=\"font-size: 25px;\">
											<li>KALI nethunter for mobile phones <a href=\"https://kali.download/nethunter-images/kali-2022.1/nethunter-2022.1-generic-arm64-kalifs-full.zip\" target=\"_blank\">arm64下載</a>&emsp;<a href=\"https://www.kali.org/get-kali/#kali-mobile\" target=\"_blank\">官方網站</a></li>
											<li>Android手機adb工具&emsp;<a href=\"https://developer.android.com/studio/releases/platform-tools\" target=\"_blank\">官方下載連結</a></li>
											<li>supersu安裝包&emsp;<a href=\"./UPDATE-SuperSU-v2.82-20170526223454.zip\" target=\"_blank\">下載</a></li>
											<li>KWS web server for android&emsp;<a href=\"./kWS Android Web Server_v1.7.6_apkpure.com.apk\">下載</a></li>
											<li>Root explorer(因為這個版本其實是付費的，所以我無法將檔案放上來，如果有需要(破解版XD)就自己google吧~)</li>
										</ol>
									
									</div>
									<div id=\"t2\">
										<h3>系統安裝</h3>
									
										<div id=\"t2-1\" style=\"font-size: 25px;\">
											<h4>1. 為android手機刷上root</h4>
											<p style=\"font-size: 20px;\">
												&emsp;&emsp;如果您的手機已root過可<a href=\"#t2-2\">跳過此步驟</a>
											</p>
											<p style=\"font-size: 25px;\">
									
											</p>
										</div>
										
										<div id=\"t2-2\" style=\"font-size: 25px;\">
											<h4>2. 刷入nethunter安裝包</h4>
											<p>1. 將KALI nethunter安裝包存入手機內部儲存空間或外接SD卡</p>
											<p>2. 將手機重開機至recovery模式</p>
											<p>adb指令如下:</p>
											<p style=\"font-size: 20px;background-color: rgb(180, 255, 110);\">&emsp;adb reboot recovery</p>
											<p>3. 進到TWRP主頁後，選擇install(也可先備份原本數據，選擇backup)</p>
											<p>4. 選擇好文件後，右滑開始安裝</p>
											<p style=\"color: red;\">&emsp;&emsp;安裝時請確保手機有電或在充電狀態，否則非常危險!!!</p>
											<p>5. 安裝好之後點擊'reboot system'就會重新開機了(這時候開機Logo很酷)</p>
										</div>
									</div>
									<div id=\"t3\">
										<h3>基本設定</h3>
										<div id=\"t3-1\" style=\"font-size: 25px;\"	>
											<h4>關於Kali linux in chroot虛擬機這檔事</h4>
											<p>&emsp;&emsp;痾對，其實雖然這些東西真的是刷進去的，但也只是權限比較大的虛擬機罷了...有一些指令(像systemctl這種)會被限制，但其實不怎麼影響目前使用啦!而且等一下還會有連接adb的教學，想完全控制手機不是問題啦~</p>
											<h4>1. 認識一下?</h4>
											<p>&emsp;&emsp;再重新開機後，會發現手機中會多出幾個應用程式，這裡會需要用到的是'Nethunter命令列'，所有的應用程式說明如下:</p>
											<ol start=\"1\" type=\"1\" style=\"font-size: 22px;\">
												<li>NetHunter:管理Kali虛擬機的設定</li>
												<li>NetHunter命令列:Kali虛擬終端機工具</li>
												<li>F-droid:類似商店的東西(?)</li>
												<li>NetHunter Kex:VNC客戶端</li>
											</ol>
											
										</div>	
										<div id=\"t3-2\" style=\"font-size: 25px;\"		>
											<h4>2. 開啟ssh,vnc服務</h4>
											<p>i. 開啟Nethunter命令列，選擇'Kali'，就會看到Kali系統的經典命令列，旁邊顯示資料路徑。對了，在這之前，先去確認一下自己
												有沒有連接到WiFi，然後去設定看一下自己的ip位址，等一下要用到。弄好之後，輸入以下指令:
											</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;service ssh start</p>
											<p>這時候如果沒有跳錯誤訊息的話就代表成功了!現在打開電腦，連線到跟手機一樣的WiFi，打開命令提示字元(或terminal)，輸入:</p>
											<p style=\"font-size: 20px; background-color: rgb(180, 255, 110);\">&emsp;ssh -p 22 root@[您的ip位址]</p>
											<p>第一次連線會出現警告信息，輸入'yes'即可</p>
											<p>這時候需要輸入密碼，如果沒有自己改密碼的話就用Kali root的預設密碼'toor'，就會進到跟剛剛在手機看到一模一樣的畫面</p>
											<p>ii. 開啟vnc server，這是這個虛擬機德圖形化介面，用這個有時候會比較方便管理(例如scrcpy)，在終端機裡輸入:</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;vncserver -localhost no -p :1</p>
											<p>P.S第一次設定時需要設定密碼，就打一個自己喜歡的吧~&emsp;&emsp;這時候電腦上會需要vnc viewer來與手機圖形介面連線，如果電腦沒有的話推薦這款程式
												—vnc viewer，<a href=\"https://www.realvnc.com/en/connect/download/viewer/\" target=\"_blank\">官方下載連結</a>。在新建vnc server時，輸入的資料如下:
											
											</p>
											<ol start=\"1\" type=\"a\">
												<li>ip位址:[您剛剛在手機看到的ip位址]:5901(或是&emsp;ip位址:[您剛剛在手機看到的ip位址] port:5901)</li>
												<li>密碼:[您剛剛設定的密碼]</li>
											</ol>
											<p>成功登入後就會看到虛擬機的圖像介面瞜~(以root身分登入)</p>
										</div>	
										<div id=\"t3-3\" style=\"font-size: 25px;\">
											<h4>3. 連結Android adb</h4>
											<p>i. 手機開啟設定-關於-軟體資訊-更多-建置號碼點七次(每個廠牌可能不同，本來就有開發人員選項的可以不用這麼做)
												，回到設定主畫面，點擊開發人員選項，將裡面的USB偵錯模式打開。
											</p>
											<p>ii. 將電腦上的platform tools解壓縮並打開此資料夾，在檔案總管上面的路徑刪掉，並輸入'cmd'按Enter，打開命令提示字元，將
												手機用USB連接到電腦，這時候手機姐所螢幕後會跳出提示，點永遠允許，確定就會進入USB偵錯模式，可以在電腦cmd上面輸入'adb devices'確認。
											</p>
											<p>iii. 在電腦上輸入:</p>
											<p style=\"font-size: 20px; background-color: rgb(180, 255, 110);\">&emsp;adb tcpip 5555</p>
											<p>這時候手機adb會斷線是正常的，不需要慌張，這時候也可以把數據線收起來，用不到了~</p>
											<p>iv. 回到剛剛的ssh終端機，輸入:</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;apt-get install adb</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;apt-get install scrcpy</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;apt-get install screen</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;screen</p>
											<p>按一下空白鍵</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;adb connect 127.0.0.1:5555</p>
											<p>這時候手機也會跳題示，跟剛剛一樣的做法再做一次，如果終端機提示失敗的話就:</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;adb disconnect</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;adb connect 127.0.0.1:5555</p>
											<p>只要看到connect等文字就代表成功連接，這時候可以打:</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;adb shell</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;su</p>
											<p>就會進到手機本身的shell了(全權掌控手機XD)</p>
											<p>v. 進到伺服器的vnc介面，打開裡面的終端機，並在裡面輸入:</p>
											<p style=\"font-size: 20px; background-color: rgb(131, 218, 255);\">&emsp;scrcpy</p>
											<p>就可以控制手機螢幕了!</p>
										</div>	
									</div>
									<div id=\"t4\" style=\"font-size: 25px;\">
										<h3>網站伺服器搭建</h3>
										<div id=\"t4-1\">
											<p>i. 設法將此程式安裝包傳到手機裡面(內部儲存空間)，並在ssh終端機上輸入:</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;cd /sdcard/[安裝包路徑]</p>
											<p style=\"font-size: 20px; background-color: lightpink;\">&emsp;adb install [安裝包名稱]</p>
											<p>ii. 安裝好之後打開應用程式，點擊右上角-settings-，home directory:/sdcard/[首頁位置]，port:8080</p>
											<p>iii. 回上一頁，按下'start server'就會開始運作</p>
											<p>iv. 到電腦瀏覽器輸入'[你的ip位址]:8080'就會看到你做的網頁啦~</p>
										</div>							
									</div>
									<p style=\"font-size: 20px;\"><a href=\"#footer\">滑至底部</a></p>");
							
						}
					?>	
					</div>
                </div>
                
                <div class="clearfix"></div>
                <div class="footer" id="footer">
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

	