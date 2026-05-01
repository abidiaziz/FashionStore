selectedHeadline = 1

function toggleHeadline() {
    if (selectedHeadline == 1) {
        document.getElementsByClassName('headline-item')[1].classList.remove('active')
        setTimeout(() => {
            document.getElementsByClassName('headline-item')[0].classList.add('active')
        }, 400)
        selectedHeadline = 0
    } else {
        document.getElementsByClassName('headline-item')[0].classList.remove('active')
        setTimeout(() => {
            document.getElementsByClassName('headline-item')[1].classList.add('active')
        }, 400)
        selectedHeadline = 1
    }
}

const AddtoWish = document.getElementById('AddtoWish');
const AddtoWish1 = document.getElementById('AddtoWish1');
const AddtoWish2 = document.getElementById('AddtoWish2');
const closeIcon = document.getElementById('close-icon');
const closeIcon1 = document.getElementById('close-icon1');
const closeIcon2 = document.getElementById('close-icon2');
const showNavFilter = document.getElementById('showNavFilter');
const showSortBy = document.getElementById('showSortBy');
const cartMenu = document.getElementById('cart-menu');
const overlay = document.getElementById('overlay');
const toogleBtn = document.querySelectorAll('#showFilterSec .filter button');
var filterMenu = document.getElementById('filter-menu');
var sortMenu = document.getElementById('sort-menu');
var activeWall = document.getElementById('activeWall');
const menuItems = document.querySelectorAll('.menu-item');
const selectSize = document.querySelectorAll('.selectSize');
const menuIcon = document.getElementById('menu-icon');
const wallIcon = document.getElementById('wallIcon');
const wallIcon1 = document.getElementById('wallIcon1');
const radios = document.querySelectorAll('input[type="radio"]');
///////

// merging conflict
const twoXGrid = document.getElementById('2x2-grid');
const threeXGrid = document.getElementById('3x3-grid');
const OnexGrid = document.getElementById('2x1-grid');
const products = document.querySelectorAll('#product-grid .prod');
const iconEnable = document.querySelectorAll('.wallIcon');
////////
const sizeMenu = document.getElementById('size-menu-div');

function showSizeMenu() {
    sizeMenu.style.right = '0';
    overlay.style.display = 'block';
}

function closeMenu() {
    sizeMenu.style.right = '-200%';
    overlay.style.display = 'none';
}

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        radios.forEach(r => {
            if (r !== radio) {
                r.checked = false;
            }
        });
    });
});

document.querySelectorAll('.size-button').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.size-button').forEach(btn => btn.classList.remove('addBorder'));
        this.classList.add('addBorder');
    });
});

menuIcon.addEventListener('click', function () {
    if (this.classList.contains('fa-plus')) {
        this.classList.remove('fa-plus');
        selectSize[0].classList.add('show')
        this.classList.add('fa-minus');
    } else {
        this.classList.remove('fa-minus');
        selectSize[0].classList.remove('show')
        this.classList.add('fa-plus');
    }
});

menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        const subMenu = this.nextElementSibling;

        if (subMenu && subMenu.classList.contains('sub-menu')) {
            if (subMenu.style.display === 'block') {
                item.classList.remove('centered-Cat');
                subMenu.style.display = 'none';
                menuItems.forEach(i => {
                    i.style.display = 'block';
                });
            } else {
                // Hide all menu items
                // menuItems.forEach(i => {
                //     if (i !== item) {
                //         i.style.display = 'none';
                //     }
                // });
                subMenu.style.display = 'block';
                item.classList.add('centered-Cat');
            }
        }

        // Add close button
        // const closeSubMenuBtn = document.createElement('button');
        // closeSubMenuBtn.textContent = 'Close';
        // closeSubMenuBtn.className = 'close-submenu-btn';
        // item.insertBefore(closeSubMenuBtn, item.firstChild);

        // Close sub-menu button functionality
        // closeSubMenuBtn.addEventListener('click', function (e) {
        //     e.stopPropagation();
        //     // Remove close button
        //     item.removeChild(closeSubMenuBtn);
        //     // Remove centered text class
        //     item.classList.remove('centered');
        //     // Hide sub-menu
        //     if (subMenu) {
        //         subMenu.classList.remove('show');
        //     }
        //     // Show all menu items again
        //     menuItems.forEach(i => {
        //         i.style.display = 'block';
        //     });
        // });
    });
});

