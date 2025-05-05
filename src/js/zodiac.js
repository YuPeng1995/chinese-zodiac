const zodiacAnimals = [
  {
    name: "Rat",
    element: "Water",
    years: "1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020",
    traits: "Quick-witted, Resourceful, Versatile, Kind",
    description:
      "The Rat is a symbol of intelligence, adaptability, and resourcefulness. People born in the Year of the Rat are quick thinkers who are highly observant and capable of adapting to any situation. They often charm those around them with their wit and humor. However, they can also be opportunistic and overly cautious, sometimes missing out on opportunities for fear of failure. Rats value close relationships but may struggle with trust and jealousy.",
    votes: 134
  },
  {
    name: "Ox",
    element: "Earth",
    years: "1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021",
    traits: "Diligent, Dependable, Strong, Determined",
    description:
      "The Ox is known for its strength, perseverance, and dependability. Those born under this sign are hardworking and resilient, often pursuing their goals with unwavering determination. They are trustworthy and often take on leadership roles because of their reliability. However, Oxen may also be stubborn and resistant to change, preferring to stick to routines and traditions. Despite this, they are patient and make excellent long-term planners, ensuring stability in their lives and those around them.",
    votes: 259
  },
  {
    name: "Tiger",
    element: "Wood",
    years: "1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022",
    traits: "Brave, Competitive, Confident, Enthusiastic",
    description:
      "Tigers are bold and courageous, often seen as natural leaders with a magnetic personality. They are highly competitive and thrive in challenging situations, exuding confidence and enthusiasm in everything they do. Tigers are passionate and driven but can also be impulsive and temperamental. They value independence and freedom, often pursuing adventures that push their limits. While their bravery and ambition inspire others, their impatience and strong opinions may sometimes lead to conflicts.",
    votes: 362
  },
  {
    name: "Rabbit",
    element: "Wood",
    years: "1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023",
    traits: "Gentle, Quiet, Elegant, Alert",
    description:
      "The Rabbit is a symbol of peace, elegance, and compassion. People born in the Year of the Rabbit are kind-hearted and diplomatic, often avoiding conflicts in favor of harmony. They are highly intuitive and can read the emotions of others with ease, making them excellent mediators. Rabbits appreciate beauty and may have a keen interest in art, design, or culture. However, their sensitivity can make them vulnerable to criticism, and they may shy away from confrontations. They prefer a quiet, stable life and value their relationships deeply.",
    votes: 298
  },
  {
    name: "Dragon",
    element: "Earth",
    years: "1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024",
    traits: "Confident, Intelligent, Enthusiastic, Ambitious",
    description:
      "The Dragon is a symbol of power, charisma, and ambition. Those born in the Year of the Dragon are natural leaders who exude confidence and intelligence. They are driven and energetic, often pursuing ambitious goals with passion and determination. Dragons are creative thinkers who inspire others with their vision and enthusiasm. However, they can be overly proud or domineering at times, which may lead to misunderstandings. Despite this, their magnetic personality and generosity make them highly admired by others.",
    votes: 421
  },
  {
    name: "Snake",
    element: "Fire",
    years: "1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025",
    traits: "Wise, Mysterious, Charming, Deep Thinkers",
    description:
      "The Snake is a symbol of wisdom, mystery, and grace. People born under this sign are deep thinkers who rely on intuition and careful planning to achieve their goals. They are charming and persuasive, often drawing others to them with their enigmatic personality. Snakes are calm under pressure and have a strategic mind, making them excellent problem solvers. However, they can be secretive and reluctant to trust others, preferring to keep their true thoughts hidden. Despite their reserved nature, they form strong bonds with those they care about.",
    votes: 584
  },
  {
    name: "Horse",
    element: "Fire",
    years: "1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026",
    traits: "Energetic, Active, Independent, Cheerful",
    description:
      "The Horse represents energy, freedom, and independence. Those born under this sign are outgoing and adventurous, always seeking new experiences and challenges. They are hardworking and determined, often inspiring others with their enthusiasm. Horses are highly independent and value their freedom, which can sometimes make them appear impatient or restless. Despite their occasional impulsiveness, their optimism and warm personality make them well-loved by their friends and family.",
    votes: 492
  },
  {
    name: "Goat",
    element: "Earth",
    years: "1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027",
    traits: "Calm, Gentle, Sympathetic, Creative",
    description:
      "The Goat symbolizes kindness, creativity, and tranquility. People born in the Year of the Goat are gentle souls who value peace and beauty. They are empathetic and caring, often putting the needs of others before their own. Goats have a strong artistic side and may excel in creative fields. While they are compassionate and easygoing, they can sometimes be indecisive or overly reliant on others for support. Despite this, their nurturing and loving nature makes them cherished by those around them.",
    votes: 150
  },
  {
    name: "Monkey",
    element: "Metal",
    years: "1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028",
    traits: "Clever, Witty, Curious, Lively",
    description:
      "The Monkey represents intelligence, curiosity, and playfulness. Those born under this sign are quick learners who enjoy solving problems and exploring new ideas. They are witty and sociable, often entertaining others with their humor and charm. Monkeys are highly adaptable but can sometimes come across as mischievous or impatient. They value their independence and thrive in environments that challenge their intellect and creativity.",
    votes: 225
  },
  {
    name: "Rooster",
    element: "Metal",
    years: "1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029",
    traits: "Hardworking, Observant, Courageous, Resourceful",
    description:
      "The Rooster symbolizes confidence, diligence, and observation. People born in the Year of the Rooster are meticulous and hardworking, often paying great attention to detail. They are courageous and unafraid to take risks, which can lead to great success. However, Roosters can also be critical and demanding, expecting perfection from themselves and others. Despite this, their loyalty and resourcefulness make them valuable friends and colleagues.",
    votes: 319
  },
  {
    name: "Dog",
    element: "Earth",
    years: "1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030",
    traits: "Loyal, Honest, Friendly, Cautious",
    description:
      "The Dog represents loyalty, honesty, and protection. Those born under this sign are trustworthy and reliable, often standing by their loved ones through thick and thin. They value justice and fairness and are willing to fight for what they believe in. Dogs can be cautious and reserved, taking time to warm up to new people. However, once trust is established, they are fiercely loyal and protective of their friends and family.",
    votes: 412
  },
  {
    name: "Pig",
    element: "Water",
    years: "1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031",
    traits: "Generous, Compassionate, Diligent, Easygoing",
    description:
      "The Pig symbolizes generosity, compassion, and optimism. People born under this sign are kind-hearted and enjoy helping others. They are hardworking and diligent, often completing tasks with a positive attitude. Pigs are easygoing and enjoy the simple pleasures in life, such as good food and meaningful relationships. While they can sometimes be overly trusting or indulgent, their warmth and sincerity make them beloved by those around them.",
    votes: 698
  }
];

export default zodiacAnimals;