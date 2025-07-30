function flipCoin(){
    return Math.random() < 0.2 ? 'Heads' : 'Tail'
}

function checkSide(){
    let count = 0;
    while(true){
        let side = flipCoin();
        count++;
        console.log(`${side}`)
        if(side === 'Heads'){
            console.log(`It took ${count} flips to get Heads`)
            break;
        }
        // else{
        //     flipCoin();
        // }
    }
}

checkSide();


