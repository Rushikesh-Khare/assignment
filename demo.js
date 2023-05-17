//  1. find the max element in an array

// const arr = [1,4,2,6,8]
// let i = 0
// let max = 0
// while(i<arr.length){
//     if(arr[i]>max){ // i = 4 arr[i] = 8 > 6
//         max = arr[i]  //max = 8
//     }
//     i++
// }

// console.log(max)

// 2. find the minimum element in an array

// const arr = [1,4,2,6,8]
// let i = 0
// let min = Number.MAX_VALUE
// while(i<arr.length){
//     if(arr[i]<min){ // i = 1; arr[i]  = 4  < min  = 1
//         min = arr[i]  //min = 1
//     }
//     i++
// }

// console.log(min)

// 3. find the second largest element in an array

// const arr = [1,4,12,8,2,6,10]

// let i = 0
// let second = 0;
// let max = 0  
// while(i<arr.length){
//     if(arr[i]>max){ 
//         second = max
//         max = arr[i]
        
//     }
//     if(arr[i]>second && arr[i]<max){
//         second = arr[i]
//     }

//     i++
// }

// console.log(second)

// 4. find the second smallest element in an array

// const arr = [1,4,2,6,8]
// let i = 0
// let secondMin = Number.MAX_VALUE
// let min = Number.MAX_VALUE
// while(i<arr.length){
//     if(arr[i]<min ){
    
//         min = arr[i]

//     }
//     // if(arr[i]>min){
//     //     secondMin = arr[i]
//     // }
//     if(arr[i]>min && arr[i]<secondMin){
//         secondMin = arr[i]

//     }

//     i++
// }

// console.log(secondMin)

// 10. find the number of odd elements in an array

// const arr = [1,5,6,7,3]
// let i = 0;
// count = 0;
// while(i<arr.length){
//     if(arr[i]%2!=0){
//         count++
//     }
//     i++
// }

// console.log(count)

// 9. find the number of even elements in an array

// const arr = [1,5,6,7,3]
// let i = 0;
// count = 0;
// while(i<arr.length){
//     if(arr[i]%2===0){
//         count++
//     }
//     i++
// }

// console.log(count)

// 8. find the sum of all odd elements in an array

// const arr = [1,5,6,7,3]
// let i = 0;
// oddSum = 0;
// while(i<arr.length){
//     if(arr[i]%2!=0){
//         oddSum += arr[i]
//     }
//     i++
// }

// console.log(oddSum)
// 7. find the sum of all even elements in an array

// const arr = [1,5,6,7,3]
// let i = 0;
// count = 0;
// while(i<arr.length){
//     if(arr[i]%2===0){
//         count += arr[i]
//     }
//     i++
// }

// console.log(count)

// 6. find the average of all elements in an array

// const arr = [1,5,6,7,3]
// let i = 0;
// sum = 0;
// while(i<arr.length){
    
//         sum += arr[i]
    
//     i++
// }
// avg = sum/arr.length
// console.log(avg)

// 5. find the sum of all elements in an array

const arr = [1,5,6,7,3]
let i = 0;
sum = 0;
while(i<arr.length){
    
        sum += arr[i]
    
    i++
}

console.log(sum)