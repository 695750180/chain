class Preferential {
    constructor(){
        this.more500 = 50;
        this.more300 = 20;
        this.more200 = 5;
    }

    full500(price){//满500减100
        
        if(price >= 500){
            return price - this.more500;
        }else{
            return false;
        }
    }

    full300(price){
        if(price >= 300){
            return price - this.more300;
        }else{
            return false;
        }
    }

    full200(price){
        if(price >= 200){
            return price - this.more200;
        }else{
            return false;
        }
    }

    normal(price){
        return price;
    }
}
export default Preferential;