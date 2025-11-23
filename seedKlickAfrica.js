// seedKlickAfrica.js - Complete seed data for KlickAfrica baby store
require('dotenv').config();
const db = require('./models');
const { Category, Brand, Product } = db;

// KlickAfrica Categories
const categories = [
  {
    name: 'Diapers',
    description: 'Premium diapers and changing essentials for your little ones',
    sortOrder: 1,
    isActive: true
  },
  {
    name: 'Health',
    description: 'Health and wellness products for babies and toddlers',
    sortOrder: 2,
    isActive: true
  },
  {
    name: 'Feeding',
    description: 'Feeding bottles, bibs, and mealtime essentials',
    sortOrder: 3,
    isActive: true
  },
  {
    name: 'Books',
    description: 'Educational and entertaining books for children',
    sortOrder: 4,
    isActive: true
  },
  {
    name: 'Prelove',
    description: 'Gently used baby items at great prices',
    sortOrder: 5,
    isActive: true
  },
  {
    name: 'Playtime & Toys',
    description: 'Fun and educational toys for all ages',
    sortOrder: 6,
    isActive: true
  },
  {
    name: 'Health & Safety',
    description: 'Safety products to protect your precious ones',
    sortOrder: 7,
    isActive: true
  },
  {
    name: 'Bathtime',
    description: 'Bath essentials for a fun and safe bathtime',
    sortOrder: 8,
    isActive: true
  },
  {
    name: 'Klickmas Store',
    description: 'Special holiday gifts and festive items for kids',
    sortOrder: 9,
    isActive: true
  }
];

// Baby Product Brands
const brands = [
  { name: 'Pampers', isActive: true, sortOrder: 1 },
  { name: 'Huggies', isActive: true, sortOrder: 2 },
  { name: 'Johnson & Johnson', isActive: true, sortOrder: 3 },
  { name: 'Philips Avent', isActive: true, sortOrder: 4 },
  { name: 'Tommee Tippee', isActive: true, sortOrder: 5 },
  { name: 'Fisher-Price', isActive: true, sortOrder: 6 },
  { name: 'Chicco', isActive: true, sortOrder: 7 },
  { name: 'Munchkin', isActive: true, sortOrder: 8 },
  { name: 'NUK', isActive: true, sortOrder: 9 },
  { name: 'Gerber', isActive: true, sortOrder: 10 },
  { name: 'Carter\'s', isActive: true, sortOrder: 11 },
  { name: 'Pigeon', isActive: true, sortOrder: 12 }
];

// Helper function to generate SKU
const generateSKU = (categoryName, index) => {
  const prefix = categoryName.substring(0, 3).toUpperCase();
  return `${prefix}-${Date.now()}-${index}`;
};