showNavFilter.addEventListener('click', function () {
    toggleFilter();

});

showSortBy.addEventListener('click', function () {
    sortMenu.classList.remove('show');
});

function hideNavbar() {
    cartMenu.style.right = '-200%';
    overlay.style.display = 'none';
    sizeMenu.style.right = '-200%';
    filterMenu.classList.add('show');
    sortMenu.classList.add('show');
    toogleBtn[0].innerHTML = 'show Filters <i class="fa-solid fa-chevron-right"></i>';
}

function addToWishlistToggle(activeWish) {
    const icon = activeWish.querySelector('i');
    if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa', 'fa-heart');
    } else {
        icon.classList.remove('fa');
        icon.classList.add('fa-regular', 'fa-heart');
    }
}

function addToCart() {
    cartMenu.style.right = '0';
    overlay.style.display = 'block';
}

overlay.addEventListener('click', function () {
    hideNavbar();
});
AddtoWish.addEventListener('click', function () {
    addToWishlistToggle(this);
});
AddtoWish1.addEventListener('click', function () {
    addToWishlistToggle(this);
});
AddtoWish2.addEventListener('click', function () {
    addToWishlistToggle(this);
});
closeIcon.addEventListener('click', function () {
    hideNavbar();
});
closeIcon1.addEventListener('click', function () {
    hideNavbar();
});
closeIcon2.addEventListener('click', function () {
    hideNavbar();
});

window.addEventListener('scroll', function () {
    const verticalScrollPosition = window.scrollY
    var flipTexts = document.getElementsByClassName('flip-text')
    var bottomRowNav = document.getElementById('bottom-row-nav')
    if (verticalScrollPosition >= 10) {
        document.getElementById('logo').style.display = 'none'

        for (let i = 0; i < flipTexts.length; i++) {
            flipTexts[i].style.display = 'none'
        }

        bottomRowNav.style.marginTop = '-2.75rem'

    } else {
        document.getElementById('logo').style.display = 'block'

        for (let i = 0; i < flipTexts.length; i++) {
            flipTexts[i].style.display = 'block'
        }

        bottomRowNav.style.marginTop = '0'

    }
})

function toggleFilter() {

    if (filterMenu.classList && filterMenu.classList?.length && filterMenu.classList.length > 1) {
        toogleBtn[0].innerHTML = 'Hide Filters <i class="fa-solid fa-chevron-left"></i>';
        filterMenu.classList.remove('show');
    } else {
        toogleBtn[0].innerHTML = 'show Filters <i class="fa-solid fa-chevron-right"></i>';
        filterMenu.classList.add('show')
    }
    // filterMenu.classList && filterMenu.classList?.length &&
    //     filterMenu.classList.length > 1 ? filterMenu.classList.remove('show') : filterMenu.classList.add('show');
}

function setGrid(layout) {

}

function loadProduct() {
    window.location = './product.html'
}


