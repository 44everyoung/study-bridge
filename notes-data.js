window.NOTES = [
  {
    "id": "linear-equations",
    "subject": "Math",
    "grades": [
      8,
      9
    ],
    "course": "Mathematics 8-9 · algebra review",
    "title": "Linear equations",
    "summary": "Keep equations balanced and solve for an unknown.",
    "concepts": [
      [
        "An equation is a balance",
        "An equation states that two expressions have the same value. A variable represents an unknown number. A solution makes the original equation true when substituted."
      ],
      [
        "Use inverse operations",
        "Addition undoes subtraction. Division undoes multiplication. Apply the same operation to both sides; never divide by zero. For a two-step equation, usually undo addition or subtraction first."
      ],
      [
        "Check the original equation",
        "Substitute your answer into the original expression, not just your last line. Negative values and fractions can be valid solutions."
      ]
    ],
    "example": [
      "Solve 3x + 4 = 19",
      "Subtract 4 from both sides: 3x = 15. Divide both sides by 3: x = 5. Check: 3(5) + 4 = 19."
    ],
    "mistake": "3x means 3 multiplied by x. Subtracting 3 does not undo multiplication by 3.",
    "questions": [
      "Solve x - 6 = 9.",
      "Solve 2x + 5 = 17.",
      "A group pays $6 plus $3 per notebook, for $24 in total. Find the notebook count."
    ],
    "answers": [
      "Add 6 to both sides: x = 15. Check: 15 - 6 = 9.",
      "Subtract 5: 2x = 12. Divide by 2: x = 6.",
      "Let n be the notebook count. 6 + 3n = 24, so 3n = 18 and n = 6 notebooks."
    ],
    "source": "https://curriculum.gov.bc.ca/curriculum/mathematics",
    "track": "BC",
    "pdf": "notes/linear-equations.pdf"
  },
  {
    "id": "slope-linear-relations",
    "subject": "Math",
    "grades": [
      10
    ],
    "course": "Foundations of Mathematics and Pre-calculus 10",
    "title": "Slope & linear relations",
    "summary": "Connect a table, a graph, and the equation of a line.",
    "concepts": [
      [
        "Slope is a rate of change",
        "For two distinct points, slope m = (y2 - y1) / (x2 - x1), when x2 is not x1. Use the same order for both differences. Include units when a graph models a real situation."
      ],
      [
        "Read y = mx + b",
        "m is the slope. b is the y-intercept: the y-value when x = 0. A horizontal line has slope 0; a vertical line has undefined slope and cannot be written in this form."
      ],
      [
        "Use a point to find b",
        "Once you know m, substitute one known x,y pair into y = mx + b. Solve for b, then verify the other point."
      ]
    ],
    "example": [
      "Find the line through (1, 5) and (3, 9)",
      "m = (9 - 5)/(3 - 1) = 2. Substitute (1,5): 5 = 2(1) + b, so b = 3. The equation is y = 2x + 3. Check (3,9): 2(3) + 3 = 9."
    ],
    "mistake": "A y-intercept is not any point on the graph: its x-coordinate must be 0.",
    "questions": [
      "Find the slope through (2,7) and (6,15).",
      "For y = -3x + 8, state the slope and y-intercept.",
      "A service costs $5 plus $2 per visit. Write the cost C for v visits and find C when v = 4."
    ],
    "answers": [
      "m = (15 - 7)/(6 - 2) = 8/4 = 2.",
      "Slope: -3. The y-intercept is (0,8).",
      "C = 2v + 5. For four visits, C = 2(4) + 5 = $13."
    ],
    "source": "https://curriculum.gov.bc.ca/curriculum/mathematics",
    "track": "BC",
    "pdf": "notes/slope-linear-relations.pdf"
  },
  {
    "id": "quadratic-functions",
    "subject": "Math",
    "grades": [
      11
    ],
    "course": "Pre-calculus 11",
    "title": "Quadratic functions",
    "summary": "Find roots and a vertex, and connect them to a parabola.",
    "concepts": [
      [
        "Recognize a quadratic",
        "A quadratic function has the form y = ax² + bx + c, with a not equal to zero. Its graph is a parabola. Positive a opens upward; negative a opens downward."
      ],
      [
        "Use vertex form",
        "In y = a(x - h)² + k, the vertex is (h,k), and the axis of symmetry is x = h. The vertex is a minimum for a > 0 and a maximum for a < 0."
      ],
      [
        "Solve by factoring",
        "To find x-intercepts, set y = 0. If a product is zero, at least one factor is zero. This zero-product rule applies after the equation is set equal to zero."
      ]
    ],
    "example": [
      "Explore y = x² - 6x + 8",
      "Factor: y = (x - 2)(x - 4). The roots are 2 and 4. Complete the square: y = (x - 3)² - 1. The vertex is (3,-1); the axis is x = 3. The graph opens upward."
    ],
    "mistake": "In (x - 3)², the vertex x-coordinate is +3, not -3.",
    "questions": [
      "Find the roots of x² - 5x + 6 = 0.",
      "State the vertex and opening direction of y = -2(x + 1)² + 4.",
      "Does y = (x - 2)² + 3 have any real x-intercepts? Explain."
    ],
    "answers": [
      "Factor: (x - 2)(x - 3) = 0. Thus x = 2 or x = 3.",
      "Vertex (-1,4); opens downward because a = -2.",
      "No. The square is at least zero, so y is at least 3 and cannot equal zero."
    ],
    "source": "https://curriculum.gov.bc.ca/curriculum/mathematics/11/pre-calculus",
    "track": "BC",
    "pdf": "notes/quadratic-functions.pdf"
  },
  {
    "id": "exponential-logarithmic",
    "subject": "Math",
    "grades": [
      12
    ],
    "course": "Pre-calculus 12",
    "title": "Exponential & logarithmic thinking",
    "summary": "Connect repeated multiplication with its inverse.",
    "concepts": [
      [
        "Recognize exponential change",
        "In y = a b^x, the positive base b is not 1. If a > 0, b > 1 gives growth, while 0 < b < 1 gives decay. Equal increases in x multiply y by a fixed factor."
      ],
      [
        "Read a logarithm",
        "log_b(A) = c means b^c = A. For real logarithms, A > 0 and the base is positive and not 1. A logarithm answers: what exponent produces this value?"
      ],
      [
        "Solve with matching bases",
        "Rewrite both sides using the same base when possible. If b^u = b^v for a valid base b, then u = v. Check solutions against the original equation and any domain restrictions."
      ]
    ],
    "example": [
      "Solve 2^(x+1) = 16",
      "Rewrite 16 as 2^4. Then x + 1 = 4, giving x = 3. Check: 2^(3+1) = 16. Equivalently, log_2(16) = 4."
    ],
    "mistake": "log(A + B) is not generally log(A) + log(B). Logarithm rules for products do not apply to sums.",
    "questions": [
      "Solve 3^x = 81.",
      "Evaluate log_5(125).",
      "A model starts at 200 and multiplies by 0.8 each period. Find the value after two periods."
    ],
    "answers": [
      "81 = 3^4, so x = 4.",
      "5^3 = 125, so log_5(125) = 3.",
      "y = 200(0.8)^2 = 128. A factor of 0.8 means a 20% decrease per period."
    ],
    "source": "https://curriculum.gov.bc.ca/curriculum/mathematics/12/pre-calculus",
    "track": "BC",
    "pdf": "notes/exponential-logarithmic.pdf"
  },
  {
    "id": "clear-paragraphs",
    "subject": "English",
    "grades": [
      8,
      9
    ],
    "course": "English Language Arts 8-9 · writing support",
    "title": "Write a clear paragraph",
    "summary": "Develop one idea with a relevant example and explanation.",
    "concepts": [
      [
        "Choose one main point",
        "Make a claim that can be explained within one paragraph. A topic sentence guides the reader toward that claim; avoid combining several unrelated arguments."
      ],
      [
        "Support and explain",
        "Give a concrete example or relevant evidence. Then explain how it supports your point. Evidence does not explain itself, and repeating the topic sentence is not analysis."
      ],
      [
        "Revise for connection",
        "Read the paragraph aloud. Remove sentences that do not support the main point. Use transitions only when they show a real connection, such as contrast or cause."
      ]
    ],
    "example": [
      "Original model paragraph",
      "A shared study goal can help a group stay focused. For example, a group might agree to solve three equations before discussing answers. This gives everyone a clear task and a reason to compare methods. A small plan can make the session more purposeful."
    ],
    "mistake": "Adding more sentences does not automatically add support. Prefer one specific example over several vague statements.",
    "questions": [
      "Write a topic sentence about a helpful study habit.",
      "Add one concrete example and explain its connection.",
      "Revise: \"Studying is good. It is nice. It helps a lot.\""
    ],
    "answers": [
      "Possible answer: Reviewing yesterday’s mistakes helps me notice patterns in my work.",
      "Possible support: I noticed that I repeatedly forgot negative signs, so I began checking each sign before submitting. This explains a specific benefit.",
      "Possible revision: Reviewing mistakes makes my next attempt more accurate. When I corrected a repeated sign error, I could solve similar questions without making the same mistake. Other well-supported answers are valid."
    ],
    "source": "https://curriculum.gov.bc.ca/curriculum/english-language-arts",
    "track": "BC",
    "pdf": "notes/clear-paragraphs.pdf"
  },
  {
    "id": "literary-analysis",
    "subject": "English",
    "grades": [
      10,
      11,
      12
    ],
    "course": "Literary Studies / English Studies · shared skill",
    "title": "From quotation to analysis",
    "summary": "Explain how a writer’s choices create meaning.",
    "concepts": [
      [
        "Make an arguable claim",
        "A literary claim interprets a detail rather than merely reporting the plot. Connect a technique, such as imagery or contrast, to a particular effect or idea."
      ],
      [
        "Choose precise evidence",
        "Select the smallest useful passage. Introduce its context and cite it in the format your teacher requests. Distinguish the narrator or speaker from the real author."
      ],
      [
        "Explain the language",
        "Zoom in on a word, image, or pattern. Explain how it supports your interpretation. Acknowledge ambiguity when the text permits more than one reasonable reading."
      ]
    ],
    "example": [
      "Original miniature text: \"She folded the acceptance letter until it fit inside her closed fist.\"",
      "Possible analysis: The contrast between an acceptance letter and a closed fist suggests tension rather than simple celebration. The physical act of folding the letter makes the opportunity seem constrained, supporting a reading of uncertainty or resistance. This is an interpretation, not the only possible answer."
    ],
    "mistake": "Naming a device is not enough. Explain what the specific language does in this particular passage.",
    "questions": [
      "Write a claim about the miniature text above.",
      "Select two words that help support your claim.",
      "Give a different plausible interpretation and explain what evidence it uses."
    ],
    "answers": [
      "Possible claim: The character’s gesture suggests discomfort with the opportunity she has received.",
      "\"Closed fist\" can suggest resistance or contained emotion; \"folded\" emphasizes a deliberate physical action. Connect the words to your own claim.",
      "Another reading: she holds the letter tightly because it is precious. That reading uses the close physical grip, but should acknowledge that \"fist\" can also sound tense."
    ],
    "source": "https://curriculum.gov.bc.ca/curriculum/english-language-arts",
    "track": "BC",
    "pdf": "notes/literary-analysis.pdf"
  },
  {
    "id": "cells",
    "subject": "Science",
    "grades": [
      8
    ],
    "course": "Science 8",
    "title": "Cells: structure & function",
    "summary": "Compare plant and animal cells and connect parts to jobs.",
    "concepts": [
      [
        "Cell theory",
        "Living things consist of cells. Cells are the basic units of life, and new cells arise from existing cells. A model simplifies reality; it is not a photograph of every cell type."
      ],
      [
        "Shared cell structures",
        "Typical plant and animal cells have a cell membrane, cytoplasm, a nucleus, and mitochondria. The membrane regulates movement in and out; the nucleus contains most genetic material; mitochondria help release usable energy through cellular respiration."
      ],
      [
        "Plant-cell features",
        "Plant cells have a cell wall outside the membrane and often a large central vacuole. Photosynthetic plant cells have chloroplasts. Not all plant cells contain chloroplasts; underground root cells are a useful counterexample."
      ]
    ],
    "example": [
      "Identify a cell from evidence",
      "A cell has a cell wall, chloroplasts, and a large central vacuole. Together these observations support identifying it as a photosynthetic plant cell. A cell wall alone would not prove it is a plant cell because other groups also have walls."
    ],
    "mistake": "Plants also carry out cellular respiration. Photosynthesis does not replace all other energy processes.",
    "questions": [
      "Which structure regulates movement into and out of a cell?",
      "Give two structures commonly used to distinguish a leaf cell from an animal cell.",
      "Why is \"all plant cells have chloroplasts\" too broad?"
    ],
    "answers": [
      "The cell membrane. A plant cell also has a wall, but the membrane regulates transport.",
      "A cell wall and chloroplasts; a large central vacuole can provide additional evidence.",
      "Some plant cells, such as many root cells, do not photosynthesize and lack chloroplasts."
    ],
    "source": "https://curriculum.gov.bc.ca/curriculum/science/8/core",
    "track": "BC",
    "pdf": "notes/cells.pdf"
  },
  {
    "id": "balancing-reactions",
    "subject": "Science",
    "grades": [
      9,
      10
    ],
    "course": "Science 9-10 · chemistry foundations",
    "title": "Balance chemical equations",
    "summary": "Track atoms as substances react and rearrange.",
    "concepts": [
      [
        "Atoms are conserved",
        "In an ordinary chemical reaction, atoms rearrange into new combinations. The balanced equation contains the same number of atoms of each element on each side. Mass is conserved in a closed system."
      ],
      [
        "Coefficients and subscripts",
        "A coefficient multiplies the entire formula after it. A subscript belongs to the substance’s formula. Change coefficients to balance; changing a subscript changes the substance."
      ],
      [
        "A reliable method",
        "Write correct formulas first. Count atoms by element, adjust coefficients, and recount. Reduce coefficients to the smallest whole-number ratio. State symbols describe physical state but do not change atom counts."
      ]
    ],
    "example": [
      "Balance H₂ + O₂ → H₂O",
      "Oxygen appears twice on the left and once on the right. Put 2 before H₂O; now the right has four H atoms. Put 2 before H₂. Final: 2H₂ + O₂ → 2H₂O. Both sides contain four H atoms and two O atoms."
    ],
    "mistake": "Do not turn H₂O into H₂O₂ to balance oxygen. That would describe a different substance.",
    "questions": [
      "Balance Mg + O₂ → MgO.",
      "How many H and O atoms are represented by 3H₂O?",
      "A sealed reaction vessel has mass 120.0 g before a reaction. Predict its mass afterward if nothing enters or leaves."
    ],
    "answers": [
      "2Mg + O₂ → 2MgO. Both sides contain two Mg atoms and two O atoms.",
      "Six H atoms and three O atoms. The coefficient multiplies both elements.",
      "120.0 g, within measurement uncertainty, because mass is conserved."
    ],
    "source": "https://curriculum.gov.bc.ca/curriculum/science",
    "track": "BC",
    "pdf": "notes/balancing-reactions.pdf"
  },
  {
    "id": "moles-molar-mass",
    "subject": "Science",
    "grades": [
      11
    ],
    "course": "Chemistry 11",
    "title": "Moles & molar mass",
    "summary": "Convert between a substance’s mass and amount.",
    "concepts": [
      [
        "The mole counts entities",
        "One mole contains exactly 6.02214076 × 10²³ specified entities. These can be atoms, molecules, ions, or formula units. Always specify what is being counted."
      ],
      [
        "Find molar mass",
        "Add atomic molar masses according to the chemical formula. For H₂O, using H = 1.01 and O = 16.00 gives M = 18.02 g/mol. Use your class periodic table and its rounding conventions."
      ],
      [
        "Use units to choose the operation",
        "Amount n = mass m / molar mass M. Conversely, m = nM. In m/M, g divided by g/mol leaves mol. Keep extra digits during calculation and round the final result appropriately."
      ]
    ],
    "example": [
      "Find the amount in 36.04 g of water",
      "M(H₂O) = 2(1.01) + 16.00 = 18.02 g/mol. n = 36.04 g ÷ 18.02 g/mol = 2.000 mol of H₂O molecules."
    ],
    "mistake": "A mole is an amount, not a fixed mass. A mole of water and a mole of carbon dioxide contain the same number of molecules but have different masses.",
    "questions": [
      "Find the amount in 22.0 g CO₂ when M = 44.0 g/mol.",
      "Find the mass of 0.250 mol NaCl when M = 58.44 g/mol.",
      "About how many molecules are in 2.00 mol of water? Use 6.022 × 10²³ per mole."
    ],
    "answers": [
      "n = 22.0/44.0 = 0.500 mol of CO₂.",
      "m = 0.250 × 58.44 = 14.6 g to three significant figures.",
      "2.00 × 6.022 × 10²³ = 1.20 × 10²⁴ molecules, to three significant figures."
    ],
    "source": "https://curriculum.gov.bc.ca/curriculum/science/11/chemistry",
    "track": "BC",
    "pdf": "notes/moles-molar-mass.pdf"
  },
  {
    "id": "chemical-equilibrium",
    "subject": "Science",
    "grades": [
      12
    ],
    "course": "Chemistry 12",
    "title": "Dynamic equilibrium",
    "summary": "Explain an equilibrium and predict how a system responds.",
    "track": "BC",
    "pdf": "notes/chemical-equilibrium.pdf",
    "source": "https://curriculum.gov.bc.ca/curriculum/science/12/chemistry",
    "concepts": [
      [
        "Equilibrium is dynamic",
        "In a closed system at equilibrium, the forward and reverse reactions continue at equal rates. Observable concentrations stay constant, but the concentrations of reactants and products do not have to be equal."
      ],
      [
        "Read an equilibrium expression",
        "For aA + bB ⇌ cC + dD, Kc = [C]^c[D]^d / ([A]^a[B]^b), using equilibrium concentrations of gases or dissolved species. Pure solids and pure liquids are omitted. At a fixed temperature, Kc is constant for that reaction as written."
      ],
      [
        "Predict a response",
        "Le Chatelier’s principle describes a shift that partially opposes a disturbance. Adding a reactant can favour its consumption. For gases, decreasing volume favours the side with fewer gas particles, if the sides differ. A catalyst speeds both directions and does not change Kc or the equilibrium composition."
      ]
    ],
    "example": [
      "Change the concentration: H₂(g) + I₂(g) ⇌ 2HI(g)",
      "Kc = [HI]² / ([H₂][I₂]). Suppose more H₂ is added at constant temperature and volume. The denominator initially increases, so the reaction quotient becomes smaller than Kc. The net reaction proceeds toward products until equilibrium is restored. Kc stays the same because temperature is unchanged."
    ],
    "mistake": "A shift toward products does not mean the forward reaction runs alone. Both directions still occur; their rates become equal again at the new equilibrium.",
    "questions": [
      "At equilibrium, must reactant and product concentrations be equal?",
      "Write Kc for N₂(g) + 3H₂(g) ⇌ 2NH₃(g).",
      "For this ammonia reaction, which direction is favoured by decreasing volume at constant temperature? Explain using gas coefficients."
    ],
    "answers": [
      "No. Forward and reverse rates are equal; concentrations are constant but need not be equal.",
      "Kc = [NH₃]² / ([N₂][H₂]³). Each exponent comes from the balanced equation.",
      "Toward products: the reactant side has 4 moles of gas per reaction as written, while the product side has 2. The shift favours fewer gas particles."
    ]
  },
  {
    "id": "business-basics",
    "subject": "Business",
    "grades": [
      8,
      9
    ],
    "course": "Grade 8-9 · introductory business skills",
    "title": "Revenue, costs & profit",
    "summary": "Use a simple budget to make sense of a small project.",
    "track": "BC",
    "pdf": "notes/business-basics.pdf",
    "source": "https://curriculum.gov.bc.ca/curriculum/adst",
    "concepts": [
      [
        "Revenue is not profit",
        "Revenue is money earned from sales before subtracting expenses. If every item sells at the same price, revenue = price per item × number sold. A high revenue does not automatically mean the activity made a profit."
      ],
      [
        "Count all the costs",
        "A cost is money spent on the project. Some costs, such as a table rental, are fixed for the activity. Others, such as materials per item, increase as more items are made. This is an introductory planning model; real costs may be more complicated."
      ],
      [
        "Compare the totals",
        "Profit = revenue - total costs. A negative result is a loss. A budget is an estimate before the activity; compare it with actual results afterward. Keep units consistent and record the assumptions behind your estimate."
      ]
    ],
    "example": [
      "Plan a bookmark sale",
      "A group sells 20 bookmarks at $3 each. Revenue = 20 × $3 = $60. Materials cost $15 and table rental costs $10. Total costs = $25. Profit = $60 - $25 = $35. This model assumes every bookmark is sold and there are no other expenses."
    ],
    "mistake": "Do not call the full $60 profit. The group must first account for the $25 spent on the activity.",
    "questions": [
      "You sell 12 cards at $4 each. What is the revenue?",
      "The cards cost $18 to make, plus $6 for a display. What are total costs and profit if all 12 sell?",
      "If only five cards sell after all 12 have been made, what is the profit or loss? Assume the costs above have already been paid."
    ],
    "answers": [
      "Revenue = 12 × $4 = $48.",
      "Total costs = $18 + $6 = $24. Profit = $48 - $24 = $24.",
      "Revenue = 5 × $4 = $20. Profit = $20 - $24 = -$4, so the group has a $4 loss. Unsold items do not count as sales revenue."
    ]
  },
  {
    "id": "customers-value",
    "subject": "Business",
    "grades": [
      10,
      11
    ],
    "course": "Entrepreneurship & Marketing 10 / Marketing & Promotion 11",
    "title": "Customers & value",
    "summary": "Identify who an idea serves and why it could help.",
    "concepts": [
      [
        "Start with a specific customer",
        "A target customer is a defined group with a need you can investigate. \"Everyone\" is usually too broad to guide product design or communication. Identify a situation, need, or shared constraint."
      ],
      [
        "State a value proposition",
        "Explain what you offer, who it helps, and why it is useful. Focus on the customer’s task rather than unsupported promises. A feature is what a product has; a benefit is what that feature helps someone do."
      ],
      [
        "Test before scaling",
        "Use interviews, observation, or a small prototype to learn whether the need is real. Ask neutral questions about actual behaviour. A small convenience sample may give ideas but does not represent every potential customer."
      ]
    ],
    "example": [
      "A school stationery kit",
      "Target: students who often arrive without basic supplies. Offer: a low-cost kit sold near the school office. Test: ask students what they actually forgot last week, then trial a small batch. Avoid assuming that every student wants a kit."
    ],
    "mistake": "\"Would you buy my amazing product?\" is a leading question. Ask about real needs and alternatives instead.",
    "questions": [
      "Make \"students\" a more specific audience for a study resource.",
      "Separate a feature and a benefit for a downloadable study sheet.",
      "Write one neutral interview question to test the need."
    ],
    "answers": [
      "Example: BC Grade 10 students reviewing slope before a class quiz. Other specific, realistic groups work too.",
      "Feature: a two-page PDF with worked examples. Benefit: students can review the method offline and check their own work.",
      "Example: What did you use the last time you were stuck on a slope question?"
    ],
    "source": "https://curriculum.gov.bc.ca/curriculum/adst",
    "track": "BC",
    "pdf": "notes/customers-value.pdf"
  },
  {
    "id": "supply-demand",
    "subject": "Business",
    "grades": [
      12
    ],
    "course": "Economics 12 · introductory market model",
    "title": "Supply, demand & equilibrium",
    "summary": "Explain price and quantity changes in a simple market.",
    "concepts": [
      [
        "Read the axes",
        "In the standard model, price is on the vertical axis and quantity on the horizontal axis. Demand shows quantities buyers are willing and able to purchase at different prices, holding other influences constant."
      ],
      [
        "Distinguish a move from a shift",
        "A change in the good’s own price causes movement along a curve. A change in another influence, such as production cost or consumer preference, can shift a curve. Supply typically slopes upward; demand typically slopes downward."
      ],
      [
        "Find equilibrium",
        "Equilibrium is where quantity demanded equals quantity supplied. Below the equilibrium price, a shortage can occur; above it, a surplus can occur. The simple model is a tool and depends on its assumptions."
      ]
    ],
    "example": [
      "Demand rises while supply is unchanged",
      "Suppose a product becomes more popular. Demand shifts right. In the standard upward-sloping supply/downward-sloping demand model, the new equilibrium has a higher price and a higher quantity. This is not just movement along the old demand curve."
    ],
    "mistake": "When both curves shift, you may need the relative sizes of shifts to determine the direction of every outcome.",
    "questions": [
      "What happens to equilibrium price and quantity if supply increases while demand is unchanged?",
      "Does a fall in the good’s own price shift its demand curve?",
      "At a price above equilibrium, quantity supplied is 80 and quantity demanded is 50. Find the imbalance."
    ],
    "answers": [
      "With standard slopes, supply shifts right: equilibrium price falls and quantity rises.",
      "No. It produces movement along the existing demand curve, other things equal.",
      "A surplus of 30 units: 80 supplied minus 50 demanded."
    ],
    "source": "https://curriculum.gov.bc.ca/curriculum/adst",
    "track": "BC",
    "pdf": "notes/supply-demand.pdf"
  },
  {
    "id": "macro-indicators",
    "subject": "Business",
    "grades": [],
    "course": "AP Macroeconomics · introductory review",
    "title": "GDP, inflation & unemployment",
    "summary": "Interpret three measures of overall economic activity.",
    "concepts": [
      [
        "GDP measures production",
        "GDP is the market value of final goods and services produced within an economy during a period. The expenditure identity is GDP = C + I + G + (X - M). Used goods and financial asset purchases are not current production; intermediate goods are not separately counted when already included in final output."
      ],
      [
        "Nominal and real measures",
        "Nominal GDP uses current prices; real GDP uses constant prices to separate output changes from price changes. Inflation is the percentage change in a price index: (new index - old index) / old index × 100. A slower positive inflation rate still means prices are rising."
      ],
      [
        "Unemployment uses the labour force",
        "Unemployment rate = unemployed / labour force × 100, with labour force = employed + unemployed. In the standard introductory model, unemployed people are available for work and actively seeking it. People outside the labour force are not included in the denominator."
      ]
    ],
    "example": [
      "Read a small data set",
      "If a price index rises from 120 to 126, inflation is (126 - 120)/120 × 100 = 5%. If 950 people are employed and 50 are unemployed, the labour force is 1,000 and the unemployment rate is 50/1,000 × 100 = 5%. These are different measures even though the values match."
    ],
    "mistake": "A higher nominal GDP alone does not prove that output increased. Prices might have risen.",
    "questions": [
      "C = 500, I = 100, G = 150, X = 80, M = 50. Calculate GDP in the stated units.",
      "A price index rises from 200 to 210. Calculate inflation.",
      "There are 720 employed people and 80 unemployed people. Another 200 are outside the labour force. Calculate unemployment."
    ],
    "answers": [
      "GDP = 500 + 100 + 150 + (80 - 50) = 780.",
      "(210 - 200)/200 × 100 = 5%.",
      "Labour force = 720 + 80 = 800. Rate = 80/800 × 100 = 10%. Do not include the other 200."
    ],
    "source": "https://apstudents.collegeboard.org/courses/ap-macroeconomics",
    "track": "AP",
    "pdf": "notes/macro-indicators.pdf"
  }
];
