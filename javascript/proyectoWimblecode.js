

jugadores = ['Alberto Casero', 'David Jiménez',    'Javier de Miguel', 'Eduardo Aguilar'];

//el que gana un partido pasa si gana el siguiente es el campeon

//el primero que gana 2 juegos pasa
/*ganar un juego:
    Debe ganar 4 rondas.
     Para que un juego se considere como victoria, debe tener una diferencia de 2
    con respecto al otro jugador cuando llegue a 4. Es decir, si el jugador 1 tiene
    4 rondas ganadas y el jugador 2 tiene 3, el jugador 1 aún no es considerado
    ganador. Tendría que ganar una quinta ronda.
-    El máximo de rondas es 7, en caso de un partido muy reñido

*/
/*
¿Como se gana una ronda? El sistema de puntuación es el siguiente:
- Cada jugador puede tener alguno de estos puntos en un juego: 0, 15, 30, 40.
Cada vez que un jugador se lleva un punto, la puntuación aumenta en este
orden: 0 -> 15 -> 30 -> 40 -> Ganas*.
- Si tienes 40 y ganas la siguiente tirada, ganas la ronda, pero hay reglas
especiales:
- Si ambos tienen 40 puntos, los jugadores están en "deuce" (empate).
- Si el juego está en "deuce", el ganador de un punto obtendrá ventaja
y si gana el siguiente punto ganaría la ronda.
- Si el jugador con ventaja gana la pelota, gana la ronda.
- Si el jugador sin ventaja gana, vuelven a estar en "deuce".
Wimblecode se parece a otro deporte llamado tenis pero no es igual, no confundir y
seguir las reglas mencionadas anteriormente. Ya que hay diferencias.
Funcionamiento del software a desarrollar
Nuestro cliente, nos dijo como debería de funcionar este software y nos dejo los métodos
que quiere para poder probarlo. Este sería el ejemplo que nos dio:
*/

const createMatch =  ((player1, player2) =>{
     let game = {
        jugador1:{
            nombre: player1,
            marcador:0,
            puntos : [0,15,30,40,'win', 'deuce', 'ventaja'],
            rondas:0,
            sets:0,
            juegos:0
        },
        jugador2:{
            nombre: player2,
            marcador:0,
            puntos:[0,15,30,40,'win', 'deuce', 'ventaja'],
            rondas:0,
            sets:0,
            juegos:0
        },
        win: false,

        pointWonBy: pointWonBy = ((player)=>{
            if (player ===1){
                game.jugador1.marcador +=1;
            }else if (player ===2){
                game.jugador2.marcador +=1;
            }else{
                console.log('El numero introducido es incorrecto introduzca 1 o 2 para puntuar jugador');
            };
            return game.checkWin();
         }),
         getCurrentRoundScore: getCurrentRoundScore =(()=>{
            console.log(` ${game.jugador1.nombre}  ${game.jugador1.puntos[game.jugador1.marcador]}  -  ${game.jugador2.puntos[game.jugador2.marcador]}  ${game.jugador2.nombre}  `);
        }),

        checkWin: checkWin = (()=>{
            
            if (game.jugador1.marcador === 4 ){
                game.jugador1.rondas +=1;
                console.log(`El jugador ${game.jugador1.nombre}`);
                game.win=true;
                
            }else if(game.jugador2.marcador ===4){
                game.jugador2.rondas+=1;
                console.log(`El jugador ${game.jugador1.nombre}`);
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

     };
    
     
    return game;
});



const game = createMatch('Saul', 'Aida');
console.log(game);
game.pointWonBy(1);
game.pointWonBy(1);
game.pointWonBy(1);
game.pointWonBy(2);
game.pointWonBy(2);
game.pointWonBy(1);

game.getCurrentRoundScore();