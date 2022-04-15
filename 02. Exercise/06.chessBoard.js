function chessBoard(num){

        let colour = "black";
        for(let i = 1; i <= num; i++){
            console.log('<div class="chessboard">')
            
            for(let j = 1; j <= num; j++){
                console.log('<div>');

                for(let k = 1; k <= num; k++){
                    console.log(`<span class=${colour}></span>`);
                    if(colour === "black"){
                        colour = "white"
                    } else {
                        colour = "black"
                    }
                }
                console.log('</div>');
            }
            console.log('</div>');
            
        }
    
}

chessBoard(3)