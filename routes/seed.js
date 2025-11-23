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

    res.json({ 
      message: 'Database seeded successfully!',
      categoriesCreated: categories.length,
      brandsCreated: brands.length
    });
  } catch (error) {
    console.error('Seeding error:', error);
    res.status(500).json({ message: 'Failed to seed database', error: error.message });
  }
});

module.exports = router;
