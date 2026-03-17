const FRESH_PRODUCE = [
    { name: "Apple", peak: 8 },            // Sep/Oct peak locally :contentReference[oaicite:1]{index=1}
    { name: "Apricot", peak: 4 },          // May peak :contentReference[oaicite:2]{index=2}
    { name: "Avocado", peak: 7 },          // summer/early fall (general availability) :contentReference[oaicite:3]{index=3}
    { name: "Banana", peak: "year-round" },
    { name: "Blackberry", peak: 5 },       // May–Jun :contentReference[oaicite:4]{index=4}
    { name: "Blueberry", peak: 5 },        // May–Jul :contentReference[oaicite:5]{index=5}
    { name: "Cantaloupe", peak: 6 },       // Jun–Jul :contentReference[oaicite:6]{index=6}
    { name: "Cherry", peak: 5 },           // Jun–Jul :contentReference[oaicite:7]{index=7}
    { name: "Clementine", peak: 0 },       // winter citrus :contentReference[oaicite:8]{index=8}
    { name: "Cranberry", peak: 9 },        // fall/winter availability :contentReference[oaicite:9]{index=9}
    { name: "Dragonfruit", peak: "year-round" },
    { name: "Fig", peak: 6 },              // summer :contentReference[oaicite:10]{index=10}
    { name: "Grape", peak: 8 },            // Aug–Oct :contentReference[oaicite:11]{index=11}
    { name: "Grapefruit", peak: 0 },       // Oct–Apr :contentReference[oaicite:12]{index=12}
    { name: "Guava", peak: "year-round" },
    { name: "Honeydew", peak: 5 },         // May–Jul :contentReference[oaicite:13]{index=13}
    { name: "Kiwi", peak: 7 },             // late summer availability approximated :contentReference[oaicite:14]{index=14}
    { name: "Lemon", peak: 1 },            // winter citrus :contentReference[oaicite:15]{index=15}
    { name: "Lime", peak: 2 },             // winter–spring citrus :contentReference[oaicite:16]{index=16}
    { name: "Lychee", peak: 6 },
    { name: "Mango", peak: 6 },
    { name: "Nectarine", peak: 6 },        // summer stone fruit :contentReference[oaicite:17]{index=17}
    { name: "Orange", peak: 0 },           // winter citrus :contentReference[oaicite:18]{index=18}
    { name: "Papaya", peak: "year-round" },
    { name: "Passionfruit", peak: 6 },
    { name: "Peach", peak: 5 },            // May–Aug :contentReference[oaicite:19]{index=19}
    { name: "Pear", peak: 7 },             // Aug–Sep :contentReference[oaicite:20]{index=20}
    { name: "Pineapple", peak: "year-round" },
    { name: "Plum", peak: 5 },             // Jun–Jul :contentReference[oaicite:21]{index=21}
    { name: "Pomegranate", peak: 9 },      // Oct–Dec :contentReference[oaicite:22]{index=22}
  
    // Vegetables
    { name: "Artichoke", peak: 3 },        // spring availability :contentReference[oaicite:23]{index=23}
    { name: "Asparagus", peak: 3 },        // spring :contentReference[oaicite:24]{index=24}
    { name: "Beet", peak: 2 },             // late winter/early spring :contentReference[oaicite:25]{index=25}
    { name: "Bell pepper", peak: 7 },       // summer–fall :contentReference[oaicite:26]{index=26}
    { name: "Broccoli", peak: 1 },         // winter/spring :contentReference[oaicite:27]{index=27}
    { name: "Brussels sprouts", peak: 0 }, // winter :contentReference[oaicite:28]{index=28}
    { name: "Cabbage", peak: 1 },          // winter/early spring :contentReference[oaicite:29]{index=29}
    { name: "Carrot", peak: 2 },           // spring :contentReference[oaicite:30]{index=30}
    { name: "Cauliflower", peak: 1 },      // winter/spring :contentReference[oaicite:31]{index=31}
    { name: "Celery", peak: 2 },           // spring transitional :contentReference[oaicite:32]{index=32}
    { name: "Chard", peak: 1 },            // winter/spring :contentReference[oaicite:33]{index=33}
    { name: "Collard greens", peak: 1 },   // winter/spring :contentReference[oaicite:34]{index=34}
    { name: "Corn", peak: 7 },             // summer :contentReference[oaicite:35]{index=35}
    { name: "Cucumber", peak: 6 },         // summer :contentReference[oaicite:36]{index=36}
    { name: "Eggplant", peak: 7 },         // summer–fall :contentReference[oaicite:37]{index=37}
    { name: "Garlic", peak: 2 },           // spring :contentReference[oaicite:38]{index=38}
    { name: "Kale", peak: 1 },             // winter/spring :contentReference[oaicite:39]{index=39}
    { name: "Leek", peak: 1 },             // winter/early spring :contentReference[oaicite:40]{index=40}
    { name: "Lettuce", peak: 4 },          // spring :contentReference[oaicite:41]{index=41}
    { name: "Mushroom", peak: 5 },         // summer harvest peak :contentReference[oaicite:42]{index=42}
    { name: "Okra", peak: 7 },             // summer :contentReference[oaicite:43]{index=43}
    { name: "Onion", peak: 4 },            // spring/summer :contentReference[oaicite:44]{index=44}
    { name: "Pea", peak: 2 },              // spring peas :contentReference[oaicite:45]{index=45}
    { name: "Potato", peak: 6 },           // summer harvest :contentReference[oaicite:46]{index=46}
    { name: "Pumpkin", peak: 9 },          // fall :contentReference[oaicite:47]{index=47}
    { name: "Radish", peak: 2 },           // spring :contentReference[oaicite:48]{index=48}
    { name: "Spinach", peak: 1 },          // winter/spring :contentReference[oaicite:49]{index=49}
    { name: "Squash", peak: 6 },           // summer/fall :contentReference[oaicite:50]{index=50}
    { name: "Sweet potato", peak: 9 },     // fall/winter :contentReference[oaicite:51]{index=51}
    { name: "Zucchini", peak: 6 }          // summer :contentReference[oaicite:52]{index=52}
  ];


export {FRESH_PRODUCE};