class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length)
        let prefix = 1
        let suffix = 1
        for(let i=0 ; i < nums.length;i++){
            res[i] = prefix //assining prefix value to respective index
            prefix *= nums[i] //producting value using current index for nextiteration assign in top 
        }
        for(let i=nums.length-1 ; i >= 0 ;i--){
            res[i] *= suffix //assining prefix value to respective index
            suffix *= nums[i] //producting value using current index for nextiteration assign in top 
        }return res
        
    }
    

}
