# frozen_string_literal: true

# BFS: Breadth First Search
# https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/

# Time complexity: O(M x N).
# Auxiliary Space: O(M x N),

require 'matrix'

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

@queue = []
@visited = Matrix.build(8, 8) { 0 }

@screen_width = @screen.first.length
@screen_height = @screen.length

def out_of_bounds?(coordx, coordy)
  coordx.negative? || coordx >= @screen_width ||
    coordy.negative? || coordy >= @screen_height
end

def should_color_change?(coordx, coordy, new_color, prev_color)
  @screen[coordx][coordy] == prev_color &&
    @screen[coordx][coordy] != new_color &&
    @visited[coordx, coordy].zero?
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
  @queue << [coordx, coordy]
  @visited[coordx, coordy] = 1

  puts '>>> Initial state:'
  print_screen

  while @queue.size >= 1
    current = @queue.pop
    coordx = current[0]
    coordy = current[1]
    prev_color = @screen[current[0]][current[1]]
    @screen[current[0]][current[1]] = new_color

    if !out_of_bounds?(coordx - 1, coordy) &&
       should_color_change?(coordx - 1, coordy, new_color, prev_color)
      @queue.push([coordx - 1, coordy])
      @visited[coordx - 1, coordy] = 1
    end

    if !out_of_bounds?(coordx + 1, coordy) &&
       should_color_change?(coordx + 1, coordy, new_color, prev_color)
      @queue.push([coordx + 1, coordy])
      @visited[coordx + 1, coordy] = 1
    end

    if !out_of_bounds?(coordx, coordy - 1) &&
       should_color_change?(coordx, coordy - 1, new_color, prev_color)
      @queue.push([coordx, coordy - 1])
      @visited[coordx, coordy - 1] = 1
    end

    if !out_of_bounds?(coordx, coordy + 1) &&
       should_color_change?(coordx, coordy + 1, new_color, prev_color)
      @queue.push([coordx, coordy + 1])
      @visited[coordx, coordy + 1] = 1
    end
  end

  puts '>>> Final state:'
  print_screen
end

start
