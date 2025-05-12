def brute_force_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Return the index where the target is found
    return -1  # Return -1 if target is not found

# Example usage
data = [10, 25, 30, 45, 50, 65]
target_value = 45

result = brute_force_search(data, target_value)

if result != -1:
    print(f"Target {target_value} found at index {result}")
else:
    print(f"Target {target_value} not found in the list.")
