export class Column {
    constructor(){
        this.token = [null, null, null, null, null, null];
    }
    isFull(){
        if(this.token[0]){
            return true;
        }else{
            return false;
        }
    }
    add(playerNumber){
        for( let i = this.token.length - 1; i >= 0; i--){
            if(!this.token[i]){
                this.token[i] = playerNumber;
                break;
            }
        }
    }
    getTokenAt(rowIdx){
        return this.token[rowIdx];
    }
}