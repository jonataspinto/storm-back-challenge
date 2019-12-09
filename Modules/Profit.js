const Profit = (nums)=>{
    let min = Math.min.apply(null, nums)
    let posMin
    let transProfit= []
    let maxProfit 

    nums.forEach((pos, index)=>{
        if(pos === min){
            posMin = index
        }        
    })
    
    for(let i = posMin; i<= nums.length; i++){
        if(nums[i] - min > min){
            let max = nums[i] - min
            transProfit.push(max)
        }
    }

    function Max(arr) {
        var len = arr.length;
        var max = -Infinity;
        while (len--) {
          if (arr[len] > max) {
            max = arr[len];
          }
        }
        return max;
    }

    maxProfit = Max(transProfit)
    if(maxProfit === -Infinity){
        console.log(0)
    }else{
        console.log(maxProfit)
    }
}
module.exports = Profit