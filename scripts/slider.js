const reviewElement = document.querySelector('.review-container');


const contents = [
    `<h2 class="my-4 heading">Training
    <div class="underline-container">
        <div class="underline"></div>
    </div>
</h2>
<h5 class="mb-4 m-md-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolore iste dolorum?</h5>

<div class="row align-items-center g-0">
    <div class="col-md-8">
        <img id="front-end-image" class="img-fluid" src="/images/Front-end-Development.jpeg" alt="">
    </div>
    <div class="col-md-4">
        <div class="card border-0">
            <div class="card-body training-card">
                <h2>Learn Web Design Fundamentals</h2>
                <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur odit debitis aperiam magnam, voluptatibus voluptatum voluptatem voluptates.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non distinctio obcaecati, neque quae omnis sequi quidem iusto illum. Quas voluptatem porro ex rerum reprehenderit, facilis tenetur ipsam! Quis, eligendi impedit!
                </p>
                <a href="" class="btn read-more">
                    <i class="bi bi-chevron-right"></i> Read More
                </a>
            </div>
        </div>
    </div>
</div>`,
`<h2 class="my-4 heading">Training
<div class="underline-container">
    <div class="underline"></div>
</div>
</h2>
<h5 class="mb-4 m-md-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolore iste dolorum?</h5>

<div class="row align-items-center g-0">
<div class="col-md-8">
    <img width="750px" height="422px" id="front-end-image" class="img-fluid" src="/images/autocad-training.png" alt="">
</div>
<div class="col-md-4">
    <div class="card border-0">
        <div class="card-body training-card">
            <h2>Learn AutoCAD Fundamentals</h2>
            <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur odit debitis aperiam magnam, voluptatibus voluptatum voluptatem voluptates.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non distinctio obcaecati, neque quae omnis sequi quidem iusto illum. Quas voluptatem porro ex rerum reprehenderit, facilis tenetur ipsam! Quis, eligendi impedit!
            </p>
            <a href="" class="btn read-more">
                <i class="bi bi-chevron-right"></i> Read More
            </a>
        </div>
    </div>
</div>
</div>`
]

let i = 0;

let content = document.getElementById('content')

function slideshow(){
    content.innerHTML = contents[i];

    if(i < contents.length - 1 ){
        i++
    }
    else{
        i = 0
    }
}

let s = setInterval(slideshow, 7000)
let h = true;

content.addEventListener('click', () => {
    if(h){
        clearInterval(s)
        h = false
    }
    else{
        s = setInterval(slideshow, 7000);
        h = true
    }
}, true)


const reviews = [
    {
        'id' : 1,
        'img' : 'https://randomuser.me/api/portraits/women/2.jpg',
        'name' : 'Zara Larson',
        'quote' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quibusdam facere harum dolores laborum. Eveniet dolorem doloribus commodi quia, est a delectus numquam aspernatur repellat distinctio tempora quasi dolor quam?',
    },
    {
        'id' : 2,
        'img' : 'https://randomuser.me/api/portraits/men/3.jpg',
        'name' : 'James Rush',
        'quote' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quibusdam facere harum dolores laborum. Eveniet dolorem doloribus commodi quia, est a delectus numquam aspernatur repellat distinctio tempora quasi dolor quam?',
    },
    {
        'id' : 3,
        'img' : 'https://randomuser.me/api/portraits/men/3.jpg',
        'name' : 'Zayn Malik',
        'quote' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quibusdam facere harum dolores laborum. Eveniet dolorem doloribus commodi quia, est a delectus numquam aspernatur repellat distinctio tempora quasi dolor quam?',
    },
    {
        'id' : 4,
        'img' : 'https://randomuser.me/api/portraits/women/3.jpg',
        'name' : 'Zendaya Holland',
        'quote' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quibusdam facere harum dolores laborum. Eveniet dolorem doloribus commodi quia, est a delectus numquam aspernatur repellat distinctio tempora quasi dolor quam?',
    },
    {
        'id' : 5,
        'img' : 'https://randomuser.me/api/portraits/men/5.jpg',
        'name' : 'Zac Efron',
        'quote' : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quibusdam facere harum dolores laborum. Eveniet dolorem doloribus commodi quia, est a delectus numquam aspernatur repellat distinctio tempora quasi dolor quam?',
    }    
]

