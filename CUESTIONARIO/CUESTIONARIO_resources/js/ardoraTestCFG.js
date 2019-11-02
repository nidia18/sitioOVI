//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=359; timeIni=359; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=40; scoreInc=10; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=5;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES LO LOGRASTE"; messageTime="5 MINUTOS"; messageError=""; messageErrorG=""; messageAttempts="2"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q1VFU1RJT05BUklP"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["QUE ES EL OVI?","QUE RELACION HAY ENTRE EL OVI Y AVA","COMPONENTES PARA CONSTRUIR UN OVI","CUALES SON LAS TRES UNIDADES QUE SE DIVIDE  EL SITIO WEB"];
var answers1=["MUVTIFVOIENPTkpVTlRPUyBVTiBDT05KVU5UTyBERSBSRUNVUlNPUyBESUdJVEFMRVM","MEVTICBVTiBCTE9H","MEVTIExBIFJFTEFDSU9OIERFIEVOVFJFIE9WSSBZIEFWQQ"];
var answers2=["MVVUSUxJWkFSIExPUyBSRUNVUlNPUyBESURBVElDT1M","MERFRklDTklDSU5FUw","MEFSVElDVUxPUyBZIFZJREVPUw"];
var answers3=["MU9CSkVUSVZPUyxDT05URU5JRE9TIFkgRUxFTUVOVE9T","MElERU5USUZJQ0FDSU9OIFkgQlVTUVVFREE","MERJU0XRT1MgSURFTlRJQ09T"];
var answers4=["MUlOVFJPRFVDSU9OIEFMIERJU0XRTyBERSBTSVRJT1MgV0VC","MUhUTUw1","MUNTUzM","MEdJVEhVQg","MEdJVEhVQiwgSFRNTA"];
var ans=[answers1,answers2,answers3,answers4];
var err=["ERROR","ERROR","ERROR",""];
var ima=["","","",""];
var mp4=["","","",""];
var ogv=["","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="CUESTIONARIO_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
