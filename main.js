
let counter = 0;
const slideshow_container = document.querySelectorAll('.slideshow-container')
const slides = document.querySelectorAll('.slide')
const slides0 = document.querySelectorAll('.one')
const slides1 = document.querySelectorAll('.two')
const right_arrow = document.querySelectorAll('.arrow-right')
const left_arrow = document.querySelectorAll('.arrow-left')



function reset() {    
    for(let i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides0[0].style.display='inline-block';
        slides1[0].style.display='inline-block';
    }
}

reset()

  
   for(let i=0; i < slideshow_container.length; i++) {
    right_arrow[i].addEventListener('click', () => {
        console.log('current count ',counter)
        if(i == 0) {
            // if last item was already selected
            if(counter == slides0.length - 1) {
                console.log('case 1')
                counter = -1;
                slides0[slides0.length -1].style.display='none';              
                slides0[counter +1].style.display='inline-block';
                
              
                console.log(counter)
            }

            // if(counter + 1 == slides0.length - 1) {
            //     console.log('case 2')
            //     slides0[counter + 1].style.display='inline-block';
            //     slides0[counter].style.display='none';
            //      counter ++;
            //     console.log(counter)
            // }

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
   }





































