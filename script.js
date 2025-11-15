const games = [
    {
        id: 1,
        title: "CyberPunk 2077",
        image: "img/cyberpunk.jpg",
        platform: "PC",
        genre: "RPG",
        price: "2 500 ₽",
        originalPrice: "3 500 ₽",
        isNew: false,
        onSale: true,
        rarity: "rare",
        downloadLinks: {
            launcher: "https://shahlikey.com/download/cyberpunk2077/launcher",
            torrent: "https://byxatab.com/games/exclusive/cyberpunk-2077-v-15-dlcs-2020-pc-repack-ot-decepticon/45-1-0-2284",
            direct: "https://shahlikey.com/download/cyberpunk2077/direct"
        }
    },
    {
        id: 2,
        title: "Baldur's Gate 3",
        image: "img/baldur3.webp",
        platform: "PC/PS5",
        genre: "RPG",
        price: "2 999 ₽",
        originalPrice: "",
        isNew: true,
        onSale: false,
        rarity: "epic",
        downloadLinks: {
            launcher: "https://shahlikey.com/download/baldursgate3/launcher",
            torrent: "https://byxatab.com/games/rpg/baldurs-gate-3-steam/2-1-0-1985",
            direct: "https://shahlikey.com/download/baldursgate3/direct"
        }
    },
    {
        id: 3,
        title: "ELDEN RING",
        image: "img/elden.jpg",
        platform: "PC/Xbox",
        genre: "Action RPG",
        price: "2 800 ₽",
        originalPrice: "",
        isNew: false,
        onSale: false,
        rarity: "rare",
        downloadLinks: {
            launcher: "https://shahlikey.com/download/eldenring/launcher",
            torrent: "https://byxatab.com/games/rpg/elden-ring-2022/2-1-0-2305",
            direct: "https://shahlikey.com/download/eldenring/direct"
        }
    },
    {
        id: 4,
        title: "Assassin's Creed Origins",
        image: "img/aco.jpg",
        platform: "PC/PS4/Xbox",
        genre: "Action Adventure",
        price: "1 999 ₽",
        originalPrice: "2 999 ₽",
        isNew: false,
        onSale: true,
        rarity: "common",
        downloadLinks: {
            launcher: "https://shahlikey.com/download/assassinscreedorigins/launcher",
            torrent: "https://byxatab.com/games/3rd_person/assassin_39_s_creed_origins_ubisoft_rus_124_eng_repack_by_xatab/4-1-0-536",
            direct: "https://shahlikey.com/download/assassinscreedorigins/direct"
        }
    },
    {
        id: 5,
        title: "Diablo IV",
        image: "img/diablo.png",
        platform: "PC/PS5/Xbox",
        genre: "RPG",
        price: "3 499 ₽",
        originalPrice: "",
        isNew: true,
        onSale: false,
        rarity: "legendary",
        downloadLinks: {
            launcher: "https://shahlikey.com/download/diablo4/launcher",
            torrent: "https://byxatab.com/games/decepticon/diablo-ii-resurrected-v-1677312-2021-repack-ot-decepticon/38-1-0-3222",
            direct: "https://shahlikey.com/download/diablo4/direct"
        }
    },
    {
        id: 6,
        title: "DOOM Eternal",
        image: "img/doom.jpg",
        platform: "PC/PS4/Xbox",
        genre: "Shooter",
        price: "2 199 ₽",
        originalPrice: "2 999 ₽",
        isNew: false,
        onSale: true,
        rarity: "common",
        downloadLinks: {
            launcher: "https://shahlikey.com/download/doometernal/launcher",
            torrent: "https://byxatab.com/games/action/doom-eternal-2020/5-1-0-2134",
            direct: "https://shahlikey.com/download/doometernal/direct"
        }
    },
    {
        id: 7,
        title: "Forza Horizon 5",
        image: "img/forza5.jpg",
        platform: "PC/Xbox",
        genre: "Racing",
        price: "2 599 ₽",
        originalPrice: "",
        isNew: false,
        onSale: false,
        rarity: "rare",
        downloadLinks: {
            launcher: "https://shahlikey.com/download/forzahorizon5/launcher",
            torrent: "https://byxatab.com/games/racing/forza-horizon-5-steam/17-1-0-2166",
            direct: "https://shahlikey.com/download/forzahorizon5/direct"
        }
    },
    {
        id: 8,
        title: "Grand Theft Auto V",
        image: "img/gta.jpg",
        platform: "PC/PS5/Xbox",
        genre: "Action",
        price: "1 799 ₽",
        originalPrice: "",
        isNew: false,
        onSale: false,
        rarity: "common",
        downloadLinks: {
            launcher: "https://shahlikey.com/download/gtav/launcher",
            torrent: "https://byxatab.com/games/3d/gta_5_grand_theft_auto_v_v_1_0_678_1_2015_pc_124_repack_ot_xatab/3-1-0-309",
            direct: "https://shahlikey.com/download/gtav/direct"
        }
    },
    {
        id: 9,
        title: "Hitman 3",
        image: "img/hitman.jpeg",
        platform: "PC/PS5/Xbox",
        genre: "Stealth",
        price: "2 899 ₽",
        originalPrice: "",
        isNew: false,
        onSale: false,
        rarity: "rare",
        downloadLinks: {
            launcher: "https://shahlikey.com/download/hitman3/launcher",
            torrent: "https://shahlikey.com/download/hitman3/torrent",
            direct: "https://shahlikey.com/download/hitman3/direct"
        }
    },
    {
        id: 10,
        title: "Hogwarts Legacy",
        image: "img/hogwarts.webp",
        platform: "PC/PS5/Xbox",
        genre: "Action RPG",
        price: "3 999 ₽",
        originalPrice: "",
        isNew: true,
        onSale: false,
        rarity: "epic",
        downloadLinks: {
            launcher: "https://shahlikey.com/download/hogwartslegacy/launcher",
            torrent: "https://byxatab.com/games/3rd_person/hitman-iii-egs-2016/4-1-0-1648",
            direct: "https://shahlikey.com/download/hogwartslegacy/direct"
        }
    }
];

