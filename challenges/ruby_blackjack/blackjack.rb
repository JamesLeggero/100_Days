class Blackjack
    attr_accessor :deck, :player, :house

    def initialize
        @deck = []
    end

    class Card
        attr_reader :name, :value
        def initialize name, value
            @name = name
            @value = value
        end
    end
    
    def make_suit suit
        x = 1
        while x <= 13 do
            if x == 1
                card = Card.new "Ace of #{suit.capitalize}s", 11
            elsif x == 11
                card = Card.new "Jack of #{suit.capitalize}s", 10
            elsif x == 12
                card = Card.new "Queen of #{suit.capitalize}s", 10
            elsif x == 13
                card = Card.new "King of #{suit.capitalize}s", 10
            else
                card = Card.new "#{x} of #{suit.capitalize}s", x
            end
            @deck.push(card)
            x += 1
        end
    end

    class Player
        attr_accessor :hand, :bankroll, :total
        attr_reader :name

        def initialize name, bankroll
            @name = name
            @hand = []
            @bankroll = bankroll
            @total = 0
        end

        def stay
            #write stay
        end

    end

    def player_hit 
        @player.total = 0
        @player.hand.push @deck.pop
        # p @player.hand
        i = 0
        while i < @player.hand.length do
            @player.total += @player.hand[i].value
        i += 1
        end
        if @player.hand.length > 1 then player_hand_check end
    end

    def player_hand_check
        puts "#{@player.name} currently has:"
        i = 0
        while i < @player.hand.length do
            puts @player.hand[i].name
            i += 1
        end
        puts "for a total of #{@player.total}"
        if @player.total > 21
            player_bust
        else
            hit_or_stay

        end
    end

    def player_bust
        @player.bankroll -= 10
        # @house.bankroll += 10
        puts "You went over with a total of #{@player.total}. Your bankroll is now at $#{@player.bankroll}."
        puts ''
        if @player.bankroll == 0 
            game_over 
        else
            another_deal
        end
    end

    def house_hit
        @house.total = 0
        @house.hand.push @deck.pop
        i = 0
        while i < @house.hand.length do
            @house.total += @house.hand[i].value
        i += 1
        end
        # if @house.hand.length > 1 then house_hand_check end
    end
    
    def another_deal
        puts ''
        puts 'Would you like another deal? Press (d) to deal or (q) to quit'
        input = gets.chomp.downcase
        puts ''
        if input == 'q'
            puts "Ok. Your final bankroll was #{@player.bankroll}. Until next time!"
            exit
        elsif input == 'd'
            puts "Here we go! Your current bankroll is #{@player.bankroll}"
            new_deal
        else
            puts "You need to press (d) for deal or (q) for quit."
            another_deal
        end
    end

    def prepare_game

        make_suit "club"
        make_suit "diamond"
        make_suit "spade"
        make_suit "heart"
        @deck.shuffle!
        print "Enter your name: "
        @player = Player.new gets.chomp, 100
        @house = Player.new "House", 10000
        puts ''
        

        
        # @house = Player.new "House"
        # h_cards = @deck.sample(2)
        # @house.hand.push(h_cards)
        # h_cards = @deck.each { |x| @deck.delete x }
    end

    def new_deal
        @player.hand = []
        2.times {player_hit}
        puts ''
        @house.hand = []
        2.times {house_hit}
        puts "House has #{@house.hand[0].name} and one other card."
        # puts "House total: #{@house.total}"
        hit_or_stay
    end

    def hit_or_stay
        puts ''
        puts 'Would you like to hit (h) or stay (s): '
        input = gets.chomp.downcase
        if input == 'h'
            player_hit
        elsif input == 's'
            # player_stay
            puts 'will run player stay'
        else
            puts 'You didn\'t type h or s.'
            hit_or_stay
        end
    end



    def check_deck
        i = 0
        while i < @deck.length do
            puts @deck[i].name
            i += 1
        end
    end
end




def play_blackjack
    blackjack = Blackjack.new
    puts ''
    blackjack.prepare_game
    blackjack.new_deal
    puts ''
    # puts "Remaining cards: #{blackjack.deck.length}"
    # puts ''
end

play_blackjack



