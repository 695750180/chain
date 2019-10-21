class Chain {
    constructor(obj){
        this.current = obj;
        this.next = null;
    }

    run(scope,arg){
        let result = this.current.apply(scope,[arg]);
        if(result){
            console.log(`成功处理:${arg}  处理结果为：${result}`);
            return result;
        }else{
            console.log("递交给下一个:"+result);
            result = this.next.run(scope,arg);
            return result;
        }
    }

    setNext(obj){
        this.next = obj;
    }
}

export default Chain;