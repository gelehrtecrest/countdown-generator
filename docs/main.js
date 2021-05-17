(function($){
	// フォントロード
	WebFont.load({
		custom: {
			families: ['Norvrandt','Norvrandt5','Kugane', '@Kugane','NieR','Eorzea', 'Allagan', 'Near-Eastern', 'Eden', 'Eorzea-Blackletter','TrainOne','Stick','RocknRollOne','ReggaeOne','RampartOne','KleeOne','KleeOne-SemiBold','DotGothic16','EorzeaDot','KuganeDot','NorvrandtDot','NorvrandtDot5','EorzeaCursive'],
			urls: ['style.css']
		},
		loading: function() {
			console.log('loading');
		},
		active: function() {
			console.log('active');
		},
		inactive: function() {
			console.log('inactive');
		},
		fontloading: function(familyName, fvd) {
			console.log('fontloading', familyName, fvd);
		},
		fontactive: function(familyName, fvd) {
			console.log('fontactive', familyName, fvd);
		},
		fontinactive: function(familyName, fvd) {
			console.log('fontinactive', familyName, fvd);
		}
	});

	//画像関連
	var img;
	var imgB;
	var imgC;
	var img2;
	var guidelineImage;
	var stage;

	const font_default = "/1.5 'ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_norvrandt = "/1.5 'Norvrandt','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_norvrandt5 = "/1.5 'Norvrandt5','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_kugane = "/1.5 'Kugane','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_kugane_tate = "/1.5 '@Kugane','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_nier = "/1.5 'NieR','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_eorzea = "/1.5 'Eorzea','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_near_eastern = "/1.5 'Near-Eastern','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_ff14_figure = "/1.5 'Eden','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_eorzea_blackletter = "/1.5 'Eorzea-Blackletter','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_eorzea_dot = "/1.5 'EorzeaDot','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_eorzea_cursive = "/1.5 'EorzeaCursive','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_kugane_dot = "/1.5 'KuganeDot','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_norvrandt_dot = "/1.5 'NorvrandtDot','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_norvrandt5_dot = "/1.5 'NorvrandtDot5','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";

	// fontworks様のフォント
	const font_trainone = "/1.5 'TrainOne','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_stick = "/1.5 'Stick','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_rokenrollone = "/1.5 'RocknRollOne','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_reggaeone = "/1.5 'ReggaeOne','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_rampartone = "/1.5 'RampartOne','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_kleeone = "/1.5 'KleeOne','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_kleeonesemibold = "/1.5 'KleeOne-SemiBold','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";
	const font_dotgothic16 = "/1.5 'DotGothic16','ヒラギノ明朝 ProN','Hiragino Mincho ProN','Sawarabi Mincho','Noto Serif CJK JP','MS PMincho',serif";

	const style_normal = "normal";
	const style_bold = "bold";
	const style_italic = "italic";


	//画像ロード
	function loadImage (imageData, logoImageData, guidelineflag){
		//画像のロード
		//画像が選択されている時のみ合成
		if(imageData !== null) {
			var baseImg2 = new Image();
			baseImg2.src = imageData;
			img2 = new createjs.Bitmap(baseImg2);
			$('#result').attr({
				'width': baseImg2.width,
				'height': baseImg2.height
			});
		}

		//ガイドラインイメージ再読み込み
		if(guidelineImage !== null){
			console.log("再読み込み");
			var baseImg2 = new Image();
			baseImg2.src = $('#guidelineurl').val()
			guidelineImage = new createjs.Bitmap(baseImg2);
		}

		stage = new createjs.Stage('result');
	}

	//ロゴを合成する処理
	function genImage (imageIni, imageIniB, imageIniC, imageIniGuideline, guidelineflag){
		//ステージ生成
		stage.addChild(img2);

		if(guidelineImage != null && guidelineflag){
			try{
				guidelineImage = modifyImage(guidelineImage, imageIniGuideline);
				stage.addChild(guidelineImage);
			} catch(e){
				console.log(e);
			}
		}

		try{
			imgC = modifyFont(imgC, imageIniC, "C");
			stage.addChild(imgC);
		} catch(e){
		}
		try{
			imgB = modifyFont(imgB, imageIniB, "B");
			stage.addChild(imgB);
		} catch(e){
		}
		try{
			console.log("test");
			img = modifyFont(img, imageIni, "");
			stage.addChild(img);
		} catch(e){
			console.log(e);
		}
		

		//ステージ反映
		stage.update();
	}
	function modifyFont(img, imageIni, flag){
		// 文字合成
		var content = $('#text'+flag).val();
		img = new createjs.Text(content);
		img.color = $('#color'+flag).val();
		img.font = $('#style'+flag).val() + ' ' + $('#px'+flag).val() + $('#font'+flag).val();

		//合成画像の設定
		//回転
		img.rotation = imageIni.rotation;
		//回転の中心は、画像の中央
		img.regX = img.getBounds().width / 2;
		img.regY = img.getBounds().height / 2;
		//上下は10ピクセルごと移動
		img.x = imageIni.xPos * 10;
		img.y = imageIni.yPos * 10;
		//拡縮は10％ずつ
		img.scaleX = img.scaleX * (1 + imageIni.Scale / 10);
		img.scaleY = img.scaleY * (1 + imageIni.Scale / 10);

		//透明化
		img.alpha = imageIni.alpha;	
	
		//影
		//影をつけるかチェック
		if($("#color_shadow_flag"+flag).prop("checked")){
			try{
				var shadow = new createjs.Shadow($('#color_shadow'+flag).val(), 4, 4, imageIni.shadow);
				img.shadow = shadow;
			} catch(e){
			}
		}

		// 縁取り
		// 縁取りで描くかチェック
		if($("#color_outline_flag"+flag).prop("checked")){
			img.outline = 1;
		}

		return img;
	}
	function modifyImage(img, imageIni){
		$('#alert').text('合成作業開始です ステップ 1');
		//合成画像の設定
		//回転
		img.rotation = imageIni.rotation;
		//回転の中心は、画像の中央
		img.regX = img.getBounds().width / 2;
		img.regY = img.getBounds().height / 2;
		$('#alert').text('合成作業開始です ステップ 2');
	
		//上下は10ピクセルごと移動
		// 中央点からの補正
		//拡縮に二乗で補正。縮小するときに一気に縮小しないように
		var scale = 1 + imageIni.Scale / 50;
		if(scale > 0 || scale <= 1){
			scale = scale * scale;
		} else if(scale <= 0){
			scale = 0;
		}
		img.x = imageIni.xPos * 10 + img.getBounds().width / 2 * scale;
		img.y = imageIni.yPos * 10 + img.getBounds().height / 2 * scale;
		$('#alert').text('合成作業開始です ステップ 3');

		img.scaleX = img.scaleX * scale;
		img.scaleY = img.scaleY * scale;
		$('#alert').text('合成作業開始です ステップ 4');


		//透明化
		img.alpha = imageIni.alpha;	
		$('#alert').text('合成作業開始です ステップ 5');

		//上下左右反転
		img.scaleX = img.scaleX * imageIni.ScaleXFlag;
		img.scaleY = img.scaleY * imageIni.ScaleYFlag;

		return img;
	}

	$(function(){
		//設定のデフォルト値
		$('#text').val('文字入れジェネレータ');
		$('#color').val('white');
		$('#color_shadow').val('#cb8a00');
		$('#style').val(style_bold);
		$('#font').val(font_default);
		$('#px').val('75px');

		$('#textB').val('');
		$('#colorB').val('white');
		$('#color_shadowB').val('#cb8a00');
		$('#styleB').val(style_bold);
		$('#fontB').val(font_default);
		$('#pxB').val('75px');

		$('#textC').val('');
		$('#colorC').val('white');
		$('#color_shadowC').val('#cb8a00');
		$('#styleC').val(style_bold);
		$('#fontC').val(font_default);
		$('#pxC').val('75px');

		$('#guidelineurl').val('./guideline.svg');

		//読込画像のオブジェクト
		var imageIni = {
			xPos : 80,
			yPos : 20,
			Scale : 8,
			rotation : 0,
			alpha : 1.0,
			shadow : 40,
			imageData : null,
			logoImageData : null,
			resetImage : function(){
				this.xPos = 8;
				this.yPos = 8;
				this.Scale = 8;
			},
			makeImage : function(guidelineflag){
				if(this.imageData !== null) {
					loadImage(this.imageData, this.logoImageData, guidelineflag);
					genImage(this, imageIniB, imageIniC, imageIniGuideline, guidelineflag);
				}
			}
		};
		var imageIniB = {
			xPos : 80,
			yPos : 20,
			Scale : 8,
			rotation : 0,
			alpha : 1.0,
			shadow : 40,
			imageData : null,
			logoImageData : null,
			resetImage : function(){
				this.xPos = 8;
				this.yPos = 8;
				this.Scale = 8;
			},
			makeImage : function(guidelineflag){
				if(this.imageData !== null) {
					loadImage(this.imageData, this.logoImageData, guidelineflag);
					genImage(imageIni, this, imageIniC, imageIniGuideline, guidelineflag);
				}
			}
		};
		var imageIniC = {
			xPos : 80,
			yPos : 20,
			Scale : 8,
			rotation : 0,
			alpha : 1.0,
			shadow : 40,
			imageData : null,
			logoImageData : null,
			resetImage : function(){
				this.xPos = 8;
				this.yPos = 8;
				this.Scale = 8;
			},
			makeImage : function(guidelineflag){
				if(this.imageData !== null) {
					loadImage(this.imageData, this.logoImageData, guidelineflag);
					genImage(imageIni, imageIniB, this, imageIniGuideline, guidelineflag);
				}
			}
		};
		var imageIniGuideline = {
			xPos : -20,
			yPos : -105,
			Scale : 48,
			rotation : 0,
			alpha : 0.0,
			ScaleXFlag : 1.0,
			ScaleYFlag : 1.0,
			imageData : null,
			resetImage : function(){
				this.xPos = -20;
				this.yPos = -105;
				this.Scale = 48;
				this.rotation = 0;
				this.alpha = 1.0;
			},
		};

		//get情報
		var url = location.href;
		var parameters = url.split('?');
		var queries = (parameters[1] || 'dummy=dummy').split('&');
		i = 0;

		console.log(queries);
		imageIni  = getqueries(queries, imageIni, '');
		imageIniB = getqueries(queries, imageIniB, 'B');
		imageIniC = getqueries(queries, imageIniC, 'C');
		//getqueries(queries, imageIni, '');
		//getqueries(queries, imageIniB, 'B');
		//getqueries(queries, imageIniC, 'C');
/*
		function getqueries(queries, imageIni, t){
			for(i; i < queries.length; i ++) {
				var t = queries[i].split('=');
				if(t['0'] == 'logourl' + t){
					$('#logourl' + t).val(decodeURIComponent(t['1']));
				} else if(t['0'] == 'xpos' + t){
					imageIni.xPos = parseFloat(t['1']);
				} else if(t['0'] == 'ypos' + t){
					imageIni.yPos = parseFloat(t['1']);
				} else if(t['0'] == 'scale' + t){
					imageIni.Scale = parseFloat(t['1']);
				} else if(t['0'] == 'text' + t){
					$('#text' + t).val(decodeURIComponent(t['1']));
				} else if(t['0'] == 'color' + t){
					$('#color' + t).val(decodeURIComponent(t['1']));
				} else if(t['0'] == 'shadow' + t){
					$('#color_shadow' + t).val(decodeURIComponent(t['1']));
				} else if(t['0'] == 'shadowflag' + t){
					if(decodeURIComponent(t['1']) == 1){
						$('#color_shadow_flag' + t).prop('checked', true);
					} else {
						$('#color_shadow_flag' + t).prop('checked', false);
					}
				} else if(t['0'] == 'outlineflag' + t){
					if(decodeURIComponent(t['1']) == 1){
						$('#color_outline_flag' + t).prop('checked', true);
					} else {
						$('#color_outline_flag' + t).prop('checked', false);
					}
				} else if(t['0'] == 'style' + t){
					$('#style' + t).val(decodeURIComponent(t['1']));
				} else if(t['0'] == 'font' + t){
					$('#font' + t).val(decodeURIComponent(t['1']));
				} else if(t['0'] == 'px' + t){
					$('#px' + t).val(decodeURIComponent(t['1']));
				} else if(t['0'] == 'title'){
					$('title').text(decodeURIComponent(t['1']));
					$('h1').text(decodeURIComponent(t['1']));
				} else if(t['0'] == 'comment'){
					$('#comment').text(decodeURIComponent(t['1']));
				}
			}
			return imageIni;
		}
*/

		//イベント関連処理
		//画像読込
		$('#getfile').change(function (){
			//読み込み
			var fileList =$('#getfile').prop('files');
			var reader = new FileReader();
			reader.readAsDataURL(fileList[0]);

			//読み込み後
			$(reader).on('load',function(){
				$('#preview').prop('src',reader.result);
				imageIni.imageData = reader.result;
			});
		});

		$(document).on('input', '.input', function() {
			//input操作時は再描画を行う
			if(imageIni.imageData !== null){
				imageIni.makeImage(true);
			}else{
				$('#alert').text('スクリーンショットを入力してから画像生成を行ってください');
			}

			//input操作時はURLを再生成する
			write_settingurl(imageIni);
		});
		var editgenerator_button = "";
		var flag = 0;
		// 加速機能
		const boost_limit = 5;
		const boost_value = 3;
		const boost_not_value = 1;
		var boost_count = 0;
		const boost_id_default = "boost";
		var boost_id = boost_id_default;
		function is_longpress(id){
			if(boost_id == id || pushing_flag == 0){
				return true;
			}
			boost_id = id;
			return false;
		}
		function boost(id){
			if(boost_id === id){
				boost_count += 1;
			} else {
				boost_count = 0;
				boost_id = id;
			}
			if(boost_count >= boost_limit){
				return boost_value;
			}
			return boost_not_value;
		}
		function editgenerator(id){
			if(flag == 0){
				flag = 1;
				return;
			} else {
				flag = 0;
			}
			if (id === 'update'){
			}else if (id === 'up'){
				imageIni.yPos -= 1*boost(id);
			}else if (id === 'down'){
				imageIni.yPos += 1*boost(id);
			}else if (id === 'left'){
				imageIni.xPos -= 1*boost(id);
			}else if (id === 'right') {
				imageIni.xPos += 1*boost(id);
			}else if (id === 'zoomin') {
				imageIni.Scale += 1*boost(id);
			}else if (id === 'zoomout') {
				imageIni.Scale -= 1*boost(id);
			}else if (id === 'rotation_r') {
				imageIni.rotation += 7.5*boost(id);
			}else if (id === 'rotation_l') {
				imageIni.rotation -= 7.5*boost(id);
			}else if (id === 'alpha_up') {
				imageIni.alpha += 0.1*boost(id);
				if(imageIni.alpha >= 0.9){
					imageIni.alpha = 1.0;
					$('#alpha_up').prop("disabled", true);
				}
				$('#alpha_down').prop("disabled", false);
			}else if (id === 'alpha_down') {
				imageIni.alpha -= 0.1*boost(id);
				if(imageIni.alpha <= 0.1){
					imageIni.alpha = 0.0;
					$('#alpha_down').prop("disabled", true);
				}
				$('#alpha_up').prop("disabled", false);
			}else if (id === 'reset'){
				imageIni.resetImage();
				boost(boost_id_default);
				$('#alpha_up').prop("disabled", true);
				$('#alpha_down').prop("disabled", false);
			}else if (id === 'upB'){
				imageIniB.yPos -= 1*boost(id);
			}else if (id === 'downB'){
				imageIniB.yPos += 1*boost(id);
			}else if (id === 'leftB'){
				imageIniB.xPos -= 1*boost(id);
			}else if (id === 'rightB') {
				imageIniB.xPos += 1*boost(id);
			}else if (id === 'zoominB') {
				imageIniB.Scale += 1*boost(id);
			}else if (id === 'zoomoutB') {
				imageIniB.Scale -= 1*boost(id);
			}else if (id === 'rotation_rB') {
				imageIniB.rotation += 7.5*boost(id);
			}else if (id === 'rotation_lB') {
				imageIniB.rotation -= 7.5*boost(id);
			}else if (id === 'alpha_upB') {
				imageIniB.alpha += 0.1*boost(id);
				if(imageIniB.alpha >= 0.9){
					imageIniB.alpha = 1.0;
					$('#alpha_upB').prop("disabled", true);
				}
				$('#alpha_downB').prop("disabled", false);
			}else if (id === 'alpha_downB') {
				imageIniB.alpha -= 0.1*boost(id);
				if(imageIniB.alpha <= 0.1){
					imageIniB.alpha = 0.0;
					$('#alpha_downB').prop("disabled", true);
				}
				$('#alpha_upB').prop("disabled", false);
			}else if (id === 'resetB'){
				imageIniB.resetImage();
				boost(boost_id_default);
				$('#alpha_upB').prop("disabled", true);
				$('#alpha_downB').prop("disabled", false);
			}else if (id === 'upC'){
				imageIniC.yPos -= 1*boost(id);
			}else if (id === 'downC'){
				imageIniC.yPos += 1*boost(id);
			}else if (id === 'leftC'){
				imageIniC.xPos -= 1*boost(id);
			}else if (id === 'rightC') {
				imageIniC.xPos += 1*boost(id);
			}else if (id === 'zoominC') {
				imageIniC.Scale += 1*boost(id);
			}else if (id === 'zoomoutC') {
				imageIniC.Scale -= 1*boost(id);
			}else if (id === 'rotation_rC') {
				imageIniC.rotation += 7.5*boost(id);
			}else if (id === 'rotation_lC') {
				imageIniC.rotation -= 7.5*boost(id);
			}else if (id === 'alpha_upC') {
				imageIniC.alpha += 0.1*boost(id);
				if(imageIniC.alpha >= 0.9){
					imageIniC.alpha = 1.0;
					$('#alpha_upC').prop("disabled", true);
				}
				$('#alpha_downC').prop("disabled", false);
			}else if (id === 'alpha_downC') {
				imageIniC.alpha -= 0.1*boost(id);
				if(imageIniC.alpha <= 0.1){
					imageIniC.alpha = 0.0;
					$('#alpha_downC').prop("disabled", true);
				}
				$('#alpha_upC').prop("disabled", false);
			}else if (id === 'resetC'){
				imageIni.resetImage();
				boost(boost_id_default);
				$('#alpha_upC').prop("disabled", true);
				$('#alpha_downC').prop("disabled", false);
			}else if (id === 'guide'){
				console.log("guide")
				imageIniGuideline.alpha = 1.0;
			}else if (id === 'unguide'){
				imageIniGuideline.alpha = 0.0;
			}else if (id === 'upG'){
				imageIniGuideline.yPos -= 1*boost(id);
			}else if (id === 'downG'){
				imageIniGuideline.yPos += 1*boost(id);
			}else if (id === 'leftG'){
				imageIniGuideline.xPos -= 1*boost(id);
			}else if (id === 'rightG') {
				imageIniGuideline.xPos += 1*boost(id);
			}else if (id === 'zoominG') {
				imageIniGuideline.Scale += 1*boost(id);
			}else if (id === 'zoomoutG') {
				imageIniGuideline.Scale -= 1*boost(id);
			}else if (id === 'rotation_rG') {
				imageIniGuideline.rotation += 7.5*boost(id);
			}else if (id === 'rotation_lG') {
				imageIniGuideline.rotation -= 7.5*boost(id);
			}else if (id === 'upsidedownG') {
				//長押しで反応しないように
				if(!is_longpress(id)){
					imageIniGuideline.ScaleYFlag = imageIniGuideline.ScaleYFlag * (-1.0);
					//ガイドラインの画像ずれ修正
					if(imageIniGuideline.ScaleYFlag > 0){
						imageIniGuideline.yPos += 5;
					} else {
						imageIniGuideline.yPos -= 5;
					}
				}
			}else if (id === 'leftsiderightG') {
				if(!is_longpress(id)){
					imageIniGuideline.ScaleXFlag = imageIniGuideline.ScaleXFlag * (-1.0);
				}
			}else if (id === 'dl'){
				return;
			}

			//画像操作時は再描画を行う
			if(imageIni.imageData !== null){
				$('#alert').text('合成作業開始中です。');
				imageIni.makeImage(true);
				$('#alert').text('合成完了です！');
			}else{
				$('#alert').text('スクリーンショットを入力してから画像生成を行ってください');
			}

			//画面操作時はURLを再生成する
			//write_settingurl(imageIni);
		}
		//$('.btn').on('click', function(e){
		//	editgenerator_button = e.target.id;
		//	editgenerator(editgenerator_button);
		//});

		var pushing_flag = 0;
		var mouse_push_hold = function(){
			editgenerator(editgenerator_button);
			if( pushing_flag == 1 ){
				setTimeout(mouse_push_hold, 100);
			}
		};

		// PC用
		$(".editgenerator").mousedown(function(e){
			editgenerator_button = e.target.id;
			pushing_flag = 1;
			setTimeout(mouse_push_hold, 1);
			return false;
		}).mouseup(function(){
			pushing_flag = 0;
			clearTimeout(mouse_push_hold);
			boost(boost_id_default);
		}).mouseleave(function(){
			pushing_flag = 0;
			clearTimeout(mouse_push_hold);
			boost(boost_id_default);
		}).mouseover(function(){
			pushing_flag = 0;
			clearTimeout(mouse_push_hold);
		});

		//スマホ用
		$(".editgenerator").bind('touchstart', function(e){
			editgenerator_button = e.target.id;
			pushing_flag = 1;
			setTimeout(mouse_push_hold, 1);
			return false;
		});
		$(".editgenerator").bind('touchend', function(e){
			pushing_flag = 0;
			boost(boost_id_default);
			return false;
		});




		$('input[name=logo]').click(function() {
			//チェックボックス操作時は再描画を行う
			if(imageIni.imageData !== null){
				imageIni.makeImage(true);
			}else{
				$('#alert').text('スクリーンショットを入力してから画像生成を行ってください');
			}

			//チェックボックス操作時はURLを再生成する
			write_settingurl(imageIni);
		});

		//初回URL生成
		//write_settingurl(imageIni);
		//URLコピー
		geturl(imageIni, imageIniB, imageIniC);

		//Canvas Download
		$('#btnDownload').on("click", function() {
			$('#alert').text('ダウンロード ボタンクリック');
			//ガイドライン抜きの画像を生成
			imageIni.makeImage(false);
			//if($('input[name=logo]:checked').val() === 'local'){
				DownloadStart();
			//} else if($('input[name=logo]:checked').val() === 'local_white'){
			//	DownloadStart();
			//} else {
			//	alert('ロゴがURL指定のため、ダウンロードボタンは使用できません。')
			//}
			$('#alert').text('ダウンロード処理終了');
		});
		$('#btnNewWindow').on("click", function() {
			//ガイドライン抜きの画像を生成
			imageIni.makeImage(false);
			NewWindow();
		});
		// 詳細設定の開閉
		var setting_more_flag = false;
		$('#setting_more_btn').click(function () {
			if(setting_more_flag){
				setting_more_flag = false;
		 		$('#setting_more').hide('slow');
				$('#setting_more_btn').text("詳細設定を開く");	
			} else {
				setting_more_flag = true;
					$('#setting_more').show('slow');
				$('#setting_more_btn').text("詳細設定を閉じる");	
			}
		});
		var setting_more_flagB = false;
		$('#setting_more_btnB').click(function () {
			if(setting_more_flagB){
				setting_more_flagB = false;
		 		$('#setting_moreB').hide('slow');
				$('#setting_more_btnB').text("詳細設定を開く");	
			} else {
				setting_more_flagB = true;
					$('#setting_moreB').show('slow');
				$('#setting_more_btnB').text("詳細設定を閉じる");	
			}
		});
		var setting_more_flagC = false;
		$('#setting_more_btnC').click(function () {
			if(setting_more_flagC){
				setting_more_flagC = false;
		 		$('#setting_moreC').hide('slow');
				$('#setting_more_btnC').text("詳細設定を開く");	
			} else {
				setting_more_flagC = true;
					$('#setting_moreC').show('slow');
				$('#setting_more_btnC').text("詳細設定を閉じる");	
			}
		});

		$('.color_button').click(function(e) {
			var id = e.target.id
			if(id == "color_white"){
				$('#color').val("white");
			} else if(id == "color_blue"){
				$('#color').val("blue");
			} else if(id == "color_green"){
 				$('#color').val("green");
			} else if(id == "color_yellow"){
 				$('#color').val("yellow");
			} else if(id == "color_red"){
 				$('#color').val("red");
			} else if(id == "color_black"){
 				$('#color').val("black");
			}
		});
		$('.color_buttonB').click(function(e) {
			var id = e.target.id
			if(id == "color_whiteB"){
				$('#colorB').val("white");
			} else if(id == "color_blueB"){
				$('#colorB').val("blue");
			} else if(id == "color_greenB"){
 				$('#colorB').val("green");
			} else if(id == "color_yellowB"){
 				$('#colorB').val("yellow");
			} else if(id == "color_redB"){
 				$('#colorB').val("red");
			} else if(id == "color_blackB"){
 				$('#colorB').val("black");
			}
		});
		$('.color_buttonC').click(function(e) {
			var id = e.target.id
			if(id == "color_whiteC"){
				$('#colorC').val("white");
			} else if(id == "color_blueC"){
				$('#colorC').val("blue");
			} else if(id == "color_greenC"){
 				$('#colorC').val("green");
			} else if(id == "color_yellowC"){
 				$('#colorC').val("yellow");
			} else if(id == "color_redC"){
 				$('#colorC').val("red");
			} else if(id == "color_blackC"){
 				$('#colorC').val("black");
			}
		});

		$('.color_shadow_button').click(function(e) {
			var id = e.target.id
			if(id == "color_shadow_white"){
				$('#color_shadow').val("white");
			} else if(id == "color_shadow_blue"){
				$('#color_shadow').val("blue");
			} else if(id == "color_shadow_green"){
 				$('#color_shadow').val("green");
			} else if(id == "color_shadow_yellow"){
 				$('#color_shadow').val("yellow");
			} else if(id == "color_shadow_red"){
 				$('#color_shadow').val("red");
			} else if(id == "color_shadow_black"){
 				$('#color_shadow').val("black");
			}
		});
		$('.color_shadow_buttonB').click(function(e) {
			var id = e.target.id
			if(id == "color_shadow_whiteB"){
				$('#color_shadowB').val("white");
			} else if(id == "color_shadow_blueB"){
				$('#color_shadowB').val("blue");
			} else if(id == "color_shadow_greenB"){
 				$('#color_shadowB').val("green");
			} else if(id == "color_shadow_yellowB"){
 				$('#color_shadowB').val("yellow");
			} else if(id == "color_shadow_redB"){
 				$('#color_shadowB').val("red");
			} else if(id == "color_shadow_blackB"){
 				$('#color_shadowB').val("black");
			}
		});
		$('.color_shadow_buttonC').click(function(e) {
			var id = e.target.id
			if(id == "color_shadow_whiteC"){
				$('#color_shadowC').val("white");
			} else if(id == "color_shadow_blueC"){
				$('#color_shadowC').val("blue");
			} else if(id == "color_shadow_greenC"){
 				$('#color_shadowC').val("green");
			} else if(id == "color_shadow_yellowC"){
 				$('#color_shadowC').val("yellow");
			} else if(id == "color_shadow_redC"){
 				$('#color_shadowC').val("red");
			} else if(id == "color_shadow_blackC"){
 				$('#color_shadowC').val("black");
			}
		});

		$('.font_button').click(function(e) {
			var id = e.target.id
			if(id == "font_default"){
				$('#font').val(font_default);
			} else if(id == "font_norvrandt"){
				$('#font').val(font_norvrandt);
			} else if(id == "font_norvrandt5"){
				$('#font').val(font_norvrandt5);
			} else if(id == "font_kugane"){
				$('#font').val(font_kugane);
				$('#style').val(style_normal);
			} else if(id == "font_kugane_tate"){
				$('#font').val(font_kugane_tate);
				$('#style').val("");
			} else if(id == "font_nier"){
				$('#font').val(font_nier);
			} else if(id == "font_eorzea"){
				$('#font').val(font_eorzea);
			} else if(id == "font_near_eastern"){
				$('#font').val(font_near_eastern);
			} else if(id == "font_ff14_figure"){
				$('#font').val(font_ff14_figure);
			} else if(id == "font_eorzea_blackletter"){
				$('#font').val(font_eorzea_blackletter);
			} else if(id == "font_eorzea_dot"){
				$('#font').val(font_eorzea_dot);
			} else if(id == "font_eorzea_cursive"){
				$('#font').val(font_eorzea_cursive);
			} else if(id == "font_kugane_dot"){
				$('#font').val(font_kugane_dot);
			} else if(id == "font_norvrandt_dot"){
				$('#font').val(font_norvrandt_dot);
			} else if(id == "font_norvrandt5_dot"){
				$('#font').val(font_norvrandt5_dot);
			} else if(id == "font_trainone"){
				$('#font').val(font_trainone);
			} else if(id == "font_stick"){
				$('#font').val(font_stick);
			} else if(id == "font_rokenrollone"){
				$('#font').val(font_rokenrollone);
			} else if(id == "font_reggaeone"){
				$('#font').val(font_reggaeone);
			} else if(id == "font_rampartone"){
				$('#font').val(font_rampartone);
			} else if(id == "font_kleeone"){
				$('#font').val(font_kleeone);
			} else if(id == "font_kleeonesemibold"){
				$('#font').val(font_kleeonesemibold);
			} else if(id == "font_dotgothic16"){
				$('#font').val(font_dotgothic16);
			}
		});


		$('.font_buttonB').click(function(e) {
			var id = e.target.id
			if(id == "font_defaultB"){
				$('#fontB').val(font_default);
			} else if(id == "font_norvrandtB"){
				$('#fontB').val(font_norvrandt);
			} else if(id == "font_norvrandt5B"){
				$('#fontB').val(font_norvrandt5);
			} else if(id == "font_kuganeB"){
				$('#fontB').val(font_kugane);
				$('#styleB').val(style_normal);
			} else if(id == "font_kugane_tateB"){
				$('#fontB').val(font_kugane_tate);
				$('#styleB').val("");
			} else if(id == "font_nierB"){
				$('#fontB').val(font_nier);
			} else if(id == "font_eorzeaB"){
				$('#fontB').val(font_eorzea);
			} else if(id == "font_near_easternB"){
				$('#fontB').val(font_near_eastern);
			} else if(id == "font_ff14_figureB"){
				$('#fontB').val(font_ff14_figure);
			} else if(id == "font_eorzea_blackletterB"){
				$('#fontB').val(font_eorzea_blackletter);
			} else if(id == "font_eorzea_dotB"){
				$('#fontB').val(font_eorzea_dot);
			} else if(id == "font_eorzea_cursiveB"){
				$('#fontB').val(font_eorzea_cursive);
			} else if(id == "font_kugane_dotB"){
				$('#fontB').val(font_kugane_dot);
			} else if(id == "font_norvrandt_dotB"){
				$('#fontB').val(font_norvrandt_dot);
			} else if(id == "font_norvrandt5_dotB"){
				$('#fontB').val(font_norvrandt5_dot);
			} else if(id == "font_trainoneB"){
				$('#fontB').val(font_trainone);
			} else if(id == "font_stickB"){
				$('#fontB').val(font_stick);
			} else if(id == "font_rokenrolloneB"){
				$('#fontB').val(font_rokenrollone);
			} else if(id == "font_reggaeoneB"){
				$('#fontB').val(font_reggaeone);
			} else if(id == "font_rampartoneB"){
				$('#fontB').val(font_rampartone);
			} else if(id == "font_kleeoneB"){
				$('#fontB').val(font_kleeone);
			} else if(id == "font_kleeonesemiboldB"){
				$('#fontB').val(font_kleeonesemibold);
			} else if(id == "font_dotgothic16B"){
				$('#fontB').val(font_dotgothic16);
			}
		});
		$('.font_buttonC').click(function(e) {
			var id = e.target.id
			if(id == "font_defaultC"){
				$('#fontC').val(font_default);
			} else if(id == "font_norvrandtC"){
				$('#fontC').val(font_norvrandt);
			} else if(id == "font_norvrandt5C"){
				$('#fontC').val(font_norvrandt5);
			} else if(id == "font_kuganeC"){
				$('#fontC').val(font_kugane);
				$('#styleC').val(style_normal);
			} else if(id == "font_kugane_tateC"){
				$('#fontC').val(font_kugane_tate);
				$('#styleC').val("");
			} else if(id == "font_nierC"){
				$('#fontC').val(font_nier);
			} else if(id == "font_eorzeaC"){
				$('#fontC').val(font_eorzea);
			} else if(id == "font_near_easternC"){
				$('#fontC').val(font_near_eastern);
			} else if(id == "font_ff14_figureC"){
				$('#fontC').val(font_ff14_figure);
			} else if(id == "font_eorzea_blackletterC"){
				$('#fontC').val(font_eorzea_blackletter);
			} else if(id == "font_eorzea_dotC"){
				$('#fontC').val(font_eorzea_dot);
			} else if(id == "font_eorzea_cursiveC"){
				$('#fontC').val(font_eorzea_cursive);
			} else if(id == "font_kugane_dotC"){
				$('#fontC').val(font_kugane_dot);
			} else if(id == "font_norvrandt_dotC"){
				$('#fontC').val(font_norvrandt_dot);
			} else if(id == "font_norvrandt5_dotC"){
				$('#fontC').val(font_norvrandt5_dot);
			} else if(id == "font_trainoneC"){
				$('#fontC').val(font_trainone);
			} else if(id == "font_stickC"){
				$('#fontC').val(font_stick);
			} else if(id == "font_rokenrolloneC"){
				$('#fontC').val(font_rokenrollone);
			} else if(id == "font_reggaeoneC"){
				$('#fontC').val(font_reggaeone);
			} else if(id == "font_rampartoneC"){
				$('#fontC').val(font_rampartone);
			} else if(id == "font_kleeoneC"){
				$('#fontC').val(font_kleeone);
			} else if(id == "font_kleeonesemiboldC"){
				$('#fontC').val(font_kleeonesemibold);
			} else if(id == "font_dotgothic16C"){
				$('#fontC').val(font_dotgothic16);
			}
		});

		// フォントのスタイル
		$('.style_button').click(function(e) {
			var id = e.target.id
			if(id == "style_normal"){
				$('#style').val(style_normal);
			} else if(id == "style_bold"){
				var style = $('#style').val();
				if ( style.indexOf(style_bold) == -1) {
					$('#style').val(style + " " + style_bold);
				}
			} else if(id == "style_italic"){
				var style = $('#style').val();
				if ( style.indexOf(style_italic) == -1) {
					$('#style').val(style + " " + style_italic);
				}
			}
		});
		$('.style_buttonB').click(function(e) {
			var id = e.target.id
			if(id == "style_normalB"){
				$('#styleB').val(style_normal);
			} else if(id == "style_boldB"){
				var style = $('#styleB').val();
				if ( style.indexOf(style_bold) == -1) {
					$('#styleB').val(style + " " + style_bold);
				}
			} else if(id == "style_italicB"){
				var style = $('#styleB').val();
				if ( style.indexOf(style_italic) == -1) {
					$('#styleB').val(style + " " + style_italic);
				}
			}
		});
		$('.style_buttonC').click(function(e) {
			var id = e.target.id
			if(id == "style_normalC"){
				$('#styleC').val(style_normal);
			} else if(id == "style_boldC"){
				var style = $('#styleC').val();
				if ( style.indexOf(style_bold) == -1) {
					$('#styleC').val(style + " " + style_bold);
				}
			} else if(id == "style_italicC"){
				var style = $('#styleC').val();
				if ( style.indexOf(style_italic) == -1) {
					$('#styleC').val(style + " " + style_italic);
				}
			}
		});



	});


	function getqueries(queries, imageIni, queryflag){
		console.log(imageIni);
		console.log(queryflag);
		for(i=0; i < queries.length; i ++) {
			var t = queries[i].split('=');
			console.log(t['0']);
			console.log(t['1']);
			console.log(queryflag);
			if(t['0'] == 'logourl' + queryflag){
				$('#logourl' + queryflag).val(decodeURIComponent(t['1']));
			} else if(t['0'] == 'xpos' + queryflag){
				imageIni.xPos = parseFloat(t['1']);
			} else if(t['0'] == 'ypos' + queryflag){
				imageIni.yPos = parseFloat(t['1']);
			} else if(t['0'] == 'scale' + queryflag){
				imageIni.Scale = parseFloat(t['1']);
			} else if(t['0'] == 'text' + queryflag){
				console.log('text' + queryflag);
				$('#text' + queryflag).val(decodeURIComponent(t['1']));
			} else if(t['0'] == 'color' + queryflag){
				$('#color' + queryflag).val(decodeURIComponent(t['1']));
			} else if(t['0'] == 'shadow' + queryflag){
				$('#color_shadow' + queryflag).val(decodeURIComponent(t['1']));
			} else if(t['0'] == 'shadowflag' + queryflag){
				console.log(t['0']);
				console.log(t['1']);
				if(decodeURIComponent(t['1']) == 1){
					$('#color_shadow_flag' + queryflag).prop('checked', true);
				} else {
					$('#color_shadow_flag' + queryflag).prop('checked', false);
				}
			} else if(t['0'] == 'outlineflag' + queryflag){
				if(decodeURIComponent(t['1']) == 1){
					$('#color_outline_flag' + queryflag).prop('checked', true);
				} else {
					$('#color_outline_flag' + queryflag).prop('checked', false);
				}
			} else if(t['0'] == 'style' + queryflag){
				$('#style' + queryflag).val(decodeURIComponent(t['1']));
			} else if(t['0'] == 'font' + queryflag){
				$('#font' + queryflag).val(decodeURIComponent(t['1']));
			} else if(t['0'] == 'px' + queryflag){
				$('#px' + queryflag).val(decodeURIComponent(t['1']));
			} else if(t['0'] == 'title'){
				$('title').text(decodeURIComponent(t['1']));
				$('h1').text(decodeURIComponent(t['1']));
			} else if(t['0'] == 'comment'){
				$('#comment').text(decodeURIComponent(t['1']));
			}
		}
		return imageIni;
	}



	//画像先読み込み
	$(window).on('load',function(){
		//ガイドラインのロード
		var baseImg2 = new Image();
		baseImg2.src = $('#guielineurl').val();
		guidelineImage = new createjs.Bitmap(baseImg2);
	
		loadImage(null, null, null);

	});

	// URL生成
	function subgeturl(imageIni, t) {
		var url = '';

		//設定をgetに追加
		//text
		url = url + '&text' + t + '=' + encodeURIComponent($('#text' + t).val());
		url = url + '&color' + t + '=' + encodeURIComponent($('#color' + t).val());
		if($('#color_shadow_flag' + t).prop('checked')){
			url = url + '&shadowlag' + t + '=1';
		} else {
			url = url + '&shadowflag' + t + '=0';
		}
		if($('#color_outline_flag' + t).prop('checked')){
			url = url + '&outlineflag' + t + '=1';
		} else {
			url = url + '&outlineflag' + t + '=0';
		}
		url = url + '&px' + t + '=' + encodeURIComponent($('#px' + t).val());
		url = url + '&style' + t + '=' + encodeURIComponent($('#style' + t).val());
		url = url + '&font' + t + '=' + encodeURIComponent($('#font' + t).val());
		//ロゴ位置・サイズ
		url = url + '&xpos' + t + '=' + imageIni.xPos;
		url = url + '&ypos' + t + '=' + imageIni.yPos;
		url = url + '&scale' + t + '=' + imageIni.Scale;
		//ロゴ読み出し場所
		if($('input[name=logo]:checked').val() === 'local'){
			url = url + '&logo=local';
		}
		//タイトル
		url = url + '&title' + t + '=' + encodeURIComponent($('title').text());
		//コメント
		url = url + '&comment' + t + '=' + encodeURIComponent($('#comment').text());
		return url;
	}

	function geturl(imageIni, imageIniB, imageIniC){
		$('#js-copybtn').on('click', function(){
			var url;
			var baseurl = location.href.split('?')[0];
			url = baseurl;
			var urlA = subgeturl(imageIni,  '');
			console.log(urlA);
			console.log(imageIniB);
			var urlB = subgeturl(imageIniB, 'B');
			console.log(urlB);
			var urlC = subgeturl(imageIniC, 'C');
			console.log(urlC);

			//タイトル
			url = url + '?title=' + encodeURIComponent($('title').text());
			//タブA
			url = url + urlA;
			//タブB
			url = url + urlB;
			//タブC
			url = url + urlC;
			//コメント
			url = url + '&comment=' + encodeURIComponent($('#comment').text());


			let $textarea = $('<textarea></textarea>');
			$textarea.text(url);
			$(this).append($textarea);
			$textarea.select();
			document.execCommand('copy');
			$textarea.remove();
			$('#js-copyalert').show().delay(2000).fadeOut(400);
		});
	}

	// URL書き込み
	/*
	function write_settingurl(imageIni) {
		var url = geturl(imageIni);
		$('#settingurl a').text(url);
		$('#settingurl a').attr('href', url);
	}
	*/
})($);