// Products data with baby/mom images from Unsplash
const getProductsByCategory = (categoryId, categoryName, brandIds) => {
  const products = {
    'Diapers': [
      {
        name: 'Premium Newborn Diapers (24 Pack)',
        description: 'Ultra-soft, absorbent diapers perfect for newborns. Features wetness indicator and leak protection. Hypoallergenic and dermatologically tested.',
        price: 4500,
        originalPrice: 5500,
        categoryId,
        brandId: brandIds[0],
        imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800',
        images: [
          'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800',
          'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800'
        ],
        sizes: [{ size: 'Newborn', price: 4500 }, { size: 'Size 1', price: 4800 }],
        stockQuantity: 150,
        isFeatured: true,
        rating: 4.8,
        reviewCount: 245,
        tags: ['newborn', 'premium', 'soft'],
        sku: generateSKU(categoryName, 1)
      },
      {
        name: 'Eco-Friendly Bamboo Diapers (36 Pack)',
        description: 'Biodegradable bamboo diapers that are gentle on baby\'s skin and the environment. Chemical-free and super absorbent.',
        price: 6800,
        originalPrice: 8000,
        categoryId,
        brandId: brandIds[1],
        imageUrl: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800',
        images: ['https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800'],
        sizes: [{ size: 'Medium', price: 6800 }, { size: 'Large', price: 7200 }],
        stockQuantity: 80,
        isFeatured: true,
        rating: 4.9,
        reviewCount: 189,
        tags: ['eco-friendly', 'bamboo', 'biodegradable'],
        sku: generateSKU(categoryName, 2)
      },
      {
        name: 'Night Time Diapers Extra Absorbent (30 Pack)',
        description: '12-hour protection for peaceful nights. Extra absorbent core keeps baby dry and comfortable all night long.',
        price: 5200,
        categoryId,
        brandId: brandIds[0],
        imageUrl: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=800',
        stockQuantity: 120,
        rating: 4.7,
        reviewCount: 156,
        tags: ['nighttime', 'absorbent', 'sleep'],
        sku: generateSKU(categoryName, 3)
      },
      {
        name: 'Swim Diapers for Toddlers (12 Pack)',
        description: 'Reusable swim diapers perfect for pool and beach time. No swelling, adjustable fit, easy to clean.',
        price: 3500,
        categoryId,
        brandId: brandIds[1],
        imageUrl: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800',
        stockQuantity: 60,
        rating: 4.6,
        reviewCount: 92,
        tags: ['swim', 'reusable', 'summer'],
        sku: generateSKU(categoryName, 4)
      }
    ],
    'Health': [
      {
        name: 'Digital Baby Thermometer',
        description: 'Quick and accurate temperature readings in just 10 seconds. Flexible tip for comfort, fever alarm, and memory recall.',
        price: 2800,
        originalPrice: 3500,
        categoryId,
        brandId: brandIds[2],
        imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800',
        stockQuantity: 95,
        isFeatured: true,
        rating: 4.7,
        reviewCount: 134,
        tags: ['thermometer', 'health', 'medical'],
        sku: generateSKU(categoryName, 1)
      },
      {
        name: 'Baby Nasal Aspirator Electric',
        description: 'Gentle and effective nasal aspirator to help baby breathe easier. Multiple suction levels, rechargeable, easy to clean.',
        price: 4200,
        categoryId,
        brandId: brandIds[2],
        imageUrl: 'https://images.unsplash.com/photo-1584473457408-3b5c2c098c9e?w=800',
        stockQuantity: 70,
        rating: 4.5,
        reviewCount: 98,
        tags: ['nasal', 'health', 'cold'],
        sku: generateSKU(categoryName, 2)
      },
      {
        name: 'Vitamin D3 Drops for Infants',
        description: 'Essential vitamin D3 supplement for babies. Tasteless, easy to administer, supports healthy bone development.',
        price: 3200,
        categoryId,
        brandId: brandIds[9],
        imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800',
        stockQuantity: 150,
        isFeatured: true,
        rating: 4.8,
        reviewCount: 267,
        tags: ['vitamins', 'supplements', 'health'],
        sku: generateSKU(categoryName, 3)
      },
      {
        name: 'Baby First Aid Kit Complete',
        description: 'Comprehensive first aid kit designed for babies. Includes thermometer, nail clipper, grooming set, and more.',
        price: 6500,
        categoryId,
        brandId: brandIds[2],
        imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800',
        stockQuantity: 45,
        rating: 4.9,
        reviewCount: 176,
        tags: ['first-aid', 'safety', 'emergency'],
        sku: generateSKU(categoryName, 4)
      }
    ],
    'Feeding': [
      {
        name: 'Anti-Colic Baby Bottles Set (3 Pack)',
        description: 'Clinically proven to reduce colic and discomfort. Natural latch nipple, easy to clean, BPA-free.',
        price: 5800,
        originalPrice: 7000,
        categoryId,
        brandId: brandIds[3],
        imageUrl: 'https://images.unsplash.com/photo-1598618443855-232ee0f819f2?w=800',
        images: ['https://images.unsplash.com/photo-1598618443855-232ee0f819f2?w=800'],
        stockQuantity: 110,
        isFeatured: true,
        rating: 4.9,
        reviewCount: 312,
        tags: ['bottles', 'anti-colic', 'feeding'],
        sku: generateSKU(categoryName, 1)
      },
      {
        name: 'Silicone Baby Feeding Set',
        description: 'Complete feeding set includes plate, bowl, cup, and spoon. Microwave safe, dishwasher safe, non-toxic silicone.',
        price: 4200,
        categoryId,
        brandId: brandIds[7],
        imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800',
        stockQuantity: 85,
        rating: 4.6,
        reviewCount: 145,
        tags: ['silicone', 'feeding-set', 'dinnerware'],
        sku: generateSKU(categoryName, 2)
      },
      {
        name: 'Breast Milk Storage Bags (100 Count)',
        description: 'Pre-sterilized, leak-proof bags for safe breast milk storage. Double zipper seal, easy pour spout.',
        price: 3500,
        categoryId,
        brandId: brandIds[4],
        imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800',
        stockQuantity: 200,
        rating: 4.7,
        reviewCount: 234,
        tags: ['breastfeeding', 'storage', 'bags'],
        sku: generateSKU(categoryName, 3)
      },
      {
        name: 'Electric Breast Pump Double',
        description: 'Efficient double electric breast pump with multiple suction modes. Quiet, portable, USB rechargeable.',
        price: 15800,
        originalPrice: 18500,
        categoryId,
        brandId: brandIds[3],
        imageUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800',
        stockQuantity: 35,
        isFeatured: true,
        rating: 4.8,
        reviewCount: 198,
        tags: ['breast-pump', 'electric', 'breastfeeding'],
        sku: generateSKU(categoryName, 4)
      },
      {
        name: 'Baby Food Maker & Steamer',
        description: 'All-in-one baby food maker. Steam, blend, and warm in one convenient appliance. Makes fresh, healthy baby food.',
        price: 12500,
        categoryId,
        brandId: brandIds[6],
        imageUrl: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=800',
        stockQuantity: 50,
        rating: 4.7,
        reviewCount: 167,
        tags: ['food-maker', 'steamer', 'appliance'],
        sku: generateSKU(categoryName, 5)
      }
    ],
    'Books': [
      {
        name: 'Baby\'s First Book Set (6 Books)',
        description: 'Colorful board books perfect for tiny hands. High-contrast images, tactile elements, educational and fun.',
        price: 4500,
        categoryId,
        brandId: brandIds[5],
        imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
        stockQuantity: 120,
        isFeatured: true,
        rating: 4.9,
        reviewCount: 289,
        tags: ['board-books', 'educational', 'infant'],
        sku: generateSKU(categoryName, 1)
      },
      {
        name: 'Bath Time Waterproof Books (4 Pack)',
        description: 'Soft, waterproof books for bath time fun. Squeak when squeezed, vibrant colors, safe for baby to chew.',
        price: 2800,
        categoryId,
        brandId: brandIds[5],
        imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
        stockQuantity: 95,
        rating: 4.7,
        reviewCount: 156,
        tags: ['waterproof', 'bath-books', 'fun'],
        sku: generateSKU(categoryName, 2)
      },
      {
        name: 'Interactive Touch & Feel Book',
        description: 'Sensory development book with different textures. Helps develop fine motor skills and cognitive abilities.',
        price: 3200,
        categoryId,
        brandId: brandIds[5],
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        stockQuantity: 78,
        rating: 4.8,
        reviewCount: 203,
        tags: ['interactive', 'sensory', 'touch'],
        sku: generateSKU(categoryName, 3)
      },
      {
        name: 'African Folk Tales for Children',
        description: 'Beautiful collection of African stories with stunning illustrations. Teaches values and culture.',
        price: 5500,
        categoryId,
        brandId: brandIds[5],
        imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
        stockQuantity: 65,
        isFeatured: true,
        rating: 5.0,
        reviewCount: 142,
        tags: ['stories', 'african', 'culture'],
        sku: generateSKU(categoryName, 4)
      }
    ],
    'Playtime & Toys': [
      {
        name: 'Musical Baby Play Mat',
        description: 'Interactive play mat with lights, sounds, and hanging toys. Encourages tummy time and sensory development.',
        price: 8500,
        originalPrice: 10500,
        categoryId,
        brandId: brandIds[5],
        imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800',
        stockQuantity: 60,
        isFeatured: true,
        rating: 4.8,
        reviewCount: 276,
        tags: ['play-mat', 'musical', 'development'],
        sku: generateSKU(categoryName, 1)
      },
      {
        name: 'Wooden Stacking Blocks Set',
        description: 'Natural wooden blocks in various shapes and colors. Safe, eco-friendly, helps develop motor skills.',
        price: 4200,
        categoryId,
        brandId: brandIds[5],
        imageUrl: 'https://images.unsplash.com/photo-1587912781940-c2f2e9c0a6f8?w=800',
        stockQuantity: 90,
        rating: 4.7,
        reviewCount: 189,
        tags: ['wooden', 'blocks', 'educational'],
        sku: generateSKU(categoryName, 2)
      },
      {
        name: 'Soft Plush Activity Cube',
        description: 'Multi-sensory activity cube with mirrors, crinkles, and textures. Perfect for curious little hands.',
        price: 3800,
        categoryId,
        brandId: brandIds[5],
        imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800',
        stockQuantity: 75,
        rating: 4.6,
        reviewCount: 134,
        tags: ['plush', 'activity', 'sensory'],
        sku: generateSKU(categoryName, 3)
      },
      {
        name: 'Baby Walker with Music & Lights',
        description: 'Sturdy baby walker with interactive panel. Adjustable speed, removable activity tray, folds for storage.',
        price: 14500,
        categoryId,
        brandId: brandIds[5],
        imageUrl: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800',
        stockQuantity: 40,
        isFeatured: true,
        rating: 4.7,
        reviewCount: 198,
        tags: ['walker', 'mobile', 'music'],
        sku: generateSKU(categoryName, 4)
      },
      {
        name: 'Montessori Learning Toys Set',
        description: 'Educational toy set based on Montessori principles. Includes sorting, stacking, and problem-solving toys.',
        price: 9800,
        categoryId,
        brandId: brandIds[5],
        imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800',
        stockQuantity: 55,
        rating: 4.9,
        reviewCount: 245,
        tags: ['montessori', 'educational', 'learning'],
        sku: generateSKU(categoryName, 5)
      }
    ],
    'Health & Safety': [
      {
        name: 'Baby Monitor with Camera & App',
        description: 'HD video baby monitor with night vision, two-way audio, temperature sensor. Connect via smartphone app.',
        price: 18500,
        originalPrice: 22000,
        categoryId,
        brandId: brandIds[6],
        imageUrl: 'https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=800',
        stockQuantity: 45,
        isFeatured: true,
        rating: 4.8,
        reviewCount: 312,
        tags: ['monitor', 'camera', 'safety'],
        sku: generateSKU(categoryName, 1)
      },
      {
        name: 'Electrical Outlet Covers (40 Pack)',
        description: 'Childproof outlet covers to prevent electrical accidents. Easy for adults, impossible for children.',
        price: 1500,
        categoryId,
        brandId: brandIds[7],
        imageUrl: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800',
        stockQuantity: 200,
        rating: 4.6,
        reviewCount: 456,
        tags: ['safety', 'childproof', 'electrical'],
        sku: generateSKU(categoryName, 2)
      },
      {
        name: 'Cabinet & Drawer Safety Locks (12 Pack)',
        description: 'Adhesive safety locks for cabinets and drawers. No drilling required, strong 3M adhesive.',
        price: 2200,
        categoryId,
        brandId: brandIds[7],
        imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
        stockQuantity: 150,
        rating: 4.5,
        reviewCount: 289,
        tags: ['locks', 'cabinet', 'safety'],
        sku: generateSKU(categoryName, 3)
      },
      {
        name: 'Baby Car Seat (0-4 Years)',
        description: 'Premium car seat with 5-point harness, side impact protection, and adjustable recline positions.',
        price: 28500,
        originalPrice: 32000,
        categoryId,
        brandId: brandIds[6],
        imageUrl: 'https://images.unsplash.com/photo-1617861162006-f528f675a3bb?w=800',
        stockQuantity: 30,
        isFeatured: true,
        rating: 4.9,
        reviewCount: 267,
        tags: ['car-seat', 'safety', 'travel'],
        sku: generateSKU(categoryName, 4)
      },
      {
        name: 'Baby Gate Extra Wide',
        description: 'Pressure-mounted safety gate for stairs and doorways. Auto-close feature, walk-through door.',
        price: 12800,
        categoryId,
        brandId: brandIds[7],
        imageUrl: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800',
        stockQuantity: 55,
        rating: 4.7,
        reviewCount: 178,
        tags: ['gate', 'stairs', 'safety'],
        sku: generateSKU(categoryName, 5)
      }
    ],
    'Bathtime': [
      {
        name: 'Baby Bath Tub with Temperature Sensor',
        description: 'Ergonomic baby bath tub with built-in temperature indicator. Non-slip surface, drain plug included.',
        price: 6500,
        categoryId,
        brandId: brandIds[2],
        imageUrl: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800',
        stockQuantity: 70,
        isFeatured: true,
        rating: 4.7,
        reviewCount: 198,
        tags: ['bath-tub', 'temperature', 'bathing'],
        sku: generateSKU(categoryName, 1)
      },
      {
        name: 'Gentle Baby Shampoo & Body Wash',
        description: 'Tear-free, hypoallergenic baby wash. Made with natural ingredients, mild fragrance, pH balanced.',
        price: 2200,
        categoryId,
        brandId: brandIds[2],
        imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800',
        stockQuantity: 180,
        rating: 4.8,
        reviewCount: 445,
        tags: ['shampoo', 'wash', 'gentle'],
        sku: generateSKU(categoryName, 2)
      },
      {
        name: 'Hooded Baby Towel Set (3 Pack)',
        description: 'Ultra-soft, absorbent hooded towels. 100% organic cotton, keeps baby warm after bath.',
        price: 4800,
        categoryId,
        brandId: brandIds[10],
        imageUrl: 'https://images.unsplash.com/photo-1519183071298-a2962feb14f4?w=800',
        stockQuantity: 95,
        rating: 4.6,
        reviewCount: 167,
        tags: ['towel', 'hooded', 'cotton'],
        sku: generateSKU(categoryName, 3)
      },
      {
        name: 'Bath Toys Floating Set (8 Pieces)',
        description: 'Colorful floating bath toys that squirt water. BPA-free, mold-resistant, perfect for bath time fun.',
        price: 2500,
        categoryId,
        brandId: brandIds[7],
        imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800',
        stockQuantity: 120,
        rating: 4.5,
        reviewCount: 234,
        tags: ['toys', 'floating', 'fun'],
        sku: generateSKU(categoryName, 4)
      },
      {
        name: 'Baby Hair Brush & Comb Set',
        description: 'Soft bristle brush and wide-tooth comb set. Gentle on baby\'s delicate scalp, natural wood handle.',
        price: 1800,
        categoryId,
        brandId: brandIds[2],
        imageUrl: 'https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800',
        stockQuantity: 110,
        rating: 4.6,
        reviewCount: 123,
        tags: ['brush', 'comb', 'grooming'],
        sku: generateSKU(categoryName, 5)
      }
    ],
    'Prelove': [
      {
        name: 'Gently Used Baby Clothes Bundle (0-6 Months)',
        description: 'Bundle of 10 gently used baby clothes in excellent condition. Mix of onesies, sleepers, and outfits.',
        price: 3500,
        originalPrice: 8000,
        categoryId,
        brandId: brandIds[10],
        imageUrl: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800',
        stockQuantity: 25,
        rating: 4.5,
        reviewCount: 67,
        tags: ['clothes', 'preloved', 'bundle'],
        sku: generateSKU(categoryName, 1)
      },
      {
        name: 'Pre-loved Baby Stroller (Good Condition)',
        description: 'Well-maintained stroller with minimal wear. Fully functional, cleaned and sanitized.',
        price: 15000,
        originalPrice: 35000,
        categoryId,
        brandId: brandIds[6],
        imageUrl: 'https://images.unsplash.com/photo-1544140708-4f5607c46e9d?w=800',
        stockQuantity: 8,
        rating: 4.4,
        reviewCount: 34,
        tags: ['stroller', 'preloved', 'transport'],
        sku: generateSKU(categoryName, 2)
      },
      {
        name: 'Secondhand Baby Carrier (Like New)',
        description: 'Ergonomic baby carrier in like-new condition. Adjustable, comfortable, suitable for newborns to toddlers.',
        price: 6500,
        originalPrice: 12000,
        categoryId,
        brandId: brandIds[6],
        imageUrl: 'https://images.unsplash.com/photo-1566454419290-0a91c9736c9f?w=800',
        stockQuantity: 12,
        rating: 4.6,
        reviewCount: 45,
        tags: ['carrier', 'preloved', 'ergonomic'],
        sku: generateSKU(categoryName, 3)
      }
    ],
    'Klickmas Store': [
      {
        name: 'Christmas Baby Outfit with Santa Hat',
        description: 'Adorable festive outfit for baby\'s first Christmas. Includes onesie, pants, and Santa hat.',
        price: 4500,
        categoryId,
        brandId: brandIds[10],
        imageUrl: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800',
        stockQuantity: 85,
        isFeatured: true,
        rating: 4.8,
        reviewCount: 156,
        tags: ['christmas', 'outfit', 'festive'],
        sku: generateSKU(categoryName, 1)
      },
      {
        name: 'Holiday Gift Set for New Moms',
        description: 'Curated gift set including baby essentials, organic products, and pampering items for new moms.',
        price: 12500,
        originalPrice: 15000,
        categoryId,
        brandId: brandIds[2],
        imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800',
        stockQuantity: 40,
        isFeatured: true,
        rating: 5.0,
        reviewCount: 89,
        tags: ['gift-set', 'holiday', 'mom'],
        sku: generateSKU(categoryName, 2)
      },
      {
        name: 'Festive Baby Blanket Gift Set',
        description: 'Soft, warm blanket with matching booties and mittens. Perfect holiday gift for babies.',
        price: 5500,
        categoryId,
        brandId: brandIds[10],
        imageUrl: 'https://images.unsplash.com/photo-1545128485-c400e7702796?w=800',
        stockQuantity: 65,
        rating: 4.7,
        reviewCount: 112,
        tags: ['blanket', 'gift', 'festive'],
        sku: generateSKU(categoryName, 3)
      },
      {
        name: 'Baby\'s First Christmas Ornament Set',
        description: 'Personalization-ready ornament set to celebrate baby\'s first Christmas. Includes photo frame ornament.',
        price: 2800,
        categoryId,
        brandId: brandIds[5],
        imageUrl: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800',
        stockQuantity: 100,
        rating: 4.9,
        reviewCount: 178,
        tags: ['ornament', 'christmas', 'keepsake'],
        sku: generateSKU(categoryName, 4)
      }
    ]
  };

  return products[categoryName] || [];
};

