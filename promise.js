const PENDDING = 'pendding';
const REJECTED = "rejected";
const FULLFILLED ="fullfilled";
const isFunction = (fn) => typeof fn ==='function';
class MyPromise {
    constructor(handle){
        if(!typeof(handle)){
            throw new Error('MyPromise must accept a function as a parameter')
        }
        this.status = PENDDING;
        this._value = undefined;
        try {
            handle(this._resolve.bind(this) , this._reject.bind(this)); 
        } catch (error) {
            this._reject(error)
        }
    }
   
    _resolve(val){
        if(this.status !== PENDDING) return ;
        this.status = FULLFILLED;
        this._value = val;
    }
    _reject(err){
        if (this._status !== PENDING) return
        this._status = REJECTED
        this._value = err
    }
}