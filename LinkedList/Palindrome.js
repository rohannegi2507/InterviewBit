function palindromeCheck (A){
    let arr=[];
    while(A){
        arr.push(A.data);
        A= A.next;
    }
    // We can not compare two arrays directly
    return [...arr].join() === arr.reverse().join() ?1:0;
}

console.log(palindromeCheck([1,2,3]))
console.log(palindromeCheck([1,2,1]))