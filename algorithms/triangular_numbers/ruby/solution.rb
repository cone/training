# I couldn't solve this problem :'( but I understood how to solve it
# once I saw other people's answers.

# The problem is that, given a number "n" we need to find two numbers which
# product is equal to the triangular number of "n" (1 + 2 + 3 + 4 + ... + n)
# minus those two numbers.

# We need to return the numbers like this:
# [ [15, 21], [21, 15] ]

# We can represent that with the following equation:

# x * y = total - x - y

# We can find the triangular number of "n" with the following formula:

# total = (n * (n + 1)) / 2

# Now we can solve the first equation for "m":

# x * y = total - x - y
# x * y + y = total - x
# y (x + 1) = total - x
# y = (total - x) / (x + 1)

# Now, how do we recognize the numbers we are looking for, using that equation?
# Well, we will know when the result of the equation has no decimals. That means
# we found two whole numbers that give the expected result.

# Now, the code:

def removNb(n)
  total = (n * (n + 1)) / 2
  pairs = []
  
  (1..n).each do |x|
    y = ((total - x) / (x + 1).to_f) # we need to force a float result or it will be rounded
    if y == y.to_i && y <= n
      pairs << [x, y.to_i]
    end
  end

  return pairs
end

puts removNb(26).join(' ')