let indexValue = 1;

const all = reviews.map((review, index) => {
    const {id, img, name, quote} = review

    const singleReview = `<article class="review ${id === indexValue ? 'activeSlide' : 'nextSlide'}" data-id="${id}">
    <img class="rounded-circle review-img" src="${img}" alt="">
    <h3 class='review-name'>${name}</h3>
    <p class="review-quote">${quote}</p>
</article>`
    return singleReview
})

reviewElement.innerHTML = all.join(" ")

const allreviews = document.querySelectorAll('.review');
const leftButton = document.querySelector('.btn-icon-left')
const rightButton = document.querySelector('.btn-icon-right')


let slider = setInterval(() => {
    indexValue++
    if (indexValue > 5){
        indexValue = 1
    }
    console.log(indexValue);
    allreviews.forEach(review => {
        const reviewID = Number(review.dataset.id);
        console.log(reviewID);
        let reviewsjs = ((reviewID + 1) > 5) ? 1 : reviewID + 1;
        
        if (indexValue == reviewID){
            review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
            review.classList.add('activeSlide');
        }
        else if (indexValue == (reviewsjs)) {
            review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
            review.classList.add('prevSlide');
        }
        else{
            review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
            review.classList.add('nextSlide');
        }
    })
}, 3000)

leftButton.addEventListener('click', () => {
    clearInterval(slider);
    indexValue--
    if (indexValue < 1){
        indexValue = 5
    }
    console.log(indexValue);
    allreviews.forEach(review => {
        const reviewID = Number(review.dataset.id);
        console.log(reviewID);
        let reviewsjs = ((reviewID + 1) > 5) ? 1 : reviewID + 1;

        if (indexValue == reviewID){
            review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
            review.classList.add('activeSlide');
        }
        else if (indexValue == (reviewsjs)) {
            review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
            review.classList.add('prevSlide');
        }
        else{
            review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
            review.classList.add('nextSlide');
        }
    })
})

rightButton.addEventListener('click', () => {
    clearInterval(slider);
    indexValue++
    if (indexValue > 5){
        indexValue = 1
    }
    console.log(indexValue);
    allreviews.forEach(review => {
        const reviewID = Number(review.dataset.id);
        console.log(reviewID);
        let reviewsjs = ((reviewID + 1) > 5) ? 1 : reviewID + 1;
        
        if (indexValue == reviewID){
            review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
            review.classList.add('activeSlide');
        }
        else if (indexValue == (reviewsjs)) {
            review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
            review.classList.add('prevSlide');
        }
        else{
            review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
            review.classList.add('nextSlide');
        }
    })
})

reviewElement.addEventListener('mouseenter', () => {
    clearInterval(slider);
})

reviewElement.addEventListener('mouseleave', () => {
    slider = setInterval(() => {
        indexValue++
        if (indexValue > 5){
            indexValue = 1
        }
        console.log(indexValue);
        allreviews.forEach(review => {
            const reviewID = Number(review.dataset.id);
            console.log(reviewID);
            let reviewsjs = ((reviewID + 1) > 5) ? 1 : reviewID + 1;
            
            if (indexValue == reviewID){
                review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
                review.classList.add('activeSlide');
            }
            else if (indexValue == (reviewsjs)) {
                review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
                review.classList.add('prevSlide');
            }
            else{
                review.classList.remove('activeSlide', 'prevSlide', 'nextSlide');
                review.classList.add('nextSlide');
            }
        })
    }, 3000)
    
})