const cases = [
    {
        id: 1,
        title: "Бронзовый кейс",
        image: "img/brozecs.jpeg",
        price: "500 ₽",
        originalPrice: "800 ₽",
        color: "#cd7f32",
        glowColor: "#cd7f32",
        items: [1, 2, 3, 4],
        chance: "70% обычные, 25% редкие, 5% эпические",
        bonusPoints: 10
    },
    {
        id: 2,
        title: "Золотой кейс", 
        image: "img/goldcase.png",
        price: "1 200 ₽",
        originalPrice: "1 800 ₽",
        color: "#ffd700",
        glowColor: "#ffd700",
        items: [1, 2, 3, 4],
        chance: "45% редкие, 37% эпические, 18% легендарные",
        bonusPoints: 25
    },
    {
        id: 3,
        title: "Алмазный кейс",
        image: "img/diomandcase.png", 
        price: "2 500 ₽",
        originalPrice: "3 500 ₽",
        color: "#b9f2ff",
        glowColor: "#00ffff",
        items: [1, 2, 3, 4],
        chance: "10% редкие, 50% эпические, 40% легендарные",
        bonusPoints: 50
    }
];

let cartCount = 0;
let currentTheme = 'light';
let currentFilter = 'all';
let cart = [];
let currentUser = null;
let purchaseHistory = [];
let userInventory = [];
let userPoints = 0;

document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    renderGames();
    renderSales();
    renderNew();
    renderCases();
    setupEventListeners();
    updateCartUI();
    updateAuthUI();
    updatePointsUI();
    initHeaderScroll();
});

function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('shahlikey_cart');
    const savedUser = localStorage.getItem('shahlikey_user');
    const savedHistory = localStorage.getItem('shahlikey_history');
    const savedInventory = localStorage.getItem('shahlikey_inventory');
    const savedPoints = localStorage.getItem('shahlikey_points');
    
    if (savedCart) cart = JSON.parse(savedCart);
    if (savedUser) currentUser = JSON.parse(savedUser);
    if (savedHistory) purchaseHistory = JSON.parse(savedHistory);
    if (savedInventory) userInventory = JSON.parse(savedInventory);
    if (savedPoints) userPoints = parseInt(savedPoints);
}

