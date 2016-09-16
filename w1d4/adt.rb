class Stack
  def initialize
    @stack = []
  end

  def add(el)
    @stack.push(el)
    el
  end

  def remove
    @stack.pop
  end

  def show
    @stack
  end
end

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.push(el)
    el
  end

  def dequeue
    @queue.shift
  end

  def show
    @queue
  end
end

class Map
  def initialize
    @map = []
    @current_keys = []
  end

  def assign(key, value)
    @map << [key, value] unless @current_keys.include?(key)
    @current_keys << key unless @current_keys.include?(key)

    [key, value]
  end

  def lookup(key)
    @map.each_index do |idx|
      return @map[idx][1] if @map[idx][0] == key
    end
    nil
  end

  def remove(key)
    pair = [key, lookup(key)]
    @current_keys.delete(key)
    @map.delete(pair)
  end

end
