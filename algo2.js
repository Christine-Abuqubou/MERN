// we want to remove duplicate using two pointer that will go next to each other
var arr = [2,3,3,3,6,9,9];
var start =0;
var second= start+1;
while (second < arr.length){
    if (arr[start] !== arr[second]){
        start++;
        arr[start]= arr[second];
    }
    second++;
}
var result = arr.slice(0,start +1); // slice returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log(result);




var arr=[5,5,5,6,7,7];
var start=0
var second = start+1;
while (second<arr.length){
    if (arr[start] !== arr[second]){
        start ++;
    arr[start]= arr[second]; //why we do this because we want to overwrite the duplicate values
    }
    
 second ++;
    }
var res=arr.slice(0,start+1);
console.log(res);


//we can solve it by hashmap not a good solution why because it will take extra space

