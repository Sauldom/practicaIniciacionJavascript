
const randomPoint = Math.floor(Math.random() * 2) + 1;
const players=['Alberto Casero', 'David Jiménez','Javier de Miguel', 'Eduardo Aguilar'];


const createMatch =  ((player1, player2) =>{
    let game = {
       jugador1:{
           nombre: player1,
           marcador:0,
           puntos : [0,15,30,40,'win', 'deuce', 'ventaja'],
           rondas:0,
           juegos:0
       },
       jugador2:{
           nombre: player2,
           marcador:0,
           puntos:[0,15,30,40,'win', 'deuce', 'ventaja'],
           rondas:0,
           juegos:0
       },
       win: false,
       deuce:false,
       winGame: false,
       winner:'',

       pointWonBy: pointWonBy = ((player)=>{
           
           if (player ===1){
               game.jugador1.marcador +=1;
            }else if (player ===2){
             game.jugador2.marcador +=1;
            }else{
             console.log('El numero introducido es incorrecto introduzca 1 o 2 para puntuar jugador');
            };                   
            
            if(game.checkDeuce()){
               if (game.jugador1.marcador===6 && game.jugador2.marcador===6){
                   game.jugador1.marcador-=1;
                   game.jugador2.marcador-=1;
                   console.log(`Los jugadores vuelve a deuce`);
               }else  if(game.jugador1.marcador===7){
                   game.jugador1.marcador =4;
                   game.deuce=false;
               }else if(game.jugador2.marcador ===7){
                   game.jugador2.marcador=4;
                   game.deuce=false;
               }
            }
           

           
           game.checkWinRound();
           game.checkWinGame();
           game.checkWinMatch();            
        }),

       getCurrentRoundScore: getCurrentRoundScore =(()=>{
           console.log(`Marcador ${game.jugador1.nombre}  ${game.jugador1.puntos[game.jugador1.marcador]}  -  ${game.jugador2.puntos[game.jugador2.marcador]}  ${game.jugador2.nombre}  `);
       }),

       getRoundScore: getRoundScore = (()=>{
           console.log(`Rondas ${game.jugador1.nombre}  ${game.jugador1.rondas}  -  ${game.jugador2.rondas}  ${game.jugador2.nombre}  `);
       }),

       getMatchScore : getMatchScore = (()=>{
           console.log(`Juegos ${game.jugador1.nombre}  ${game.jugador1.juegos}  -  ${game.jugador2.juegos}  ${game.jugador2.nombre}  `);
       }),

       checkWinRound: checkWinRound = (()=>{
           
           if (game.jugador1.marcador === 4 ){
               game.jugador1.rondas +=1;
               console.log(`#####El jugador ${game.jugador1.nombre} gana la ronda#####`);
               game.win=true;
               
           }else if(game.jugador2.marcador ===4){
               game.jugador2.rondas+=1;
               console.log(`#####El jugador ${game.jugador2.nombre} gana la ronda#####`);
               game.win=true;                
           }
           if (game.win===true){
               game.resetMarcador();
               
           }
       }),
       resetMarcador: resetMarcador = (()=>{
           game.jugador1.marcador =0;
           game.jugador2.marcador=0;

           game.win=false;
       }),
       checkDeuce: checkDeuce = (()=>{
           
           if(game.jugador1.marcador === 3 && game.jugador2.marcador===3){
               game.deuce=true;
               game.jugador1.marcador=5;
               game.jugador2.marcador=5;
           }
           return game.deuce;            

       }),
       checkWinGame:checkWinGame=(()=>{
           
           if (game.jugador1.rondas >=4 || game.jugador2.rondas >=4){
               if(Math.abs(game.jugador1.rondas-game.jugador2.rondas)>=2 || game.jugador1.rondas===7 || game.jugador2.rondas===7){
                   if (game.jugador1.rondas>game.jugador2.rondas){
                       console.log(`*****Ha ganado el juego el jugador1*****`);
                       game.jugador1.juegos +=1;
                       game.resetRondas();
                   }else{
                       console.log('*****Ha ganado el juego el jugador 2*****')
                       game.jugador2.juegos+=1;
                       game.resetRondas();
                   }
               }
           }
       }),
       resetRondas:resetRondas =(()=>{
           game.jugador1.rondas =0;
           game.jugador2.rondas =0;
       }),
       checkWinMatch: checkWinMatch = (()=>{
           if(game.jugador1.juegos ===2){
               console.log(`------El jugador ${game.jugador1.nombre} gana la partida------`);
               console.log(`La partida va a ser reseteada`);
               game.winGame=true;
               game.winner =game.jugador1.nombre;
               game.resetMatch();
               
               
           } else if(game.jugador2.juegos ===2){
               console.log(`------El jugador ${game.jugador2.nombre} gana la partida------`);
               console.log(`La partida va a ser reseteada`);
               game.winGame=true;
               game.winner =game.jugador2.nombre;
               game.resetMatch();
               
               
           }
       }),
       resetMatch: resetMatch = (()=>{
           game.jugador1.marcador=0;
           game.jugador1.rondas=0;            
           game.jugador1.juegos=0;
           game.jugador2.marcador=0;
           game.jugador2.rondas=0;
           game.jugador2.juegos=0;

       }),


    };
   
    
   return game;
});



const createPlayOff = (jugadores)=>{
    
    const game1 = createMatch(jugadores[0], jugadores[1]);
    console.log('|||||partida 1 creada|||||');
   
    let index =0;
    while(game1.winner===''){
        game1.pointWonBy(Math.floor(Math.random() * 2) + 1);
        game1.getCurrentRoundScore();
        index+=1;
        
        if (index%5===0){
            game1.getRoundScore();
            game1.getMatchScore();
        }
               
    }
    const game2 = createMatch(jugadores[2], jugadores[3]);
    console.log('|||||partida 2 creada|||||');
    index=0;
    while(game2.winner===''){
        game2.pointWonBy(Math.floor(Math.random() * 2) + 1);
        game2.getCurrentRoundScore();
        index+=1;
        
        if (index%5===0){
            game2.getRoundScore();
            game2.getMatchScore();
        }
               
    }
    

    const final = createMatch(game1.winner, game2.winner);
    console.log('|||||Gran Final|||||');
    console.log('|||||Gran Final|||||');
    console.log('|||||Gran Final|||||');
    console.log(`entre ${game1.winner}      y       ${game2.winner}`);

    index=0;
    while(final.winner===''){
        final.pointWonBy(Math.floor(Math.random() * 2) + 1);
        final.getCurrentRoundScore();
        index+=1;
        
        if (index%5===0){
            final.getRoundScore();
            final.getMatchScore();
        }       
      
    }
    console.log(`===========El ganador es: ${final.winner}  ===========`);
    console.log(`===========El ganador es: ${final.winner}  ===========`);      
    console.log(`===========El ganador es: ${final.winner}  ===========`);    
}

const playOff = createPlayOff(players);
console.log(playOff);

