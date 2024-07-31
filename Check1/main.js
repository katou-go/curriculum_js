
//問1
let numbers = [2,5,12,13,15,18,22];

for (i=0; i<=numbers.length; i++){
    if(numbers[i]%2===0){
        console.log(numbers[i]+"は偶数です");
    }
}

//問2
class Car{

    constructor(gasorin,number){
        this.gasorin=gasorin;
        this.number=number;
    }

    getetNumGas(){
        console.log(`ガソリンは${this.gasorin}です。ナンバーは${this.number}です`)
    }
};
let nakami1 = new Car ("レギュラー",1102);
nakami1.getetNumGas();

let nakami2 = new Car ("ハイオク",4582);
nakami2.getetNumGas();

