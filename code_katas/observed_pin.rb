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
PAD_ROW_SIZE = 3

def get_pins(observed)
  digits = observed.chars
  results = getNumberOptions(digits.shift);
  digits.each do |char|
    options = getNumberOptions(char)
    temp = []
    results.each do |last_chain|
      options.each do |new_char|
        temp << last_chain + new_char
      end
    end
    results = temp
  end
  results
end

def getNumberOptions(number)
  number = number.to_i
  return ['0', '8'] if number == 0

  top = (number - 3) > 0 ? number - 3 : nil
  left = (number - 1) % PAD_ROW_SIZE != 0 ? number - 1 : nil
  right = number % PAD_ROW_SIZE != 0 ? number + 1 : nil
  down = (number + 3) <= 9 ? number + 3 : nil
  down = '0' if number == 8

  res = [ top, left, number, right, down ].compact
  res.map(&:to_s)
end

puts get_pins('11')
