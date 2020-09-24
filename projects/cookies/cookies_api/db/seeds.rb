# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

=begin
User.create([
    { name: "James Leggero", sig_rec: 1 },
    { name: "John Davis", sig_rec: 5 },
    { name: "Alex Yanovich", sig_rec: 3 },
    { name: "Cody Howard", sig_rec: 4 },
    { name: "Arthur Bernier Jr", sig_rec: 2 },
    { name: "Ira Herman", sig_rec: 8 },
    { name: "Ayla Ex", sig_rec: 6 },
    { name: "Paul Chapman", sig_rec: 7 }
])

Cookie.create([
    { name: "Chocolate Chip", nuts: true },
    { name: "Macadamia", nuts: true },
    { name: "Sugar", nuts: false },
    { name: "Lemon", nuts: false },
    { name: "Oatmeal Raisin", nuts: true },
    { name: "Gingerbread", nuts: false },
    { name: "Peanut Butter", nuts: true },
    { name: "Raspberry Thumbprint", nuts: false },
])
=end

=begin
Recipe.create([
    { user_id: 1, cookie_id: 1, recipe:
        "Preheat oven to 350 degrees F. Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned."
    },
    { user_id: 1, cookie_id: 8, recipe: "Make thumbprint cookies according to directions." },
    { user_id: 2, cookie_id: 5, recipe: 
        "Preheat oven to 350 degrees F. Grease two large cookie sheets or line with Silpat or parchment paper. In a large mixing bowl, beat butter until creamy. Add the brown sugar and white sugar, beat until fluffy, about 3 minutes. Beat in eggs, one at a time. Add the vanilla extract. Mix flour, salt, baking soda, cinnamon, and nutmeg together in medium bowl. Stir the dry ingredients into the butter-sugar mixture. Stir in the raisins and nuts. Stir in the oats. Bake until the edges of the cookies turn golden brown, about 10 to 12 minutes."
    },
    { user_id: 2, cookie_id: 7, recipe: "Make delicious peanut butter cookies." },
    { user_id: 3, cookie_id: 3, recipe: 
        "Preheat oven to 375 degrees F (190 degrees C). In a small bowl, stir together flour, baking soda, and baking powder. Set aside. In a large bowl, cream together the butter and sugar until smooth. Beat in egg and vanilla. Gradually blend in the dry ingredients. Roll rounded teaspoonfuls of dough into balls, and place onto ungreased cookie sheets. Bake 8 to 10 minutes in the preheated oven, or until golden. Let stand on cookie sheet two minutes before removing to cool on wire racks."
    },
    { user_id: 3, cookie_id: 6, recipe: "Whip up some gingerbread cookies - it's simple." },
    { user_id: 4, cookie_id: 4, recipe:
        "Cream together the butter, sugars, egg, and lemon extract. Add in the lemon zest, honey, and optional food coloring, followed by the dry ingredients. Using a 1/4 cup measure, scoop the cookie dough into balls and chill for at least 3 hours. Once the cookie dough has chilled, bake until the edges have set and the tops are just set, even if slightly undercooked, pale, and glossy in the center. Let these lemon cookies cool for 10 minutes on the baking sheet, then dust with confectioners’ sugar, if desired. "
    },
    { user_id: 4, cookie_id: 5, recipe: "Mix oats and cookie batter; bake." },
    { user_id: 5, cookie_id: 2, recipe: 
        "Preheat oven to 350 degrees F (175 degrees C). In a large bowl, cream together the butter, brown sugar, and white sugar until smooth. Beat in the eggs, one at a time, then stir in the vanilla and almond extracts. Combine the flour, baking soda, and salt; gradually stir into the creamed mixture. Mix in the macadamia nuts and white chocolate. Drop dough by teaspoonfuls onto ungreased cookie sheets. Bake for 10 minutes in the preheated oven, or until golden brown."
    },
    { user_id: 5, cookie_id: 4, recipe: "Bake some lemons, rinds on. Add sugar." },
    { user_id: 6, cookie_id: 8, recipe:
        "Preheat oven to 350º and line two baking sheets with parchment. In a large bowl, whisk together flour, baking powder, and salt. In another bowl, beat butter and sugar until pale and fluffy, about 3 minutes. Beat in egg and vanilla, then add dry ingredients in two batches until incorporated. Using a small cookie scoop, scoop 1” balls onto prepared baking sheets. Press a thumbprint into center of each ball, 1/2” deep. Fill with a small spoonful of jam. Bake until edges of cookies are golden, 13 to 14 minutes. Cool on baking sheets before serving."
    },
    { user_id: 6, cookie_id: 3, recipe: "Buy some sugar cookie batter from the store and bake." },
    { user_id: 7, cookie_id: 6, recipe:
        "In a small bowl, whisk together flour, baking powder, baking soda, salt, ginger, cinnamon, and cloves until well blended. Add molasses, vanilla, and lemon zest and continue to mix until well blended. Gradually stir in dry ingredients until blended and smooth. Divide dough in half and wrap each half in plastic and let stand at room temperature for at least 2 hours or up to 8 hours. Preheat oven to 375 deg. Prepare baking sheets by lining with parchment paper.Grease or line cookie sheets with parchment paper. Place 1 portion of the dough on a lightly floured surface. Sprinkle flour over dough and rolling pin. Roll dough to a scant 1/4-inch thick. Use additional flour to avoid sticking. Cut out cookies with desired cutter. Bake 1 sheet at a time for 7-10 minutes."
    },
    { user_id: 7, cookie_id: 2, recipe: "Ask a neighbor to make macadamia nut cookies for you." },
    { user_id: 8, cookie_id: 7, recipe:
        "Cream butter, peanut butter, and sugars together in a bowl; beat in eggs. In a separate bowl, sift flour, baking powder, baking soda, and salt; stir into butter mixture. Put dough in refrigerator for 1 hour. Roll dough into 1 inch balls and put on baking sheets. Flatten each ball with a fork, making a crisscross pattern. Bake in a preheated 375 degrees F oven for about 10 minutes or until cookies begin to brown."
    },
    { user_id: 8, cookie_id: 1, recipe: "Mix chocolate chips, sugar, egg, and flour. Eat raw from bowl." }
])
=end