function setWallActive(value) {
    products.forEach(product => {
        value ?
            product.classList.add('no-padding') : product.classList.remove('no-padding');
    });
    document.querySelectorAll('.prod').forEach(function (prod) {
        const overlay = prod.querySelector('.img-wall-overlay');
        const activeWall = prod.querySelector('#activeWall');
        if (value) {
            activeWall.style.display = 'none';
            overlay.style.display = 'flex';
            menuIcon.classList.remove('fa-minus');
            selectSize[0].classList.remove('show')
            menuIcon.classList.add('fa-plus');
        } else {
            overlay.style.display = 'none';
            activeWall.style.display = 'flex';
        }
    });
}
///////
// merging conflict...
wallIcon1.addEventListener('click', function () {
    iconEnable.forEach(x => {
        x.classList.add('show');
    })
    threeXGrid.src = './images/icons/grid.png';
    OnexGrid.src = './images/icons/grid-small.png';
    twoXGrid.src = './images/icons/grid-small.png';
    setWallActive(true);
    ////////////////////
// wallIcon.addEventListener('click', function () {
//     if (wallIcon.classList.length == 1) {
//         wallIcon.classList.add('show')
//         setWallActive(true);
//     } else {
//         wallIcon.classList.remove('show');
//         setWallActive(false);
//     }
});
wallIcon.addEventListener('click', function () {
    iconEnable.forEach(x => {
        x.classList.add('show');
    })
    threeXGrid.src = './images/icons/grid.png';
    twoXGrid.src = './images/icons/grid-small.png';
    OnexGrid.src = './images/icons/grid-small.png';
    setWallActive(true);

});

// document.getElementById('padding-toggle1').addEventListener('change', function () {
//     setWallActive();
// });
// document.getElementById('padding-toggle').addEventListener('change', function () {
//     setWallActive();
// });

function girdSelected(type) {
    setWallActive(false);
    if (type === '2x2') {
        products.forEach(product => {
            product.classList.remove('grid-3x3');
            product.classList.add('grid-2x2');
        });
        OnexGrid.src = './images/icons/grid-small-selected.png';
        twoXGrid.src = './images/icons/grid-small-selected.png';
        threeXGrid.src = './images/icons/grid.png';
        iconEnable.forEach(x => {
            x.classList.remove('show');
        })
    } else if (type === '3x3') {
        products.forEach(product => {
            product.classList.remove('grid-2x2');
            product.classList.add('grid-3x3');
        });
        twoXGrid.src = './images/icons/grid-small.png';
        OnexGrid.src = './images/icons/grid-small.png';
        threeXGrid.src = './images/icons/grid-selected.png';
        iconEnable.forEach(x => {
            x.classList.remove('show');
        })
    }
}

function washSelectedNavContainer() {
    var selectedNavContainer = document.getElementById('selected-nav-container')
    selectedNavContainer.classList.remove('active')
    document.getElementsByClassName('headline')[0].classList.remove('disabled')
    document.getElementById('selected-nav-container').classList.remove('index1')
    selectedNavContainer.innerHTML = ''
    document.getElementById('sub-nav-container').classList.remove('active')
    document.getElementById('sub-nav-container').innerHTML = ''

}

