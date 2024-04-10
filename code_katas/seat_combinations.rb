@combinations = [
  [[1, 2], [1, 3]],
  [[1, 2], [2, 4]],
  [[1, 3], [3, 4]],
  [[2, 4], [3, 4], [4, 6]],
  [[3, 5], [5, 6], [5, 7]],
  [[4, 6], [5, 6], [6, 8]],
  [[5, 7], [7, 8]],
  [[7, 8], [6, 8]],
]

def seat_combinations(occupied)
  result = []

  @combinations.each do |value|
    value.each do |inner|
      result << inner if !(inner.intersection(occupied)).any?
    end
  end

  result.uniq
end

puts seat_combinations([2, 6]).inspect
