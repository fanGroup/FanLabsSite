$(document).ready(function() {
	var aLangKeys=new Array();
	aLangKeys['en']=new Array();
	aLangKeys['es']=new Array();

	aLangKeys['en']['home']='Home';
	aLangKeys['en']['aboutUs']='About Us';
	aLangKeys['en']['team']='Team';
	aLangKeys['en']['services']='Services';
	aLangKeys['en']['portfolio']='Portfolio';
	aLangKeys['en']['contactUs']='Contact Us';

	aLangKeys['es']['home']='Principal';
	aLangKeys['es']['aboutUs']='Sobre nosotros';
	aLangKeys['es']['team']='Nosotros';
	aLangKeys['es']['services']='Servicios';
	aLangKeys['es']['portfolio']='Portfolio';
	aLangKeys['es']['contactUs']='Contacto';

    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id
        // translate all translatable elements
        $('.translate').each(function(i){
          $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
        });
    } );
});
