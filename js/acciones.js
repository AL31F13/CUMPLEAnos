// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){

	$('#btnresultado').on("click", function () {
	var MesC=$('#mescumple').val();
	var DiaC=$('#diacumple').val();	 
	var AnoC=$('#yearcumple').val();
	var nombre=$('#txtnombre').val();
	var fa=new Date ();
	var fpc=new Date (fa.getFullYear(),MesC-1,DiaC);
	
	 var fn=Date (AnoC,MesC,DiaC  );
	var fa=new Date (fa.getFullYear(),fa.getMonth(),fa.getDate());
	
	if(fpc<=fa)
	{
		fpc= new Date(fpc.getFullYear()+1,fpc.getMonth(),fpc.getDate());
	}
	dias=(fpc-fa)/1000/60/60/24;
	
	$('#final').text(dias+ ' dias para tu cumpleaños');
	$('#nombrefin').text(nombre+ ' Faltan ');
	
	if (dias<=7)
	{
			$('#Mfelicidades').html('" FELICIDADES YA CASI ES TU CUMPLE "');
			
		
	}
	else
	{
		$('#Mfelicidades').html();
			
		
	}
	
}); 
});
});


