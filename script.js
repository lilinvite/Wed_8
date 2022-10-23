var card = document.getElementById('flip-card-front');

function hide_front_page(){
	document.querySelector(".flip-card-front").style.setProperty('display', "none");
}

card.onclick = function() {
	if (document.querySelector(".flip-card-inner").className != "flip-card-inner rotate_to_back"){
		document.querySelector(".flip-card-inner").className = "flip-card-inner rotate_to_back";
		setTimeout(hide_front_page,800);
	}/*
	else{
		document.querySelector(".flip-card-inner").className = "flip-card-inner rotate_to_front";
	}*/
	
}

document.getElementById('card_back_image').onclick = function() {
	console.log('in element');
    document.querySelector(".flip-card-inner").className = "flip-card-inner rotate_to_front";

    document.querySelector(".flip-card-front").style.setProperty('display', "block");
}


window.onload = function() {

	document.querySelector(".flip-card").style.setProperty('width', document.documentElement.clientWidth+"px");
	document.querySelector(".flip-card").style.setProperty('height', document.documentElement.clientHeight+"px");

	document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_font', (document.body.clientWidth)*0.035 +"px"); //15px
	document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_font', (document.body.clientWidth)*0.46 +"px"); //20px
	document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_font', (document.body.clientWidth)*0.116 +"px"); //50px
	document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_padding', (document.body.clientWidth)*0.046 +"px"); //5%
	document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_padding', (document.body.clientWidth)*0.074 +"px"); //8%
	document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_padding', (document.body.clientWidth)*0.092 +"px"); //10%
	if (document.getElementById('card_front_sub_content_bound').clientHeight >= document.getElementById('card_front_sub_content').clientHeight*0.75){
	//if (parseFloat(getComputedStyle(document.querySelector(".card_front_sub_content_2")).fontSize.split("px")[0]) >= 18.515){
		console.log("heigh_domiannt")
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_font', (document.body.clientHeight)*0.020 +"px"); //15px
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_font', (document.body.clientHeight)*0.027 +"px"); //20px
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_font', (document.body.clientHeight)*0.067 +"px"); //50px
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_padding', (document.body.clientHeight)*0.026 +"px"); //5% or 19.8px
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_padding', (document.body.clientHeight)*0.042 +"px"); //8% or 31.68px
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_padding', (document.body.clientHeight)*0.053 +"px"); //10% or 39.6px
	}
	else{
		console.log("weight_domiannt")
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_font', (document.body.clientWidth)*0.035 +"px"); //15px
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_font', (document.body.clientWidth)*0.046 +"px"); //20px
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_font', (document.body.clientWidth)*0.116 +"px"); //50px
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_padding', (document.body.clientWidth)*0.046 +"px"); //5%
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_padding', (document.body.clientWidth)*0.074 +"px"); //8%
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_padding', (document.body.clientWidth)*0.092 +"px"); //10%
	}

	document.querySelector(".form").style.setProperty('width', (document.body.clientWidth)*0.71 +"px");
	document.querySelector(".form").style.setProperty('height', (document.body.clientWidth)*1.3 +"px");
	if (document.getElementById('formOuter').clientHeight >= (document.body.clientHeight)*0.8){
		document.querySelector(".form").style.setProperty('height', (document.body.clientHeight)*0.8 +"px");
	}
	document.querySelector(".formHeader").style.setProperty('font-size', (document.body.clientWidth)*0.08 +"px");
	document.querySelector(".attendance").style.setProperty('font-size', (document.body.clientWidth)*0.025 +"px");
	document.querySelector(".firstName").style.setProperty('font-size', (document.body.clientWidth)*0.03 +"px");
	document.querySelector(".formMain1").style.setProperty('font-size', (document.body.clientWidth)*0.02 +"px");
	document.querySelector(".button__text").style.setProperty('font-size', (document.body.clientWidth)*0.02 +"px");
	document.querySelector(".submit").style.setProperty('font-size', (document.body.clientWidth)*0.035 +"px");

	document.querySelector(".alert").style.setProperty('--font-size', (document.body.clientWidth)*0.05 +"px");

	/*
	window.addEventListener("resize", function(){
		document.querySelector(".flip-card").style.setProperty('width', document.documentElement.clientWidth+"px");
		document.querySelector(".flip-card").style.setProperty('height', document.documentElement.clientHeight+"px");
		
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_font', (document.body.clientWidth)*0.035 +"px"); //15px
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_font', (document.body.clientWidth)*0.046 +"px"); //20px
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_font', (document.body.clientWidth)*0.116 +"px"); //50px
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_padding', (document.body.clientWidth)*0.046 +"px"); //5%
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_padding', (document.body.clientWidth)*0.074 +"px"); //8%
		document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_padding', (document.body.clientWidth)*0.092 +"px"); //10%

		if (document.getElementById('card_front_sub_content_bound').clientHeight >= document.getElementById('card_front_sub_content').clientHeight*0.75){
		//if (parseFloat(getComputedStyle(document.querySelector(".card_front_sub_content_2")).fontSize.split("px")[0]) >= 18.515){
			console.log("heigh_domiannt")
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_font', (document.body.clientHeight)*0.020 +"px"); //15px
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_font', (document.body.clientHeight)*0.027 +"px"); //20px
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_font', (document.body.clientHeight)*0.067 +"px"); //50px
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_padding', (document.body.clientHeight)*0.026 +"px"); //5% or 19.8px
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_padding', (document.body.clientHeight)*0.042 +"px"); //8% or 31.68px
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_padding', (document.body.clientHeight)*0.053 +"px"); //10% or 39.6px
		}
		else{
			console.log("weight_domiannt")
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_font', (document.body.clientWidth)*0.035 +"px"); //15px
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_font', (document.body.clientWidth)*0.046 +"px"); //20px
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_font', (document.body.clientWidth)*0.116 +"px"); //50px
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_padding', (document.body.clientWidth)*0.046 +"px"); //5%
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_padding', (document.body.clientWidth)*0.074 +"px"); //8%
			document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_padding', (document.body.clientWidth)*0.092 +"px"); //10%
		}

		
		//for debug
		//document.querySelector(".card_front_sub_content_bound").style.setProperty('--small_font', (document.body.clientWidth)*0.035 +"px"); //15px
		//document.querySelector(".card_front_sub_content_bound").style.setProperty('--middle_font', (document.body.clientWidth)*0.046 +"px"); //20px
		//document.querySelector(".card_front_sub_content_bound").style.setProperty('--big_font', (document.body.clientWidth)*0.116 +"px"); //50px
		//if (document.getElementById('card_front_sub_content_bound').clientHeight >= document.getElementById('card_front_sub_content').clientHeight*0.75){
		//	console.log(getComputedStyle(document.querySelector(".card_front_sub_content_5")).paddingTop);
		//}
		

		document.querySelector(".form").style.setProperty('width', (document.body.clientWidth)*0.71 +"px");
		document.querySelector(".form").style.setProperty('height', (document.body.clientWidth)*1.3 +"px");
		if (document.getElementById('formOuter').clientHeight >= (document.body.clientHeight)*0.8){
			document.querySelector(".form").style.setProperty('height', (document.body.clientHeight)*0.8 +"px");
		}
		document.querySelector(".formHeader").style.setProperty('font-size', (document.body.clientWidth)*0.08 +"px");
		document.querySelector(".attendance").style.setProperty('font-size', (document.body.clientWidth)*0.025 +"px");
		document.querySelector(".firstName").style.setProperty('font-size', (document.body.clientWidth)*0.03 +"px");
		document.querySelector(".formMain1").style.setProperty('font-size', (document.body.clientWidth)*0.02 +"px");
		document.querySelector(".button__text").style.setProperty('font-size', (document.body.clientWidth)*0.02 +"px");
		document.querySelector(".submit").style.setProperty('font-size', (document.body.clientWidth)*0.035 +"px");

		document.querySelector(".alert").style.setProperty('--font-size', (document.body.clientWidth)*0.05 +"px");
	})
	*/
}




