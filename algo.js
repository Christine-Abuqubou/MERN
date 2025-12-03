var srt = "radder";
// the string is an array of characters

var left =0;
var right = structuredClone.length -1;

while (left < right){
    if (srt[left] == srt[right]){
        left++;
        right--;
    }
    return true;
}
return false;

// question two
var str ="Ayham";
// we want to reverese the string
var left =0;
var right=str.length -1;
while (left < right){
    var temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
}
console.log(str);


var str1 ="christine";
var left = 0;
var right = str1.length-1;
while (left <right){
    var temp =str1[left];
    str1[left]=str1[tigth];
    str1[right]=temp;
    left ++;
    right -- ;

}
console.log(str1);


// question three
var str2 ="hello world";
var words = str2.split(" "); // split the string into an array of words
var left =0;
var right = words.length -1;
while (left<right){
    var temp = words[left];
    words[left]=words[right];
    words[right]= temp;
    left ++;
    right -- ;
    }
    console.log(words);
    // why we use split here because we want to reverse the words not the characters



    // we have array  we need to find two numbers that their sum is equal to target
    var arr = [2,7,11,13,20];
    var left =0;
    var right = arr.length -1;
    var target=5;

    while (left < right ){
        
        let sum = arr[left] + arr[right]
        if (sum> target){
            right --;
        }
        if(sum < target){
            left ++;
        }
        if (sum == target)
            return (arr[left],arr[right])
        left ++;
        right --;
    }
    console.log("target");



