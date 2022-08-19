<!DOCTYPE html>
<html>
<head>
	<?php
	session_start();
	?>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>content</title>
<link rel="stylesheet" type="text/css" id="applicationStylesheet" href="/module/contentlist/content.css"/>
<script id="applicationScript" type="text/javascript" src="/module/contentlist/content.js"></script>
</head>
<body>
<div id="content" style="top: 0px;">
	<div id="contentbg">
		<div id="Group" class="">
			<svg class="Rectangle_70">
				
			</svg>
			<div id="Home">
				<div id="Group_u" class="">
					<svg class="Rectangle_2">
						<rect id="Rectangle_2" rx="0" ry="0" x="0" y="0" width="225" height="70">
						</rect>
					</svg>
					<div id="Home_w">
						<a href="/"><span>Home</span></a>
					</div>
				</div>
			</div>
			<div id="about">
				<div id="Group_y" class="">
					<svg class="Rectangle_4">
						<rect id="Rectangle_4" rx="0" ry="0" x="0" y="0" width="155" height="70">
						</rect>
					</svg>
					<div id="About_">
						<a href="#"><span>About</span></a>
					</div>
				</div>
			</div>
			<div id="contact">
				<div id="Group_" class="" >
					<svg class="Rectangle_4_"  onclick="clickcontactwindow()">
						
					</svg>
					<div id="Contact_">
						<a href="#" ><span onclick="clickcontactwindow()">Contact</span></a>
					</div>
				</div>
			</div>
			<?php
				if($_SESSION['login']!=1){
					
					echo("<div id=\"login\">
						<div id=\"Group_ba\" class=\"\">
							<svg class=\"Rectangle_7\">
								<a href=\"/login.php\"><rect id=\"Rectangle_7\" rx=\"0\" ry=\"0\" x=\"0\" y=\"0\" width=\"155\" height=\"70\">
								</rect></a>
							</svg>
							<div id=\"Log_in\">
								<a href=\"/login.php\"><span>Log in</span></a>
							</div>
						</div>
					</div>
					<div id=\"register\">
						<div id=\"Group_bb\" class=\"\">
							<svg class=\"Rectangle_6\">
								<a href=\"/register\"><rect id=\"Rectangle_6\" rx=\"0\" ry=\"0\" x=\"0\" y=\"0\" width=\"155\" height=\"70\">
								</rect></a>
							</svg>
							<div id=\"Register_bc\">
								<a href=\"/register\"><span>Register</span></a>
							</div>
						</div>
					</div>");
				}else{
					echo("<div id=\"login\">
						<div id=\"Group_ba\" class=\"\">
							<svg class=\"Rectangle_7\">
								<a href=\"/account/user.php\"><rect id=\"Rectangle_7\" rx=\"0\" ry=\"0\" x=\"0\" y=\"0\" width=\"155\" height=\"70\">
								</rect></a>
							</svg>
							<div id=\"Log_in\">
								<a href=\"/account/user.php\"><span>Settings</span></a>
							</div>
						</div>
					</div>
					<div id=\"register\">
						<div id=\"Group_bb\" class=\"\">
							<svg class=\"Rectangle_6\">
								<a href=\"/logout.php\"><rect id=\"Rectangle_6\" rx=\"0\" ry=\"0\" x=\"0\" y=\"0\" width=\"155\" height=\"70\">
								</rect></a>
							</svg>
							<div id=\"Register_bc\">
								<a href=\"/logout.php\"><span>Log out</span></a>
							</div>
						</div>
					</div>");
				}
			?>
			
			<div id="allcontent">
				
				<div id="contents" style="z-index: 1;">
					<div id="Group_bg" class="">
						<svg class="Rectangle_3" onclick="clickcontents()">
							<rect id="Rectangle_3" rx="0" ry="0" x="0" y="0" width="155" height="70">
							</rect>
						</svg>
						<div id="Contents_bi">
							<a href="#"><span  onclick="clickcontents()">Contents</span></a>
						</div>
					</div>
				</div>
				
				<div id="toolscontent" style="display: none;">
					<div id="Group_bk" class="">
						<div id="tcfshlibbook">
							<div id="Group_bm" class="">
								<svg class="Rectangle_11">
									<a href='/listurl/randomnumgenerator'><rect id="Rectangle_11" rx="0" ry="0" x="0" y="0" width="300" height="100">
									</rect></a>
								</svg>
								<div id="random_number_generator">
									<a href='/listurl/randomnumgenerator'><span>random number<br/>generator</span></a>
								</div>
							</div>
						</div>
						<div id="numsort">
							<div id="Group_bq" class="">
								<svg class="Rectangle_12">
									<a href='/listurl/scripttosubtitle'><rect id="Rectangle_12" rx="0" ry="0" x="0" y="0" width="300" height="70">
									</rect></a>
								</svg>
								<div id="script_to_subtitle">
									<a href='/listurl/scripttosubtitle'><span>script to subtitle</span></a>
								</div>
							</div>
						</div>
						<div id="Scrtosub">
							<div id="Group_bu" class="">
								<svg class="Rectangle_13">
									<a href='/listurl/numbersort'><rect id="Rectangle_13" rx="0" ry="0" x="0" y="0" width="300" height="70">
									</rect></a>
								</svg>
								<div id="number_sort">
									<a href='/listurl/numbersort'><span>number sort</span></a>
								</div>
							</div>
						</div>
						<div id="randomNG">
							<div id="Group_by" class="">
								<svg class="Rectangle_59">
									<a href="/listurl/tcfsh_lib_book"><rect id="Rectangle_59" rx="0" ry="0" x="0" y="0" width="300" height="100">
									</rect></a>
								</svg>
								<div id="tcfsh_library__seat_booking">
									<a href="/listurl/tcfsh_lib_book"><span>tcfsh library <br/>seat booking</span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="contentinfo1" style="display: none;">
					<div id="Group_b" class="">
						<div id="data">
							<div id="Group_ca" class="">
								<svg class="Rectangle_8">
									<a href="/listurl/tcfsh_lib_book"><rect id="Rectangle_8" rx="0" ry="0" x="0" y="0" width="155" height="70">
									</rect></a>
								</svg>
								<div id="Tools">
									<a href="/listurl/tcircjudge_AC_ans"><span>Data</span></a>
								</div>
							</div>
						</div>
						<div id="teach">
							<div id="Group_cb" class="">
								<svg class="Rectangle_9">
									<a href="/eduindex"><rect id="Rectangle_9" rx="0" ry="0" x="0" y="0" width="155" height="70">
									</rect></a>
								</svg>
								<div id="Teach_ca">
									<a href="/eduindex"><span>Teach</span></a>
								</div>
							</div>
						</div>
						<div id="tools">
							<div id="Group_cc" class="">
								<svg class="Rectangle_10" onclick="clicktoolscontent()">
									<rect id="Rectangle_10" rx="0" ry="0" x="0" y="0" width="155" height="70">
									</rect>
								</svg>
								<div id="Data_ce" onclick="clicktoolscontent()">
									<a href="#"><span>Tools</span></a>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			
			</div>
		</div>
	</div>
	<div id="bugreportwindow">
		<form action="/bugreport/bugreport.php" id="bugreportform" method="post" style="display: none;">
			<div id="bugreporttextborder">
				<textarea name="bugdescription" id="bugreporttext" rows="10" cols="15" placeholder="請描述一下錯誤的情形："></textarea>
			</div>
			<input name="bugpath" type="hidden" value="">
			<img src="/module/contentlist/bug.png" id="bugreportimgin" onclick="clickreportbug()">
			<input type="submit" value="提交錯誤報告" id="bugreportsubmit">
		</form>
		<img src="/module/contentlist/bug.png" id="bugreportimg" onclick="clickreportbug()">
	</div>
	<div id="contactwindow" style="display: none; ">
		<div id="Group_cg" class="">
			<svg class="Rectangle_71">
				<rect id="Rectangle_71" rx="0" ry="0" x="0" y="0" width="1000" height="600">
				</rect>
			</svg>
			<div id="email">
				<div id="Group_cj" class="">
					<svg class="Rectangle_39">
						<rect id="Rectangle_39" rx="0" ry="0" x="0" y="0" width="850" height="200">
						</rect>
					</svg>
					<div id="Email__tseng91301gmailcom">
						<span>Email : tseng91301@gmail.com</span>
					</div>
					<div id="Click_here_to_write_email">
						<a href="mailto:tseng7418@gmail.com?subject=blacktechserver-contact" style="color: white;"><span>Click here to write email</span></a>
					</div>
				</div>
			</div>
			<div id="close">
				<div id="Group_co" class="">
					
					<a href="#"><img id="Image0264" src="/module/contentlist/Image0264.png" onclick="clickcontactwindow()"></a>
						
				</div>
			</div>
			<div id="instagram">
				<div id="Group_cs" class="">
					<svg class="Rectangle_40">
						<rect id="Rectangle_40" rx="0" ry="0" x="0" y="0" width="250" height="300">
						</rect>
					</svg>
					<a href="https://www.instagram.com/tseng71301/" target="_blank"><img id="tseng71301_qr" src="/module/contentlist/tseng71301_qr.png"></a>
						
					<div id="Instagram_cv">
						<span>Instagram</span>
					</div>
				</div>
			</div>
			<div id="facebook">
				<div id="Group_cx" class="">
					<svg class="Rectangle_41">
						<rect id="Rectangle_41" rx="0" ry="0" x="0" y="0" width="250" height="300">
						</rect>
					</svg>
					<a href="https://www.facebook.com/profile.php?id=100049582960183" target="_blank"><img id="qrcode_wwwfacebookcom" src="/module/contentlist/qrcode_wwwfacebookcom.png" ></a>
						
					<div id="Facebook_c">
						<span>Facebook</span>
					</div>
				</div>
			</div>
			<div id="facebook_c">
				<div id="Group_c" class="">
					<svg class="Rectangle_41_c">
						<rect id="Rectangle_41_c" rx="0" ry="0" x="0" y="0" width="250" height="300">
						</rect>
					</svg>
					<div id="Github">
						<span>Github</span>
					</div>
					<a href="https://github.com/tseng91301?tab=repositories" target="_blank"><img id="qrcode_githubcom" src="/module/contentlist/qrcode_githubcom.png" ></a>
						
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>