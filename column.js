export class Column {
    constructor(){
        this.tokens = [null, null, null, null, null, null];
    }
    isFull(){
        if(this.tokens[0]){
            return true;
        }else{
            return false;
        }
    }
    add(playerNumber){
        for( let i = this.tokens.length - 1; i >= 0; i--){
            if(!this.tokens[i]){
                this.tokens[i] = playerNumber;
                break;
            }
        }
    }
    getTokenAt(rowIdx){
        return this.tokens[rowIdx];
    }
}
