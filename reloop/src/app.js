// Product Data
const productData = {
    kitchen: [
        {
            id: 'k1',
            name: 'Bamboo Utensil Set',
            price: '$24.99',
            image: 'https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?w=800',
            badge: 'Bestseller',
            description: 'Complete set of sustainable bamboo cooking utensils. Perfect for eco-conscious kitchens. Includes spatula, ladle, spoon, and slotted spoon.',
            sustainability: ['Made from 100% sustainable bamboo', 'Biodegradable and compostable', 'No plastic packaging', 'Carbon neutral shipping'],
            materials: '100% organic bamboo, food-safe mineral oil finish',
            certifications: ['FSC Certified', 'Organic', 'Fair Trade'],
            reviews: [
                { name: 'Emma S.', rating: 5, comment: 'Love these! They feel great in hand and are so durable.' },
                { name: 'Michael T.', rating: 5, comment: 'Finally ditched my plastic utensils. These are amazing!' },
                { name: 'Lisa K.', rating: 4, comment: 'Great quality, just wish the set included a few more pieces.' }
            ]
        },
        {
            id: 'k2',
            name: 'Reusable Food Wraps',
            price: '$18.99',
            image: 'https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?w=800',
            badge: 'Eco-Friendly',
            description: 'Set of 5 beeswax wraps in various sizes. Replace plastic wrap with these natural, reusable alternatives.',
            sustainability: ['Replaces single-use plastic wrap', 'Reusable for up to 1 year', 'Compostable at end of life', 'Locally sourced beeswax'],
            materials: 'Organic cotton, beeswax, jojoba oil, tree resin',
            certifications: ['GOTS Certified', 'Organic'],
            reviews: [
                { name: 'Rachel P.', rating: 5, comment: 'Game changer! No more plastic wrap in my house.' },
                { name: 'David L.', rating: 5, comment: 'They stick really well and are easy to clean.' }
            ]
        },
        {
            id: 'k3',
            name: 'Compost Bin',
            price: '$34.99',
            image: 'https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?w=800',
            badge: 'New',
            description: 'Stylish countertop compost bin with carbon filter. Makes composting easy and odor-free.',
            sustainability: ['Reduces landfill waste', 'Made from recycled materials', 'Replaceable carbon filters', 'Dishwasher safe'],
            materials: 'Recycled stainless steel, activated carbon filter',
            certifications: ['Recycled Content'],
            reviews: [
                { name: 'Sophie M.', rating: 5, comment: 'No smell at all! Looks great on my counter.' },
                { name: 'James W.', rating: 4, comment: 'Perfect size for my kitchen. Very well made.' }
            ]
        },
        {
            id: 'k4',
            name: 'Stainless Steel Straws',
            price: '$12.99',
            image: 'https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?w=800',
            badge: 'Popular',
            description: 'Set of 8 reusable straws with cleaning brushes and travel pouch. Includes straight and bent styles.',
            sustainability: ['Eliminates single-use plastic straws', 'Lifetime durability', '100% recyclable', 'BPA and toxin free'],
            materials: 'Food-grade 18/8 stainless steel',
            certifications: ['Food Safe', 'BPA Free'],
            reviews: [
                { name: 'Alex C.', rating: 5, comment: 'Great quality! The pouch makes it easy to carry them.' },
                { name: 'Nina R.', rating: 5, comment: 'Love the variety of sizes. Easy to clean.' }
            ]
        }
    ],
    'personal-care': [
        {
            id: 'p1',
            name: 'Natural Shampoo Bar',
            price: '$14.99',
            image: 'https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?w=800',
            badge: 'Organic',
            description: 'Zero-waste shampoo bar made with organic ingredients. Gentle cleansing for all hair types. Lasts 2-3 months.',
            sustainability: ['No plastic bottle waste', 'Equivalent to 3 bottles of liquid shampoo', 'Palm oil free', 'Cruelty free - never tested on animals'],
            materials: 'Coconut oil, shea butter, essential oils, natural clay',
            certifications: ['Organic', 'Cruelty Free', 'Vegan'],
            reviews: [
                { name: 'Maya J.', rating: 5, comment: 'My hair has never been healthier! Amazing lather.' },
                { name: 'Tom B.', rating: 4, comment: 'Great product but took a week to get used to.' }
            ]
        },
        {
            id: 'p2',
            name: 'Bamboo Toothbrush',
            price: '$8.99',
            image: 'https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?w=800',
            badge: 'Bestseller',
            description: 'Pack of 4 biodegradable bamboo toothbrushes. Soft charcoal-infused bristles for gentle cleaning.',
            sustainability: ['Handle is 100% biodegradable', 'Reduces plastic toothbrush waste', 'Sustainable bamboo grows rapidly', 'Plastic-free packaging'],
            materials: 'Bamboo handle, charcoal-infused nylon bristles',
            certifications: ['FSC Certified', 'Biodegradable'],
            reviews: [
                { name: 'Sarah L.', rating: 5, comment: 'Feel good about my daily routine now!' },
                { name: 'Kevin H.', rating: 5, comment: 'Great quality and the charcoal bristles work well.' }
            ]
        },
        {
            id: 'p3',
            name: 'Organic Facial Serum',
            price: '$29.99',
            image: 'https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?w=800',
            badge: 'Premium',
            description: 'Luxurious anti-aging serum with rosehip and vitamin C. Hydrates and brightens skin naturally.',
            sustainability: ['Organic, wildcrafted ingredients', 'Glass bottle - reusable & recyclable', 'No synthetic fragrances or dyes', 'Ethically sourced ingredients'],
            materials: 'Organic rosehip oil, vitamin C, hyaluronic acid, aloe vera',
            certifications: ['Organic', 'Cruelty Free', 'Natural'],
            reviews: [
                { name: 'Jessica F.', rating: 5, comment: 'My skin is glowing! Worth every penny.' },
                { name: 'Amanda P.', rating: 5, comment: 'Finally a natural serum that actually works.' }
            ]
        },
        {
            id: 'p4',
            name: 'Reusable Cotton Pads',
            price: '$16.99',
            image: 'https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?w=800',
            badge: 'Eco-Friendly',
            description: 'Set of 16 reusable makeup remover pads with laundry bag. Soft on skin, tough on makeup.',
            sustainability: ['Replaces 1000+ disposable cotton rounds', 'Machine washable', 'Zero waste solution', 'Lasts for years'],
            materials: 'Organic cotton terry cloth, bamboo fabric blend',
            certifications: ['GOTS Certified', 'Organic'],
            reviews: [
                { name: 'Olivia G.', rating: 5, comment: 'So soft and they work better than disposables!' },
                { name: 'Chloe D.', rating: 5, comment: 'Can\'t believe I didn\'t switch sooner.' }
            ]
        }
    ],
    cleaning: [
        {
            id: 'c1',
            name: 'All-Purpose Cleaner',
            price: '$11.99',
            image: 'https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?w=800',
            badge: 'Plant-Based',
            description: 'Concentrated plant-based cleaner. One bottle makes 3 spray bottles. Safe for all surfaces.',
            sustainability: ['Plant-based ingredients', 'Concentrated formula reduces packaging', 'Non-toxic and biodegradable', 'Refillable glass bottle'],
            materials: 'Plant-derived surfactants, essential oils, purified water',
            certifications: ['EPA Safer Choice', 'Biodegradable'],
            reviews: [
                { name: 'Mark R.', rating: 5, comment: 'Cleans amazingly and smells fresh!' },
                { name: 'Paula V.', rating: 4, comment: 'Works well on most surfaces. Good value.' }
            ]
        },
        {
            id: 'c2',
            name: 'Dish Soap Concentrate',
            price: '$13.99',
            image: 'https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?w=800',
            badge: 'Zero Waste',
            description: 'Ultra-concentrated dish soap. Tough on grease, gentle on hands. Makes 16 oz when diluted.',
            sustainability: ['Zero waste packaging', 'Concentrated = less shipping emissions', 'No harmful chemicals', 'Greywater safe'],
            materials: 'Plant-based cleaners, aloe vera, vitamin E',
            certifications: ['EPA Safer Choice', 'Cruelty Free'],
            reviews: [
                { name: 'Jennifer K.', rating: 5, comment: 'Cuts through grease like magic!' },
                { name: 'Robert E.', rating: 5, comment: 'Hands feel great after washing dishes.' }
            ]
        },
        {
            id: 'c3',
            name: 'Microfiber Cloths Set',
            price: '$19.99',
            image: 'https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?w=800',
            badge: 'Reusable',
            description: 'Set of 12 premium microfiber cleaning cloths. Color-coded for different cleaning tasks.',
            sustainability: ['Replaces paper towels', 'Washable 500+ times', 'Cleans with just water', 'Reduces chemical use'],
            materials: 'Split microfiber blend (80% polyester, 20% polyamide)',
            certifications: ['Oeko-Tex Certified'],
            reviews: [
                { name: 'Diana S.', rating: 5, comment: 'Haven\'t bought paper towels in months!' },
                { name: 'Chris N.', rating: 5, comment: 'Super absorbent and durable.' }
            ]
        },
        {
            id: 'c4',
            name: 'Natural Laundry Detergent',
            price: '$22.99',
            image: 'https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?w=800',
            badge: 'Bestseller',
            description: 'Plant-based laundry detergent for 64 loads. Works in all temperatures and machines.',
            sustainability: ['Plant-derived formula', 'Safe for septic systems', 'Hypoallergenic', 'Recyclable packaging'],
            materials: 'Plant-based enzymes, coconut-derived surfactants, essential oils',
            certifications: ['EPA Safer Choice', 'Hypoallergenic'],
            reviews: [
                { name: 'Laura M.', rating: 5, comment: 'Clothes come out fresh and clean every time!' },
                { name: 'Brian A.', rating: 5, comment: 'Great for sensitive skin. No more reactions.' }
            ]
        }
    ],
    fashion: [
        {
            id: 'f1',
            name: 'Organic Cotton T-Shirt',
            price: '$32.99',
            image: 'https://images.unsplash.com/photo-1573612664822-d7d347da7b80?w=800',
            badge: 'Fair Trade',
            description: 'Soft, breathable organic cotton tee. Classic fit, ethically made. Available in 8 colors.',
            sustainability: ['100% organic cotton', 'Fair trade certified', 'Carbon neutral production', 'Low-impact dyes'],
            materials: '100% GOTS certified organic cotton',
            certifications: ['Fair Trade', 'GOTS Certified', 'Carbon Neutral'],
            reviews: [
                { name: 'Tyler S.', rating: 5, comment: 'Best t-shirt I\'ve ever owned. So comfortable!' },
                { name: 'Hannah B.', rating: 5, comment: 'Perfect fit and the fabric is amazing.' }
            ]
        },
        {
            id: 'f2',
            name: 'Recycled Denim Jeans',
            price: '$68.99',
            image: 'https://images.unsplash.com/photo-1573612664822-d7d347da7b80?w=800',
            badge: 'Eco-Friendly',
            description: 'Stylish jeans made from 40% recycled denim. Modern fit with timeless style.',
            sustainability: ['40% recycled cotton content', 'Water-saving production', 'Recycled metal hardware', 'Minimal chemical processing'],
            materials: '60% organic cotton, 40% recycled cotton denim',
            certifications: ['Recycled Content', 'GOTS Certified'],
            reviews: [
                { name: 'Marcus J.', rating: 5, comment: 'Great fit! You can\'t even tell they\'re recycled.' },
                { name: 'Sophia W.', rating: 4, comment: 'Love the style. Runs slightly large.' }
            ]
        },
        {
            id: 'f3',
            name: 'Hemp Tote Bag',
            price: '$24.99',
            image: 'https://images.unsplash.com/photo-1573612664822-d7d347da7b80?w=800',
            badge: 'Bestseller',
            description: 'Durable hemp tote bag perfect for shopping or daily use. Reinforced handles and bottom.',
            sustainability: ['Hemp is naturally pest-resistant', 'Requires minimal water to grow', 'Biodegradable material', 'Replaces plastic bags'],
            materials: '100% organic hemp canvas',
            certifications: ['Organic', 'Fair Trade'],
            reviews: [
                { name: 'Emily R.', rating: 5, comment: 'So sturdy! Holds all my groceries easily.' },
                { name: 'Nathan Q.', rating: 5, comment: 'Perfect size and very well made.' }
            ]
        },
        {
            id: 'f4',
            name: 'Sustainable Sneakers',
            price: '$89.99',
            image: 'https://images.unsplash.com/photo-1573612664822-d7d347da7b80?w=800',
            badge: 'New',
            description: 'Comfortable sneakers made from recycled materials. Casual style meets eco-innovation.',
            sustainability: ['Upper made from recycled plastic bottles', 'Natural rubber sole', 'Recycled packaging', 'Carbon offset shipping'],
            materials: 'Recycled PET upper, natural rubber sole, organic cotton laces',
            certifications: ['Recycled Content', 'Carbon Neutral'],
            reviews: [
                { name: 'Jake M.', rating: 5, comment: 'Super comfortable and they look great!' },
                { name: 'Mia L.', rating: 5, comment: 'Finally sustainable shoes that don\'t compromise on style.' }
            ]
        }
    ]
};