function saveToLocalStorage() {
    localStorage.setItem('shahlikey_cart', JSON.stringify(cart));
    localStorage.setItem('shahlikey_user', JSON.stringify(currentUser));
    localStorage.setItem('shahlikey_history', JSON.stringify(purchaseHistory));
    localStorage.setItem('shahlikey_inventory', JSON.stringify(userInventory));
    localStorage.setItem('shahlikey_points', userPoints.toString());
}

    function initHeaderScroll() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
        
        updateActiveNavLink();
    });
    
    updateActiveNavLink();
}

function setupEventListeners() {
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            document.querySelector(targetId).scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            setTimeout(() => {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }, 500);
            
            if (window.innerWidth <= 768) {
                document.querySelector('nav').classList.remove('active');
            }
        });
    });
    
}
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function renderGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';
    
    const filteredGames = currentFilter === 'all' 
        ? games 
        : games.filter(game => game.genre.includes(currentFilter));
    
    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

function renderSales() {
    const salesGrid = document.getElementById('salesGrid');
    salesGrid.innerHTML = '';
    
    const saleGames = games.filter(game => game.onSale);
    
    saleGames.forEach(game => {
        const gameCard = createGameCard(game);
        salesGrid.appendChild(gameCard);
    });
}

function renderNew() {
    const newGrid = document.getElementById('newGrid');
    newGrid.innerHTML = '';
    
    const newGames = games.filter(game => game.isNew);
    
    newGames.forEach(game => {
        const gameCard = createGameCard(game);
        newGrid.appendChild(gameCard);
    });
}

function renderCases() {
    const casesGrid = document.getElementById('casesGrid');
    if (!casesGrid) return;
    
    casesGrid.innerHTML = '';
    
    cases.forEach(caseItem => {
        const caseCard = createCaseCard(caseItem);
        casesGrid.appendChild(caseCard);
    });
}

function createGameCard(game) {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.innerHTML = `
        <div class="game-image" style="background-image: url('${game.image}')">
            <div class="game-overlay">
                <span class="game-platform">${game.platform}</span>
            </div>
        </div>
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <p class="game-genre">${game.genre}</p>
            <div class="game-price">
                <div>
                    ${game.originalPrice ? `<span class="original-price">${game.originalPrice}</span>` : ''}
                    <span class="price">${game.price}</span>
                </div>
                <button class="add-to-cart" data-id="${game.id}">
                    <i class="fas fa-shopping-cart"></i>
                    В корзину
                </button>
            </div>
        </div>
    `;
    return gameCard;
}

function createCaseCard(caseItem) {
    const caseCard = document.createElement('div');
    caseCard.className = 'case-card';
    caseCard.innerHTML = `
        <div class="case-image-container">
            <div class="case-image" style="background-image: url('${caseItem.image}')">
                <div class="case-glow" style="box-shadow: 0 0 50px ${caseItem.glowColor}"></div>
                <div class="case-overlay">
                    <span class="case-chance">${caseItem.chance}</span>
                </div>
            </div>
        </div>
        <div class="case-info">
            <h3 class="case-title">${caseItem.title}</h3>
            <div class="case-price">
                ${caseItem.originalPrice ? `<span class="original-price">${caseItem.originalPrice}</span>` : ''}
                <span class="price">${caseItem.price}</span>
            </div>
            <div class="case-bonus">
                <i class="fas fa-star"></i> +${caseItem.bonusPoints} бонусных очков
            </div>
            <button class="open-case-btn" data-id="${caseItem.id}" style="background: ${caseItem.color}">
                <i class="fas fa-gem"></i>
                Открыть кейс
            </button>
        </div>
    `;
    return caseCard;
}

