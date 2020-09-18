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

    def check_deck
        if @deck.length == 0
            puts 'The deck is empty. Please wait a moment while we replenish it.'
            puts ''
            refresh_deck
        end
    end

    def refresh_deck
        make_suit "club"
        make_suit "diamond"
        make_suit "spade"
        make_suit "heart"
        @deck.shuffle!
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
    end

    def player_hit 
        @player.total = 0
        @player.hand.push @deck.pop
        check_deck
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
        puts ''
        if @player.total > 21
            player_bust
        else
            hit_or_stay

        end
    end

    def player_bust
        @player.bankroll -= 10
        @house.bankroll += 10
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
        check_deck
        i = 0
        while i < @house.hand.length do
            @house.total += @house.hand[i].value
        i += 1
        end
        house_hand_check
    end

    def house_hand_check
        puts "#{@house.name} currently has:"
        i = 0
        while i < @house.hand.length do
            puts @house.hand[i].name
            i += 1
        end
        puts "for a total of #{@house.total}"
        puts ''
        if @house.total < 17
            puts 'House will hit.'
            puts ''
            house_hit
        elsif @house.total >= 17 && @house.total < 22
            puts 'House will stay.'
            puts ''
            compare_hands
        else
            house_bust
        end

    end

    def house_bust
        @house.bankroll -= 10
        @player.bankroll += 10
        puts "The House went bust with #{@house.total}! Your current bankroll is #{@player.bankroll}."
        another_deal
    end

    def compare_hands
        puts "#{@player.name}'s final total is #{@player.total} and House's total is #{@house.total}."
        if @player.total > @house.total
            @player.bankroll += 10
            @house.bankroll -= 10
            puts ''
            puts "#{@player.name} wins! Your bankroll is at $#{@player.bankroll}."
        elsif @player.total < @house.total
            @player.bankroll -= 10
            @house.bankroll += 10
            puts ''
            puts "House wins, boo! Your bankroll is at $#{@player.bankroll}."
        else
            puts ''
            puts "It's a tie, alright! Your bankroll is still at $#{@player.bankroll}."
        end
        another_deal
    end
    
    def another_deal
        puts ''
        print 'Would you like another deal? Press (d) to deal or (q) to quit: '
        input = gets.chomp.downcase
        puts ''
        if input == 'q'
            puts "Ok. Your final bankroll was #{@player.bankroll}. Until next time!"
            puts ''
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

        # make_suit "club"
        # make_suit "diamond"
        # make_suit "spade"
        # make_suit "heart"
        # @deck.shuffle!
        refresh_deck
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
        puts "Remaining cards: #{@deck.length}"
        puts ''
        @house.hand = []
        2.times do
            @house.total = 0
            @house.hand.push @deck.pop
            check_deck
            i = 0
            while i < @house.hand.length do
                @house.total += @house.hand[i].value
                i += 1
            end
        end
        puts "House gets #{@house.hand[0].name} and one other card."
        puts ''
        @player.hand = []
        2.times {player_hit}
        puts ''
        # puts "House total: #{@house.total}"
    end

    def hit_or_stay
        puts ''
        print 'Would you like to hit (h) or stay (s): '
        input = gets.chomp.downcase
        if input == 'h'
            player_hit
        elsif input == 's'
            player_stay
        else
            puts 'You didn\'t type h or s.'
            puts ''
            hit_or_stay
        end
    end

    def player_stay
        puts ''
        puts "#{@player.name} stays with #{@player.total}."
        puts ''
        # puts "House has #{@house.hand[0].name} and #{@house.hand[1].name} for a total of #{@house.total}"
        house_hand_check
    end



    # def check_deck
    #     i = 0
    #     while i < @deck.length do
    #         puts @deck[i].name
    #         i += 1
    #     end
    # end

    # lol look at this sneaky little thing causing trouble!
end




def play_blackjack
    blackjack = Blackjack.new
    puts ''
    blackjack.prepare_game
    blackjack.new_deal
    puts ''
end

play_blackjack



