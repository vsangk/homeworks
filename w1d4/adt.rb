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
