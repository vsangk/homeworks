class LRUCache
  def initialize(size)
    @cache = []
    @size = size
  end

  def count
    # returns number of elements currently in cache
    @cache.count
  end

  def add(el)
    # adds element to cache according to LRU principle
    if count <= @size
      @cache << el
    else
      shift(el)
    end
  end

  def show
    # shows the items in the cache, with the LRU item first
    p @cache
  end

  private
  # helper methods go here!
  def shift(el)
    if @cache.include?(el)
      @cache = @cache.delete(el)
      @cache << el
    else
      @cache.shift
      @cache << el
    end
  end
end
