//Smooth Scroll internally
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

$(document).ready(function () {
    $('#similar-products-container').slick({
        infinite: false,
        speed: true,
        slidesToShow: 2,
        slidesToShow: 1,
        dots: true,
        appendArrows: '.control-buttons-interested-in',
        // centerMode: true,
        variableWidth: true,
        appendDots: '#dotPlace'
    });
});

function closeFullScreenImage() {
    var fullScreenImage = document.getElementsByClassName('full-screen-image')[0]
    var fsImage = document.getElementById('full-screen-show')

    fullScreenImage.style.display = 'none'
    fsImage.src = ''
}

function showImageFullScreen(img) {
    var fullScreenImage = document.getElementsByClassName('full-screen-image')[0]
    var fsImage = document.getElementById('full-screen-show')

    fullScreenImage.style.display = 'block'
    if (img === '01') {
        fsImage.src = './images/product/01.jpeg'
    }
    if (img === '02') {
        fsImage.src = './images/product/02.jpeg'
    }
    if (img === '03') {
        fsImage.src = './images/product/03.jpeg'
    }
    if (img === '04') {
        fsImage.src = './images/product/04.jpeg'
    }
    if (img === '05') {
        fsImage.src = './images/product/05.jpg'
    }
}

function washSelectedNavContainer() {
    var selectedNavContainer = document.getElementById('selected-nav-container')
    selectedNavContainer.classList.remove('active')
    document.getElementById('selected-nav-container').classList.remove('index1')
    selectedNavContainer.innerHTML = ''
    document.getElementById('sub-nav-container').classList.remove('active')
    document.getElementById('sub-nav-container').innerHTML = ''

}

function populateSelectedNavContainer(index) {
    var selectedNavContainer = document.getElementById('selected-nav-container')
    selectedNavContainer.classList.add('active')
    selectedNavContainer.classList.remove('text-items')
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

accordion01Open = false
accordion02Open = false
accordion03Open = false
accordion04Open = false
accordion05Open = false

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;
        const accordionIcon = header.querySelectorAll('.accordion-icon');

        // Close all other contents
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== accordionContent) {
                // content.style.maxHeight = null;
                const icon = content.previousElementSibling.querySelector('.accordion-icon');
                // icon.textContent = '+';
            }
        });

        // Toggle the accordion content display
        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            accordionIcon[0].innerHTML = '<i class="fa fa-plus"></i>'
            // accordionIcon.textContent = '+';
        } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            accordionIcon[0].innerHTML = '<i class="fa fa-minus"></i>'
        }
    });
});

function setAppropriateAccordionStatus(flag, accordion, accordionControl, accordionText, accordionHeader, separator) {
    if (flag) {
        debugger
        // accordion.style.height = '10rem'
        if (accordion.classList.contains('top-row')) {
            accordion.style.height = '15rem'
        }
        if (accordion.classList.contains('bottom-row')) {
            // accordion.style.height = '26rem'
        }
        accordionHeader.style.borderBottom = 'none'
        separator.style.display = 'block'
        accordionText.style.visibility = 'visible'
        accordionText.style.opacity = '1'
        accordionControl.innerText = '-'
    }
    if (!flag) {
        debugger
        accordionHeader.style.borderBottom = '1px solid rgba(0,0,0,0.2)'
        separator.style.display = 'none'
        accordion.style.height = '4rem'
        accordionText.style.visibility = 'hidden'
        accordionText.style.opacity = '0'
        accordionControl.innerText = '+'
    }
}

