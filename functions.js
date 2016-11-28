function ChangeOnglet(onglet, contenu) 
{   
    document.getElementById('content_1').style.display = 'none';
    document.getElementById('content_2').style.display = 'none';
    document.getElementById('content_3').style.display = 'none';   
	document.getElementById('content_4').style.display = 'none'; 
	document.getElementById('content_5').style.display = 'none'; 
    document.getElementById(contenu).style.display = 'block';       
 
    document.getElementsByClass('tab_1').className = '';
    document.getElementsByClass('tab_2').className = '';
    document.getElementsByClass('tab_3').className = '';     
	document.getElementsByClass('tab_4').className = ''; 
	document.getElementsByClass('tab_5').className = ''; 
    document.getElementsByClass(onglet).className = 'active';   
}