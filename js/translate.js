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
	
	aLangKeys['en']['slayer11']='growth';
	aLangKeys['en']['slayer12']='development';
	aLangKeys['en']['slayer13']='experience';
	
	aLangKeys['en']['slayer21']='We are ';
	aLangKeys['en']['slayer22']='continuosly';
	aLangKeys['en']['slayer23']='working on ';
	aLangKeys['en']['slayer24']='making';
	aLangKeys['en']['slayer25']='FanLabs better';
	
	aLangKeys['en']['slayer31']='With';
	aLangKeys['en']['slayer32']='FanLabs on board';
	aLangKeys['en']['slayer34']='you will';
	aLangKeys['en']['slayer35']='make your business run smooth';
	
	aLangKeys['en']['aboutus1']='We are ';	
	aLangKeys['en']['aboutus2']='FanLabs';	
	aLangKeys['en']['aboutus3']='We are a close team of ';	
	aLangKeys['en']['aboutus4']='creatives, designers & developers ';	
	aLangKeys['en']['aboutus5']='who work together to create beautiful, engaging digital experiences. We enjoy finding solutions to  ';	
	aLangKeys['en']['aboutus6']='your problems.';	
	aLangKeys['en']['aboutus7']='What do ';	
	aLangKeys['en']['aboutus8']='we';	
	aLangKeys['en']['aboutus9']='actually do?';	
	aLangKeys['en']['aboutus10']='Web Design';
	aLangKeys['en']['aboutus11']='Programming';
	aLangKeys['en']['aboutus12']='UI / UX';
	aLangKeys['en']['aboutus13']='Fun';
	aLangKeys['en']['aboutus14']='Our ';
	aLangKeys['en']['aboutus15']='Strategy';
	aLangKeys['en']['aboutus16']='Responsibility';	
	aLangKeys['en']['aboutus17']='We only work with very responsible developers, who will give the most of them to achieve the best results possible.';
	aLangKeys['en']['aboutus18']='Team Working';
	aLangKeys['en']['aboutus19']='We have co-located teams that will work together in your project. Communication is one of the keys of success in Agile projects, so we need highly comunnicated teams, with very good soft skills.';
	aLangKeys['en']['aboutus20']='Innovation';
	aLangKeys['en']['aboutus21']='We know that each application can be improved. We work with you not only to develop your application, but to give some ideas about how your application could be better. We want your success, because that is our success.';
	aLangKeys['en']['aboutus22']='FanLabs ';
	aLangKeys['en']['aboutus23']='in numbers';
	aLangKeys['en']['aboutus24']='Cups of Coffee';
	aLangKeys['en']['aboutus25']='Thermo of Mate';
	aLangKeys['en']['aboutus26']='Beers';
	aLangKeys['en']['aboutus27']='Chess Game';
	aLangKeys['en']['aboutus28']='How';
	aLangKeys['en']['aboutus29']='We Do';
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
	aLangKeys['en']['team1']='Our ';
	aLangKeys['en']['team2']='Team';
	aLangKeys['en']['team3']='We are a ';
	aLangKeys['en']['team4']='team';
	aLangKeys['en']['team5']=' that ';
	aLangKeys['en']['team6']='love';
	aLangKeys['en']['team7']=' what we do!. We have different skills and we merge this skills to ';
	aLangKeys['en']['team8']='create';
	aLangKeys['en']['team9']=' a software ';
	aLangKeys['en']['team10']='robust, dynamic and friendly.';
	aLangKeys['en']['team11']='We ';
	aLangKeys['en']['team12']='are the ';
	aLangKeys['en']['team13']='team';
	aLangKeys['en']['team14']='Full Profile';
	aLangKeys['en']['team15']='Co-Founder & Developer';
	
	aLangKeys['en']['contact-us1']='Contact';
	aLangKeys['en']['contact-us1']='Us';
	
	aLangKeys['en']['contact-us2_1']='We are currently';
	aLangKeys['en']['contact-us2_2']='accepting';
	aLangKeys['en']['contact-us2_3']='new client projects';
	aLangKeys['en']['contact-us2_4']='We';
	aLangKeys['en']['contact-us2_5']='look forward to serving you.';
	aLangKeys['en']['contact-us2_6']='Feel free';
	aLangKeys['en']['contact-us2_7']='to ask your questions in the most convenient way for you.';
	
	aLangKeys['en']['sendEmail1']='Do you have any';
	aLangKeys['en']['sendEmail2']='idea';
	aLangKeys['en']['sendEmail3']='in mind';
	aLangKeys['en']['sendEmail4']='Contact us';
	aLangKeys['en']['sendEmail5']='we will give you the answer you expect.';
	aLangKeys['en']['formSendMessage']='Send Message';
	
	aLangKeys['en']['ourworktitle1']='Our';
	aLangKeys['en']['ourworktitle2']='Works';
	
	aLangKeys['en']['ourworkphrase1']='Nothing in the world worthwhile is achieved without';
	aLangKeys['en']['ourworkphrase2']='passion';
	
	aLangKeys['en']['phrase1']='Science is what we understand well enough to explain to a computer. Art is everything else we do.';
	aLangKeys['en']['phrase2']='Good programmers use their brains, but good guidelines save us having to think out every case.';
	aLangKeys['en']['phrase3']='You can’t have great software without a great team, and most software teams behave like dysfunctional families.';

	aLangKeys['en']['howWeDo1']='Individuals and interactions';
	aLangKeys['en']['howWeDo2']='over processes and tools';
	aLangKeys['en']['howWeDo3']='Working software';
	aLangKeys['en']['howWeDo4']='over comprehensive documentation';
	aLangKeys['en']['howWeDo5']='Customer collaboration';
	aLangKeys['en']['howWeDo6']='over contract negotiation';
	aLangKeys['en']['howWeDo7']='Responding to change';
	aLangKeys['en']['howWeDo8']='over following a plan';
                           

	//Spanish
	aLangKeys['es']['home']='Principal';
	aLangKeys['es']['aboutUs']='Sobre nosotros';
	aLangKeys['es']['team']='Nosotros';
	aLangKeys['es']['services']='Servicios';
	aLangKeys['es']['portfolio']='Portfolio';
	aLangKeys['es']['contactUs']='Contacto';

	aLangKeys['es']['slayer11']='crecimiento';
	aLangKeys['es']['slayer12']='desarrollo';
	aLangKeys['es']['slayer13']='experiencia';
	
	aLangKeys['es']['slayer21']='Estamos';
	aLangKeys['es']['slayer22']='continuamente';
	aLangKeys['es']['slayer23']='trabajando en';
	aLangKeys['es']['slayer24']='hacer';
	aLangKeys['es']['slayer25']='un mejor FanLabs';
	
	aLangKeys['es']['slayer31']='Con';
	aLangKeys['es']['slayer32']='FanLabs';
	aLangKeys['es']['slayer34']='vas';
	aLangKeys['es']['slayer35']='a lograr que tu negocio avance';

	aLangKeys['es']['aboutus1']='Nosotros somos ';	
	aLangKeys['es']['aboutus2']='FanLabs';	
	aLangKeys['es']['aboutus3']='Somos un equipo de ';	
	aLangKeys['es']['aboutus4']='creativos, diseñadores y programadores ';	
	aLangKeys['es']['aboutus5']='que trabajamos juntos para crear un hermosa solución. Nosotros disfrutamos encontrar soluciones para ';	
	aLangKeys['es']['aboutus6']='tus problemas.';	
	aLangKeys['es']['aboutus7']='¿Que hacemos ';	
	aLangKeys['es']['aboutus8']='nosotros';	
	aLangKeys['es']['aboutus9']='en la actualidad?';	
	aLangKeys['es']['aboutus10']='Diseño Web';
	aLangKeys['es']['aboutus11']='Programación';
	aLangKeys['es']['aboutus12']='UI/UX';
	aLangKeys['es']['aboutus13']='Diversión';
	aLangKeys['es']['aboutus14']='Nuestra ';
	aLangKeys['es']['aboutus15']='Estrategia';
	aLangKeys['es']['aboutus16']='Responsabilidad';	
	aLangKeys['es']['aboutus17']='Nosotros sólo trabajamos con desarrolladores muy responsables, que le darán lo mejor de si para lograr los mejores resultados posibles.';
	aLangKeys['es']['aboutus18']='Trabajo en Equipo';
	aLangKeys['es']['aboutus19']='Tenemos equipos que trabajarán juntos en su proyecto. La comunicación es una de las claves del éxito en los proyectos ágiles';
	aLangKeys['es']['aboutus20']='Innovación';
	aLangKeys['es']['aboutus21']='Sabemos que cada aplicación puede ser mejorada. Trabajamos con usted no sólo para desarrollar la aplicación, sino para dar algunas ideas acerca de cómo su aplicación podría ser mejor. Queremos que su éxito, porque ese es nuestro éxito.,';
	aLangKeys['es']['aboutus22']='FanLabs ';
	aLangKeys['es']['aboutus23']='en Números';
	aLangKeys['es']['aboutus24']='Tazas de Café';
	aLangKeys['es']['aboutus25']='Termos de Mate';
	aLangKeys['es']['aboutus26']='Cervezas';
	aLangKeys['es']['aboutus27']='Ajedrez';
	aLangKeys['es']['aboutus28']='Como';
	aLangKeys['es']['aboutus29']='Lo Hacemos';
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
	aLangKeys['es']['team1']='Nuestro ';
	aLangKeys['es']['team2']='Equipo';
	aLangKeys['es']['team3']='Somos un ';
	aLangKeys['es']['team4']='equipo';
	aLangKeys['es']['team5']=' que ';
	aLangKeys['es']['team6']='amamos';
	aLangKeys['es']['team7']=' lo que hacemos!. Contamos con diferentes habilidades y fusionamos estas habilidades para ';
	aLangKeys['es']['team8']='crear';
	aLangKeys['es']['team9']=' un software ';
	aLangKeys['es']['team10']='robusto, dinámico and amigable.';
	aLangKeys['es']['team11']='Nosotros ';
	aLangKeys['es']['team12']='somos el ';
	aLangKeys['es']['team13']='equipo';
	aLangKeys['es']['team14']='Perfil Completo';
	aLangKeys['es']['team15']='Co-Fundador & Programador';
	
	aLangKeys['es']['contact-us1']='Contacta';
	aLangKeys['es']['contact-us2']='con Nosotros';
	
	aLangKeys['es']['contact-us2_1']='Actualmente estamos';
	aLangKeys['es']['contact-us2_2']='aceptando';
	aLangKeys['es']['contact-us2_3']='nuevos proyectos';
	aLangKeys['es']['contact-us2_4']='Esperamos';
	aLangKeys['es']['contact-us2_5']='brindarle nuestro servicio.';
	aLangKeys['es']['contact-us2_6']='Sientase libre';
	aLangKeys['es']['contact-us2_7']='de preguntar de la forma mas conveniente para usted.';
	
	aLangKeys['es']['sendEmail1']='¿Tienes alguna';
	aLangKeys['es']['sendEmail2']='idea';
	aLangKeys['es']['sendEmail3']='en mente?';
	aLangKeys['es']['sendEmail4']='Contacta con nosotros';
	aLangKeys['es']['sendEmail5']='que tenemos la respuesta que usted esta esperando';
	aLangKeys['es']['formSendMessage']='Enviar mensaje';
	
	aLangKeys['es']['ourworktitle1']='Nuestros';
	aLangKeys['es']['ourworktitle2']='Trabajos';
	
	aLangKeys['es']['ourworkphrase1']='Nada en el mundo vale la pena si se consigue sin';
	aLangKeys['es']['ourworkphrase2']='pasion';

	aLangKeys['es']['phrase1']='La ciencia es lo que entendemos suficientemente bien como para explicar a un ordenador. Arte es todo lo que hacemos.';
	aLangKeys['es']['phrase2']='Los buenos programadores usan sus cerebros, pero buenas pautas a ahorrar nosotros tener que pensar en todos los casos.';
	aLangKeys['es']['phrase3']='No se puede tener un gran software sin un gran equipo, y la mayoría de los equipos de software se comportan como familias disfuncionales.';

	aLangKeys['es']['howWeDo1']='Individuos e interacciones';
	aLangKeys['es']['howWeDo2']='sobre procesos y herramientas';
	aLangKeys['es']['howWeDo3']='Software funcionando';
	aLangKeys['es']['howWeDo4']='sobre documentación detallada';
	aLangKeys['es']['howWeDo5']='Colaboración con el cliente';
	aLangKeys['es']['howWeDo6']='sobre negociación de contratos';
	aLangKeys['es']['howWeDo7']='Respuesta a los cambios';
	aLangKeys['es']['howWeDo8']='sobre seguimientos de un plan';


    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id
        // translate all translatable elements
        $('.translate').each(function(i){
          $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
        });
    } );
});
