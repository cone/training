# https://www.codewars.com/kata/58af1bb7ac7e31b192000020
# Can you compute a cube as a sum?
# In this Kata, you will be given a number n (where n >= 1) and your task is to find
# n consecutive odd numbers whose sum is exactly the cube of n.
# For example:
# n = 3, result = [7, 9, 11], because 7 + 9 + 11 = 27, the cube of 3.
# Note that there are only n = 3 elements in the array.

def cube_as_sums(n)
  # We take the average number for the cube of n.
  # For instance, if n=3 then the cube is 27 and the average is 9
  avg = n**3 / n # this is the same as n**2
  # We use this variable as an increment/decrement for each of the values
  # based in the averge number. We increase this number after each iteration by 2
  inc=-(n-1);
  result=[]
  # The number of items in the response array should be "n", so for each item, we add the increment.
  # For instance, in n=3 "inc" would be initially "-2" so, the result would be [9-2, 9+0, 9+2]
  n.times do
    result << (avg + inc)
    inc += 2
  end
  result
end

# An improved version of the above function
def cube_as_sums_improved(n)
  avg = n**2
  inc = n-1;
  (avg - inc .. avg + inc).step(2).to_a
end

# puts total = cube_as_sums(3)
# puts "sums: #{total.sum}"
# puts "--------------"
# puts total = cube_as_sums(4)
# puts "sums: #{total.sum}"
# puts "--------------"
# puts total = cube_as_sums(5)
# puts "sums: #{total.sum}"
# puts "--------------"
# puts total = cube_as_sums(6)
# puts "sums: #{total.sum}"
# puts "--------------"

puts total = cube_as_sums_improved(3)
puts "sums: #{total.sum}"
puts "--------------"
puts total = cube_as_sums_improved(4)
puts "sums: #{total.sum}"
puts "--------------"
puts total = cube_as_sums_improved(5)
puts "sums: #{total.sum}"
puts "--------------"
puts total = cube_as_sums_improved(6)
puts "sums: #{total.sum}"
puts "--------------"
