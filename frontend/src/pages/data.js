const listData = [
  {
    title: "Luxury Lake View Villa",
    price: 8500,

    description:
      "Escape into luxury at this stunning lake-view villa designed for travelers seeking comfort, privacy, and unforgettable experiences. Wake up to breathtaking sunrise views over the lake, enjoy your morning coffee on the private deck, and relax in beautifully designed interiors featuring modern furnishings and spacious living areas. The villa offers a fully equipped kitchen, high-speed WiFi, air conditioning, and dedicated workspaces for remote professionals. Located close to local attractions, restaurants, and nature trails, it is perfect for couples, families, and small groups. Whether you're planning a romantic getaway, a family vacation, or a workcation, this property offers the ideal blend of relaxation and convenience.",

    highlights: [
      "Panoramic lake view",
      "Private balcony & deck",
      "High-speed WiFi",
      "Modern luxury interiors",
      "Free parking"
    ],

    rating: 4.9,

    images: [
      {
        imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        filename: "image"
      },
      {
        imgURL: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        filename: "image"
      },
      {
        imgURL: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        filename: "image"
      },
      {
        imgURL: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        filename: "image"
      },
      {
        imgURL: "https://images.unsplash.com/photo-1494526585095-c41746248156",
        filename: "image"
      }
    ],

    owner: {
      username: "Rohit Sharma",
      email: "rohit@example.com",
      timestamp: Date.now(),
      pfp: "https://randomuser.me/api/portraits/men/11.jpg"
    },

    reviews: [
      {
        ratingValue: 5,
        timeAgo: "2 weeks ago",
        reviewText:
          "One of the best stays I've ever booked. The lake view is even better in person and the host was incredibly responsive.",
        author: {
          username: "Junaid",
          pfp: "https://randomuser.me/api/portraits/men/21.jpg",
          timestamp: "2 months"
        }
      },
      {
        ratingValue: 5,
        timeAgo: "1 month ago",
        reviewText:
          "Beautiful property with excellent amenities. Perfect place for a relaxing weekend getaway.",
        author: {
          username: "Priya",
          pfp: "https://randomuser.me/api/portraits/women/22.jpg",
          timestamp: "4 months"
        }
      },
      {
        ratingValue: 4,
        timeAgo: "3 months ago",
        reviewText:
          "Amazing location and stunning views. Would definitely recommend to friends and family.",
        author: {
          username: "Arjun",
          pfp: "https://randomuser.me/api/portraits/men/23.jpg",
          timestamp: "6 months"
        }
      }
    ]
  },
  {
    title: "Beachfront Resort Goa",
    price: 12500,

    description:
      "Experience the ultimate beach vacation at this luxurious beachfront resort in Goa. Located just steps away from golden sands and crystal-clear waters, this resort offers spacious rooms, private balconies, an infinity pool, and direct beach access. Spend your days soaking up the sun, enjoying water sports, or savoring fresh seafood at nearby beach shacks. The property features modern amenities including air conditioning, WiFi, room service, and a relaxing spa. Perfect for honeymooners, families, and groups looking for a tropical escape.",

    highlights: [
      "Direct beach access",
      "Infinity swimming pool",
      "Sea-view rooms",
      "Spa & wellness center",
      "Free breakfast"
    ],

    rating: 4.8,

    images: [
      { imgURL: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1540541338287-41700207dee6", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", filename: "image" }
    ],

    owner: {
      username: "Aman Verma",
      email: "aman@example.com",
      timestamp: Date.now(),
      pfp: "https://randomuser.me/api/portraits/men/12.jpg"
    },

    reviews: [
      {
        ratingValue: 5,
        timeAgo: "1 week ago",
        reviewText: "The beach access was incredible. Waking up to ocean views every morning was unforgettable.",
        author: {
          username: "Sneha",
          pfp: "https://randomuser.me/api/portraits/women/31.jpg",
          timestamp: "1 month"
        }
      },
      {
        ratingValue: 5,
        timeAgo: "2 months ago",
        reviewText: "Excellent service, clean rooms, and amazing food.",
        author: {
          username: "Rahul",
          pfp: "https://randomuser.me/api/portraits/men/32.jpg",
          timestamp: "3 months"
        }
      },
      {
        ratingValue: 4,
        timeAgo: "4 months ago",
        reviewText: "Great location and facilities. Would visit again.",
        author: {
          username: "Neha",
          pfp: "https://randomuser.me/api/portraits/women/33.jpg",
          timestamp: "6 months"
        }
      }
    ]
  },
  {
    title: "Mountain Cabin Manali",
    price: 6500,

    description:
      "Nestled among pine forests and snow-capped mountains, this cozy cabin in Manali offers a peaceful retreat away from city life. Featuring wooden interiors, a fireplace, mountain-view balconies, and modern comforts, the cabin is perfect for nature lovers and adventure seekers. Enjoy nearby trekking trails, river rafting, and local cafes while returning to a warm and inviting space every evening.",

    highlights: [
      "Mountain views",
      "Wooden interiors",
      "Private fireplace",
      "Nature trails nearby",
      "Free parking"
    ],

    rating: 4.7,

    images: [
      { imgURL: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1464146072230-91cabc968266", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963", filename: "image" }
    ],

    owner: {
      username: "Karan Singh",
      email: "karan@example.com",
      timestamp: Date.now(),
      pfp: "https://randomuser.me/api/portraits/men/15.jpg"
    },

    reviews: [
      {
        ratingValue: 5,
        timeAgo: "2 weeks ago",
        reviewText: "The fireplace and mountain views made this stay magical.",
        author: {
          username: "Pooja",
          pfp: "https://randomuser.me/api/portraits/women/34.jpg",
          timestamp: "2 months"
        }
      },
      {
        ratingValue: 4,
        timeAgo: "1 month ago",
        reviewText: "Peaceful surroundings and cozy interiors.",
        author: {
          username: "Aakash",
          pfp: "https://randomuser.me/api/portraits/men/35.jpg",
          timestamp: "4 months"
        }
      },
      {
        ratingValue: 5,
        timeAgo: "5 months ago",
        reviewText: "Perfect cabin for a winter getaway.",
        author: {
          username: "Riya",
          pfp: "https://randomuser.me/api/portraits/women/36.jpg",
          timestamp: "7 months"
        }
      }
    ]
  },
  {
    title: "Heritage Haveli Jaipur",
    price: 9500,

    description:
      "Step into Rajasthan's royal past with this beautifully restored heritage haveli in Jaipur. Featuring intricate architecture, traditional décor, spacious courtyards, and modern amenities, this property offers an authentic cultural experience. Located near major attractions, markets, and historic landmarks, it is ideal for travelers seeking luxury blended with heritage.",

    highlights: [
      "Royal architecture",
      "Traditional interiors",
      "Central Jaipur location",
      "Courtyard seating",
      "Cultural experience"
    ],

    rating: 4.8,

    images: [
      { imgURL: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1564501049412-61c2a3083791", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa", filename: "image" }
    ],

    owner: {
      username: "Rajveer Rathore",
      email: "rajveer@example.com",
      timestamp: Date.now(),
      pfp: "https://randomuser.me/api/portraits/men/41.jpg"
    },

    reviews: [
      {
        ratingValue: 5,
        timeAgo: "1 month ago",
        reviewText: "Felt like living in a palace. Amazing hospitality.",
        author: {
          username: "Anjali",
          pfp: "https://randomuser.me/api/portraits/women/41.jpg",
          timestamp: "3 months"
        }
      },
      {
        ratingValue: 5,
        timeAgo: "2 months ago",
        reviewText: "Beautiful architecture and great location.",
        author: {
          username: "Mohit",
          pfp: "https://randomuser.me/api/portraits/men/42.jpg",
          timestamp: "5 months"
        }
      },
      {
        ratingValue: 4,
        timeAgo: "4 months ago",
        reviewText: "Wonderful heritage experience with modern comforts.",
        author: {
          username: "Sakshi",
          pfp: "https://randomuser.me/api/portraits/women/43.jpg",
          timestamp: "8 months"
        }
      }
    ]
  },
  {
    title: "Modern Apartment Bengaluru",
    price: 4500,

    description:
      "Located in the heart of Bengaluru's tech district, this modern apartment is designed for business travelers, digital nomads, and families. The apartment features stylish interiors, a fully equipped kitchen, high-speed internet, smart TV, and dedicated workspace. With cafes, shopping centers, and metro connectivity nearby, guests can enjoy both convenience and comfort during their stay.",

    highlights: [
      "Tech hub location",
      "Dedicated workspace",
      "Fast WiFi",
      "Modern interiors",
      "24/7 security"
    ],

    rating: 4.7,

    images: [
      { imgURL: "https://images.unsplash.com/photo-1494526585095-c41746248156", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1484154218962-a197022b5858", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", filename: "image" }
    ],

    owner: {
      username: "Vikram Nair",
      email: "vikram@example.com",
      timestamp: Date.now(),
      pfp: "https://randomuser.me/api/portraits/men/51.jpg"
    },

    reviews: [
      {
        ratingValue: 5,
        timeAgo: "3 weeks ago",
        reviewText: "Perfect for remote work. Fast internet and comfortable setup.",
        author: {
          username: "Rohit",
          pfp: "https://randomuser.me/api/portraits/men/52.jpg",
          timestamp: "2 months"
        }
      },
      {
        ratingValue: 4,
        timeAgo: "1 month ago",
        reviewText: "Clean apartment with great connectivity.",
        author: {
          username: "Megha",
          pfp: "https://randomuser.me/api/portraits/women/53.jpg",
          timestamp: "4 months"
        }
      },
      {
        ratingValue: 5,
        timeAgo: "2 months ago",
        reviewText: "Excellent location and very professional host.",
        author: {
          username: "Harsh",
          pfp: "https://randomuser.me/api/portraits/men/54.jpg",
          timestamp: "5 months"
        }
      }
    ]
  },
  {
    title: "Riverside Cottage Rishikesh",
    price: 5800,

    description:
      "Wake up to the soothing sound of the Ganges flowing beside this charming riverside cottage in Rishikesh. Surrounded by lush greenery and breathtaking mountain scenery, this peaceful retreat is ideal for yoga enthusiasts, nature lovers, and adventure seekers. The cottage features cozy interiors, a private garden, outdoor seating, and modern amenities including WiFi and air conditioning. Located close to famous ghats, yoga centers, cafes, and rafting points, it offers the perfect blend of relaxation and exploration.",

    highlights: [
      "Riverfront location",
      "Private garden",
      "Mountain views",
      "Yoga-friendly environment",
      "Outdoor seating area"
    ],

    rating: 4.8,

    images: [
      { imgURL: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1448375240586-882707db888b", filename: "image" }
    ],

    owner: {
      username: "Ankit Joshi",
      email: "ankit@example.com",
      timestamp: Date.now(),
      pfp: "https://randomuser.me/api/portraits/men/61.jpg"
    },

    reviews: [
      {
        ratingValue: 5,
        timeAgo: "2 weeks ago",
        reviewText: "The river view was breathtaking. Perfect place to relax and meditate.",
        author: {
          username: "Pooja",
          pfp: "https://randomuser.me/api/portraits/women/61.jpg",
          timestamp: "2 months"
        }
      },
      {
        ratingValue: 4,
        timeAgo: "1 month ago",
        reviewText: "Beautiful location with easy access to rafting and cafes.",
        author: {
          username: "Karan",
          pfp: "https://randomuser.me/api/portraits/men/62.jpg",
          timestamp: "4 months"
        }
      },
      {
        ratingValue: 5,
        timeAgo: "3 months ago",
        reviewText: "One of the most peaceful stays I've experienced.",
        author: {
          username: "Riya",
          pfp: "https://randomuser.me/api/portraits/women/63.jpg",
          timestamp: "5 months"
        }
      }
    ]
  },
  {
    title: "Luxury Penthouse Mumbai",
    price: 16500,

    description:
      "Experience luxury living above the city skyline in this exclusive penthouse located in South Mumbai. Featuring floor-to-ceiling windows, designer interiors, premium furnishings, and a private terrace, this property offers unmatched comfort and sophistication. Guests can enjoy panoramic city views, a modern kitchen, smart home features, and easy access to shopping districts, restaurants, and nightlife. Perfect for business executives, couples, and luxury travelers.",

    highlights: [
      "Skyline city views",
      "Private terrace",
      "Smart home features",
      "Luxury interiors",
      "Prime location"
    ],

    rating: 4.9,

    images: [
      { imgURL: "https://images.unsplash.com/photo-1494526585095-c41746248156", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1484154218962-a197022b5858", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", filename: "image" }
    ],

    owner: {
      username: "Aditya Mehta",
      email: "aditya@example.com",
      timestamp: Date.now(),
      pfp: "https://randomuser.me/api/portraits/men/64.jpg"
    },

    reviews: [
      {
        ratingValue: 5,
        timeAgo: "1 week ago",
        reviewText: "Absolutely stunning views and top-class amenities.",
        author: {
          username: "Vikas",
          pfp: "https://randomuser.me/api/portraits/men/65.jpg",
          timestamp: "1 month"
        }
      },
      {
        ratingValue: 5,
        timeAgo: "1 month ago",
        reviewText: "Luxury at its finest. Worth every rupee.",
        author: {
          username: "Neha",
          pfp: "https://randomuser.me/api/portraits/women/64.jpg",
          timestamp: "3 months"
        }
      },
      {
        ratingValue: 4,
        timeAgo: "3 months ago",
        reviewText: "Excellent stay with a very responsive host.",
        author: {
          username: "Rohan",
          pfp: "https://randomuser.me/api/portraits/men/66.jpg",
          timestamp: "6 months"
        }
      }
    ]
  },
  {
    title: "Desert Camp Jaisalmer",
    price: 5200,

    description:
      "Immerse yourself in the magic of Rajasthan's golden desert with this authentic luxury desert camp in Jaisalmer. Enjoy traditional folk performances, camel safaris, bonfires under the stars, and beautifully furnished tents equipped with modern comforts. The camp provides an unforgettable cultural experience while ensuring a comfortable and memorable stay in the heart of the Thar Desert.",

    highlights: [
      "Camel safari",
      "Cultural performances",
      "Bonfire nights",
      "Luxury desert tents",
      "Stargazing experience"
    ],

    rating: 4.7,

    images: [
      { imgURL: "https://images.unsplash.com/photo-1500534623283-312aade485b7", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1451187580459-43490279c0fa", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1472396961693-142e6e269027", filename: "image" }
    ],

    owner: {
      username: "Raj Singh",
      email: "raj@example.com",
      timestamp: Date.now(),
      pfp: "https://randomuser.me/api/portraits/men/67.jpg"
    },

    reviews: [
      {
        ratingValue: 5,
        timeAgo: "2 weeks ago",
        reviewText: "The cultural night and stargazing experience were unforgettable.",
        author: {
          username: "Ayesha",
          pfp: "https://randomuser.me/api/portraits/women/65.jpg",
          timestamp: "2 months"
        }
      },
      {
        ratingValue: 4,
        timeAgo: "1 month ago",
        reviewText: "Great hospitality and authentic desert experience.",
        author: {
          username: "Deepak",
          pfp: "https://randomuser.me/api/portraits/men/68.jpg",
          timestamp: "4 months"
        }
      },
      {
        ratingValue: 5,
        timeAgo: "4 months ago",
        reviewText: "A must-visit for anyone exploring Rajasthan.",
        author: {
          username: "Simran",
          pfp: "https://randomuser.me/api/portraits/women/66.jpg",
          timestamp: "8 months"
        }
      }
    ]
  },
  {
    title: "Farmhouse Lucknow",
    price: 4200,

    description:
      "Escape the city's hustle and enjoy a relaxing stay at this spacious farmhouse on the outskirts of Lucknow. Surrounded by greenery and open fields, the property offers large outdoor spaces, comfortable bedrooms, a barbecue area, and plenty of room for family gatherings. Perfect for weekend getaways, celebrations, and peaceful retreats with friends and family.",

    highlights: [
      "Large open lawn",
      "Family-friendly",
      "BBQ setup",
      "Peaceful surroundings",
      "Free parking"
    ],

    rating: 4.6,

    images: [
      { imgURL: "https://images.unsplash.com/photo-1518780664697-55e3ad937233", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1484154218962-a197022b5858", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1494526585095-c41746248156", filename: "image" }
    ],

    owner: {
      username: "Nawab Farms",
      email: "farms@example.com",
      timestamp: Date.now(),
      pfp: "https://randomuser.me/api/portraits/men/69.jpg"
    },

    reviews: [
      {
        ratingValue: 5,
        timeAgo: "2 weeks ago",
        reviewText: "Perfect venue for a family gathering.",
        author: {
          username: "Sana",
          pfp: "https://randomuser.me/api/portraits/women/67.jpg",
          timestamp: "2 months"
        }
      },
      {
        ratingValue: 4,
        timeAgo: "1 month ago",
        reviewText: "Spacious and peaceful, away from city noise.",
        author: {
          username: "Faizan",
          pfp: "https://randomuser.me/api/portraits/men/70.jpg",
          timestamp: "4 months"
        }
      },
      {
        ratingValue: 5,
        timeAgo: "5 months ago",
        reviewText: "Great farmhouse with lots of outdoor activities.",
        author: {
          username: "Nisha",
          pfp: "https://randomuser.me/api/portraits/women/68.jpg",
          timestamp: "7 months"
        }
      }
    ]
  },
  {
    title: "Snow View Chalet Shimla",
    price: 7200,

    description:
      "Perched on a scenic hillside, this charming chalet offers spectacular snow-covered mountain views and cozy wooden interiors. Guests can enjoy warm fireplaces, spacious balconies, and easy access to Shimla's attractions and nature trails. Whether you're visiting during snowfall or summer, the chalet provides a perfect escape into the Himalayas with comfort and style.",

    highlights: [
      "Snow-capped mountain views",
      "Wooden chalet design",
      "Private fireplace",
      "Balcony seating",
      "Nature trails nearby"
    ],

    rating: 4.8,

    images: [
      { imgURL: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1464146072230-91cabc968266", filename: "image" },
      { imgURL: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", filename: "image" }
    ],

    owner: {
      username: "Himalayan Stays",
      email: "himalayan@example.com",
      timestamp: Date.now(),
      pfp: "https://randomuser.me/api/portraits/men/71.jpg"
    },

    reviews: [
      {
        ratingValue: 5,
        timeAgo: "1 week ago",
        reviewText: "Woke up to snow-covered mountains. Incredible experience.",
        author: {
          username: "Ananya",
          pfp: "https://randomuser.me/api/portraits/women/69.jpg",
          timestamp: "1 month"
        }
      },
      {
        ratingValue: 5,
        timeAgo: "2 months ago",
        reviewText: "Cozy interiors and stunning scenery.",
        author: {
          username: "Harshit",
          pfp: "https://randomuser.me/api/portraits/men/72.jpg",
          timestamp: "4 months"
        }
      },
      {
        ratingValue: 4,
        timeAgo: "4 months ago",
        reviewText: "Great location and very comfortable stay.",
        author: {
          username: "Ishita",
          pfp: "https://randomuser.me/api/portraits/women/70.jpg",
          timestamp: "6 months"
        }
      }
    ]
  }
]

export default listData;