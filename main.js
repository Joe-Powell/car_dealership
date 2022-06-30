
let counter = 0;
const slideshow_container = document.querySelectorAll('.slideshow-container')
const slides = document.querySelectorAll('.slideshow-container .slide')
const slides0 = document.querySelectorAll('.one')
const slides1 = document.querySelectorAll('.two')
const right_arrow = document.querySelectorAll('.arrow-right')
const left_arrow = document.querySelectorAll('.arrow-left')

const catchSlides = document.querySelector('.catchSlides')


const items = [
    {
    title: 'First item',
    classname: 'slideOne',
    src1:'images/ford-2.webp',
    src2:'images/ford-3.webp',
    src3:'images/ford-4.webp',
    src4:'images/ford-5.webp'
   },
    {
    title: 'Seconditem',
    classname: 'slideTwo',
    src1:'images/ford-2.webp',
    src2:'images/ford-3.webp',
    src3:'images/ford-4.webp',
    src4:'images/ford-5.webp'
   },
    {
    title: 'Third',
    classname: 'slideThree',
    src1:'images/ford-2.webp',
    src2:'images/ford-3.webp',
    src3:'images/ford-4.webp',
    src4:'images/ford-5.webp'
   },
  
  
]


// function reset() {    
//     for(let i=0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slides0[0].style.display='inline-block';
//     slides1[0].style.display='inline-block';
// }

// reset()

  
   for(let i=0; i < slideshow_container.length; i++) {
    //right-click
    right_arrow[i].addEventListener('click', () => {
        console.log('current count ',counter)
        console.log(slides)

        if(i == 0) {
            // if last item was already selected
            if(counter == slides0.length - 1) {
                console.log('case 1')
                counter = -1;
                slides0[slides0.length -1].style.display='none';              
                slides0[counter +1].style.display='inline-block';
                console.log(counter)
            }
   
            else{
                console.log('else')
                slides0[counter +1].style.display='inline-block';
                counter++;
                if(counter > 0){
                slides0[counter -1].style.display='none';
            }
            }
           
            
          
        }
    })

    //left click    ***** still working on it..............
    left_arrow[i].addEventListener('click', () => {
        console.log('current count ',counter)
        if(i == 0) {
            // if last item was already selected
            if(counter == 0) {
                counter = slides0.length -1 
                slides0[0].style.display='none';              
                slides0[counter].style.display='inline-block';
          
            }

            else{
                console.log('else')
                slides0[counter -1].style.display='inline-block';
                counter--;
              
                slides0[counter +1].style.display='none';
            
            }
           
            
          
        }
    })
   }





// catchSlides

items.map((item) => {
   
catchSlides.innerHTML+= `
<div class="slideshow-container">
    <h2>${item.title}</h2>
        <div class="arrow-left arrow"><i class="fas fa-chevron-left"></i></div>   
            <section class='${item.classname}'>
                <img src='${item.src1}'/>
                <p class='img-caption'>Image 1</p>
            </section>
            <section class='${item.classname}'>
                <img src='${item.src2}'/>
                <p class='img-caption'>Image 2</p>
            </section>
            <section class='${item.classname}'>
                <img src='${item.src3}'/>
                <p class='img-caption'>Image 4</p>
            </section>
            <section class='${item.classname}'>
                <img src='${item.src4}'/>
                <p class='img-caption'>Image 4</p>
            </section>
    
        <div class="arrow-right arrow"><i class="fas fa-chevron-right"></i></div>
    
    </div>

`;

const targetClasses = document.querySelectorAll(`.${item.classname}`)
 console.log('Comes as an array so need to loop through it',targetClasses)

 for(let i=0; i< targetClasses.length; i++) {
    targetClasses[i].style.display='none';
 }
 targetClasses[0].style.display='inline-block';

})





























