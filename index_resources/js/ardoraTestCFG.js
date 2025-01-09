//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=11; attempts=0; attemptsMax=0;
var score=0; scoreMax=22; scoreInc=2; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Iniciar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#FF8080"; colorText="#000000"; colorSele="#FF8080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=0; scoOkDo=1; scoWrongDo=0; scoMessage=""; scoPtos=20;
var fMenssage="'Times New Roman', Times, serif";
var fActi="'Times New Roman', Times, serif";
var fResp="'Times New Roman', Times, serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Felicitaciones "; messageTime="Se terminó el tiempo. "; messageError="Error!"; messageErrorG="Error!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#000000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["Es el lugar en el que puedes almacenar y acceder a todos tus archivos desde las nuves.","Esta herramienta utilizada a nivel mundial para mantener una comunicación más rápida entre los alumnos, padres, docentes y todos los que conforman la comunidad educativa.","Herramienta colaborativa, esta plataforma permite realizar una variedad de funciones, es muy  funcional para las videoconferencias, compartir archivos, chatear entre otras funciones,  esta en particular pertenece al ecosistema de Microsoft 365.","Esta plataforma ofrece una variedad de herramientas gratuitas que resultan extremadamente útiles para profesores y alumnos, como Drive, Docx, Form, entre otros.","Es una herramienta diseñada para apoyar a los docentes y estudiantes en la realización de sus clases de forma virtual. siendo una plataforma para la gestión del aprendizaje o Learning Management System.","Permite crear y editar documentos en línea y a la que se accede a través de una computadora o dispositivo conectado a internet. Con este procesador de textos, el usuario puede redactar documentos y escritos que se almacenan en la nube, es decir, en línea.","Es una herramienta que permite crear, editar y compartir presentaciones en línea","Las clases se imparten en tiempo real. Sin embargo, en una plataforma elearning, el aprendiz también puede recibir formaciones de forma asincrónica.","¿Cuál de estas herramientas ofrece plantillas prediseñadas para facilitar la creación de documentos, hojas de cálculo, presentaciones y formularios?","¿Qué herramienta está orientada a la comunicación por correo electrónico?","¿Qué es CANVAS LMS?"];
var answers2=["MURyaXZl","ME9uZSBEcml2ZQ==","MERyb3BveA=="];
var answers3=["MVdoYXRzQXBw","MEZhY2Vib29r","MExsYW1hZGFzIHRlbMOpZm9uaWNhcw=="];
var answers4=["MU1pY3Jvc29mdCBUZWFt","MEdvb2dsZSBmb3IgRWR1Y2F0aW9u","ME1pY29zb2Z0IDM2NQ=="];
var answers5=["MUdvb2dsZSBGb3IgRWR1Y2F0aW9u","ME1pY3Jvc29mdCBUZWFt","MERyaXZl","MEdvb2dsZSBDaHJvbWU="];
var answers6=["MUNsYXNzcm9vbQ==","ME1pY3Jvc2Z0IFRlYW0=","MEdvb2dsZQ=="];
var answers7=["MURvY3M=","MFdvcmQ=","MFdvcmQgZW4gTMOtbmVh"];
var answers8=["MVNsaWRl","MFBvd2VyUG9pbnQ=","MENhbnZh"];
var answers9=["MUF1bGEgdmlydHVhbA==","MENsYXNzcm9vbQ==","ME1pY3Jvc29mdCBUZWFt"];
var answers10=["MUdvb2dsZSBTaGVldHM=","MUdvb2dsZSBTbGlkZXM=","MUdvb2dsZSBGb3Jtcw==","MEdtYWls"];
var answers11=["MUdtYWls","MEdvb2dsZSBGb3Jtcw==","MEdvb2dsZSBTbGlkZXM=","MEdvb2dsZSBNZWV0"];
var answers12=["MVVuIHNpc3RlbWEgZGUgZ2VzdGnDs24gZGUgYXByZW5kaXphamU=","MFVuIGdlc3RvciBkZSBjb3JyZW9zIGVsZWN0csOzbmljb3M=","MFVuYSBoZXJyYW1pZW50YSBwYXJhIHZpZGVvbGxhbWFkYXM=","MFVuIGNyZWFkb3IgZGUgZm9ybXVsYXJpb3M="];
var ans=[answers2,answers3,answers4,answers5,answers6,answers7,answers8,answers9,answers10,answers11,answers12];
var err=["Error!","Error!","Error!","Error!","Error!","Error!","Error!","Error!","Error!","Error!","Error!"];
var ima=["","images__1_.png","Microsoft-Teams--So-beheben-Sie-Audio-Probleme__1_-0e4cf91444ff36e6.jpg","Sin_t__tulo-11.png","","Google_Docs_2020_Logo.svg.png","images.jpg","Importancia-de-aulas-virtuales.jpg","","",""];
var mp4=["","","","","","","","","","",""];
var ogv=["","","","","","","","","","",""];
var alt=["","","","","","","","","","",""];
var info=["","","","","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="index_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
var r_ans=[];var r_pos=[];var r_checks=[];var minSuccesses=11;
