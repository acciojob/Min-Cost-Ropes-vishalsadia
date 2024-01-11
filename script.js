import heapq

def mincost(arr):
    if not arr or len(arr) == 1:
        return 0

    # Convert the array to a min heap
    heapq.heapify(arr)

    total_cost = 0

    # Connect ropes until there is only one rope left in the heap
    while len(arr) > 1:
        # Extract the two smallest ropes
        rope1 = heapq.heappop(arr)
        rope2 = heapq.heappop(arr)

        # Connect the ropes and add the cost to the total
        current_cost = rope1 + rope2
        total_cost += current_cost

        # Insert the connected rope back into the heap
        heapq.heappush(arr, current_cost)

    return total_cost

# Examples
print(mincost([4, 3, 2, 6]))   # Output: 29
print(mincost([1, 2, 3, 4, 5]))   # Output: 33
