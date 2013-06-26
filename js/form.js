ciudades_1 = new Array("Arica");
ciudades_2 = new Array("Alto Hospicio","Iquique","Pozo Almonte");
ciudades_3 = new Array("Caldera","Chanaral","Copiapo","Diego de Almagro","El Salvador","Huasco","Tierra Amarilla","Vallenar");
ciudades_4 = new Array("Andacollo","Combarbala","Coquimbo","El Palqui","Illapel","La Serena","Los Vilos","Montepatria","Ovalle","Salamanca","Vicuna");
ciudades_5 = new Array("Algarrobo","Cabildo","Calle Larga","Cartagena","Casablanca","Catemu","Concon","El Melon","El Quisco","El Tabo","Hijuelas","La Calera","La Cruz","La Ligua","Las Ventanas","Limache","Llaillay","Los Andes","Nogales","Olmue","Placilla de Penuelas","Putaendo","Quillota","Quilpue","Quintero","Rinconada","San Antonio","San Esteban","San Felipe","Santa Maria","Santo Domingo","Valparaiso","Villa Alemana","Villa Los Almendros","Vina del Mar");
ciudades_6 = new Array("Chimbarongo","Codegua","Donihue","Graneros","Gultro","Las Cabras","Lo Miranda","Machali","Nancagua","Palmilla","Peumo","Pichilemu","Punta Diamante","Quinta de Tilcoco","Rancagua","Rengo","Requinoa","San Fernando","San Francisco de Mostazal","San Vicente de Tagua Tagua","Santa Cruz");
ciudades_7 = new Array("Cauquenes","Constitucion","Curico","Hualane","Linares","Longavi","Molina","Parral","San Clemente","San Javier","Talca","Teno","Villa Alegre");
ciudades_8 = new Array("Arauco","Bulnes","Cabrero","Canete","Chiguayante","Chillan","Chillan Viejo","Coelemu","Coihueco","Concepcion","Conurbacion La Laja-San Rosendo","Coronel","Curanilahue","Hualpen","Hualqui","Huepil","Lebu","Los alamos","Los angeles","Lota","Monte aguila","Mulchen","Nacimiento","Penco","Quillon","Quirihue","San Carlos","San Pedro de la Paz","Santa Barbara","Santa Juana","Talcahuano","Tome","Yumbel","Yungay");
ciudades_9 = new Array("Angol","Carahue","Collipulli","Cunco","Curacautin","Freire","Gorbea","Labranza","Lautaro","Loncoche","Nueva Imperial","Padre Las Casas","Pitrufquen","Pucon","Puren","Renaico","Temuco","Traiguen","Victoria","Villarrica");
ciudades_10 = new Array("Futrono","La Union","Lanco","Los Lagos","Paillaco","Panguipulli","Rio Bueno","San Jose de la Mariquina","Valdivia");
ciudades_11 = new Array("Coihaique","Puerto Aisen");
ciudades_12 = new Array("Punta Arenas","Puerto Natales");
ciudades_13 = new Array("Alto Jahuel","Bajos de San Agustin","Batuco","Buin","Cerrillos","Cerro Navia","Colina","Conchali","Curacavi","El Bosque","El Monte","Estacion Central","Hospital","Huechuraba","Independencia","Isla de Maipo","La Cisterna","La Florida","La Granja","La Islita","La Pintana","La Reina","Lampa","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipu","Melipilla","Nunoa","Padre Hurtado","Paine","Pedro Aguirre Cerda","Penaflor","Penalolen","Pirque","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquin","San Jose de Maipo","San Miguel","San Ramon","Santiago","Talagante","Tiltil","Vitacura");
ciudades_14 = new Array("Ancud","Calbuco","Castro","Fresia","Frutillar","Llanquihue","Los Muermos","Osorno","Puerto Montt","Puerto Varas","Purranque","Quellon","Rio Negro");
ciudades_15 = new Array("Antofagasta","Calama","Maria Elena","Mejillones","Taltal","Tocopilla");



$( document ).ready(function() {
	var errores = 0;
	var errRut = false;
	
	$('#inputRegion').change(function(){
		console.log("aca");
		$('#inputComuna').empty();
		$('#inputComuna').append('<option value="0">Elige un Comuna</option>');
		
		var comunas = eval("ciudades_" + $('#inputRegion').val());
		
		for(var i=0; i < comunas.length; i++){
			$('#inputComuna').append('<option value="'+comunas[i]+'">'+comunas[i]+'</option>');
		}
	});
	
	$("#inputRut").Rut({
			   on_error: function(){ 
			   		errRut = true;
			   		$("#inputRut").css('border', 'solid 2px #ff0000');
					$('.error').fadeIn();
			   },
			   on_success: function(){ 
			   		errRut = false;
					$("#inputRut").css('border', 'none');
					if(errores == 0) $('.error').fadeOut();
			   }
			})
	
	
   
   $('.btn_parti').click(function()
   {
	   errores = 0;
	   
	   $('.campo').focus(function()
	   {
	   		$(this).css('border', 'none');
	   });
	   
		$('.campo').each(function() 
		{			
		  	if($(this).val() == 0) 
			{
				$(this).css('border', 'solid 2px #ff0000');
				errores++;
			}

		});
		
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			
			if(!regex.test($('#inputEmail').val())) 
			{
				$('#inputEmail').css('border', 'solid 2px #ff0000');
				errores++;
			}
			
			if($('#inputRegion').val() == 0) {
				$('#inputRegion').css('border', 'solid 2px #ff0000');
				errores++;
			}
			
			if($('#inputComuna').val() == 0) {
				$('#inputComuna').css('border', 'solid 2px #ff0000');
				errores++;
			}
			
			$('#inputEdad').click(function(){
				$('.error2').fadeOut();
				});
				
			if($('#inputEdad').is(':checked') == false) {
				$('.error2').fadeIn();
				errores++;
			}
			
			if(errores > 0 || errRut)
			{
				$('.error').fadeIn();
			}else{
				$.ajax({
				  type: "POST",
				  url: "guardar.php",
				  data: { nombre: $('#inputNombre').val(), 
				  		apellido: $('#inputApellido').val(),
						rut: $('#inputRut').val(),
						email: $('#inputEmail').val(),
						celular: $('#inputCelular').val(),
						direccion: $('#inputDirec').val(),
						region: $('#inputRegion').val(),
						comuna: $('#inputComuna').val(),
						boleta: $('#inputDato').val() }
					}).done(function( msg ) {
						window.location = "form_exito.php"
				});
			}
		
	});
});