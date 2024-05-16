# frozen_string_literal: true

# Time complexity: O(M x N).
# Auxiliary Space: O(M x N), as implicit stack is created due to recursion

@screen = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 0, 1, 1],
  [1, 2, 2, 2, 2, 0, 1, 0],
  [1, 1, 1, 2, 2, 0, 1, 0],
  [1, 1, 1, 2, 2, 2, 2, 0],
  [1, 1, 1, 1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1, 2, 2, 1]
]

@screen_width = @screen.first.length
@screen_height = @screen.length

def out_of_bounds?(coordx, coordy)
  coordx.negative? || coordx >= @screen_width ||
    coordy.negative? || coordy >= @screen_height
end

def should_color_change?(coordx, coordy, new_color, prev_color)
  @screen[coordx][coordy] == prev_color && @screen[coordx][coordy] != new_color
end

def flood_fill(coordx, coordy, prev_color, new_color)
  return if out_of_bounds?(coordx, coordy) ||
            !should_color_change?(coordx, coordy, new_color, prev_color)

  puts "> Changing #{coordx},#{coordy}"
  @screen[coordx][coordy] = new_color

  flood_fill(coordx - 1, coordy, prev_color, new_color)
  flood_fill(coordx + 1, coordy, prev_color, new_color)
  flood_fill(coordx, coordy - 1, prev_color, new_color)
  flood_fill(coordx, coordy + 1, prev_color, new_color)
end

def print_screen
  @screen.each do |row|
    row.each { |col_value| print "#{col_value}, " }
    puts ''
  end
end

def start
  coordx = 4
  coordy = 4
  new_color = 3
  prev_color = @screen[coordx][coordy]
  return unless prev_color != new_color

  puts '>>> Boundaries:'
  puts "width: #{@screen_width}"
  puts "height: #{@screen_height}"
  puts '>>> Colors:'
  puts "prev_color #{prev_color}"
  puts "new_color #{new_color}"
  puts '>>> Initial State:'
  print_screen

  flood_fill(coordx, coordy, prev_color, new_color)
  puts '>>> Final State:'
  print_screen
end

start