function setupEventListeners() {
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
    
    document.addEventListener('click', function(e) {
        if (e.target.closest('.add-to-cart')) {
            const gameId = parseInt(e.target.closest('.add-to-cart').getAttribute('data-id'));
            addToCart(gameId);
        }
        if (e.target.closest('.open-case-btn')) {
            const caseId = parseInt(e.target.closest('.open-case-btn').getAttribute('data-id'));
            openCase(caseId);
        }
    });
    
    const catalogBtn = document.getElementById('catalogBtn');
    catalogBtn.addEventListener('click', function() {
        document.getElementById('catalog').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            renderGames();
        });
    });
    
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const nav = document.querySelector('nav');
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelector(targetId).scrollIntoView({ 
                behavior: 'smooth' 
            });
            
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
            }
        });
    });
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const allGames = document.querySelectorAll('.game-card');
        
        allGames.forEach(card => {
            const title = card.querySelector('.game-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    const authBtn = document.getElementById('authBtn');
    const authModal = document.getElementById('authModal');
    const closeAuthModal = document.getElementById('closeAuthModal');
    
    authBtn.addEventListener('click', function() {
        authModal.style.display = 'flex';
    });
    
    closeAuthModal.addEventListener('click', function() {
        authModal.style.display = 'none';
    });
    
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCartModal = document.getElementById('closeCartModal');
    
    cartBtn.addEventListener('click', function() {
        cartModal.style.display = 'flex';
    });
    
    closeCartModal.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    const paymentModal = document.getElementById('paymentModal');
    const closePaymentModal = document.getElementById('closePaymentModal');
    
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Корзина пуста!', 'error');
            return;
        }
        
        if (!currentUser) {
            showNotification('Пожалуйста, войдите в систему для оформления заказа', 'error');
            authModal.style.display = 'flex';
            return;
        }
        
        cartModal.style.display = 'none';
        paymentModal.style.display = 'flex';
        updatePaymentTotal();
    });
    
    closePaymentModal.addEventListener('click', function() {
        paymentModal.style.display = 'none';
    });
    
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    const registerModal = document.getElementById('registerModal');
    const closeRegisterModal = document.getElementById('closeRegisterModal');
    
    switchToRegister.addEventListener('click', function(e) {
        e.preventDefault();
        authModal.style.display = 'none';
        registerModal.style.display = 'flex';
    });
    
    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerModal.style.display = 'none';
        authModal.style.display = 'flex';
    });
    
    closeRegisterModal.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });
    
    const authForm = document.getElementById('authForm');
    authForm.addEventListener('submit', handleLogin);
    
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', handleRegister);
    
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        showNotification('🎮 Оплата прошла успешно! Спасибо за покупку!', 'success');
        paymentModal.style.display = 'none';
        
        const purchase = {
            id: Date.now(),
            items: [...cart],
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            date: new Date().toLocaleDateString('ru-RU')
        };
        
        purchaseHistory.push(purchase);
        
        cart = [];
        updateCartUI();
        updateAuthUI();
        saveToLocalStorage();
    });
    
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', handleLogout);
    
    window.addEventListener('click', function(e) {
        if (e.target === authModal) {
            authModal.style.display = 'none';
        }
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
        if (e.target === paymentModal) {
            paymentModal.style.display = 'none';
        }
        if (e.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        currentUser = { 
            email, 
            name: email.split('@')[0],
            regDate: new Date().toLocaleDateString('ru-RU')
        };
        showNotification(`Добро пожаловать, ${currentUser.name}!`, 'success');
        authModal.style.display = 'none';
        showUserInterface();
        saveToLocalStorage();
    } else {
        showNotification('Пожалуйста, заполните все поля', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (password !== confirmPassword) {
        showNotification('Пароли не совпадают', 'error');
        return;
    }

    if (name && email && password) {
        currentUser = { 
            email, 
            name,
            regDate: new Date().toLocaleDateString('ru-RU')
        };
        showNotification(`Регистрация успешна! Добро пожаловать, ${name}!`, 'success');
        registerModal.style.display = 'none';
        showUserInterface();
        saveToLocalStorage();
    } else {
        showNotification('Пожалуйста, заполните все поля', 'error');
    }
}

function handleLogout() {
    currentUser = null;
    showNotification('Вы вышли из системы', 'info');
    showAuthInterface();
    saveToLocalStorage();
}

function showUserInterface() {
    document.querySelector('.account-nav').style.display = 'block';
    document.getElementById('authBtn').style.display = 'none';
    updateAuthUI();
}

function showAuthInterface() {
    document.querySelector('.account-nav').style.display = 'none';
    document.getElementById('authBtn').style.display = 'block';
    document.getElementById('userNameDisplay').textContent = 'Гость';
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('#themeToggle i');
    
    if (currentTheme === 'light') {
        body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        currentTheme = 'dark';
        showNotification('🌙 Темная тема активирована', 'info');
    } else {
        body.classList.remove('dark-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        currentTheme = 'light';
        showNotification('☀️ Светлая тема активирована', 'info');
    }
}

function addToCart(gameId) {
    const game = games.find(g => g.id === gameId);
    const existingItem = cart.find(item => item.id === gameId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: game.id,
            title: game.title,
            price: parseInt(game.price.replace(/\s/g, '').replace('₽', '')),
            image: game.image,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveToLocalStorage();
    
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.classList.add('pulse');
    setTimeout(() => {
        cartBtn.classList.remove('pulse');
    }, 500);
    
    showNotification(`🛒 "${game.title}" добавлен в корзину`, 'success');
}

function updateCartUI() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = cartCount;
    
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Корзина пуста</div>';
        cartTotal.textContent = '0 ₽';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <div class="cart-item-price">${item.price} ₽ x ${item.quantity}</div>
                </div>
            </div>
            <button class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `${total.toLocaleString()} ₽`;
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            removeFromCart(itemId);
        });
    });
}