function DownloadStart(){
	
	var cve = document.getElementById("result");
	if (cve.getContext) {
		// ダウンロード ファイル名
		var now = new Date();
		var year = now.getYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();
		var hour = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();

		var filename = 'download_' + year + month + day + hour + min + sec + '.png';

		var ctx = cve.getContext('2d');
		var base64;
		try {
			base64 = cve.toDataURL();
		}catch(e) {
			alert("ロゴが外部URLをしているため、ダウンロードボタンを使用できません。")
			return;
		}
		document.getElementById("newImg").src = base64;

		var blob = Base64toBlob(base64);
		const url = window.URL.createObjectURL(blob);
		document.getElementById("dlImg").href = url;
		document.getElementById("dlImg").download = filename;

		$('#alert').text("ブラウザ判定");
		//  ダウンロード開始
		if (window.navigator.msSaveBlob) {
			// IE
			window.navigator.msSaveBlob(Base64toBlob(base64), filename);
		} else {
			// Chrome, Firefox, Edge
			document.getElementById("dlImg").click();
		}
		window.URL.revokeObjectURL(url);
	}
}

function Base64toBlob(base64)
{
	var tmp = base64.split(',');
	var data = atob(tmp[1]);
	var mime = tmp[0].split(':')[1].split(';')[0];
	var buf = new Uint8Array(data.length);
	for (var i = 0; i < data.length; i++) {
		buf[i] = data.charCodeAt(i);
	}
	var blob = new Blob([buf], { type: mime });
	return blob;
}

function NewWindow(){
	
	var cve = document.getElementById("result");
	if (cve.getContext) {
		var dataUrl;
		try {
			dataUrl = cve.toDataURL();
		}catch(e) {
			alert("ロゴが外部URLをしているため、ダウンロードボタンを使用できません。")
			return;
		}
		var w = window.open('about:blank');
		w.document.write("<img src='" + dataUrl + "'/>");
	} else {
	}
}
