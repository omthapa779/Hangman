var start;

function loading() {
  start = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("all").style.display = "block";
  document.getElementById("beck").style.display = "block";
}
var elem = document.documentElement;


function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { 
    document.msExitFullscreen();
  }
}
function startgame(){
  document.getElementById("all").style.display = "none";
  document.getElementsById("beck").style.display = "block";
} 
var alpha=new Array();
var alpha_index=0;
var bravo=new Array();
var bravo_index=0;
var running=0;
var failnum=0;
var advising=0;
function pick()
{
  var choice="";
  var blank=0;
  for (i=0; i<words[index].length; i++)
  {
    t=0;
    for(j=0; j<=alpha_index; j++)
    if(words[index].charAt(i)==alpha[j] || words[index].charAt(i)==alpha[j].toLowerCase()) t=1;
    if (t) choice+=words[index].charAt(i)+" ";
    else
    {
      choice+="_ ";
      blank=1;
    }
  }  
  document.f.word.value=choice;
  if (!blank)
  {
    document.f.tried.value="   === You Win! ===";
    document.f.score.value++;
    running=0;
  }
}
function new_word(form)
{
  if(!running)
  {
    running=1;
    failnum=0;
    form.lives.value=failnum;
    form.tried.value="";
    form.word.value="";
    index=Math.round(Math.random()*10000) % 100;
    alpha[0]=words[index].charAt(0);
    alpha[1]=words[index].charAt(words[index].length-1);
    alpha_index=1;
    bravo[0]=words[index].charAt(0);
    bravo[1]=words[index].charAt(words[index].length-1);
    bravo_index=1;
    pick();
  }
  else advise("A word is already in play!");
}
function seek(letter)
{
  if (!running) advise(".....Click GO to start !");
  else
  {
    t=0;
    for (i=0; i<=bravo_index; i++)
    {
      if (bravo[i]==letter || bravo[i]==letter.toLowerCase()) t=1;
    }
    if (!t)
    {
      document.f.tried.value+=letter+" "
      bravo_index++;
      bravo[bravo_index]=letter;
      for(i=0;i<words[index].length;i++)
      if(words[index].charAt(i)==letter || words[index].charAt(i)==letter.toLowerCase()) t=1;
      if(t)
      {
        alpha_index++;
        alpha[alpha_index]=letter;
      }
      else failnum++;
      document.f.lives.value=failnum;
      if (failnum==6)
      {
        document.f.tried.value="You lose - Click Start to try again";
        document.f.word.value=words[index];
        document.f.score.value--;
        running=0;
      }
      else pick();
    }
    else advise("Letter "+letter+" is already used!");
  }
}
function advise(msg)
{
  if (!advising)
  {
    advising=-1;
    savetext=document.f.tried.value;  
    document.f.tried.value=msg;
    window.setTimeout("document.f.tried.value=savetext; advising=0;",1000);
  }
}
var words = new Array("","acrimonious","allegiance","ameliorate","annihilate","antiseptic","articulate","authoritative","benefactor","boisterous","breakthrough","carcinogenic","censorious","chivalrous","collarbone","commendable","compendium","comprehensive","conclusive","conscientious","considerate","deferential","denouement","determinate","diffidence","disruption","earthenware","elliptical","entanglement","escutcheon","extinguish","extradition","fastidious","flamboyant","forethought","forthright","gregarious","handmaiden","honeysuckle","hypocritical","illustrious","infallible","lumberjack","mischievous","mollycoddle","nimbleness","nonplussed","obliterate","obsequious","obstreperous","opalescent","ostensible","pandemonium","paraphernalia","pawnbroker","pedestrian","peremptory","perfunctory","pernicious","perpetrate","personable","pickpocket","poltergeist","precipitous","predicament","preposterous","presumptuous","prevaricate","propensity","provisional","pugnacious","ramshackle","rattlesnake","reciprocate","recrimination","redoubtable","relinquish","remonstrate","repository","reprehensible","resolution","resplendent","restitution","retaliation","retribution","saccharine","salubrious","skulduggery","skyscraper","soothsayer","tearjerker","transcribe","turpentine","unassuming","underscore","undertaker","underwrite","unobtrusive","vernacular","waterfront","watertight");

