const themeTogglerButton = document.querySelector('.toggle-theme');
const subscriptionTogglerButton = document.querySelector('.toggle-subscription')
const servicesTogglerButton = document.querySelector('.toggle-services');
const subscription_div = document.querySelector('.subscription-transition')
const services_div = document.querySelector('.services-list');
const sunIcon = themeTogglerButton.querySelector('.sun');
const moonIcon = themeTogglerButton.querySelector('.moon');
const themeLinks = document.querySelectorAll('.link');

let darkTheme = false;
let subscriptionClicked = false;
let servicesClicked = false;

const currentTheme = localStorage.getItem("darkTheme");

console.log(currentTheme, darkTheme);

if (currentTheme === 'true') {
    themeLinks.forEach(( themeLink ) => {
        const href = themeLink.href
        const linkName = href.slice(42, -4);
        
        themeLink.href= `../stylesheets/dark/${linkName}.css`
    })       
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block'; 
    darkTheme = true;
}else{
    themeLinks.forEach((themeLink) => {
        const href = themeLink.href
        const linkName = href.slice(42, -4);
        
        themeLink.href= `../stylesheets/default/${linkName}.css`
    })
    console.log('put light theme');
    sunIcon.style.display = 'none'
    moonIcon.style.display = 'block';    
}

console.log(themeLinks);

themeTogglerButton.addEventListener('click', () => {
    if (!darkTheme){
        themeLinks.forEach((themeLink) => {
            const href = themeLink.href
            console.log(href);
            const linkName = href.slice(42, -4);
            console.log(linkName);
            
            themeLink.href= `../stylesheets/dark/${linkName}.css`
        })
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block' 
        darkTheme = true;
        localStorage.setItem('darkTheme', true)
        console.log(localStorage.getItem('darkTheme'));
    }
    else{
        themeLinks.forEach((themeLink) => {
            const href = themeLink.href
            console.log(href);
            const linkName = href.slice(39, -4);
            console.log(linkName);
            
            themeLink.href= `../stylesheets/default/${linkName}.css`            
        })
        sunIcon.style.display = 'none'
        moonIcon.style.display = 'block';
        darkTheme = false;
        localStorage.setItem('darkTheme', false)
        console.log(localStorage.getItem('darkTheme'));
    }
        
})

if (subscriptionTogglerButton) {
    subscriptionTogglerButton.addEventListener('click', () => {
    if (!subscriptionClicked) {
        subscription_div.style.right = '50%'
        subscriptionClicked = !subscriptionClicked;
    }
    else{
        subscription_div.style.right = '-100%'
        subscriptionClicked = !subscriptionClicked;
    }
})
}

console.log(servicesTogglerButton);

servicesTogglerButton.addEventListener('click', () => {
    if(!servicesClicked){
        services_div.style.top = '93px';
        console.log('I am Nonso');
        servicesClicked = !servicesClicked;
    }
    else{
        services_div.style.top = '-100%';
        servicesClicked = !servicesClicked;
    }
})