function populateSelectedNavContainer(index) {
    var selectedNavContainer = document.getElementById('selected-nav-container')
    selectedNavContainer.classList.add('active')
    selectedNavContainer.classList.remove('text-items')
    document.getElementsByClassName('headline')[0].classList.add('disabled')
    document.getElementById('sub-nav-container').classList.remove('active')
    document.getElementById('sub-nav-container').style.borderTop = 'none'
    document.getElementById('sub-nav-container').innerHTML = ''

    selectedNavContainer.style.opacity = 0

    if (index == 1) {
        selectedNavContainer.classList.add('index1')
        selectedNavContainer.innerHTML = `
        <div class="nav-container-item">
            <img src="./images/new-arrivals-01.avif" class="image-nav-area"/>
            <a class="redirect-link" href="#">WOMEN</a>
        </div>
        <div class="nav-container-item">
            <img src="./images/new-arrivals-02.avif" class="image-nav-area"/>
            <a class="redirect-link" href="#">MEN</a>
        </div>
        <div class="nav-container-item">
            <img src="./images/new-arrivals-03.avif" class="image-nav-area" id="kids-photo"/>
            <a class="redirect-link" href="#">KIDS</a>
        </div>
        <div class="nav-container-item">
            <img src="./images/new-arrivals-04.avif" class="image-nav-area"/>
            <a class="redirect-link" href="#">EYEWEAR</a>
        </div>
        <div class="nav-container-item">
            <img src="./images/new-arrivals-05.avif" class="image-nav-area"/>
            <a class="redirect-link" href="#">LIFESTYLE</a>
        </div>
        `
        var navContainerItems = document.getElementsByClassName('nav-container-item')
        for (let i = 0; i < navContainerItems.length; i++) {
            navContainerItems[i].classList.add('active')
        }

        setTimeout(() => {
            selectedNavContainer.style.opacity = 1
        }, 400)
    }

    if (index == 2) {
        selectedNavContainer.classList.add('index1')
        selectedNavContainer.classList.add('text-items')
        selectedNavContainer.innerHTML = `
        <div class="nav-container-women">
                <a class="heading-links">READY TO WEAR</a>
                <a class="content-links" href="./category.html">Coats & Jackets</a>
                <a class="content-links">Knitwear</a>
                <a class="content-links">Blazers</a>
                <a class="content-links">Dresses & Jumpsuits</a>
                <a class="content-links">Matching Sets</a>
                <a class="content-links">T-shirts & Tops</a>
                <a class="content-links">Shirts</a>
                <a class="content-links">Skirts</a>
                <a class="content-links">Pants</a>
                <a class="content-links">Denim</a>
                <a class="content-links">Travelwear</a>
                <a class="content-links">All Ready to Wear</a>
            </div>
            <div class="nav-container-women">
                <a class="heading-links">SHOES</a>
                <a class="content-links">Heels</a>
                <a class="content-links">Sneakers</a>
                <a class="content-links">Boots</a>
                <a class="content-links">Loafers & Flat Shoes</a>
                <a class="content-links">Sandals</a>
                <a class="content-links">All Shoes</a>
            </div>
            <div class="nav-container-women">
                <a class="heading-links">ACCESSORIES</a>
                <a class="content-links">Eyewear</a>
                <a class="content-links">Small Leather Goods</a>
                <a class="content-links">Jewelry Creations</a>
                <a class="content-links">Scarves</a>
                <a class="content-links">Matching Sets</a>
                <a class="content-links">Hats</a>
                <a class="content-links">Belts</a>
                <a class="content-links">Other Accessories</a>
                <a class="content-links">All Accessories</a>
                <a class="heading-links">BAGS</a> 
                <a class="content-links">Mini Bags & Clutches</a>
                <a class="content-links">Crossbody Bags & Backpacks</a>
                <a class="content-links">Handbags & Shoppers</a>
                <a class="content-links">All Bags</a>
            </div>
            <div class="nav-container-women">            
                <a class="heading-links">NEW ARRIVALS</a>
                <a class="heading-links">High Summer</a>
                <a class="heading-links">Fragrances</a>
                <a class="heading-links">Tennis Sets</a>
                <a class="heading-links">Neverending Stories</a>
                <a class="heading-links">Cashmere</a>
                <a class="heading-links">Shop by Look</a>
            </div>
            <div class="nav-container-women">
                <a class="heading-links">EXCLUSIVE SERVICES</a>
                <a class="heading-links">CASA CUCINELLI</a>
                <a class="heading-links">VICUÑA</a>
            </div>
            <div class="last-elements">
                <div class="nav-container-women">    
                    <a class="heading-links">Eyewear</a>
                    <img src="./images/women-eyewear.avif" class="women-nav-img" />
                    <a class="content-links">discover more</a>
                </div>
                <div class="nav-container-women">    
                    <a class="heading-links">New Arrivals</a>
                    <img src="./images/new-arrivals-women.avif" class="women-nav-img" />
                    <a class="content-links">discover more</a>
                </div>
            </div>
        `

        var navContainerItems = document.getElementsByClassName('nav-container-women')
        for (let i = 0; i < navContainerItems.length; i++) {
            navContainerItems[i].classList.add('active')
        }

        document.getElementById('sub-nav-container').classList.add('active')
        document.getElementById('sub-nav-container').style.borderTop = '1px solid rgba(0,0,0,0.2)'
        document.getElementById('sub-nav-container').innerHTML = `
            <a href="#" class="central-link-anchor">DISCOVER THE LINE</a>
        `

        setTimeout(() => {
            selectedNavContainer.style.opacity = 1
        }, 400)
    }

    if (index == 3) {
        selectedNavContainer.classList.add('index1')
        selectedNavContainer.classList.add('text-items')
        selectedNavContainer.innerHTML = `
        <div class="nav-container-women">
                <a class="heading-links">READY TO WEAR</a>
                <a class="content-links">Coats & Jackets</a>
                <a class="content-links">Knitwear</a>
                <a class="content-links">Blazers</a>
                <a class="content-links">Suits</a>
                <a class="content-links">Tuxedo</a>
                <a class="content-links">T-shirts & Plos</a>
                <a class="content-links">Shirts</a>
                <a class="content-links">Pants</a>
                <a class="content-links">Denim</a>
                <a class="content-links">Travelwear</a>
                <a class="content-links">All Ready to Wear</a>
            </div>
            <div class="nav-container-women">
                <a class="heading-links">SHOES</a>
                <a class="content-links">Sneakers</a>
                <a class="content-links">Lace-ups</a>
                <a class="content-links">Loafers</a>
                <a class="content-links">Leisure</a>
                <a class="content-links">Slides & Flip Flops</a>
                <a class="content-links">All Shoes</a>
            </div>
            <div class="nav-container-women">
                <a class="heading-links">ACCESSORIES</a>
                <a class="content-links">Eyewear</a>
                <a class="content-links">Small Leather Goods</a>
                <a class="content-links">Bags</a>
                <a class="content-links">Scarves</a>
                <a class="content-links">Hats</a>
                <a class="content-links">Belts</a>
                <a class="content-links">Other Accessories</a>
                <a class="content-links">All Accessories</a>
            </div>
            <div class="nav-container-women">            
                <a class="heading-links">NEW ARRIVALS</a>
                <a class="heading-links">High Summer</a>
                <a class="heading-links">Fragrances</a>
                <a class="heading-links">Tennis Sets</a>
                <a class="heading-links">Neverending Stories</a>
                <a class="heading-links">Cashmere</a>
                <a class="heading-links">Shop by Look</a>
            </div>
            <div class="nav-container-women">
                <a class="heading-links">EXCLUSIVE SERVICES</a>
                <a class="heading-links">SARTORIA SOLOMEO</a>
                <a class="heading-links">CASA CUCINELLI</a>
                <a class="heading-links">VICUÑA</a>
            </div>
            <div class="last-elements">
                <div class="nav-container-women last">    
                    <a class="heading-links">Eyewear</a>
                    <img src="./images/men-eyewear.avif" class="women-nav-img" />
                    <a class="content-links">discover more</a>
                </div>
                <div class="nav-container-women last">    
                    <a class="heading-links">New Arrivals</a>
                    <img src="./images/new-arrivals-men.avif" class="women-nav-img" />
                    <a class="content-links">discover more</a>
                </div>
            </div>
        `

        var navContainerItems = document.getElementsByClassName('nav-container-women')
        for (let i = 0; i < navContainerItems.length; i++) {
            navContainerItems[i].classList.add('active')
        }

        document.getElementById('sub-nav-container').classList.add('active')
        document.getElementById('sub-nav-container').style.borderTop = '1px solid rgba(0,0,0,0.2)'
        document.getElementById('sub-nav-container').innerHTML = `
            <a href="#" class="central-link-anchor">DISCOVER THE LINE</a>
        `

        setTimeout(() => {
            selectedNavContainer.style.opacity = 1
        }, 400)
    }

    if (index == 4) {
        selectedNavContainer.classList.add('index1')
        selectedNavContainer.innerHTML = `
        <div class="nav-container-fragrances">
            <img src="./images/fragrances-01.avif" class="image-nav-fragrance"/>
            <a class="redirect-link" href="#">WOMEN'S FRAGRANCES</a>
        </div>
        <div class="nav-container-fragrances">
            <img src="./images/fragrances-02.avif" class="image-nav-fragrance"/>
            <a class="redirect-link" href="#">MEN'S FRAGRANCES</a>
        </div>
        <div class="nav-container-fragrances">
            <img src="./images/fragrances-03.avif" class="image-nav-fragrance"/>
            <a class="redirect-link" href="#">DISCOVER THE CAMPAIGN</a>
        </div>
        `
        var navContainerItems = document.getElementsByClassName('nav-container-fragrances')
        for (let i = 0; i < navContainerItems.length; i++) {
            navContainerItems[i].classList.add('active')
        }

        setTimeout(() => {
            selectedNavContainer.style.opacity = 1
        }, 400)
    }

    if (index == 5) {
        selectedNavContainer.classList.add('index1')
        selectedNavContainer.innerHTML = `
        <div class="nav-container-eyewear">
            <img src="./images/eyewear-01.avif" class="image-nav-eyewear"/>
            <a class="redirect-link" href="#">WOMEN'S EYEWEAR</a>
        </div>
        <div class="nav-container-eyewear">
            <img src="./images/eyewear-02.avif" class="image-nav-eyewear"/>
            <a class="redirect-link" href="#">MEN'S EYEWEAR</a>
        </div>
        `
        var navContainerItems = document.getElementsByClassName('nav-container-eyewear')
        for (let i = 0; i < navContainerItems.length; i++) {
            navContainerItems[i].classList.add('active')
        }

        setTimeout(() => {
            selectedNavContainer.style.opacity = 1
        }, 400)
    }

    if (index == 6) {
        selectedNavContainer.classList.add('index1')
        selectedNavContainer.classList.add('text-items')
        selectedNavContainer.innerHTML = `
        <div class="nav-container-women">
                <a class="heading-links">BOYS (4-12 YEARS)</a> 
                <a class="content-links">Shop by Look</a>
                <a class="content-links">Knitwear</a>
                <a class="content-links">Coats & Jackets</a>
                <a class="content-links">Suits & Blazers</a>
                <a class="content-links">T-Shirts & Shirts</a>
                <a class="content-links">Pants</a>
                <a class="content-links">Travelwear</a>
                <a class="content-links">Footwear</a>
                <a class="content-links">Accessories</a>
            </div>
            <div class="nav-container-women">
            <a class="heading-links">GIRLS (4-12 YEARS)</a>
                <a class="content-links">Shop by Look</a>
                <a class="content-links">Knitwear</a>
                <a class="content-links">Coats & Jackets</a>
                <a class="content-links">Dresses & Jumpsuits</a>
                <a class="content-links">T-Shirts & Shirts</a>
                <a class="content-links">Pants & Skirts</a>
                <a class="content-links">Travelwear</a>
                <a class="content-links">Footwear</a>
                <a class="content-links">Bags</a>
                <a class="content-links">Accessories</a>
            </div>
            <div class="nav-container-women">
                <a class="heading-links">BABY</a>
                <a class="content-links">Newborn (0-24 months)</a>
                <a class="content-links">Ready-to-Wear (2-6 years)</a>
                <a class="content-links">Little Things</a>
            </div>
            <div class="nav-container-women">            
                <a class="heading-links">NEW ARRIVALS</a>
                <a class="heading-links">Tennis Sets</a>
                <a class="heading-links">Gifts Girls</a>
                <a class="heading-links">Gifts Boys</a>
            </div>
            <div class="last-elements">
            <div class="nav-container-women last">    
                    <a class="heading-links">New Arrivals</a>
                    <img src="./images/new-arrivals-kids.avif" class="women-nav-img" />
                    <a class="content-links">discover more</a>
                </div>
                <div class="nav-container-women last">    
                    <a class="heading-links">Girls' Footwear</a>
                    <img src="./images/footwear-girls.avif" class="women-nav-img" />
                    <a class="content-links">discover more</a>
                </div>
                <div class="nav-container-women last">    
                    <a class="heading-links">Boys' Footwear</a>
                    <img src="./images/footwear-boys.avif" class="women-nav-img" />
                    <a class="content-links">discover more</a>
                </div>
            </div>
        `

        var navContainerItems = document.getElementsByClassName('nav-container-women')
        for (let i = 0; i < navContainerItems.length; i++) {
            navContainerItems[i].classList.add('active')
        }

        document.getElementById('sub-nav-container').classList.add('active')
        document.getElementById('sub-nav-container').style.borderTop = '1px solid rgba(0,0,0,0.2)'
        document.getElementById('sub-nav-container').innerHTML = `
            <a href="#" class="central-link-anchor">DISCOVER THE LINE</a>
        `

        setTimeout(() => {
            selectedNavContainer.style.opacity = 1
        }, 400)
    }

    if (index == 7) {
        selectedNavContainer.classList.add('index1')
        selectedNavContainer.innerHTML = `
        <div class="nav-container-item">
            <img src="./images/gifts-01.avif" class="image-nav-gifts"/>
            <a class="redirect-link" href="#">GIFTS WOMEN</a>
        </div>
        <div class="nav-container-item">
            <img src="./images/gifts-02.avif" class="image-nav-gifts"/>
            <a class="redirect-link" href="#">GIFTS MEN</a>
        </div>
        <div class="nav-container-item">
            <img src="./images/gifts-03.avif" class="image-nav-gifts"/>
            <a class="redirect-link" href="#">GIFTS GIRLS</a>
        </div>
        <div class="nav-container-item">
            <img src="./images/gifts-04.avif" class="image-nav-gifts"/>
            <a class="redirect-link" href="#">GIFTS BOYS</a>
        </div>
        <div class="nav-container-item">
            <img src="./images/gifts-05.avif" class="image-nav-gifts"/>
            <a class="redirect-link" href="#">GIFTS LIFESTYLE</a>
        </div>
        `
        var navContainerItems = document.getElementsByClassName('nav-container-item')
        for (let i = 0; i < navContainerItems.length; i++) {
            navContainerItems[i].classList.add('active')
        }

        document.getElementById('sub-nav-container').classList.add('active')
        document.getElementById('sub-nav-container').innerHTML = `
            <a href="#" class="central-link-anchor">DISCOVER THE GIFT SEASON</a>
        `

        setTimeout(() => {
            selectedNavContainer.style.opacity = 1
        }, 400)
    }

    if (index == 8) {
        selectedNavContainer.classList.add('index1')
        selectedNavContainer.classList.add('text-items')
        selectedNavContainer.innerHTML = `
            <div class="nav-container-women">
                <a class="heading-links">Home & Studio</a> 
                <a class="content-links">Throws & Blankets</a>
                <a class="content-links">Cushions</a>
                <a class="content-links">Candles & Fragrances</a>
                <a class="content-links">Studio</a>
            </div>
            <div class="nav-container-women">
                <a class="heading-links">Leisure & Travel</a>
                <a class="content-links">Décor Sets</a>
                <a class="content-links">Life Attitude</a>
                <a class="content-links">Travel Essentials</a>
                <a class="content-links">Bathrobes & Towels</a>
            </div>
            <div class="nav-container-women">
                <a class="heading-links">Dining</a>
                <a class="content-links">Ceramic Creations</a>
                <a class="content-links">Kitchen & Tableware</a>
            </div>
            <div class="nav-container-women">
                <a class="heading-links">GIFTS LIFESTYLE</a>
                <a class="heading-links">Tennis Sets</a>
            </div>
            <div class="last-elements">
            <div class="nav-container-women last">    
                    <a class="heading-links">Tennis Sets</a>
                    <img src="./images/tennis-sets.avif" class="women-nav-img" />
                    <a class="content-links">discover more</a>
                </div>
                <div class="nav-container-women last">    
                    <a class="heading-links">Cushions</a>
                    <img src="./images/cushions.avif" class="women-nav-img" />
                    <a class="content-links">discover more</a>
                </div>
                <div class="nav-container-women last">    
                    <a class="heading-links">Ceramic Creations</a>
                    <img src="./images/ceramic-creations.avif" class="women-nav-img" />
                    <a class="content-links">discover more</a>
                </div>
            </div>
        `

        var navContainerItems = document.getElementsByClassName('nav-container-women')
        for (let i = 0; i < navContainerItems.length; i++) {
            navContainerItems[i].classList.add('active')
        }

        document.getElementById('sub-nav-container').classList.add('active')
        document.getElementById('sub-nav-container').style.borderTop = '1px solid rgba(0,0,0,0.2)'
        document.getElementById('sub-nav-container').innerHTML = `
            <a href="#" class="central-link-anchor">DISCOVER THE LINE</a>
        `

        setTimeout(() => {
            selectedNavContainer.style.opacity = 1
        }, 400)
    }

    if (index == 9) {
        selectedNavContainer.classList.add('index1')
        selectedNavContainer.innerHTML = `
        <div class="nav-container-stories">
            <img src="./images/stories-01.avif" class="image-nav-stories"/>
            <a class="redirect-link" href="#">AUTHENTIC RETREAT</a>
        </div>
        <div class="nav-container-stories">
            <img src="./images/stories-02.avif" class="image-nav-stories"/>
            <a class="redirect-link" href="#">TENNIS SETS</a>
        </div>
        <div class="nav-container-stories">
            <img src="./images/stories-03.avif" class="image-nav-stories"/>
            <a class="redirect-link" href="#">REFINED PURSUITS</a>
        </div>
        <div class="nav-container-stories">
            <img src="./images/stories-04.avif" class="image-nav-stories"/>
            <a class="redirect-link" href="#">NEW SEASON KIDS</a>
        </div>
        `
        document.getElementById('sub-nav-container').classList.add('active')
        document.getElementById('sub-nav-container').innerHTML = `
            <a href="#" class="central-link-anchor">DISCOVER ALL THE STORIES</a>
        `
        var navContainerItems = document.getElementsByClassName('nav-container-stories')
        for (let i = 0; i < navContainerItems.length; i++) {
            navContainerItems[i].classList.add('active')
        }

        setTimeout(() => {
            selectedNavContainer.style.opacity = 1
        }, 400)
    }
}