function removeFromCart(gameId) {
    const itemIndex = cart.findIndex(item => item.id === gameId);
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        cart.splice(itemIndex, 1);
        updateCartUI();
        saveToLocalStorage();
        showNotification(`🗑️ "${item.title}" удален из корзины`, 'info');
    }
}

function updatePaymentTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('paymentTotal').textContent = `${total.toLocaleString()} ₽`;
}

function updateAuthUI() {
    const authBtn = document.getElementById('authBtn');
    const accountNav = document.querySelector('.account-nav');
    const accountSection = document.getElementById('account');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const gamesBought = document.getElementById('gamesBought');
    const totalSpent = document.getElementById('totalSpent');
    const bonusPoints = document.getElementById('bonusPoints');
    const regDate = document.getElementById('regDate');
    const historyList = document.getElementById('historyList');
    const inventoryGrid = document.getElementById('inventoryGrid');
    
    if (currentUser) {
        authBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
        authBtn.title = 'Выйти';
        accountNav.style.display = 'block';
        accountSection.classList.add('active');
        userNameDisplay.textContent = currentUser.name;
        regDate.textContent = currentUser.regDate;
        
        const totalGames = purchaseHistory.reduce((total, purchase) => total + purchase.items.length, 0);
        const totalAmount = purchaseHistory.reduce((total, purchase) => total + purchase.total, 0);
        
        gamesBought.textContent = totalGames;
        totalSpent.textContent = `${totalAmount.toLocaleString()} ₽`;
        bonusPoints.textContent = userPoints;
        
        if (purchaseHistory.length === 0) {
            historyList.innerHTML = '<p class="empty-history">У вас пока нет покупок</p>';
        } else {
            historyList.innerHTML = '';
            purchaseHistory.forEach(purchase => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.innerHTML = `
                    <div class="history-item-info">
                        <h5>Заказ #${purchase.id}</h5>
                        <p class="history-item-date">${purchase.date}</p>
                        <p>${purchase.items.length} товар(ов)</p>
                    </div>
                    <div class="history-item-price">${purchase.total.toLocaleString()} ₽</div>
                `;
                historyList.appendChild(historyItem);
            });
        }
        
        if (userInventory.length === 0) {
            inventoryGrid.innerHTML = '<p class="empty-inventory">У вас пока нет игр</p>';
        } else {
            inventoryGrid.innerHTML = '';
            userInventory.forEach(game => {
                const inventoryItem = document.createElement('div');
                inventoryItem.className = 'inventory-item';
                inventoryItem.innerHTML = `
                    <div class="inventory-game-image" style="background-image: url('${game.image}')"></div>
                    <div class="inventory-game-info">
                        <h4>${game.title}</h4>
                        <p>${game.genre}</p>
                        <span class="rarity-badge ${game.rarity}">${getRarityText(game.rarity)}</span>
                        <button class="download-btn" onclick="downloadGame(${game.id})">
                            <i class="fas fa-download"></i> Скачать
                        </button>
                    </div>
                `;
                inventoryGrid.appendChild(inventoryItem);
            });
        }
        
        authBtn.onclick = handleLogout;
    } else {
        authBtn.innerHTML = '<i class="fas fa-user"></i>';
        authBtn.title = 'Войти';
        accountNav.style.display = 'none';
        accountSection.classList.remove('active');
        userNameDisplay.textContent = 'Гость';
        gamesBought.textContent = '0';
        totalSpent.textContent = '0 ₽';
        bonusPoints.textContent = '0';
        regDate.textContent = '-';
        historyList.innerHTML = '<p class="empty-history">У вас пока нет покупок</p>';
        inventoryGrid.innerHTML = '<p class="empty-inventory">У вас пока нет игр</p>';
        
        authBtn.onclick = function() {
            document.getElementById('authModal').style.display = 'flex';
        };
    }
}

