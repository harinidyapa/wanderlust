const sampleListings = [
  {
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.0739, 9.7489] // Longitude, Latitude of Costa Rica
    },
    owner: "6618f6a6a1234567890abcdef",  // replace with a real User _id
    reviews: [] // or array of ObjectIds like ["6618f6a6a1234567890abcde1", ...]
  },
  {
    title: "Cozy Cabin in the Canadian Rockies",
    description: "A quiet cabin nestled among pine trees, perfect for a romantic getaway or hiking retreat.",
    image: {
      filename: "listingimage2",
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Banff, Alberta",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784]
    },
    owner: "6618f6a6a1234567890abcde2",
    reviews: []
  },
  {
    title: "Modern Loft in Downtown Toronto",
    description: "Experience urban living in this sleek loft located in the heart of Toronto.",
    image: {
      filename: "listingimage1",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Toronto",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-79.3832, 43.6532]
    }
  },
  {
    title: "Charming Cottage in the English Countryside",
    description: "Relax in this quaint cottage surrounded by rolling hills and lush greenery.",
    image: {
      filename: "listingimage2",
      url: "https://images.stockcake.com/public/8/5/3/85393f8e-5076-42c8-b2a5-225e032521ad_large/charming-country-cottage-stockcake.jpg"
    },
    price: 1500,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-1.8433, 51.8330]
    }
  },
  {
    title: "Beachfront Villa in Bali",
    description: "Enjoy breathtaking ocean views from this luxurious beachfront villa.",
    image: {
      filename: "listingimage3",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095]
    }
  },
  {
    title: "Ski Chalet in the Swiss Alps",
    description: "Cozy up in this traditional chalet with stunning mountain views.",
    image: {
      filename: "listingimage4",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdV_yLDubSsQVDNzMLeEb_51MCqF6cIx1GLQ&s"
    },
    price: 2800,
    location: "Zermatt",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207]
    }
  },
  {
    title: "Desert Retreat in Arizona",
    description: "Find peace in this secluded retreat amidst the desert landscape.",
    image: {
      filename: "listingimage5",
      url: "https://res.cloudinary.com/vacayou/images/f_webp,q_auto/v1713168505/magazine/Sanctuary-Camelback-Mountain_Infinity-Pool_235088c206/Sanctuary-Camelback-Mountain_Infinity-Pool_235088c206.jpg?_i=AA"
    },
    price: 1700,
    location: "Sedona",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-111.7633, 34.8697]
    }
  },
  {
    title: "Rustic Cabin in the Rockies",
    description: "Get away from it all in this rustic mountain cabin surrounded by pine trees.",
    image: {
      filename: "listingimage6",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/383403441.jpg?k=0d70432ce7823f8c3db9ab7f5f71776f2c2d1ea51894802ef3932f147d0cdcfe&o=&hp=1"
    },
    price: 1600,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8370, 39.1911]
    }
  },
  {
    title: "Luxury Apartment in Paris",
    description: "Live in style with this luxury apartment overlooking the Eiffel Tower.",
    image: {
      filename: "listingimage7",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4DTgtdrXoP4EqshyEsEMjpZnC4DmXODI8w&s"
    },
    price: 2500,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566]
    }
  },
  {
    title: "Peaceful Farmhouse in Tuscany",
    description: "Experience the Italian countryside in this traditional Tuscan farmhouse.",
    image: {
      filename: "listingimage8",
      url: "https://cdn4.tuscanynowandmore.com/storage/app/uploads/public/62d/13f/74a/thumb_11980_1920_0_0_0_auto.jpg"
    },
    price: 1400,
    location: "Tuscany",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696]
    }
  },
  
  
];

module.exports = { data: sampleListings };