fadeInterval = '700ms'
f_Interval = 250
interpolationFunction = 'cubic-bezier(1,0,.78,1)'

function resetBg() {
    document.getElementById('bg-element-sl').style.animation = `fadeOut ${fadeInterval} ${interpolationFunction} 1 forwards`
    setTimeout(() => {
        document.getElementById('bg-element-sl').src = './images/both-sl.jpg';
    }, f_Interval)
    setTimeout(() => {
        document.getElementById('bg-element-sl').style.animation = `fadeIn ${fadeInterval} ${interpolationFunction} 1 forwards`
    }, f_Interval)
}

function changeBg(index) {
    document.getElementById('bg-element-sl').style.animation = `fadeOut ${fadeInterval} ${interpolationFunction} 1 forwards`
    setTimeout(() => {
        if (index == 1) {
            document.getElementById('bg-element-sl').src = './images/women-sl.jpg'
        }
        if (index == 2) {
            document.getElementById('bg-element-sl').src = './images/men-sl.jpg'
        }
        if (index == 3) {
            document.getElementById('bg-element-sl').src = './images/kids-sl.jpg'
        }
        if (index == 4) {
            document.getElementById('bg-element-sl').src = './images/lifestyle-sl.jpg'
        }
    }, f_Interval)
    setTimeout(() => {
        document.getElementById('bg-element-sl').style.animation = `fadeIn ${fadeInterval} ${interpolationFunction} 1 forwards`
    }, f_Interval)
}