// routes/seed.js
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Category, Product, Brand } = db;

// This endpoint should be protected or removed after seeding production
router.post('/run', async (req, res) => {
  try {
    console.log('Starting database seeding...');

    // Create categories
    const categories = await Category.bulkCreate([
      { name: 'Diapers', description: 'Quality diapers and changing essentials', sortOrder: 1, isActive: true },
      { name: 'Health', description: 'Health and wellness products', sortOrder: 2, isActive: true },
      { name: 'Feeding', description: 'Feeding bottles and mealtime essentials', sortOrder: 3, isActive: true },
      { name: 'Books', description: 'Educational and entertaining books', sortOrder: 4, isActive: true },
      { name: 'Prelove', description: 'Gently used baby items', sortOrder: 5, isActive: true },
      { name: 'Playtime & Toys', description: 'Fun and educational toys', sortOrder: 6, isActive: true },
      { name: 'Health & Safety', description: 'Safety products for babies', sortOrder: 7, isActive: true },
      { name: 'Bathtime', description: 'Bath essentials for babies', sortOrder: 8, isActive: true },
      { name: 'Klickmas Store', description: 'Special holiday items', sortOrder: 9, isActive: true }
    ]);

    console.log('Categories created:', categories.length);

    // Create brands
    const brands = await Brand.bulkCreate([
      { name: 'Pampers', description: 'Trusted baby care brand', isActive: true },
      { name: 'Huggies', description: 'Premium diapers and wipes', isActive: true },
      { name: 'Johnson & Johnson', description: 'Baby health and hygiene', isActive: true },
      { name: 'Gerber', description: 'Baby food and feeding products', isActive: true },
      { name: 'Fisher-Price', description: 'Educational toys and gear', isActive: true },
      { name: 'Chicco', description: 'Italian baby products', isActive: true },
      { name: 'Avent', description: 'Feeding and nursing products', isActive: true },
      { name: 'Tommee Tippee', description: 'Feeding essentials', isActive: true },
      { name: 'Medela', description: 'Breastfeeding products', isActive: true },
      { name: 'Graco', description: 'Baby gear and equipment', isActive: true }
    ]);

    console.log('Brands created:', brands.length);

    // Create sample products
    const products = [];

    // Diapers category products
    const diapersCategory = categories.find(c => c.name === 'Diapers');
    const pampersBrand = brands.find(b => b.name === 'Pampers');
    const huggiesBrand = brands.find(b => b.name === 'Huggies');

    products.push(
      {
        name: 'Pampers Baby-Dry Diapers Size 4',
        description: 'Extra absorb channels help distribute wetness evenly for up to 12 hours of overnight protection',
        price: 8500,
        originalPrice: 10000,
        categoryId: diapersCategory.id,
        brandId: pampersBrand.id,
        imageUrl: 'https://images.unsplash.com/photo-1584462853452-2a41e7a0465b?w=500&h=500&fit=crop',
        stockQuantity: 50,
        isActive: true,
        isFeatured: true,
        rating: 4.5,
        reviewCount: 128
      },
      {
        name: 'Huggies Little Snugglers',
        description: 'Gentle protection for your baby with wetness indicator and pocketed back waistband',
        price: 9200,
        originalPrice: 11000,
        categoryId: diapersCategory.id,
        brandId: huggiesBrand.id,
        imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop',
        stockQuantity: 45,
        isActive: true,
        isFeatured: true,
        rating: 4.7,
        reviewCount: 95
      }
    );

    // Feeding category products
    const feedingCategory = categories.find(c => c.name === 'Feeding');
    const aventBrand = brands.find(b => b.name === 'Avent');
    const tommeeBrand = brands.find(b => b.name === 'Tommee Tippee');

    products.push(
      {
        name: 'Avent Natural Baby Bottle 9oz',
        description: 'Natural latch on with wide breast-shaped nipple. Anti-colic valve keeps air in bottle',
        price: 3500,
        originalPrice: 4200,
        categoryId: feedingCategory.id,
        brandId: aventBrand.id,
        imageUrl: 'https://images.unsplash.com/photo-1587070357119-b69ecd8b0b9d?w=500&h=500&fit=crop',
        stockQuantity: 100,
        isActive: true,
        isFeatured: true,
        rating: 4.8,
        reviewCount: 156
      },
      {
        name: 'Tommee Tippee Sippy Cup',
        description: 'Spill-proof cup with easy-grip handles, perfect for babies learning to drink',
        price: 2800,
        categoryId: feedingCategory.id,
        brandId: tommeeBrand.id,
        imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop',
        stockQuantity: 75,
        isActive: true,
        rating: 4.6,
        reviewCount: 89
      }
    );

    // Books category
    const booksCategory = categories.find(c => c.name === 'Books');
    products.push(
      {
        name: 'Baby\'s First Words Board Book',
        description: 'Colorful board book with pictures to help baby learn first words',
        price: 1500,
        originalPrice: 2000,
        categoryId: booksCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop',
        stockQuantity: 60,
        isActive: true,
        isFeatured: true,
        rating: 4.9,
        reviewCount: 203
      },
      {
        name: 'Goodnight Moon Classic',
        description: 'Beloved bedtime story that has helped children fall asleep for generations',
        price: 1800,
        categoryId: booksCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop',
        stockQuantity: 40,
        isActive: true,
        rating: 5.0,
        reviewCount: 312
      }
    );

    // Toys category
    const toysCategory = categories.find(c => c.name === 'Playtime & Toys');
    const fisherPriceBrand = brands.find(b => b.name === 'Fisher-Price');

    products.push(
      {
        name: 'Fisher-Price Rock-a-Stack',
        description: 'Classic stacking toy with colorful rings for baby to grasp and stack',
        price: 3200,
        categoryId: toysCategory.id,
        brandId: fisherPriceBrand.id,
        imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=500&fit=crop',
        stockQuantity: 55,
        isActive: true,
        isFeatured: true,
        rating: 4.7,
        reviewCount: 145
      },
      {
        name: 'Baby Soft Plush Teddy Bear',
        description: 'Cuddly soft teddy bear, perfect companion for your little one',
        price: 4500,
        originalPrice: 5500,
        categoryId: toysCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=500&h=500&fit=crop',
        stockQuantity: 35,
        isActive: true,
        rating: 4.8,
        reviewCount: 98
      }
    );

    // Health & Safety category
    const healthCategory = categories.find(c => c.name === 'Health & Safety');
    const jjBrand = brands.find(b => b.name === 'Johnson & Johnson');

    products.push(
      {
        name: 'Digital Baby Thermometer',
        description: 'Quick and accurate temperature reading in seconds with fever alert',
        price: 2500,
        categoryId: healthCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1584516016356-8f8190290f3d?w=500&h=500&fit=crop',
        stockQuantity: 80,
        isActive: true,
        rating: 4.6,
        reviewCount: 67
      },
      {
        name: 'Johnson\'s Baby First Aid Kit',
        description: 'Complete first aid kit designed specifically for babies and toddlers',
        price: 5500,
        categoryId: healthCategory.id,
        brandId: jjBrand.id,
        imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&h=500&fit=crop',
        stockQuantity: 25,
        isActive: true,
        isFeatured: true,
        rating: 4.9,
        reviewCount: 134
      }
    );

    // Bathtime category
    const bathtimeCategory = categories.find(c => c.name === 'Bathtime');
    products.push(
      {
        name: 'Johnson\'s Baby Shampoo 500ml',
        description: 'Gentle, tear-free formula that cleanses gently and rinses easily',
        price: 1800,
        categoryId: bathtimeCategory.id,
        brandId: jjBrand.id,
        imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop',
        stockQuantity: 120,
        isActive: true,
        rating: 4.7,
        reviewCount: 256
      },
      {
        name: 'Baby Bath Tub with Support',
        description: 'Ergonomic baby bathtub with newborn support sling and non-slip base',
        price: 6500,
        originalPrice: 8000,
        categoryId: bathtimeCategory.id,
        imageUrl: 'https://images.unsplash.com/photo-1584516016356-8f8190290f3d?w=500&h=500&fit=crop',
        stockQuantity: 20,
        isActive: true,
        isFeatured: true,
        rating: 4.8,
        reviewCount: 87
      }
    );

    const createdProducts = await Product.bulkCreate(products);
    console.log('Products created:', createdProducts.length);

    res.json({
      message: 'Database seeded successfully!',
      categoriesCreated: categories.length,
      brandsCreated: brands.length,
      productsCreated: createdProducts.length
    });
  } catch (error) {
    console.error('Seeding error:', error);
    res.status(500).json({ message: 'Failed to seed database', error: error.message });
  }
});

module.exports = router;