function updatePointsUI() {
    document.getElementById('userPoints').textContent = userPoints;
}

function getRarityText(rarity) {
    const rarityMap = {
        'common': 'Обычная',
        'rare': 'Редкая',
        'epic': 'Эпическая',
        'legendary': 'Легендарная'
    };
    return rarityMap[rarity] || 'Обычная';
}

function openCase(caseId) {
    if (!currentUser) {
        showNotification('Войдите в систему чтобы открыть кейс', 'warning');
        document.getElementById('authModal').style.display = 'flex';
        return;
    }
    
    const caseItem = cases.find(c => c.id === caseId);
    const wonGame = getRandomGameFromCase(caseItem);
    
    showCaseOpeningAnimation(caseItem, wonGame);
}

function getRandomGameFromCase(caseItem) {
    const availableGames = caseItem.items.map(gameId => games.find(g => g.id === gameId));
    return availableGames[Math.floor(Math.random() * availableGames.length)];
}

function showCaseOpeningAnimation(caseItem, wonGame) {
    const overlay = document.createElement('div');
    overlay.className = 'case-opening-overlay';
    overlay.innerHTML = `
        <div class="case-opening-modal">
            <div class="case-opening-content">
                <div class="case-opening-header">
                    <h2>Открываем ${caseItem.title}</h2>
                    <span class="close-case-opening">&times;</span>
                </div>
                <div class="case-opening-animation">
                    <div class="slot-machine">
                        <div class="slot-track" id="slotTrack">
                            ${Array.from({length: 20}, (_, i) => {
                                const game = games[i % games.length];
                                return `
                                    <div class="slot-item" data-id="${game.id}">
                                        <img src="${game.image}" alt="${game.title}">
                                        <div class="slot-rarity ${game.rarity}"></div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        <div class="slot-pointer"></div>
                    </div>
                    <button class="spin-btn" id="spinBtn">🎰 Крутить!</button>
                </div>
                <div class="won-game" style="display: none;">
                    <div class="confetti"></div>
                    <div class="confetti"></div>
                    <div class="confetti"></div>
                    <h3>🎉 Поздравляем!</h3>
                    <div class="won-game-card ${wonGame.rarity}">
                        <div class="won-game-image" style="background-image: url('${wonGame.image}')">
                            <div class="rarity-glow ${wonGame.rarity}"></div>
                        </div>
                        <div class="won-game-info">
                            <h4>${wonGame.title}</h4>
                            <p>${wonGame.genre}</p>
                            <div class="won-game-rarity ${wonGame.rarity}">${getRarityText(wonGame.rarity)}</div>
                            <div class="bonus-points-earned">
                                <i class="fas fa-star"></i> +${caseItem.bonusPoints} бонусных очков
                            </div>
                        </div>
                    </div>
                    <button class="claim-game-btn">🎮 Забрать игру</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    const spinBtn = overlay.querySelector('.spin-btn');
    const slotTrack = overlay.querySelector('.slot-track');
    
    setTimeout(() => {
        slotTrack.style.transition = 'transform 0.5s ease-out';
        slotTrack.style.transform = 'translateX(-100px)';
    }, 500);
    
    spinBtn.addEventListener('click', function() {
        spinBtn.disabled = true;
        spinBtn.textContent = '🎰 Крутится...';
        spinBtn.style.background = '#666';
        
        const slotItems = overlay.querySelectorAll('.slot-item');
        const totalWidth = slotItems.length * 120;
        
        const winningIndex = Array.from(slotItems).findIndex(item => 
            parseInt(item.getAttribute('data-id')) === wonGame.id
        );
        
        const targetPosition = -(winningIndex * 120) + 250;
        
        slotTrack.style.transition = 'transform 0.5s ease-out';
        slotTrack.style.transform = `translateX(-${totalWidth / 2}px)`;
        
        setTimeout(() => {
            slotTrack.style.transition = 'transform 2.5s cubic-bezier(0.1, 0.8, 0.2, 1)';
            slotTrack.style.transform = `translateX(${targetPosition}px)`;
        }, 600);
        
        setTimeout(() => {
            document.querySelector('.won-game').style.display = 'block';
            document.querySelector('.case-opening-animation').style.display = 'none';
            
            userPoints += caseItem.bonusPoints;
            updatePointsUI();
            saveToLocalStorage();
            
            const confetti = overlay.querySelectorAll('.confetti');
            confetti.forEach((c, i) => {
                c.style.animation = `confettiFall 1s ease-out ${i * 0.2}s`;
            });
        }, 3200);
    });
    
    document.querySelector('.close-case-opening').addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    document.querySelector('.claim-game-btn').addEventListener('click', () => {
        userInventory.push(wonGame);
        saveToLocalStorage();
        showNotification(`🎉 Вы получили "${wonGame.title}" и ${caseItem.bonusPoints} бонусных очков!`, 'success');
        document.body.removeChild(overlay);
        updateAuthUI();
    });
}

