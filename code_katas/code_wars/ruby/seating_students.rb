# Have the function SeatingStudents (arr) read the array of integers stored in arr
# which will be in the following format: [K, r1, r2, r3, ...) where K represents the number
# of desks in a classroom, and the rest of the Integers in the array will be in sorted order
# and will represent the desks that are already occupied. All of the desks will be arranged
# in 2 columns, where desk #1 is at the top left, desk #2 is at the top right, desk #3 is below #1,
#   desk #4 is below #2, etc.
# Your program should return the number of ways 2 students can be seated next to each other.
# This means 1 student is on the left and 1 student on the right, or 1 student is directly above
# or below the other student.

def seating_students(arr)
  result = []
  total_seats = arr.shift
  total_rows = total_seats / 2
  seat_count = 1
  total_rows.times do
    result << "left column, seat number: #{seat_count}" if !arr.include? seat_count
    seat_count += 1
    result << "right column, seat number: #{seat_count}" if !arr.include? seat_count
    seat_count += 1
  end
  result
end

puts seating_students([12, 2, 6, 7, 11]).inspect
# => [
#   "left column, seat number: 1",
#   "left column, seat number: 3",
#   "right column, seat number: 4",
#   "left column, seat number: 5",
#   "right column, seat number: 8",
#   "left column, seat number: 9",
#   "right column, seat number: 10",
#   "right column, seat number: 12"
# ]