// Form submission and print invitation

function Back_to_main(){
	document.location.reload(true);
}

function setDisplay(className, displayValue) {
  var items = document.getElementsByClassName(className);
  for (var i=0; i < items.length; i++) {
    items[i].innerHTML = displayValue;
  }
}
function setPlaceholder(className, displayValue) {
  var items = document.getElementsByClassName(className);
  for (var i=0; i < items.length; i++) {
    items[i].placeholder = displayValue;
  }
}

var h19 = document.querySelector(".RelationshipWithGroom").innerHTML;
var h20 = document.querySelector(".familyOrCousinWithGroom").innerHTML;
var h21 = document.querySelector(".PCFWithGroom").innerHTML;
var h22 = document.querySelector(".SCFWithGroom").innerHTML;
var h23 = document.querySelector(".UniFWithGroom").innerHTML;
var h24 = document.querySelector(".ColleagueWithGroom").innerHTML;
var h25 = document.querySelector(".OthersWithGroom").innerHTML;
var h26 = document.querySelector(".RelationshipWithBride").innerHTML;
var h27 = document.querySelector(".familyOrCousinWithBride").innerHTML;
var h28 = document.querySelector(".PCFWithBride").innerHTML;
var h29 = document.querySelector(".SCFWithBride").innerHTML;
var h30 = document.querySelector(".UniFWithBride").innerHTML;
var h31 = document.querySelector(".ColleagueWithBride").innerHTML;
var h32 = document.querySelector(".OthersWithBride").innerHTML;
document.querySelector(".firstName").style.setProperty('font-size', (document.body.clientWidth)*0.03 +"px");
var h33 = document.querySelector(".firstName").placeholder;
var h35 = document.querySelector(".comments").placeholder;
var h36 = document.querySelector(".submit").innerHTML;
var h37 = document.querySelector(".attendanceCount").placeholder;
var h38 = document.querySelector(".ExColleagueWithGroom").innerHTML;
var h39 = document.querySelector(".ExColleagueWithBride").innerHTML;
var h40 = document.querySelector(".button__text").innerHTML;
var h41 = document.querySelector(".vegeWording").innerHTML;

