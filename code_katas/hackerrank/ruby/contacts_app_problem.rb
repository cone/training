# frozen_string_literal: true
# https://www.hackerrank.com/challenges/contacts/problem

def start(commands)
  dict = {}

  commands.each do |command|
    bits = command.split

    if bits[0] == 'add'
      chars = bits[1].chars
      key = ''
      chars.each do |char|
        key += char
        if dict[key]
          dict[key] += 1
        else
          dict[key] = 1
        end
      end
    else
      result = dict[bits[1]]
      return puts '0' unless result

      puts result
    end
  end
end

commands = [
  'add c',
  'add co',
  'add con',
  'add cone',
  'find c'
]

start(commands)
