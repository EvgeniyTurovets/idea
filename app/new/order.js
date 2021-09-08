
; /* Start:"a:4:{s:4:"full";s:96:"/local/templates/Vivon2019/components/bitrix/sale.order.ajax/make_vivon/script.js?15832928905780";s:6:"source";s:81:"/local/templates/Vivon2019/components/bitrix/sale.order.ajax/make_vivon/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/


var checkOrderUserFieldError = 1;

function checkOrderUserFieldFocus(field)
{
	if($(field).data("code") == "PROP_PHONE")
	{
		$(field).unmask();
		var phone = $(field).val();
		var pattern = /[^\d+]/ig;
		var reshone = phone.replace(pattern,"");
		$(field).val(reshone);
	}
}

function checkOrderUserField(field, action)
{
	// $(field).change(function(){
		// $(this).attr("placeholder", "TEST");

		var bValidate = true;
		if($(field).val().length > 0)
		{
			if($(field).data("code") == "PROP_PHONE")
			{
				var needCheck = true;
				if(action == 'all')
				{
					if($(field).data('valid') == 'true')
					{
						$(field).parent().find(".bx_text_field_ok").show();
						$(field).parent().find(".bx_field_error").text("");
						needCheck = false;
					}
					else
					{
						$(field).parent().find(".bx_text_field_ok").hide();
						$(field).parent().find(".bx_field_error").text("Не верный формат телефона");
						needCheck = true;
					}
				}
				else if(action == 'blur')
				{
					if($(field).data('valid') == 'true')
					{
						var phone = $(field).val();
						$(field).val(phone.substr(-10));
						$(field).mask("+7 (999) 999-99-99");
						$(field).parent().find(".bx_text_field_ok").show();
						$(field).parent().find(".bx_field_error").text("");
						needCheck = false;
					}
					else
					{
						$(field).parent().find(".bx_text_field_ok").hide();
						$(field).parent().find(".bx_field_error").text("Не верный формат телефона");
						needCheck = true;
					}
				}

				if(needCheck)
				{

					var start_phone_d = "";
					var start_phone_d2 = "";
					var lengthPhone = 0;
					var phone = $(field).val();
					var pattern = /[^\d+]/ig;
					var reshone = phone.replace(pattern,"");
					$(field).val(reshone);

					lengthPhone = reshone.length;

					start_phone_d = reshone.substr(0, 1);
					start_phone_d2 = reshone.substr(0, 2);

					// console.log(start_phone_d);
					if((start_phone_d == "8") || (start_phone_d == "7") || (start_phone_d2 == "+7"))
					{
						// $(field).parent().find(".bx_text_field_ok").show();
						$(field).data('valid', 'true');
						$(field).parent().find(".bx_field_error").text("");
					} else {
						$(field).parent().find(".bx_text_field_ok").hide();
						$(field).parent().find(".bx_field_error").text("телефон должен начинаться с 8 или 7");
						$(field).data('valid', 'false');
						checkOrderUserFieldError = 1;
						bValidate = false;
					}
					if(start_phone_d2 == "+7")
					{
						lengthPhone--;
					}

					if(bValidate && lengthPhone < 11)
					{
						$(field).parent().find(".bx_text_field_ok").hide();
						$(field).parent().find(".bx_field_error").text("Поле должно содержать минимум 11 цифр");
						checkOrderUserFieldError = 1;
						bValidate = false;
						$(field).data('valid', 'false');
					}
					if(bValidate && lengthPhone > 11)
					{
						$(field).parent().find(".bx_text_field_ok").hide();
						$(field).parent().find(".bx_field_error").text("Поле должно содержать максимум 11 цифр");
						checkOrderUserFieldError = 1;
						bValidate = false;
						$(field).data('valid', 'false');
					}


					if(action == 'all' && bValidate)
					{
						$(field).data('valid', 'true');
						var phone = $(field).val();
						$(field).val(phone.substr(-10));
						$(field).mask("+7 (999) 999-99-99");
					}
				}
			}
			// else
			// {
			// 	$(field).parent().find(".bx_text_field_ok").show();
			// 	$(field).parent().find(".bx_field_error").text("");
			// 	$(field).data('valid', 'true');
			// }

			if($(field).data("code") == "PROP_EMAIL")
			{
				val = $(field).val();
				val = val.replace(" ",'');
				$(field).val(val);

				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	            if(pattern.test($(field).val())){
	                $(field).parent().find(".bx_text_field_ok").show();
					$(field).parent().find(".bx_field_error").text("");
	            } else {
	                $(field).parent().find(".bx_text_field_ok").hide();
					$(field).parent().find(".bx_field_error").text("e-mail введен не корректно (кириллица, либо упущен знак @)");
					checkOrderUserFieldError = 1;
					bValidate = false;
	            }
			}


			if($(field).data("code") != "PROP_EMAIL" && $(field).data("code") != "PROP_PHONE")
			{
				$(field).parent().find(".bx_text_field_ok").show();
				$(field).parent().find(".bx_field_error").text("");
			}
		}
		else if(($(field).data('required')=="true" || $(field).data('required')==true)/* && $(field).data("code") != "PROP_EMAIL"*/)
		{
			$(field).parent().find(".bx_text_field_ok").hide();
			$(field).parent().find(".bx_field_error").text("поле не заполнено");
			checkOrderUserFieldError = 1;
			bValidate = false;
		}
	// })

	return bValidate;
}

