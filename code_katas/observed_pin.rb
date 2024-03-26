# The keypad has the following layout:

# ┌───┬───┬───┐
# │ 1 │ 2 │ 3 │
# ├───┼───┼───┤
# │ 4 │ 5 │ 6 │
# ├───┼───┼───┤
# │ 7 │ 8 │ 9 │
# └───┼───┼───┘
#     │ 0 │
#     └───┘

# The PIN could be 1357, but it is possible that each of the digits
# could actually be another adjacent digit (horizontally or vertically, but not diagonally).
# E.g. instead of the 1 it could also be the 2 or 4.
# And instead of the 5 it could also be the 2, 4, 6 or 8.
ROW_SIZE = 3
combinations = []

def get_pins(observed)
  getNumberOptions(observed.to_i)
end

# def get_pins2(observed)
#   observed.chars.each do |char|
#     options = getNumberOptions(char.to_i)
#     options.each do |n|

#     end
#   end
# end

def getNumberOptions(number)
  return [0, 8] if number == 0

  top = (number - 3) > 0 ? number - 3 : nil
  left = (number - 1) % ROW_SIZE != 0 ? number - 1 : nil
  right = number % ROW_SIZE != 0 ? number + 1: nil
  down = (number + 3) <= 9 ? number + 3 : nil
  down = 0 if number == 8

  [ top, left, number, right, down ].compact
end

puts "-----(0)-----"
puts get_pins('0') == [0, 8] ? "Success!" : "Failed :'("
puts "-----(1)-----"
puts get_pins('1') == [1, 2, 4] ? "Success!" : "Failed :'("
puts "-----(2)-----"
puts get_pins('2') == [1, 2, 3, 5] ? "Success!" : "Failed :'("
puts "-----(3)-----"
puts get_pins('3') == [2, 3, 6] ? "Success!" : "Failed :'("
puts "-----(4)-----"
puts get_pins('4') == [1, 4, 5, 7] ? "Success!" : "Failed :'("
puts "-----(5)-----"
puts get_pins('5') == [2, 4, 5, 6, 8] ? "Success!" : "Failed :'("
puts "-----(6)-----"
puts get_pins('6') == [3, 5, 6, 9] ? "Success!" : "Failed :'("
puts "-----(7)-----"
puts get_pins('7') == [4, 7, 8] ? "Success!" : "Failed :'("
puts "-----(8)-----"
puts get_pins('8') == [5, 7, 8, 9, 0] ? "Success!" : "Failed :'("
