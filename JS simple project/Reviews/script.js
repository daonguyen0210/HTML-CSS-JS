
const navLeft = document.getElementById('nav-left');
const navRight = document.getElementById('nav-right');
const susMe = document.getElementById('content-susprise');


navLeft.addEventListener('click', previousReview);
navRight.addEventListener('click', nextReview);
// susMe.addEventListener('click', savetoLocal);

let currentIndex = document.getElementById('content-index').textContent;

let name_job = {
    "0" : ["sam smith", "web developer","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic debitis beatae ipsa quisquam. Aperiam tempora pariatur saepe enim molestias repellendus!", "pic1"],
    "1" : ["kane", "junior developer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, tempora blanditiis ipsa minima nemo corporis mollitia quam, alias est sit suscipit cumque dolor non voluptatem.", "pic2"],
    "2" : ["jane smith", "full-stack developer", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, nulla sed. Officiis voluptatum ex, provident cumque adipisci amet?", "pic3"],
    "3" : ["rachel", "senior developer", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reprehenderit perspiciatis nobis iusto similique, culpa, voluptate consectetur doloribus esse officia sit facere.", "pic4"]
}


//  imgCard.src = `images/${randomCard(DEALER)}.PNG`

function previousReview(e){
    currentIndex = currentIndex == 0 ? 3 : currentIndex-=1;
    document.getElementById('content-name').textContent = name_job[currentIndex][0];
    document.getElementById('content-job').textContent = name_job[currentIndex][1];
    document.getElementById('content-review').textContent = name_job[currentIndex][2];
    document.getElementById('person-img').src = `./img/${name_job[currentIndex][3]}.jpg`;
}

function nextReview(e){
    currentIndex = currentIndex == 3 ? 0 : currentIndex+=1;
    document.getElementById('content-name').textContent = name_job[currentIndex][0];
    document.getElementById('content-job').textContent = name_job[currentIndex][1];
    document.getElementById('content-review').textContent = name_job[currentIndex][2];
    document.getElementById('person-img').src = `./img/${name_job[currentIndex][3]}.jpg`;
}




