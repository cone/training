# Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

# if X[i] > X[j] then X[i] = X[i] - X[j]

# When no more transformations are possible, return its sum ("smallest possible sum").

# For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

# X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
# X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
# X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
# X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
# X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3

# My solution:

def solution(numbers)
  temp = []
  numbers.each.with_index do |n, index|
    next_index = index + 1 < numbers.size ? index + 1 : index - 1
    temp << n.gcd(numbers[next_index])
  end
  # it seems that the values of some random tests don't return a consistent
  # GCD, so that's why I take the minimum number of the array
  temp.min * numbers.size
  # As it seems that, if we sum up two numbers, the GCD is still consistent
  # so, we can just do: "numbers.reduce(:gcd) * numbers.size"
  # that is the answer from other user that finished te kata (that smart bastard xD)
end

# The reason:
# After failing the "Attemp" for test with big numerc values, I realized
# that I needed to make the numbers smaller. If not, a timeout was reached.

# I first thought about dividing the numbers by 2 until none of them could
# get smaller. However, tht would imply also try to divide them by 3, 5, 7, etc
# as not all of the bug numbers were divisible by two. After reflecting on that,
# I realized I was looking for the GCD(greatest common divisor) of the numbers.
# For instance, in the test: "solution([4, 16, 24])" the result should be "12"
# because after going through the process descibed in the kata we end up with: [4, 4, 4]
# and if we sum up those numbers we end up with "12". However, instead of going
# through that process, we can just get the GCD of those three numbers (4) and sum them up.