function toggleAccordion(id) {
    var accordion = null
    var accordionControl = null
    var accordionText = null
    var accordionHeader = null
    var separator = null

    if (id === '01') {
        accordion01Open = !accordion01Open
        accordion = document.getElementById('accordion-01')
        accordionControl = document.getElementById('accordion-ctrl-01')
        accordionText = document.getElementById('accordion-text-01')
        accordionHeader = document.getElementById('accordion-header-01')
        separator = document.getElementById('separator-01')
        setAppropriateAccordionStatus(accordion01Open, accordion, accordionControl, accordionText, accordionHeader, separator)
        return
    }
    if (id === '02') {
        accordion02Open = !accordion02Open
        accordion = document.getElementById('accordion-02')
        accordionControl = document.getElementById('accordion-ctrl-02')
        accordionText = document.getElementById('accordion-text-02')
        accordionHeader = document.getElementById('accordion-header-02')
        separator = document.getElementById('separator-02')
        setAppropriateAccordionStatus(accordion02Open, accordion, accordionControl, accordionText, accordionHeader, separator)
        return
    }
    if (id === '03') {
        accordion03Open = !accordion03Open
        accordion = document.getElementById('accordion-03')
        accordionControl = document.getElementById('accordion-ctrl-03')
        accordionText = document.getElementById('accordion-text-03')
        accordionHeader = document.getElementById('accordion-header-03')
        separator = document.getElementById('separator-03')
        setAppropriateAccordionStatus(accordion03Open, accordion, accordionControl, accordionText, accordionHeader, separator)
        return
    }
    if (id === '04') {
        accordion04Open = !accordion04Open
        accordion = document.getElementById('accordion-04')
        accordionControl = document.getElementById('accordion-ctrl-04')
        accordionText = document.getElementById('accordion-text-04')
        accordionHeader = document.getElementById('accordion-header-04')
        separator = document.getElementById('separator-04')
        setAppropriateAccordionStatus(accordion04Open, accordion, accordionControl, accordionText, accordionHeader, separator)
        return
    }
    if (id === '05') {
        accordion05Open = !accordion05Open
        accordion = document.getElementById('accordion-05')
        accordionControl = document.getElementById('accordion-ctrl-05')
        accordionText = document.getElementById('accordion-text-05')
        accordionHeader = document.getElementById('accordion-header-05')
        separator = document.getElementById('separator-05')
        setAppropriateAccordionStatus(accordion05Open, accordion, accordionControl, accordionText, accordionHeader, separator)
        return
    }
}

addedToCart01 = false
addedToCart02 = false
addedToCart03 = false
addedToCart04 = false
addedToCart05 = false
addedToCart06 = false

// function addToCart(id) {
//     if (id === 'interested-in-01') {
//         addedToCart01 = !addedToCart01
//         if (addedToCart01) document.getElementById('add-cart-01').innerText = '-'
//         else document.getElementById('add-cart-01').innerText = '+'
//     }
//     if (id === 'interested-in-02') {
//         addedToCart02 = !addedToCart02
//         if (addedToCart02) document.getElementById('add-cart-02').innerText = '-'
//         else document.getElementById('add-cart-02').innerText = '+'
//     }
//     if (id === 'interested-in-03') {
//         addedToCart03 = !addedToCart03
//         if (addedToCart03) document.getElementById('add-cart-03').innerText = '-'
//         else document.getElementById('add-cart-03').innerText = '+'
//     }
//     if (id === 'interested-in-04') {
//         addedToCart04 = !addedToCart04
//         if (addedToCart04) document.getElementById('add-cart-04').innerText = '-'
//         else document.getElementById('add-cart-04').innerText = '+'
//     }
//     if (id === 'interested-in-05') {
//         addedToCart05 = !addedToCart05
//         if (addedToCart05) document.getElementById('add-cart-05').innerText = '-'
//         else document.getElementById('add-cart-05').innerText = '+'
//     }
//     if (id === 'interested-in-06') {
//         addedToCart06 = !addedToCart06
//         if (addedToCart06) document.getElementById('add-cart-06').innerText = '-'
//         else document.getElementById('add-cart-06').innerText = '+'
//     }
// }

position = 0
maxPosition = 2

function moveConveyorBelt(direction) {
    similarProductsContainer = document.getElementById('similar-products-container')
    arrowLeft = document.getElementById('move-left-button')
    arrowRight = document.getElementById('move-right-button')
    increment = 450

    if (direction == -1) {
        if (position == 0) {
            return
        }
        position--
        similarProductsContainer.style.transform = `translateX(-${position * increment}px)`
        if (position < maxPosition) {
            arrowRight.classList.remove('inactive')
        }
        if (position == 0) {
            arrowLeft.classList.add('inactive')
        }
    }

    if (direction == 1) {
        if (position == maxPosition) {
            return
        }
        position++
        similarProductsContainer.style.transform = `translateX(-${position * increment}px)`
        if (position > 0) {
            arrowLeft.classList.remove('inactive')
        }
        if (position == maxPosition) {
            arrowRight.classList.add('inactive')
        }
    }
}

count = 0;

