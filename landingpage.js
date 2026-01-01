// --- JavaScript for Interactive Navigation & Modal ---

// 1. Change header style on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 10) {
        header.classList.add('header-scrolled', 'py-2');
        header.classList.remove('py-4');
    } else {
        header.classList.remove('header-scrolled', 'py-2');
        header.classList.add('py-4');
    }
});

// 2. Toggle mobile menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// 3. Authentication Modal Logic
const authModal = document.getElementById('auth-modal');
const modalOverlay = authModal.querySelector('.modal-overlay');
const modalContainer = authModal.querySelector('.modal-container');
const openModalButtons = document.querySelectorAll('.auth-button');
const closeModalButton = authModal.querySelector('.modal-close-button');
const tabButtons = authModal.querySelectorAll('.tab-button');
const tabContents = authModal.querySelectorAll('.tab-content');

function openModal(tab) {
    authModal.classList.remove('hidden');
    setTimeout(() => authModal.classList.remove('opacity-0'), 10);
    setTimeout(() => modalContainer.classList.remove('scale-95'), 10);
    
    // Set active tab
    tabButtons.forEach(btn => {
        btn.classList.remove('border-cyan-500', 'text-cyan-500');
        btn.classList.add('border-transparent', 'text-gray-500');
    });
    tabContents.forEach(content => content.classList.add('hidden'));

    const activeTabButton = authModal.querySelector(`[data-tab-id="${tab}-tab"]`);
    const activeTabContent = document.getElementById(`${tab}-tab`);
    
    activeTabButton.classList.add('border-cyan-500', 'text-cyan-500');
    activeTabButton.classList.remove('border-transparent', 'text-gray-500');
    activeTabContent.classList.remove('hidden');
}

function closeModal() {
    modalContainer.classList.add('scale-95');
    authModal.classList.add('opacity-0');
    setTimeout(() => authModal.classList.add('hidden'), 300);
}

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;
        openModal(tab);
         if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tabId;
        
        tabButtons.forEach(btn => {
            btn.classList.remove('border-cyan-500', 'text-cyan-500');
            btn.classList.add('border-transparent', 'text-gray-500');
        });
        tabContents.forEach(content => content.classList.add('hidden'));

        button.classList.add('border-cyan-500', 'text-cyan-500');
        button.classList.remove('border-transparent', 'text-gray-500');
        document.getElementById(tabId).classList.remove('hidden');
    });
});

closeModalButton.addEventListener('click', closeModal);
authModal.addEventListener('click', (e) => {
    if (e.target === authModal) {
        closeModal();
    }
});
