def merge(numbers)
  num_elements = numbers.length
  if num_elements <= 1
    return numbers
  end

  half_of_elements = (num_elements / 2).round

  sorted_left = merge(numbers.take(half_of_elements))
  sorted_right = merge(numbers.drop(half_of_elements))

  sort(sorted_left, sorted_right, num_elements)
end

def sort(sorted_left, sorted_right, num_elements)
  left_index = 0
  right_index = 0
  narr = []

  (1..num_elements).each do
    right = sorted_right[right_index]
    left = sorted_left[left_index]

    if !right || ((right && left) && (left <= right))
      narr << sorted_left[left_index]
      left_index += 1
      next
    end

    if !left || ((right && left) && (left > right))
      narr << sorted_right[right_index]
      right_index += 1
    end
  end

  narr
end

result = merge([2, 4, 5, 7, 1, 2, 3, 6])

if result == [1, 2, 2, 3, 4, 5, 6, 7]
  puts 'Success!'
else
  puts 'Test failed :(', result
end
