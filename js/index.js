const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector('nav');

let allTheNavLinks = document.querySelectorAll("nav a");


newContactLink = document.createElement('a');// creating new link for nav
newContactLink.textContent = 'Contact';
newContactLink.href = '#';
nav.appendChild(newContactLink);
newContactLink.style.color = 'green';

newStoreLink = document.createElement('a');
newStoreLink.textContent = 'Store';
newStoreLink.href = '#';
nav.prepend(newStoreLink);
newStoreLink.style.color = 'green';


allTheNavLinks.forEach(function(){ 
for(let i = 0; i < allTheNavLinks.length; i++){
allTheNavLinks[i].textContent = siteContent.nav[`nav-item-${i}`];
allTheNavLinks[i].style.color = 'green';
}
});


const mainTitle = document.querySelector('.cta h1');
mainTitle.textContent = siteContent.cta.h1; 

const headingButton = document.querySelector('.cta button');
headingButton.textContent = siteContent.cta.button;

const mainImage = document.querySelector('#cta-img');
mainImage.setAttribute('src', siteContent['cta']['img-src']);

// main content 
const mainContentSubtitles = document.querySelectorAll('.text-content h4');

mainContentSubtitles[0].textContent = siteContent["main-content"]['features-h4'];
mainContentSubtitles[1].textContent = siteContent["main-content"]['about-h4'];
mainContentSubtitles[2].textContent = siteContent["main-content"]['services-h4'];
mainContentSubtitles[3].textContent = siteContent["main-content"]['product-h4'];
mainContentSubtitles[4].textContent = siteContent["main-content"]['vision-h4'];

const mainContentParagraphs = document.querySelectorAll('.text-content p');

mainContentParagraphs[0].textContent = siteContent["main-content"]['features-content'];
mainContentParagraphs[1].textContent = siteContent["main-content"]['about-content'];
mainContentParagraphs[2].textContent = siteContent["main-content"]['services-content'];
mainContentParagraphs[3].textContent = siteContent["main-content"]['product-content'];
mainContentParagraphs[4].textContent = siteContent["main-content"]['vision-content'];

const mainContentImage = document.querySelector('#middle-img');
mainContentImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent['contact']['contact-h4'];

const contactSectionPara = document.querySelectorAll('.contact p')
// setting the contact section because they are all p tags so had to use a collection
contactSectionPara[0].textContent = siteContent['contact']['address']; 
contactSectionPara[1].textContent = siteContent['contact']['phone'];
contactSectionPara[2].textContent = siteContent['contact']['email'];

const copyRightFoot = document.querySelector('footer p');
copyRightFoot.textContent = siteContent['footer']['copyright'];