var j=0
var thingTemplate = $('.attendee'+1).clone()
setPlaceholder("firstName","姓名")
setDisplay("RelationshipWithGroom","新郎关系 <br> (婚礼座位安排)<br>")
setDisplay("familyOrCousinWithGroom","新郎家人/亲戚")
setDisplay("PCFWithGroom","新郎小学朋友")
setDisplay("SCFWithGroom","新郎中学朋友")
setDisplay("UniFWithGroom","新郎大学朋友")
setDisplay("ColleagueWithGroom","新郎同事")
setDisplay("ExColleagueWithGroom","新郎前同事")
setDisplay("OthersWithGroom","其他")
setDisplay("RelationshipWithBride","新娘关系 <br> (婚礼座位安排)<br>")
setDisplay("familyOrCousinWithBride","新娘家人/亲戚")
setDisplay("PCFWithBride","新娘小学朋友")
setDisplay("SCFWithBride","新娘中学朋友")
setDisplay("UniFWithBride","新娘大学朋友")
setDisplay("ColleagueWithBride","新娘同事")
setDisplay("ExColleagueWithBride","新娘前同事")
setDisplay("OthersWithBride","其他")
setDisplay("vegeWording","我是素食者")
var thingTemplateChinese = $('.attendee'+1).clone()
setPlaceholder("firstName",h33)
setDisplay("RelationshipWithGroom",h19)
setDisplay("familyOrCousinWithGroom",h20)
setDisplay("PCFWithGroom",h21)
setDisplay("SCFWithGroom",h22)
setDisplay("UniFWithGroom",h23)
setDisplay("ColleagueWithGroom",h24)
setDisplay("ExColleagueWithGroom",h38)
setDisplay("OthersWithGroom",h25)
setDisplay("RelationshipWithBride",h26)
setDisplay("familyOrCousinWithBride",h27)
setDisplay("PCFWithBride",h28)
setDisplay("SCFWithBride",h29)
setDisplay("UniFWithBride",h30)
setDisplay("ColleagueWithBride",h31)
setDisplay("ExColleagueWithBride",h39)
setDisplay("OthersWithBride",h32)
setDisplay("vegeWording",h41)