const teamData = [
    {
        name: 'Sarah Chen',
        role: 'Founder & CEO',
        bio: 'Passionate about sustainability and creating a circular economy. 10+ years in eco-business.',
        image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=300',
        email: 'sarah@reloop.eco',
        phone: '+1 (555) 123-4567'
    },
    {
        name: 'Marcus Johnson',
        role: 'Product Designer',
        bio: 'Specializing in eco-friendly product design and sustainable materials innovation.',
        image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=300',
        email: 'marcus@reloop.eco',
        phone: '+1 (555) 234-5678'
    },
    {
        name: 'Emma Rodriguez',
        role: 'Sustainability Director',
        bio: 'Expert in environmental science, ensuring all our products meet the highest eco-standards.',
        image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?w=300',
        email: 'emma@reloop.eco',
        phone: '+1 (555) 345-6789'
    },
    {
        name: 'David Park',
        role: 'Community Manager',
        bio: 'Building a community of eco-conscious consumers making a difference, one choice at a time.',
        image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?w=300',
        email: 'david@reloop.eco',
        phone: '+1 (555) 456-7890'
    }
];

// State
let currentScreen = 'loginScreen';
let currentCategory = '';
let currentProducts = [];
let selectedProduct = null;

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
    
    // Reinitialize icons after screen change
    setTimeout(() => lucide.createIcons(), 100);
}

