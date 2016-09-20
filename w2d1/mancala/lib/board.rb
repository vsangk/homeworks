class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @winning_cups = { name1 => 6, name2 => 13 }
    @cups = self.place_stones
  end

  def place_stones
    # helper method to initialize every non-store cup with four stones each
    cups = Array.new(14) { [] }
    cups.each_with_index do |cup, idx|
      next if @winning_cups.values.include?(idx)
      4.times { cup << :stone }
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless start_pos.between?(1, 14)
  end

  def make_move(start_pos, current_player_name)
    stone_amt = @cups[start_pos]
    @cups[start_pos] = []
    cup_idx = start_pos

    stone_amt.each_index do |idx|
      cup_idx = (cup_idx + 1) % 14
      if @winning_cups.values.include?(cup_idx) && cup_idx != @winning_cups[current_player_name]
        cups_idx = (cup_idx + 1) % 14
      end
      @cups[cup_idx] << :stone
    end

    render
    next_turn(cup_idx, current_player_name)
  end

  def next_turn(ending_cup_idx, current_player_name)
    # helper method to determine what #make_move returns
    if ending_cup_idx == @winning_cups[current_player_name]
      :prompt
    elsif @cups[ending_cup_idx].count > 1
      ending_cup_idx
    else
      :switch
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def cups_empty?
    @cups[0..5].all?(&:empty?) || @cups[7..12].all?(&:empty?)
  end

  def winner
    return :draw if @cups[6] == @cups[13]
    @cups[6].length > @cups[13].length ? @winning_cups.keys.first : @winning_cups.keys.last
  end
end