$(document).ready(function(){
	
    $('#button').click(function(){
    	//console.log("insiete");
    	j=j+1;
    	/*document.querySelector(".attendeeTitle"+(j-1)).innerHTML = "<u> Attendee "+(j+1)+": </u>";
    	var temp = document.getElementById("attendeeTitle");
    	if (document.getElementById("attendeeTitle").classList.contains("attendeeTitle"+(j-1))){
    		document.getElementById("attendeeTitle").classList.add("attendeeTitle"+j);
    		document.getElementById("attendeeTitle").classList.remove("attendeeTitle"+(j-1));
    	}*/
        
        if ($("#toggle_checkbox").is(':checked')){
        	var thing = thingTemplateChinese.clone()
			thing.find('.attendeeTitle0').html("<u class=atnheader> 嘉宾 </u><u> "+(j+1)+": </u>")
		}
		else{
			var thing = thingTemplate.clone()
			thing.find('.attendeeTitle0').html("<u class=atnheader> Guest </u><u> "+(j+1)+": </u>")
		}

		//thing
		//	.removeClass('hidingSubmitsss0')
		//	.addClass('hidingSubmitsss'+(j));
		thing.find('#asdasd').each(function() {
    		//alert(this.innerHTML)
    		$(this).removeClass("hidingSubmitsss0")
    		$(this).addClass("hidingSubmitsss"+j)
		});
		thing.find('#Relationship').each(function() {
    		//alert(this.innerHTML)
    		$(this).removeClass("Relationship0")
    		$(this).addClass("Relationship"+j)
		});
		thing.find('#FirstName').each(function() {
    		//alert(this.innerHTML)
    		$(this).removeClass("FirstName0")
    		$(this).addClass("FirstName"+j)
		});
		thing.find('#Vege').each(function() {
    		//alert(this.innerHTML)
    		$(this).removeClass("Vege0")
    		$(this).addClass("Vege"+j)
		});
		thing.find('#form').each(function() {
    		//alert(this.innerHTML)
    		$(this).removeClass("form0")
    		$(this).addClass("form"+j)
		});
		thing
			.removeClass('attendee'+1)
			.addClass('attendee'+(j+1));
		thing.find('input').each(function() {
    		this.name= this.name.replace(''+0+'', ''+j+'');
		});
		/*	
		if (document.getElementById("attendeeTitle").classList.contains("attendeeTitle"+j)){
    		document.getElementById("attendeeTitle").classList.remove("attendeeTitle"+j);
    		document.getElementById("attendeeTitle").classList.add("attendeeTitle"+(j-1));
    	}
    	document.querySelector(".attendeeTitle"+(j-1)).innerHTML = "<u> Attendee "+(j)+": </u>";
    	*/
		//thing.find('input').eq(0).attr({
        //    id: 'rate' + productID,
        //    name: 'rate' + productID
        //});

        // update name of the second input
        //thing.find('input').eq(1).attr('name', 'notes' + productID);

        $('#form').append(thing);
    });

});

