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
	//services
	aLangKeys['en']['serviceTitle1']='Development';
	aLangKeys['en']['serviceTitle2']='Web Application';
	aLangKeys['en']['serviceTitle3']='Responsive Design';
	aLangKeys['en']['serviceTitle4']='Clean Code';
	aLangKeys['en']['serviceTitle5']='Personalize';
	aLangKeys['en']['serviceTitle6']='Creative Idea';
	aLangKeys['en']['service1']='We are a strong and experienced team, capable of developing any application using most advanced technologies.';
	aLangKeys['en']['service2']='We design and develop custom web applications that deliver the experience our customers want.';
	aLangKeys['en']['service3']='We use responsive web design techniques to build a single website that adapts to multiple screen resolutions.';
	aLangKeys['en']['service4']='We work looking for the highest quality and performance in all our developments.';
	aLangKeys['en']['service5']='We will work with you to explore new ideas, lovingly designed products & services and delightful user experiences.';
	aLangKeys['en']['service6']='We work with you not only to develop your application, but to give some ideas about how your application could be better.';

	aLangKeys['es']['home']='Principal';
	aLangKeys['es']['aboutUs']='Sobre nosotros';
	aLangKeys['es']['team']='Nosotros';
	aLangKeys['es']['services']='Servicios';
	aLangKeys['es']['portfolio']='Portfolio';
	aLangKeys['es']['contactUs']='Contacto';
	//services
	aLangKeys['es']['serviceTitle1']='Desarrollo';
	aLangKeys['es']['serviceTitle2']='Aplicaciones Web';
	aLangKeys['es']['serviceTitle3']='Diseños Modernos';
	aLangKeys['es']['serviceTitle4']='Código Elegante';
	aLangKeys['es']['serviceTitle5']='Personalizado';
	aLangKeys['es']['serviceTitle6']='Ideas Creativas';
	aLangKeys['es']['service1']='traducir';
	aLangKeys['es']['service2']='traducir';
	aLangKeys['es']['service3']='traducir';
	aLangKeys['es']['service4']='traducir';
	aLangKeys['es']['service5']='traducir';
	aLangKeys['es']['service6']='traducir';
    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id
        // translate all translatable elements
        $('.translate').each(function(i){
          $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
        });
    } );
});
