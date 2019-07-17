window.onload=function() {

      function estValide(button){
          return button.innerHTML.length == 0;
      }
      function setSymbol (btn, setSymbol){
          btn.innerHTML=innerHTML = setSymbol;
      }
function rechercherVainqueurs(pions,joueurs,currentTurn){
    if (pions[0].innerHTML == joueurs[currentTurn]&&
        pions[1].innerHTML == joueurs[currentTurn]&&
        pions[2].innerHTML == joueurs[currentTurn])
        return true;
    if (pions[3].innerHTML == joueurs[currentTurn]&&
        pions[4].innerHTML == joueurs[currentTurn]&&
        pions[5].innerHTML == joueurs[currentTurn])
        return true;
    if (pions[6].innerHTML == joueurs[currentTurn]&&
        pions[7].innerHTML == joueurs[currentTurn]&&
        pions[8].innerHTML == joueurs[currentTurn])
        return true;
    if (pions[0].innerHTML == joueurs[currentTurn]&&
        pions[3].innerHTML == joueurs[currentTurn]&&
        pions[6].innerHTML == joueurs[currentTurn])
        return true;
    if (pions[1].innerHTML == joueurs[currentTurn]&&
        pions[4].innerHTML == joueurs[currentTurn]&&
        pions[7].innerHTML == joueurs[currentTurn])
        return true;
    if (pions[2].innerHTML == joueurs[currentTurn]&&
        pions[5].innerHTML == joueurs[currentTurn]&&
        pions[8].innerHTML == joueurs[currentTurn])
        return true;

    if (pions[0].innerHTML == joueurs[currentTurn]&&
        pions[4].innerHTML == joueurs[currentTurn]&&
        pions[8].innerHTML == joueurs[currentTurn])
        return true;
    
    if (pions[2].innerHTML == joueurs[currentTurn]&&
        pions[4].innerHTML == joueurs[currentTurn]&&
        pions[6].innerHTML == joueurs[currentTurn])
        return true;


    }

    function tableauEstPlein(pions){
        for (var i =0, len= pions.length; i< pions.length; i++){
            if(pions[i].innerHTML.length == 0)
            return false;
        } 
        return true;
    }


      var Afficheur=function(element){
          var display = element;

          function setText(message){
              display.innerHTML = message;
          }
          return{sendMessage :setText};
      }
      function main(){
          var pions = document.querySelectorAll("#jeu button");
          var joueurs = ['x','o'];
          var currentTurn = 0;
          var jeuEstFini = false;
          var afficheur = new Afficheur(document.querySelector("#gameStatus"));

          afficheur.sendMessage("Vous pouvez commencer.<br/>Joueur "+joueurs[currentTurn]+" c'est votre tour.");

          for (var i = 0, len= pions.length; i< pions.length; i++){
              pions[i].addEventListener("click",function(){
            
            if(jeuEstFini)
            return;
            if (!estValide(this)){
                afficheur.sendMessage("déplacement invalide");


            }else{
                setSymbol(this, joueurs[currentTurn]);
                jeuEstFini =rechercherVainqueurs(pions,joueurs,currentTurn);

                //le jeu est terminé( quelqu'un a gagné)

                if( jeuEstFini){
                    afficheur.sendMessage("joueur "+joueurs[currentTurn]+" a gagné !");
                    return;

                }

                //le jeu est fini ( Match nul)
                if(tableauEstPlein(pions)){
                    afficheur.sendMessage("Match nul !!!");
                    return;
                }
                
                //Le jeu n'est pas encore fini

                currentTurn = currentTurn ^ 1;
                afficheur.sendMessage("joueur " +joueurs [currentTurn]+ " à votre tour!" );
            }
              });


          }
      }
      main();
    }