firstMissingPositive = function(A){
    let missingNum=1;
    A=A.sort((a,b)=>{return a-b})
    A.forEach((num)=>{
        if(num > 0 && missingNum === num){
            missingNum = num + 1;
        }
    })
    return a ;
}