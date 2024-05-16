# frozen_string_literal: true

class Node
  attr_accessor :value, :left, :right

  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
end

@root = nil

def height(root)
  return 0 unless root

  right_height = height(root.right)
  left_height = height(root.left)

  return left_height + 1 if left_height > right_height

  right_height + 1
end

# We print the values only when "level" is "1" and for each tree level we climb down
# we remove 1 from "level", that allows us to print the values of the correct level
# So if, for instance, we need to print the values at level "3", the first level will be "3"
# the second levwl will be "2" and in the third level will be "1" and we will print the values
def print_current_level(root, level)
  return unless root
  return print "#{root.value} " if level == 1

  if level > 1
    print_current_level(root.left, level - 1)
    print_current_level(root.right, level - 1)
  end
end

def print_level_order
  tree_height = height(@root)
  (1..tree_height).each do |level|
    print_current_level(@root, level)
  end
end

#       1
#     /   \
#    2     3
#   / \
#  4   5
#
# height: 3

@root = Node.new(1)
@root.left = Node.new(2)
@root.right = Node.new(3)
@root.left.left = Node.new(4)
@root.left.right = Node.new(5)

print_level_order

# to print values at specific levels:
# print_current_level(@root, 2)
