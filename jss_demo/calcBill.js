function calcBill(){
	// elements into objects
	txtgnm=document.getElementById("txtgnm");
	txtads=document.getElementById("txtads");
	txtkid=document.getElementById("txtkid");
	seltype=document.getElementById("seltype");
	
	gnm=txtgnm.value;
	ads=parseInt(txtads.value);
	kid=parseFloat(txtkid.value);
	type=seltype.value;
	flag=true;
	if(type=="General"){
		arate=1500;
		krate=700;
	}
	else{
		arate=2000;
		krate=1000;
	}
	
	result = ads*arate + kid * krate;
	
	if(type=="Group"){
		if(ads>=5){
			result = result - (result * 0.20);
		}
		else{
			alert('cannot be considered a Group');
			flag=false;
		}
	}
	if(flag==true){
		outputWin = open();
		outputWin.document.writeln("<h1>WONDERLA.....</h1>");
		outputWin.document.writeln("<table>");
		outputWin.document.writeln("<tr>");
		outputWin.document.writeln("<td>Guest Name:</td>");
		outputWin.document.writeln("<td>"+gnm+"</td>");
		outputWin.document.writeln("</tr>");
		
		outputWin.document.writeln("<tr>");
		outputWin.document.writeln("<td>No. of Adults:</td>");
		outputWin.document.writeln("<td>"+ads+" </td>");
		outputWin.document.writeln("</tr>");
	
		outputWin.document.writeln("<tr>");
		outputWin.document.writeln("<td>No. of Kids:</td>");
		outputWin.document.writeln("<td>"+kid+"</td>");
		outputWin.document.writeln("</tr>");
	
		outputWin.document.writeln("<tr>");
		outputWin.document.writeln("<td>Ticket Type:</td>");
		outputWin.document.writeln("<td>"+type+"</td>");
		outputWin.document.writeln("</tr>");
	
		outputWin.document.writeln("<tr>");
		outputWin.document.writeln("<td>Total Bill:</td>");
		outputWin.document.writeln("<td>"+result+"</td>");
		outputWin.document.writeln("</tr>");
		}
	}
	