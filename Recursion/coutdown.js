// Funcion de countdown 

function countdown(n){
    //Caso base; cuando n llega a 0, termina 
    if(n === 0){
        console.log('Fin');
        return;
    }

    //Accion actual 
    console.log(n);

    //Llamada recursiva, reducir el problema 
    countdown(n-1)
}

countdown(5);