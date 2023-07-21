function searchBinary(arr, l, r, x) {
    l > r ?? -1;
    
    let m = Math.floor((l + r) / 2);

    if(arr[m] == x) {
        return m;
    }  
    
    if(arr[m] < x) {
        return searchBinary(arr, m + 1, r, x);
    } else {
        return searchBinary(arr, l, m - 1 , x)
    }

}

const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

console.log(searchBinary(arr, 0, arr.length - 1, 8));