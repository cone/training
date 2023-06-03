def sort(list)
  (1...list.length).each do |index|
    current_value = list[index]
    previous_index = index - 1

    # to reverse, change ">" for "<" in "list[previous_index] > current_value"  
    while previous_index >= 0 && list[previous_index] > current_value
      list[previous_index + 1] = list[previous_index]
      previous_index -= 1
    end

    list[previous_index + 1] = current_value
  end

  list
end

list = [5, 2, 4, 6, 1, 3]
puts sort(list)
