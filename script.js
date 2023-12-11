function mincost(arr)
{ 

	 # Convert the input array into a min-heap
    heapq.heapify(arr)
    
    # Initialize the total cost
    total_cost = 0
    
    # Continue until there is only one rope left
    while len(arr) > 1:
        # Extract the two smallest ropes from the heap
        rope1 = heapq.heappop(arr)
        rope2 = heapq.heappop(arr)
        
        # Calculate the cost of merging the two ropes
        cost = rope1 + rope2
        
        # Add the cost to the total cost
        total_cost += cost
        
        # Add the merged rope back to the heap
        heapq.heappush(arr, cost)
    
    # The final result is the total cost
    return total_cost

//write your code here
// return the min cost
  
}

module.exports=mincost;
