function linearSearch(arr,n,x){
    for(let i =0;i<n;i++){
        if(arr[i] === x){
            return i;
        }
        
    }
    return -1
}
let arr = [2,3,4,10,40];
let x = 10;
let n= arr.length;

let result = linearSearch(arr,n,x);

(result == -1)?console.log("Element is not present in the array."):
console.log("Element is present at index"+result);