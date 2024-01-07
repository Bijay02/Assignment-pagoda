// 1.Given two numbers, return true if the sum of both numbers is less than 100.
// Otherwise return false.
const lessthan100 = (a,b)=>{
    if((a+b)<100){
        return true;
    }
    else{
        return false;
    }
}

console.log(lessthan100(3,4));