// ==================== CẤU HÌNH ====================
const PAGE_SIZE = 9;
let currentPage = 1;
let currentCategory = 'all';

// ==================== TIỆN ÍCH ====================
function limitText(str, maxLength) {
    if (!str) return '';
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

function getFilteredProducts() {
    return currentCategory === 'all' 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === currentCategory);
}

// ==================== RENDER DANH SÁCH ====================
function renderProducts(page) {
    const productList = document.getElementById("product-list");
    if (!productList) return;

    const filteredProducts = getFilteredProducts();
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const productsToShow = filteredProducts.slice(start, end);

    if (productsToShow.length === 0) {
        productList.innerHTML = `<div class="col-12 text-center py-5"><h4>No products found.</h4></div>`;
        return;
    }

    // SỬA: Đổi style button để dùng var(--accent-color)
    productList.innerHTML = productsToShow.map(product => `
        <div class="col-md-4 col-sm-6 mb-4 d-flex align-items-stretch" data-aos="fade-up">
            <div class="card h-100 shadow-sm w-100 border-0" style="transition: transform 0.3s;">
                <div class="overflow-hidden position-relative">
                    <img src="${product.img}" class="product-img-fixed card-img-top" alt="${product.name}" onerror="this.src='https://placehold.co/600x400?text=No+Image'">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold" style="color: var(--heading-color);">${limitText(product.name, 40)}</h5>
                    <p class="card-text flex-grow-1 small" style="color: var(--default-color); opacity: 0.8;">${limitText(product.desc, 90)}</p>
                    <div class="mt-3">
                        <a href="product-detail.html?id=${product.id}" 
                           class="btn w-100" 
                           style="border: 1px solid var(--accent-color); color: var(--accent-color); background: transparent;"
                           onmouseover="this.style.background='var(--accent-color)'; this.style.color='var(--contrast-color)'"
                           onmouseout="this.style.background='transparent'; this.style.color='var(--accent-color)'">
                           Detail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== PHÂN TRANG ====================
function renderPagination() {
    const pagination = document.getElementById("pagination");
    if (!pagination) return;

    const totalPages = Math.ceil(getFilteredProducts().length / PAGE_SIZE);
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = '';

    // Helper tạo nút với style màu gốc
    const createPageItem = (text, pageNum, isActive = false, isDisabled = false) => {
        const activeStyle = isActive 
            ? `background-color: var(--accent-color); color: var(--contrast-color); border-color: var(--accent-color);` 
            : `color: var(--default-color);`;
        
        const pointer = isDisabled ? 'cursor: default;' : 'cursor: pointer;';
        const clickEvent = isDisabled ? '' : `onclick="goToPage(${pageNum}); return false;"`;
        const disabledClass = isDisabled ? 'disabled' : '';

        return `
            <li class="page-item ${disabledClass} mx-1">
                <a class="page-link shadow-none" href="#" ${clickEvent} 
                   style="${activeStyle} ${pointer} border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                   ${text}
                </a>
            </li>
        `;
    };

    // Nút Previous
    html += createPageItem('&laquo;', currentPage - 1, false, currentPage === 1);

    // Logic tạo số trang
    let pageLinks = [];
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pageLinks.push(i);
    } else {
        if (currentPage <= 3) {
            pageLinks = [1, 2, 3, 4, '...', totalPages];
        } else if (currentPage >= totalPages - 2) {
            pageLinks = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            pageLinks = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
        }
    }

    pageLinks.forEach(page => {
        if (page === '...') {
            html += `<li class="page-item disabled mx-1"><span class="page-link border-0">...</span></li>`;
        } else {
            html += createPageItem(page, page, page === currentPage);
        }
    });

    // Nút Next
    html += createPageItem('&raquo;', currentPage + 1, false, currentPage === totalPages);

    pagination.innerHTML = html;
}

function goToPage(page) {
    const totalPages = Math.ceil(getFilteredProducts().length / PAGE_SIZE);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderProducts(currentPage);
    renderPagination();
    
    const productSection = document.getElementById('products');
    if(productSection) productSection.scrollIntoView({ behavior: 'smooth' });
}

// ==================== CHI TIẾT SẢN PHẨM ====================
function renderProductDetail() {
    const detailDiv = document.getElementById('product-detail');
    if (!detailDiv) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'), 10);
    const product = PRODUCTS.find(p => p.id === id);

    if (!product) {
        detailDiv.innerHTML = `
            <div class="text-center py-5">
                <h2>Product not found</h2>
                <a href="properties.html" class="btn btn-primary mt-3" style="background-color: var(--accent-color); border: none;">Back to Products</a>
            </div>
        `;
        return;
    }

    const imgs = product.imgs && product.imgs.length ? product.imgs : [product.img];
    
    // SỬA: Áp dụng màu cho nút và tiêu đề
    detailDiv.innerHTML = `
        <a href="properties.html" class="btn btn-outline-secondary mb-4 border-0">&larr; Back to Products</a>
        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card border-0">
                    <img src="${imgs[0]}" id="main-product-img" class="img-fluid rounded shadow-sm" alt="${product.name}" style="background: #f8f9fa;">
                    <div class="d-flex mt-2 gap-2 overflow-auto">
                        ${imgs.map((img, idx) => `
                            <img src="${img}" class="product-thumb rounded border ${idx === 0 ? 'active-thumb' : ''}" 
                                 style="width: 80px; height: 80px; object-fit: cover; cursor: pointer; border-color: var(--accent-color) !important;" 
                                 onclick="switchImage(this, '${img}')">
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <h2 class="fw-bold" style="color: var(--heading-color);">${product.name}</h2>
                <div class="mb-3">
                    <span class="badge" style="background-color: var(--accent-color);">In Stock</span>
                    <span class="badge bg-light text-dark border">Official Warranty</span>
                </div>
                <p class="text-muted lead" style="color: var(--default-color);">${product.desc}</p>
                <hr>
                <div class="mt-4">
                    <a href="contact.html" class="btn btn-lg px-5 text-white shadow-sm" 
                       style="background-color: var(--accent-color); border: none; border-radius: 50px; display: inline-flex; align-items: center; justify-content: center;">
                        Contact to Order
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Fix lại border cho thumb đầu tiên khi render
    setTimeout(() => {
        const firstThumb = document.querySelector('.product-thumb');
        if(firstThumb) firstThumb.style.border = '2px solid var(--accent-color)';
    }, 100);
}

// Helper chuyển ảnh
window.switchImage = function(el, src) {
    document.getElementById('main-product-img').src = src;
    // Reset borders
    document.querySelectorAll('.product-thumb').forEach(t => t.style.border = '1px solid #dee2e6');
    // Set active border
    el.style.border = '2px solid var(--accent-color)';
}

// ==================== KHỞI TẠO ====================
document.addEventListener('DOMContentLoaded', function() {
    // 1. Xử lý trang danh sách
    if (document.getElementById('product-list')) {
        renderProducts(currentPage);
        renderPagination();

        // Sự kiện click tab danh mục
        const tabs = document.querySelectorAll('#product-tabs .nav-link');
        tabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                tabs.forEach(t => {
                    t.classList.remove('active');
                    // Reset style về mặc định
                    t.style.backgroundColor = 'var(--surface-color)';
                    t.style.color = 'var(--nav-color)';
                    t.style.borderColor = 'rgba(0,0,0,0.1)';
                });
                
                // Set style active
                this.classList.add('active');
                this.style.backgroundColor = 'var(--accent-color)';
                this.style.color = 'var(--contrast-color)';
                this.style.borderColor = 'var(--accent-color)';
                
                currentCategory = this.getAttribute('data-category');
                currentPage = 1; 
                renderProducts(currentPage);
                renderPagination();
            });
        });
    }

    // 2. Xử lý trang chi tiết
    if (document.getElementById('product-detail')) {
        renderProductDetail();
    }
});