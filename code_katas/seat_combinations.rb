# Print the possible combinations
# | 1 | (2) |
# | 3 | 4   |
# | 5 | (6) |
# | 7 | 8   |
# () means is occupied
# rules:
# - next to each other
# - above and below
# - The fist element in the array is the number of seats
#
# seat_combinations([8, 2, 6])

def seat_combinations(occupied_seats)
  combinations = []
  total_seats = occupied_seats.shift
  total_seats.times do |seat_index|
    seat = seat_index + 1
    top_neighbour = seat - 2
    bottom_neighbour = seat + 2
    left_neighbour = seat - 1
    right_neighbour = seat + 1
    if top_neighbour >= 1 && !occupied_seats.include?(seat) && !occupied_seats.include?(top_neighbour)
      combinations << [top_neighbour, seat]
    end
    if bottom_neighbour <= total_seats && !occupied_seats.include?(seat) && !occupied_seats.include?(bottom_neighbour)
      combinations << [seat, bottom_neighbour]
    end
    if left_neighbour >= 1 && seat % 2 == 0 && !occupied_seats.include?(seat) && !occupied_seats.include?(left_neighbour)
      combinations << [left_neighbour, seat]
    end
    if right_neighbour <= 8 && (seat - 1) % 2 == 0 && !occupied_seats.include?(seat) && !occupied_seats.include?(right_neighbour)
      combinations << [seat, right_neighbour]
    end
  end
  combinations.uniq
end

puts seat_combinations([8, 2, 6]).inspect
# => [[1, 3], [3, 4], [3, 5], [5, 7], [7, 8]]
