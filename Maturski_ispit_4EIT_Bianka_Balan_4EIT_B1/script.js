function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.data = imgs.name;
    expandImg.parentElement.style.display = "block";
  }
          function myFunction(img) {
            document.getElementById("expandedImg").src = img.src;
            document.getElementById("imgtext").data = img.name;
        }
        const descriptions = {
  "mapa.jpg": "Sedam svetskih čuda starog sveta su skup arhitektonskih dela koje su stari Grci, naročito u helenističkoj epohi, smatrali vrhuncem ljudske kreativnosti i genijalnosti.",
  "slika1.jpg": "Piramida se u Egiptu kao oblik građevine razvila iz prizemne pravokutne grobnice, mastabe, nazvane prema arapskoj riječi mastaba što znači klupa.",
  "slika2.jpg": "Kolosej, eliptični je amfiteatar u središtu grada Rima, istočno od Rimskoga foruma. Jedan je od simbola Rima, Rimskoga Carstva i općenito antičke arhitekture.",
  "slika3.jpg": "Petra je napušteni grad na području današnjeg Jordana, a u vreme antike je bio glavni grad Nabatejaca. Poznata je upravo po svojim helenističkim građevinama uklesanim u stene.",
  "slika4.jpg": "Čičen Ica je veliko arheološko nalazište na Jukatanu u Meksiku iz doba civilizacije Maja.UNESKO ga je proglasio svetskom baštinom, a 7. jula 2007. godine proglašen je za jedno od novih sedam svetskih čuda.",
  "slika5.jpg": "Hristos Spasitelj (port. Cristo Redentor) je skulptura koja se nalazi na brdu Korkovadu (port. Corcovado) pored Rio de Žaneira, u Brazilu i predstavlja Isusa Hrista.",
  "slika6.jpg": "Machu Picchu smešten na najvišem delu istočnih Andi u Peruu, ili tačnije, na istočnim padinama planinskog lanca iznad doline reke Urubamba i neposredno iznad naselja Aguas Calientes.",
  "slika7.jpg": "Tadž Mahal, je građevina u Agri u Indiji, izgrađena između 1631. i 1654. godine. Gradilo ju je 22.000 ljudi. Šah Džahan je naredio izgradnju ovog mauzoleja za svoju omiljenu ženu, Ardžumand Bano Begum, koja je poznatija kao Mumtaz Mahal.",
  "slika8.jpg": "Kineski zid je najveća građevina na svetu. Proteže se od stepa srednje Azije do Žutog mora, ukupnom dužinom od 8.851 km (glavni deo 2.450 km), visinom od 10 do 16 m, širinom od 8 m, predstavlja najduži zid na svetu, i najveći odbrambeni objekat.",
  "slika9.jpg": "Efes je antički grčki grad u današnjoj Turskoj. U njemu se nalazilo jedno od sedam svetskih čuda, hram posvećen grčkoj boginji Artemidi.Njegove brojne monumentalne zgrade uključivale su Celsusovu biblioteku i pozorište koje je moglo da primi 24.000 gledalaca."
};

function myFunction(img) {
  const mainImg = document.getElementById("expandedImg");
  const textBox = document.getElementById("imgtext");
  mainImg.src = img.src;
  const fileName = img.src.split("/").pop();
  textBox.textContent = descriptions[fileName] || "Opis nije dostupan.";
}