// Main seed function
const seedKlickAfrica = async () => {
  try {
    console.log('🚀 Starting KlickAfrica database seeding...\n');

    // Connect to database
    await db.sequelize.authenticate();
    console.log('✅ Database connection established\n');

    // Sync models
    await db.sequelize.sync();
    console.log('✅ Models synchronized\n');

    // Clear existing data (optional - comment out if you want to keep existing data)
    console.log('🗑️  Clearing existing data...');
    await Product.destroy({ where: {}, truncate: true, cascade: true });
    await Category.destroy({ where: {}, truncate: true, cascade: true });
    await Brand.destroy({ where: {}, truncate: true, cascade: true });
    console.log('✅ Existing data cleared\n');

    // Seed Categories
    console.log('📁 Seeding categories...');
    const createdCategories = {};
    for (const categoryData of categories) {
      const category = await Category.create(categoryData);
      createdCategories[category.name] = category;
      console.log(`  ✅ Created category: ${category.name}`);
    }
    console.log(`\n✅ ${Object.keys(createdCategories).length} categories created\n`);

    // Seed Brands
    console.log('🏷️  Seeding brands...');
    const createdBrands = [];
    for (const brandData of brands) {
      const brand = await Brand.create(brandData);
      createdBrands.push(brand);
      console.log(`  ✅ Created brand: ${brand.name}`);
    }
    console.log(`\n✅ ${createdBrands.length} brands created\n`);

    // Seed Products
    console.log('🛍️  Seeding products...');
    let totalProducts = 0;
    const brandIds = createdBrands.map(b => b.id);

    for (const [categoryName, category] of Object.entries(createdCategories)) {
      console.log(`\n  📦 Adding products for ${categoryName}...`);
      const products = getProductsByCategory(category.id, categoryName, brandIds);

      for (const productData of products) {
        const product = await Product.create(productData);
        totalProducts++;
        console.log(`    ✅ ${product.name}`);
      }
    }

    console.log(`\n✅ ${totalProducts} products created\n`);

    // Summary
    console.log('═══════════════════════════════════════════════════');
    console.log('🎉 KlickAfrica Database Seeded Successfully!');
    console.log('═══════════════════════════════════════════════════');
    console.log(`📁 Categories: ${Object.keys(createdCategories).length}`);
    console.log(`🏷️  Brands: ${createdBrands.length}`);
    console.log(`🛍️  Products: ${totalProducts}`);
    console.log('═══════════════════════════════════════════════════\n');

    process.exit(0);
  } catch (error) {
    console.error('\n❌ Error seeding database:', error.message);
    console.error(error);
    process.exit(1);
  }
};

// Run the seed function
seedKlickAfrica();