var name_to_print_on_invitation = []
var name_to_print_on_invitation_idx = 0
//Form Submission
function formSubmission(count){
	var final_string_relationship=""
	var final_string_firstname=""
	var final_string_vege=""
	
	if (document.getElementById("coming").checked){
		for (jj = 0; jj < j+1; jj++){
		    var ele = document.getElementsByName(jj+'[Rela]');
		    for(i = 0; i < ele.length; i++) {
		          
		        if(ele[i].checked) {
		            //final_string+=ele[i].value
		            document.querySelector('.Relationship'+jj).value=ele[i].value
		            if(jj!==0){
		            	final_string_relationship+=","+document.querySelector('.Relationship'+jj).value
		            }
		            else{
		            	final_string_relationship+=document.querySelector('.Relationship'+jj).value
		            }
		            
		        }
		    }

		    var ele = document.getElementsByName(jj+'[firstn]');
		    for(i = 0; i < ele.length; i++) {
		    	if (typeof(ele[i].value) !== undefined ){
		    		//final_string+=" "+ele[i].value
		    		document.querySelector('.FirstName'+jj).value=ele[i].value
		    		if(jj!==0){
		            	final_string_firstname+=","+document.querySelector('.FirstName'+jj).value
		            }
		            else{
		            	final_string_firstname+=document.querySelector('.FirstName'+jj).value
		            }
		            name_to_print_on_invitation[name_to_print_on_invitation_idx] = document.querySelector('.FirstName'+jj).value
		            name_to_print_on_invitation_idx += 1
		    	}
		    }
		      
		    var ele = document.getElementsByName(jj+'[vege]');
		    for(i = 0; i < ele.length; i++) {
		          
		        if(ele[i].checked) {
		          	document.querySelector('.Vege'+jj).value=ele[i].value
		          	if(jj!==0){
		            	final_string_vege+=","+document.querySelector('.Vege'+jj).value
		            }
		            else{
		            	final_string_vege+=document.querySelector('.Vege'+jj).value
		            }
		        }
		        else{
		        	document.querySelector('.Vege'+jj).value="NoVege"
		        	if(jj!==0){
		            	final_string_vege+=","+document.querySelector('.Vege'+jj).value
		            }
		            else{
		            	final_string_vege+=document.querySelector('.Vege'+jj).value
		            }
		        }
		    }

		    //$(".hidingSubmitsss"+jj).click()
		}
	}
    //alert(final_string_relationship)
    //alert(final_string_firstname)
    //alert(final_string_vege)
    if(document.getElementById("coming").checked){
    	document.querySelector('.ComingNotComing0').value="Coming"
    	document.querySelector('.Commentsfinal0').value=document.querySelector('.comments').value
    	document.querySelector('.Relationship0').value=final_string_relationship
    	document.querySelector('.FirstName0').value=final_string_firstname
    	document.querySelector('.Vege0').value=final_string_vege
    	$(".hidingSubmitsss0").click()
    }else{
    	var items = document.getElementsByClassName("relationship");
		for (var i=0; i < items.length; i++) {
	    	items[i].removeAttribute('required');
	  	}
	  	var items = document.getElementsByClassName("firstName");
		for (var i=0; i < items.length; i++) {
	    	items[i].removeAttribute('required');
	  	}
    	document.querySelector('.ComingNotComing0').value="NotComing"
    	document.querySelector('.FirstName0').value=document.querySelector('.attendanceCount').value
    	document.querySelector('.alert_desc').innerHTML="Thanks for your response";
    	$(".hidingSubmitsss0").click()
    }
}

//Show Success when completed form submit
window.addEventListener("load", function() {
  const form = document.querySelector('.form0');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
    	window.scrollTo(0, 0);
    	document.querySelector("body").style.setProperty('overflow-y', "hidden");
    	//console.log(name_to_print_on_invitation_idx);
    	if(document.getElementById("coming").checked){
	    	for (idx=0 ; idx < name_to_print_on_invitation_idx ; idx++){
	    		console.log(name_to_print_on_invitation[idx]);
	    		//print_Invitation_Pass_one_by_one(name_to_print_on_invitation[idx]);
	    		process_Invitation_Pass(name_to_print_on_invitation[idx],false);
	    	}
	    	document.querySelector(".alert").style.display="block";
	    	process_Invitation_Pass(name_to_print_on_invitation[idx],true);
    	}
    	else{
    		document.querySelector(".alert").style.display="block";
    	}
    })
  });
});