// Login Form
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showScreen('welcomeScreen');
    
    // Auto-transition to categories after 5 seconds
    setTimeout(() => {
        showScreen('categoryScreen');
    }, 5000);
});

// Category Selection
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        currentCategory = category;
        currentProducts = productData[category] || [];
        
        // Update category title
        const categoryNames = {
            'kitchen': 'Kitchen',
            'personal-care': 'Personal Care',
            'cleaning': 'Cleaning',
            'fashion': 'Fashion'
        };
        document.getElementById('categoryTitle').textContent = categoryNames[category];
        
        // Render products
        renderProducts(currentProducts);
        showScreen('productListScreen');
    });
});

// Back Button
document.getElementById('backBtn').addEventListener('click', () => {
    showScreen('categoryScreen');
    document.getElementById('searchInput').value = '';
});

document.getElementById('backToCategories').addEventListener('click', () => {
    showScreen('categoryScreen');
});

// Contact FAB buttons
document.getElementById('contactFab').addEventListener('click', () => {
    renderTeam();
    showScreen('contactScreen');
});

document.getElementById('contactFab2').addEventListener('click', () => {
    renderTeam();
    showScreen('contactScreen');
});

// User Profile Dropdown
function setupProfileDropdown(profileId, dropdownId) {
    const profile = document.getElementById(profileId);
    const dropdown = document.getElementById(dropdownId);
    
    profile.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
        setTimeout(() => lucide.createIcons(), 50);
    });
    
    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
    });
}