function checkOrderUserFields()
{
	var check_error = true;
	$(".border-rounded input[type=text]").each(function(){
		var bValidate = checkOrderUserField(this, 'all');
		if(!bValidate)
		{
			check_error = false;
		}
	});

	return check_error;
}

function allowOrderSubmit(){

	if(typeof yaCounter6071065 !== 'undefined')
		yaCounter6071065.reachGoal('zakaz');

	if(checkOrderUserFields())
	{
		submitForm('Y');
		return true;
	}
	else
	{
		$(".allow-order-submit-error").text("заполните все поля");
		return false;
	}
}

$(function($) {
	//$("#ORDER_PROP_3").mask("+7 (999) 999-99-99");
	$("#ORDER_PROP_5").mask("99.99.9999");
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:88:"/bitrix/components/bitrix/sale.ajax.locations/templates/popup/proceed.js?149782032913558";s:6:"source";s:72:"/bitrix/components/bitrix/sale.ajax.locations/templates/popup/proceed.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if (typeof oObject != "object")
	window.oObject = {};

function JsSuggestSale(oHandler, sParams, sParser, domain, ssubmit)
{
	var
		t = this,
		tmp = 0;

	t.oObj = oHandler;
	t.sParams = sParams;
	t.domain = domain;
	t.submit = ssubmit;

	// Arrays for data
	if (sParser)
	{
		t.sExp = new RegExp("["+sParser+"]+", "i");
	}
	else
	{
		t.sExp = new RegExp(",");
	}
	t.oLast = {"str":false, "arr":false};
	t.oThis = {"str":false, "arr":false};
	t.oEl = {"start":false, "end":false};
	t.oUnfinedWords = {};
	// Flags
	t.bReady = true, t.eFocus = true;
	// Array with results & it`s showing
	t.aDiv = null, t.oDiv = null;
	// Pointers
	t.oActive = null, t.oPointer = Array(), t.oPointer_default = Array(), t.oPointer_this = 'input_field';

	t.oObj.onblur = function(){t.eFocus = false;}
	t.oObj.onfocus = function(){if (!t.eFocus){t.eFocus = true; setTimeout(function(){t.CheckModif('focus')}, 500);}}

	t.oLast["arr"] = t.oObj.value.split(t.sExp);
	t.oLast["str"] = t.oLast["arr"].join(":");

	setTimeout(function(){t.CheckModif('this')}, 500);

	this.CheckModif = function(__data)
	{
		var
			sThis = false, tmp = 0,
			bUnfined = false, word = "",
			cursor = {};

		if (!t.eFocus)
			return;

		if (t.bReady && t.oObj.value.length > 0)
		{
			// Preparing input data
			t.oThis["arr"] = t.oObj.value.split(t.sExp);
			t.oThis["str"] = t.oThis["arr"].join(":");

			// Getting modificated element
			if (t.oThis["str"] && (t.oThis["str"] != t.oLast["str"]))
			{
				cursor['position'] = TCJsUtils.getCursorPosition(t.oObj);
				if (cursor['position']['end'] > 0 && !t.sExp.test(t.oObj.value.substr(cursor['position']['end']-1, 1)))
				{
					cursor['arr'] = t.oObj.value.substr(0, cursor['position']['end']).split(t.sExp);
					sThis = t.oThis["arr"][cursor['arr'].length - 1];

					t.oEl['start'] = cursor['position']['end'] - cursor['arr'][cursor['arr'].length - 1].length;
					t.oEl['end'] = t.oEl['start'] + sThis.length;
					t.oEl['content'] = sThis;

					t.oLast["arr"] = t.oThis["arr"];
					t.oLast["str"] = t.oThis["str"];
				}
			}
			if (sThis)
			{
				// Checking for UnfinedWords
				for (tmp = 2; tmp <= sThis.length; tmp++)
				{
					word = sThis.substr(0, tmp);
					if (t.oUnfinedWords[word] == '!fined')
					{
						bUnfined = true;
						break;
					}
				}
				if (!bUnfined)
					t.Send(sThis);
			}
		}
		setTimeout(function(){t.CheckModif('this')}, 500);
	},

	t.Send = function(sSearch)
	{
		if (!sSearch)
			return false;

		var TID = null, oError = Array();
		t.bReady = false;
		PShowWaitMessage('wait_container', true);
		TID = CPHttpRequest.InitThread();
		CPHttpRequest.SetAction(
			TID,
			function(data)
			{
				var result = {};
				t.bReady = true;

				try
				{
					eval("result = " + data + ";");
				}
				catch(e)
				{
					oError['result_unval'] = e;
				}

				if (TCJsUtils.empty(result))
					oError['result_empty'] = 'Empty result';

				try
				{
					if (TCJsUtils.empty(oError) && (typeof result == 'object'))
					{
						if (!(result.length == 1 && result[0]['NAME'] == t.oEl['content']))
						{
							t.Show(result);
							return;
						}
					}
					else
					{
						t.oUnfinedWords[t.oEl['content']] = '!fined';
					}
				}
				catch(e)
				{
					oError['unknown_error'] = e;
				}

				PCloseWaitMessage('wait_container', true);
				return;
			}
		);
		url = '/bitrix/components/bitrix/sale.ajax.locations/search.php';
		if(t.domain)
			url = domain + '/bitrix/components/bitrix/sale.ajax.locations/search.php';
		CPHttpRequest.Send(TID, url, {"search":sSearch, "params":t.sParams});
	},

	t.Show = function(result)
	{
		t.Destroy();
		t.oDiv = document.body.appendChild(document.createElement("DIV"));
		t.oDiv.id = t.oObj.id+'_div';

		t.oDiv.className = "search-popup";
		t.oDiv.style.position = 'absolute';

		t.aDiv = t.Print(result);
		var pos = TCJsUtils.GetRealPos(t.oObj);
		//t.oDiv.style.width = parseInt(pos["width"]) + "px";
		t.oDiv.style.width = "auto";
		TCJsUtils.show(t.oDiv, pos["left"], pos["bottom"]);
		TCJsUtils.addEvent(document, "click", t.CheckMouse);
		TCJsUtils.addEvent(document, "keydown", t.CheckKeyword);
	},

	t.Print = function(aArr)
	{
		var
			aEl = null, sPrefix = '', sColumn = '',
			aResult = Array(), aRes = Array(),
			iCnt = 0, tmp = 0, tmp_ = 0, bFirst = true,
			oDiv = null, oSpan = null;

		sPrefix = t.oDiv.id;

		for (tmp_ in aArr)
		{
			// Math
			aEl = aArr[tmp_];
			aRes = Array();
			aRes['ID'] = (aEl['ID'] && aEl['ID'].length > 0) ? aEl['ID'] : iCnt++;
			aRes['GID'] = sPrefix + '_' + aRes['ID'];
			
			locName = aEl['NAME'];
			if (aEl['REGION_NAME'].length > 0 && locName.length <= 0)
				locName = aEl['REGION_NAME'];
			else if (aEl['REGION_NAME'].length > 0)
				locName = locName +', '+ aEl['REGION_NAME'];
			
			if (aEl['COUNTRY_NAME'].length > 0 && locName.length <= 0)
				locName = aEl['COUNTRY_NAME'];
			else if (aEl['COUNTRY_NAME'].length > 0)
				locName = locName +', '+ aEl['COUNTRY_NAME'];
				
			aRes['NAME'] = TCJsUtils.htmlspecialcharsEx(locName);

			//aRes['CNT'] = aEl['CNT'];
			aResult[aRes['GID']] = aRes;
			t.oPointer.push(aRes['GID']);
			// Graph
			oDiv = t.oDiv.appendChild(document.createElement("DIV"));
			oDiv.id = aRes['GID'];
			oDiv.name = sPrefix + '_div';

			oDiv.className = 'search-popup-row';

			oDiv.onmouseover = function(){t.Init(); this.className='search-popup-row-active';};
			oDiv.onmouseout = function(){t.Init(); this.className='search-popup-row';};
			oDiv.onclick = function(){t.oActive = this.id};

			//oSpan = oDiv.appendChild(document.createElement("DIV"));
			//oSpan.id = oDiv.id + '_NAME';
			//oSpan.className = "search-popup-el search-popup-el-cnt";
			//oSpan.innerHTML = aRes['CNT'];

			oSpan = oDiv.appendChild(document.createElement("DIV"));
			oSpan.id = oDiv.id + '_NAME';
			oSpan.className = "search-popup-el search-popup-el-name";
			oSpan.innerHTML = aRes['NAME'];
		}
		t.oPointer.push('input_field');
		t.oPointer_default = t.oPointer;
		return aResult;
	},

	t.Destroy = function()
	{
		try
		{
			TCJsUtils.hide(t.oDiv);
			t.oDiv.parentNode.removeChild(t.oDiv);
		}
		catch(e)
		{}
		t.aDiv = Array();
		t.oPointer = Array(), t.oPointer_default = Array(), t.oPointer_this = 'input_field';
		t.bReady = true, t.eFocus = true, oError = {},
		t.oActive = null;

		TCJsUtils.removeEvent(document, "click", t.CheckMouse);
		TCJsUtils.removeEvent(document, "keydown", t.CheckKeyword);
	},

	t.Replace = function()
	{
		if (typeof t.oActive == 'string')
		{
			var tmp = t.aDiv[t.oActive];
			var tmp1 = '';
			if (typeof tmp == 'object')
			{
				var elEntities = document.createElement("span");
				elEntities.innerHTML = TCJsUtils.htmlspecialcharsback(tmp['NAME']);
				tmp1 = elEntities.innerHTML;
				//document.getElementById(t.oObj.name+'_val').value = tmp['ID'];
				var n = t.oObj.name.substr(0, (t.oObj.name.length - 4));
				document.getElementById(n).value = tmp['ID'];
				
				if(t.submit && t.submit.length > 0)
					eval(t.submit);
				//submit form
				// submitForm();	
			}
			//this preserves leading spaces
			var start = t.oEl['start'];
			while(start < t.oObj.value.length && t.oObj.value.substring(start, start+1) == " ")
				start++;

			t.oObj.value = t.oObj.value.substring(0, start) + tmp1 + t.oObj.value.substr(t.oEl['end']);
			TCJsUtils.setCursorPosition(t.oObj, start + tmp1.length);
		}
		return;
	},

	t.Init = function()
	{
		t.oActive = false;
		t.oPointer = t.oPointer_default;
		t.Clear();
		t.oPointer_this = 'input_pointer';
	},

	t.Clear = function()
	{
		var oEl = {}, ii = '';
		oEl = t.oDiv.getElementsByTagName("div");
		if (oEl.length > 0 && typeof oEl == 'object')
		{
			for (ii in oEl)
			{
				var oE = oEl[ii];
				if (oE && (typeof oE == 'object') && (oE.name == t.oDiv.id + '_div'))
				{
					oE.className = "search-popup-row";
				}
			}
		}
		return;
	},

	t.CheckMouse = function()
	{
		t.Replace();
		t.Destroy();
	},

	t.CheckKeyword = function(e)
	{
		if (!e)
			e = window.event;
		var
			oP = null,
			oEl = null,
			ii = null;
		if ((37 < e.keyCode && e.keyCode <41) || (e.keyCode == 13))
		{
			t.Clear();

			switch (e.keyCode)
			{
				case 38:
					oP = t.oPointer.pop();
					if (t.oPointer_this == oP)
					{
						t.oPointer.unshift(oP);
						oP = t.oPointer.pop();
					}

					if (oP != 'input_field')
					{
						t.oActive = oP;
						oEl = document.getElementById(oP);
						if (typeof oEl == 'object')
						{
							oEl.className = "search-popup-row-active";
						}
					}
					t.oPointer.unshift(oP);
					break;
				case 40:
					oP = t.oPointer.shift();
					if (t.oPointer_this == oP)
					{
						t.oPointer.push(oP);
						oP = t.oPointer.shift();
					}
					if (oP != 'input_field')
					{
						t.oActive = oP;
						oEl = document.getElementById(oP);
						if (typeof oEl == 'object')
						{
							oEl.className = "search-popup-row-active";
						}
					}
					t.oPointer.push(oP);
					break;
				case 39:
					t.Replace();
					t.Destroy();
					break;
				case 13:
					t.Replace();
					t.Destroy();
					break;
			}
			t.oPointer_this	= oP;
		}
		else
		{
			t.Destroy();
		}
//		return false;
	}
}

var TCJsUtils =
{
	arEvents: Array(),

	addEvent: function(el, evname, func)
	{
		if(el.attachEvent) // IE
			el.attachEvent("on" + evname, func);
		else if(el.addEventListener) // Gecko / W3C
			el.addEventListener(evname, func, false);
		else
			el["on" + evname] = func;
		this.arEvents[this.arEvents.length] = {'element': el, 'event': evname, 'fn': func};
	},

	removeEvent: function(el, evname, func)
	{
		if(el.detachEvent) // IE
			el.detachEvent("on" + evname, func);
		else if(el.removeEventListener) // Gecko / W3C
			el.removeEventListener(evname, func, false);
		else
			el["on" + evname] = null;
	},

	getCursorPosition: function(oObj)
	{
		var result = {'start': 0, 'end': 0};
		if (!oObj || (typeof oObj != 'object'))
			return result;
		try
		{
			if (document.selection != null && oObj.selectionStart == null)
			{
				oObj.focus();
				var
					oRange = document.selection.createRange(),
					oParent = oRange.parentElement(),
					sBookmark = oRange.getBookmark(),
					sContents = sContents_ = oObj.value,
					sMarker = '__' + Math.random() + '__';

				while(sContents.indexOf(sMarker) != -1)
				{
					sMarker = '__' + Math.random() + '__';
				}

				if (!oParent || oParent == null || (oParent.type != "textarea" && oParent.type != "text"))
				{
					return result;
				}

				oRange.text = sMarker + oRange.text + sMarker;
				sContents = oObj.value;
				result['start'] = sContents.indexOf(sMarker);
				sContents = sContents.replace(sMarker, "");
				result['end'] = sContents.indexOf(sMarker);
				oObj.value = sContents_;
				oRange.moveToBookmark(sBookmark);
				oRange.select();
				return result;
			}
			else
			{
				return {
				 	'start': oObj.selectionStart,
					'end': oObj.selectionEnd
				};
			}
		}
		catch(e){}
		return result;
	},

	setCursorPosition: function(oObj, iPosition)
	{
		var result = false;
		if (typeof oObj != 'object')
			return false;

		oObj.focus();

		try
		{
			if (document.selection != null && oObj.selectionStart == null)
			{
				var oRange = document.selection.createRange();
				oRange.select();
			}
			else
			{
				oObj.selectionStart = iPosition;
				oObj.selectionEnd = iPosition;
			}
			return true;
		}
		catch(e)
		{
			return false;
		}

	},

	printArray: function (oObj, sParser, iLevel)
	{
	    try
	    {
	        var result = '',
	        	space = '',
	        	i=null, j=0;

	        if (iLevel==undefined)
	            iLevel = 0;
	        if (!sParser)
	        	sParser = "\n";

	        for (j=0; j<=iLevel; j++)
	            space += '  ';

	        for (i in oObj)
	        {
	            if (typeof oObj[i] == 'object')
	                result += space+i + " = {"+ sParser + TCJsUtils.printArray(oObj[i], sParser, iLevel+1) + ", " + sParser + "}" + sParser;
	            else
	                result += space+i + " = " + oObj[i] + "; " + sParser;
	        }
	        return result;
	    }
	    catch(e)
	    {
	        return;
	    }
	},

	empty: function(oObj)
	{
		var result = true;
		if (oObj)
		{
		    for (i in oObj)
		    {
		    	 result = false;
		    	 break;
		    }
		}
		return result;
	},

	show: function(oDiv, iLeft, iTop)
	{
		if (typeof oDiv != 'object')
			return;
		var zIndex = parseInt(oDiv.style.zIndex);
		if(zIndex <= 0 || isNaN(zIndex))
			zIndex = 100;
		oDiv.style.zIndex = zIndex;
		oDiv.style.left = iLeft + "px";
		oDiv.style.top = iTop + "px";

		return oDiv;
	},

	hide: function(oDiv)
	{
		if(oDiv)
			oDiv.style.display = 'none';
	},

	GetRealPos: function(el)
	{
		if(!el || !el.offsetParent)
			return false;
		var res=Array();
		var objParent = el.offsetParent;
		res["left"] = el.offsetLeft;
		res["top"] = el.offsetTop;
		while(objParent && objParent.tagName != "BODY")
		{
			res["left"] += objParent.offsetLeft;
			res["top"] += objParent.offsetTop;
			objParent = objParent.offsetParent;
		}
		res["right"]=res["left"] + el.offsetWidth;
		res["bottom"]=res["top"] + el.offsetHeight;
		res["width"]=el.offsetWidth;
		res["height"]=el.offsetHeight;
		return res;
	},

	htmlspecialcharsEx: function(str)
	{
		res = str.replace(/&amp;/g, '&amp;amp;').replace(/&lt;/g, '&amp;lt;').replace(/&gt;/g, '&amp;gt;').replace(/&quot;/g, '&amp;quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
		return res;
	},

	htmlspecialcharsback: function(str)
	{
		res = str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;;/g, '"').replace(/&amp;/g, '&');
		return res;
	}
}
SuggestLoadedSale = true;
/* End */
;
; /* Start:"a:4:{s:4:"full";s:103:"/bitrix/components/bitrix/sale.ajax.delivery.calculator/templates/.default/proceed.min.js?1497823815797";s:6:"source";s:85:"/bitrix/components/bitrix/sale.ajax.delivery.calculator/templates/.default/proceed.js";s:3:"min";s:89:"/bitrix/components/bitrix/sale.ajax.delivery.calculator/templates/.default/proceed.min.js";s:3:"map";s:89:"/bitrix/components/bitrix/sale.ajax.delivery.calculator/templates/.default/proceed.map.js";}"*/
function deliveryCalcProceed(arParams){var delivery_id=arParams.DELIVERY_ID;var getExtraParamsFunc=arParams.EXTRA_PARAMS_CALLBACK;function __handlerDeliveryCalcProceed(e){var a=document.getElementById("delivery_info_"+delivery_id);if(a){a.innerHTML=e}PCloseWaitMessage("wait_container_"+delivery_id,true)}PShowWaitMessage("wait_container_"+delivery_id,true);var url="/bitrix/components/bitrix/sale.ajax.delivery.calculator/templates/.default/ajax.php";var TID=CPHttpRequest.InitThread();CPHttpRequest.SetAction(TID,__handlerDeliveryCalcProceed);if(!getExtraParamsFunc){CPHttpRequest.Post(TID,url,arParams)}else{eval(getExtraParamsFunc);BX.addCustomEvent("onSaleDeliveryGetExtraParams",function(e){arParams.EXTRA_PARAMS=e;CPHttpRequest.Post(TID,url,arParams)})}}
/* End */
;; /* /local/templates/Vivon2019/components/bitrix/sale.order.ajax/make_vivon/script.js?15832928905780*/
; /* /bitrix/components/bitrix/sale.ajax.locations/templates/popup/proceed.js?149782032913558*/
; /* /bitrix/components/bitrix/sale.ajax.delivery.calculator/templates/.default/proceed.min.js?1497823815797*/

//# sourceMappingURL=page_3da71f73b1ebfac754171c267c476eaa.map.js