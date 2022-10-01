# frozen_string_literal: true
# https://www.hackerrank.com/challenges/balanced-brackets/problem

# Complete the 'isBalanced' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def open_bracket?(bracket)
  ['[', '{', '('].include? bracket
end

def close_bracket?(bracket)
  [']', '}', ')'].include? bracket
end

def bracket?(bracket)
  ['[', '{', '(', ']', '}', ')'].include? bracket
end

def matching_brackets?(open_bracket, close)
  case open_bracket
  when '{'
    close == '}'
  when '['
    close == ']'
  when '('
    close == ')'
  else
    false
  end
end

def balanced?(bracket_string)
  # Write your code here
  brackets = bracket_string.chars
  stack = []
  response = 'YES'

  brackets.each do |bracket|
    if open_bracket?(bracket)
      stack << bracket
    elsif close_bracket?(bracket)
      last = stack.pop
      unless matching_brackets?(last, bracket)
        response = 'NO'
        break
      end
    else
      # symbol is not a bracket
      response = 'NO'
      break
    end
  end

  response
end

puts balanced? '[]'
