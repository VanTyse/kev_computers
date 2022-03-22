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
            <div class="card-body bg-light">
                <h2>Learn Web Design Fundamentals</h2>
                <!--<p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur odit debitis aperiam magnam, voluptatibus voluptatum voluptatem voluptates.
                </p>-->
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
        <div class="card-body bg-light">
            <h2>Learn AutoCAD Fundamentals</h2>
           <!-- <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur odit debitis aperiam magnam, voluptatibus voluptatum voluptatem voluptates.
            </p> -->
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
