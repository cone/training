arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# ====== Read array ======
puts arr[-1]
# => 9
puts '-----'

puts arr[1..-3]
# => 2 3 4 5 6 7
puts '-----'

# Starting from index 4, take 3 elements
puts arr[4, 3]
# => 5 6 7
puts '-----'

# ======= Product of two arrays ========
a = [1, 2, 3]
b = [4, 5, 6]
puts a.product(b)
# => [[1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6]]
puts '-----'

# ======= Select ========
puts arr.select {|n| n % 2 == 0}
# => [2, 4, 6, 8]
# The variation "select!" modifies the array instead of returning a new one
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr2.keep_if {|n| n % 2 == 0} # same as select!
puts '-----'

# ======= Intersection ========
c = [5, 2, 9]
puts a.intersection(c)
# => [2]
puts a.intersect?(c)
# => true

# ====== 