Total_Printable_HTML=''
//---------------------------------------- Invitation Pass Printing 1 by 1--------------------------------------------------
function print_Invitation_Pass_one_by_one(Attendee_name){
	document.getElementById('ticket_name').innerHTML=Attendee_name;
	generateQRCodeForDocumentElement("seat_QR",Attendee_name);
	const element = document.getElementById("contentToPrint");

    // clone the element
    var clonedElement = element.cloneNode(true);

    $(clonedElement).css("display","block")
    
    generateQRCodeForClonedElement(clonedElement,2,Attendee_name); //2 means 2nd div which in this case is seat_QR

    console.log(clonedElement);
    console.log($(clonedElement).prop('outerHTML'));
    console.log(clonedElement.outerHTML);

	
	var xxx = clonedElement.cloneNode(true);
	console.log(xxx);

    //$('#Total_Printable_HTML').appendChild(clonedElement.outerHTML);

	var opt = {
	  margin:       1,
	  filename:     Attendee_name+'_婚礼入场券.pdf',
	  image:        { type: 'jpeg', quality: 1 },
	  html2canvas:  { scale: 3 },
	  jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
	};
	//html2pdf(clonedElement,opt);
	//html2pdf(document.getElementById("Total_Printable_HTML"),opt);

	// remove cloned element
    clonedElement.remove();
}

function process_Invitation_Pass(Attendee_name,print_invite){
	if (print_invite===true){
		name_idx=0;
		var items = document.getElementById("Total_Printable_HTML").getElementsByTagName("div");
		for (var i=0; i < items.length; i++) {
			console.log(i)
	    	console.log(items[i]);
	    	if((i+1)%5===4){
	    		generateQRCodeForClonedElement(document.getElementById("Total_Printable_HTML"),i,items[i-1].innerHTML);
	    	}
	  	}

		var opt = {
		  margin:       1,
		  filename:     'Wedding Invitation.pdf',
		  image:        { type: 'jpeg', quality: 1 },
		  html2canvas:  { scale: 3 },
		  jsPDF:        { unit: 'in', format: 'A3', orientation: 'portrait' }
		};
		html2pdf(document.getElementById("Total_Printable_HTML"),opt);

	}else{
		document.getElementById('ticket_name').innerHTML=Attendee_name;
		generateQRCodeForDocumentElement("seat_QR",Attendee_name);
		const element = document.getElementById("contentToPrint");
		
	    // clone the element
	    var clonedElement = element.cloneNode(true);

	    $(clonedElement).css("display","block")

	    //console.log(clonedElement);
	    
	    generateQRCodeForClonedElement(clonedElement,2,Attendee_name); //2 means 2nd div which in this case is seat_QR

		$('#Total_Printable_HTML').append(clonedElement.outerHTML);

		clonedElement.remove();
	}
}

//-------------------------------------------- QR code generation (used with printing of invitation pass) ---------------------------
function generateQRCodeForDocumentElement(QR_element_ID,desired_word) {
    let qrcodeContainer = document.getElementById(QR_element_ID);
    qrcodeContainer.innerHTML = "";
    //new QRCode(qrcodeContainer, desired_word);
    /*With some styles*/
    new QRCode(qrcodeContainer, {
      text: desired_word,
      width: 100,
      height: 100,
      colorDark: "black",
      colorLight: "transparent",
      correctLevel: QRCode.CorrectLevel.H
    });
    qrcodeContainer.style.display = "block";
}

function generateQRCodeForClonedElement(clonedElement,which_div,desired_word) {
    let qrcodeContainer = clonedElement.getElementsByTagName("div")[which_div];
    qrcodeContainer.innerHTML = "";
    //new QRCode(qrcodeContainer, desired_word);
    /*With some styles*/
    new QRCode(qrcodeContainer, {
      text: desired_word,
      width: 100,
      height: 100,
      colorDark: "black",
      colorLight: "transparent",
      correctLevel: QRCode.CorrectLevel.H
    });
    qrcodeContainer.style.display = "block";
}

function checkRadio(){
	if(document.getElementById("coming").checked){
		document.querySelector(".formComing").style.display="inline";
		document.querySelector(".formNotComing").style.display="none";
		document.querySelector(".submit").innerHTML="Submit and download invitation pass";
		document.querySelector(".submit").style.display="flex";
	}
	else if (document.getElementById("notComing").checked){
		document.querySelector(".formComing").style.display="none";
		document.querySelector(".formNotComing").style.display="inline";
		document.querySelector(".submit").innerHTML="Submit";
		document.querySelector(".submit").style.display="flex";
	}
	else{
		document.querySelector(".submit").style.display="none";
	}
}