observerFooterSocials = new IntersectionObserver((element) => {
    if (!element[0].isIntersecting && count > 0) {
        if (element[0].target.getAttribute('id') === 'footer-socials') {
            document.getElementById('shopping-cart-shorthand').style.display = 'flex'
            clearDropDowns()
            return
        } else {
            document.getElementById('shopping-cart-shorthand').style.display = 'flex'
            return
        }
    } else {
        count = count + 1;
        document.getElementById('shopping-cart-shorthand').style.display = 'none'
        return
    }
})

observerShorthandCartArea = new IntersectionObserver((element) => {
    if (element[0].isIntersecting) {
        if (element[0].target.getAttribute('id') === 'shorthand-cart-area') {
            document.getElementById('shopping-cart-shorthand').style.display = 'flex'
            return
        } else {
            document.getElementById('shopping-cart-shorthand').style.display = 'none'
            clearDropDowns()
            return
        }
    } else {
        document.getElementById('shopping-cart-shorthand').style.display = 'none'
        clearDropDowns()
        return
    }
})

observerShorthandCartArea.observe(document.getElementById('shorthand-cart-area'))
observerFooterSocials.observe(document.getElementById('footer-socials'))

colorDropDownOpen = false
sizeDropDownOpen = false
function clearDropDowns() {
    document.getElementById('color-dropdown').classList.remove('fa-angle-up')
    document.getElementById('color-dropdown').classList.add('fa-angle-down')
    document.getElementById('size-dropdown').classList.remove('fa-angle-up')
    document.getElementById('size-dropdown').classList.add('fa-angle-down')
    document.getElementById('color-dropdown-div').style.display = 'none'
    document.getElementById('size-dropdown-div').style.display = 'none'
}
function toggleColorDropdown() {
    colorDropDownOpen = !colorDropDownOpen
    clearDropDowns()
    if (colorDropDownOpen) {
        document.getElementById('color-dropdown').classList.add('fa-angle-up')
        document.getElementById('color-dropdown').classList.remove('fa-angle-down')
        document.getElementById('color-dropdown-div').style.display = 'flex'
    } else {
        document.getElementById('color-dropdown').classList.remove('fa-angle-up')
        document.getElementById('color-dropdown').classList.add('fa-angle-down')
        document.getElementById('color-dropdown-div').style.display = 'none'
    }
}

function toggleSizeDropdown() {
    sizeDropDownOpen = !sizeDropDownOpen
    clearDropDowns()
    if (sizeDropDownOpen) {
        document.getElementById('size-dropdown').classList.add('fa-angle-up')
        document.getElementById('size-dropdown').classList.remove('fa-angle-down')
        document.getElementById('size-dropdown-div').style.display = 'flex'
    } else {
        document.getElementById('size-dropdown').classList.remove('fa-angle-up')
        document.getElementById('size-dropdown').classList.add('fa-angle-down')
        document.getElementById('size-dropdown-div').style.display = 'none'
    }
}

function clearGrid() {
    maxCols = 5
    for (let j = 0; j < maxCols; j++) {
        cols = document.getElementsByClassName(`col-0${j + 1}`)
        for (let x = 0; x < cols.length; x++) {
            cols[x].style.backgroundColor = 'transparent'
        }
    }
    maxRows = 8
    for (let i = 0; i < maxRows; i++) {
        rows = document.getElementsByClassName(`r${i + 1}`)
        for (let a = 0; a < rows.length; a++) {
            rows[a].style.color = '#6f6f6f'
            if (a == 0) {
                rows[a].style.color = '#262626'
            }
        }
    }
}

function highlightGrid(row, col) {
    clearGrid()
    r = document.getElementsByClassName(`r${row}`)
    for (let a = 0; a < r.length; a++) {
        r[a].style.color = '#537876'
    }
    cols = document.getElementsByClassName(`col-0${col}`)
    for (let i = 0; i < row; i++) {
        cols[i].style.backgroundColor = '#eef1f1'
        if (i == row - 1) {
            cols[i].style.backgroundColor = '#e1e1e1'
        }
    }
}
function openSizeGuide() {
    document.getElementById('size-guide-div').style.display = 'flex';
    document.getElementById('size-menu-div').style.right = '-200%';
    document.getElementById('overlay').style.display = 'none';
}

function closeSizeGuide() {
    document.getElementById('size-guide-div').style.display = 'none'
}