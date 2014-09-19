$(document).ready(function() {
	var aLangKeys=new Array();
	aLangKeys['en']=new Array();
	aLangKeys['es']=new Array();

	//English
	aLangKeys['en']['home']='Home';
	aLangKeys['en']['aboutUs']='About Us';
	aLangKeys['en']['team']='Team';
	aLangKeys['en']['services']='Services';
	aLangKeys['en']['portfolio']='Portfolio';
	aLangKeys['en']['contactUs']='Contact Us';	
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
	aLangKeys['en']['service7']='Our ';
	aLangKeys['en']['service8']='Services';	
	aLangKeys['en']['service9']='At FanLabs we want to offer widest and the ';
	aLangKeys['en']['service10']='most efficient services';
	aLangKeys['en']['service11']=' to your company.';
	aLangKeys['en']['service12']='Send us your email and we will ';
	aLangKeys['en']['service13']='contact you.';
	aLangKeys['en']['service14']='Join Us!';
	aLangKeys['en']['service15']='Send';
	aLangKeys['en']['contactus1']='Go on,';
	aLangKeys['en']['contactus2']=' contact us!';
	aLangKeys['en']['contactus3']='Read More';

	//Spanish
	aLangKeys['es']['home']='Principal';
	aLangKeys['es']['aboutUs']='Sobre nosotros';
	aLangKeys['es']['team']='Nosotros';
	aLangKeys['es']['services']='Servicios';
	aLangKeys['es']['portfolio']='Portfolio';
	aLangKeys['es']['contactUs']='Contacto';
	aLangKeys['es']['serviceTitle1']='Desarrollo';
	aLangKeys['es']['serviceTitle2']='Aplicaciones Web';
	aLangKeys['es']['serviceTitle3']='Diseños Modernos';
	aLangKeys['es']['serviceTitle4']='Código Elegante';
	aLangKeys['es']['serviceTitle5']='Personalizado';
	aLangKeys['es']['serviceTitle6']='Ideas Creativas';
	aLangKeys['es']['service1']='Somos un equipo fuerte y experimentado, capaz de desarrollar cualquier aplicación empleando las tecnologías más avanzadas.';
	aLangKeys['es']['service2']='Diseñamos y desarrollamos aplicaciones web de forma personalizadas tal como nuestros clientes lo desean.';
	aLangKeys['es']['service3']='Utilizamos técnicas de diseño web modernas para construir un único sitio web que se adapte a múltiples resoluciones de pantalla.';
	aLangKeys['es']['service4']='Trabajamos en busca de la más alta calidad y rendimiento en todos nuestros desarrollos.';
	aLangKeys['es']['service5']='Trabajamos con usted para explorar nuevas ideas, productos y servicios diseñados con amor y experiencias de usuario encantadoras.';
	aLangKeys['es']['service6']='Trabajamos con usted no sólo para desarrollar su aplicación, sino para aportar algunas ideas acerca de cómo su aplicación podría ser mejor.';
	aLangKeys['es']['service7']='nuestros ';
	aLangKeys['es']['service8']='Servicios';	
	aLangKeys['es']['service9']='En FanLabs queremos ofrecer a nuestros clientes ';
	aLangKeys['es']['service10']='todos los servicios de forma eficiente';
	aLangKeys['es']['service11']=' para su empresa.';
	aLangKeys['es']['service12']='Envíanos tu correo electrónico y nosotros nos';
	aLangKeys['es']['service13']=' contacteremos contigo.';
	aLangKeys['es']['service14']='Únetenos!';
	aLangKeys['es']['service15']='Enviar';
	aLangKeys['es']['contactus1']='Adelante,';
	aLangKeys['es']['contactus2']=' contactános!!';
	aLangKeys['es']['contactus3']='Leer Más';

    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id
        // translate all translatable elements
        $('.translate').each(function(i){
          $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
        });
    } );
});
