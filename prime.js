function prime(num){
    if(num<0 ||num==undefined){
        return false
    }
    for(let i=2;i<=num**0.5;i++){
        if(num%i==0){
            return false
        }
    }
    return true
}