setupProfileDropdown('userProfile', 'profileDropdown');
setupProfileDropdown('userProfile2', 'profileDropdown2');

// Search Functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    if (!query.trim()) {
        renderProducts(currentProducts);
        return;
    }
    
    const filtered = currentProducts.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.badge.toLowerCase().includes(query)
    );
    
    renderProducts(filtered);
});

// Render Products
function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    
    if (products.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    grid.innerHTML = products.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <span class="badge">${product.badge}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
                <p class="product-description">${product.description}</p>
            </div>
            <div class="product-footer">
                <button class="btn btn-primary btn-full buy-btn" data-product-id="${product.id}">
                    <i data-lucide="shopping-cart"></i>
                    Buy Now
                </button>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    grid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.buy-btn')) {
                const productId = card.dataset.productId;
                const product = currentProducts.find(p => p.id === productId);
                openProductModal(product);
            }
        });
    });
    
    grid.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = btn.dataset.productId;
            const product = currentProducts.find(p => p.id === productId);
            buyProduct(product);
        });
    });
    
    lucide.createIcons();
}

// Buy Product (WhatsApp)
function buyProduct(product) {
    const message = encodeURIComponent(`Hi! I'm interested in the ${product.name} (${product.price})`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
}

// Product Modal
function openProductModal(product) {
    selectedProduct = product;
    const modal = document.getElementById('productModal');
    
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductImage').alt = product.name;
    document.getElementById('modalProductBadge').textContent = product.badge;
    document.getElementById('modalProductPrice').textContent = product.price;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalMaterials').textContent = product.materials;
    
    // Sustainability features
    const sustainabilityList = document.getElementById('modalSustainability');
    sustainabilityList.innerHTML = product.sustainability.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    // Certifications
    const certifications = document.getElementById('modalCertifications');
    certifications.innerHTML = product.certifications.map(cert => 
        `<span class="cert-badge">${cert}</span>`
    ).join('');
    
    // Reviews
    const reviews = document.getElementById('modalReviews');
    reviews.innerHTML = product.reviews.map(review => `
        <div class="review">
            <div class="review-header">
                <span class="review-name">${review.name}</span>
                <div class="review-stars">
                    ${[1, 2, 3, 4, 5].map(i => `
                        <i data-lucide="star" class="star ${i <= review.rating ? 'filled' : 'empty'}"></i>
                    `).join('')}
                </div>
            </div>
            <p class="review-comment">${review.comment}</p>
        </div>
    `).join('');
    
    modal.classList.add('show');
    lucide.createIcons();
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('show');
    selectedProduct = null;
}

// Modal close handlers
document.getElementById('closeModal').addEventListener('click', closeProductModal);
document.querySelector('.modal-overlay').addEventListener('click', closeProductModal);

// Modal buy button
document.getElementById('modalBuyBtn').addEventListener('click', () => {
    if (selectedProduct) {
        buyProduct(selectedProduct);
    }
});

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        // Update buttons
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update content
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        const tabMap = {
            'details': 'detailsTab',
            'eco': 'ecoTab',
            'reviews': 'reviewsTab'
        };
        
        document.getElementById(tabMap[tab]).classList.add('active');
        lucide.createIcons();
    });
});

// Render Team
function renderTeam() {
    const teamGrid = document.querySelector('.team-grid');
    
    teamGrid.innerHTML = teamData.map(member => `
        <div class="team-card">
            <div class="team-content">
                <div class="team-image-container">
                    <img src="${member.image}" alt="${member.name}" class="team-image">
                </div>
                <div class="team-info">
                    <h3 class="team-name">${member.name}</h3>
                    <p class="team-role">${member.role}</p>
                    <p class="team-bio">${member.bio}</p>
                    <div class="team-contact">
                        <div class="contact-item">
                            <i data-lucide="mail"></i>
                            <a href="mailto:${member.email}">${member.email}</a>
                        </div>
                        <div class="contact-item">
                            <i data-lucide="phone"></i>
                            <a href="tel:${member.phone}">${member.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Initialize icons on page load
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});