function downloadGame(gameId) {
    const game = userInventory.find(g => g.id === gameId);
    if (game) {
        showNotification(`🔄 Начинаем загрузку "${game.title}"...`, 'info');
        
        setTimeout(() => {
            const activationKey = generateActivationKey();
            
            showDownloadModal(game, activationKey);
            
        }, 2000);
    }
}

function generateActivationKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let key = '';
    for (let i = 0; i < 16; i++) {
        if (i > 0 && i % 4 === 0) key += '-';
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
}

function showDownloadModal(game, activationKey) {
    const overlay = document.createElement('div');
    overlay.className = 'download-overlay';
    overlay.innerHTML = `
        <div class="download-modal">
            <div class="download-content">
                <div class="download-header">
                    <h2>🎮 ${game.title}</h2>
                    <span class="close-download">&times;</span>
                </div>
                <div class="download-info">
                    <div class="game-cover" style="background-image: url('${game.image}')"></div>
                    <div class="download-details">
                        <h3>Готово к скачиванию!</h3>
                        <div class="activation-key">
                            <strong>Ключ активации:</strong>
                            <div class="key-display">${activationKey}</div>
                            <button class="copy-key-btn" onclick="copyToClipboard('${activationKey}')">
                                <i class="fas fa-copy"></i> Копировать ключ
                            </button>
                        </div>
                        <div class="download-options">
                            <button class="download-btn primary" onclick="startDownload(${game.id})">
                                <i class="fas fa-download"></i> Скачать через лаунчер (рекомендуется)
                            </button>
                            <button class="download-btn secondary" onclick="redirectToTorrent(${game.id})">
                                <i class="fas fa-magnet"></i> Скачать торрент
                            </button>
                            <button class="download-btn secondary" onclick="redirectToDirect(${game.id})">
                                <i class="fas fa-cloud-download-alt"></i> Прямая загрузка
                            </button>
                        </div>
                        <div class="download-note">
                            <p><i class="fas fa-info-circle"></i> После установки введите ключ активации в лаунчере</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    document.querySelector('.close-download').addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

function startDownload(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game && game.downloadLinks && game.downloadLinks.launcher) {
        window.open(game.downloadLinks.launcher, '_blank');
        showNotification(`🚀 Запускаем скачивание "${game.title}" через лаунчер`, 'success');
    } else {
        showNotification('❌ Ссылка для скачивания не найдена', 'error');
    }
}

function redirectToTorrent(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game && game.downloadLinks && game.downloadLinks.torrent) {
        window.open(game.downloadLinks.torrent, '_blank');
        showNotification(`🔗 Открываем торрент для "${game.title}"`, 'info');
    } else {
        showNotification('❌ Торрент-ссылка не найдена', 'error');
    }
}

function redirectToDirect(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game && game.downloadLinks && game.downloadLinks.direct) {
        window.open(game.downloadLinks.direct, '_blank');
        showNotification(`📥 Начинаем прямую загрузку "${game.title}"`, 'info');
    } else {
        showNotification('❌ Ссылка для прямой загрузки не найдена', 'error');
    }
}

function downloadGame(gameId) {
    const game = userInventory.find(g => g.id === gameId);
    if (game) {
        showNotification(`🔄 Подготавливаем скачивание "${game.title}"...`, 'info');
        
        setTimeout(() => {
            const activationKey = generateActivationKey();
            
            showDownloadModal(game, activationKey);
            
        }, 1500);
    }
}