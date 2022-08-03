const btnEl = document.querySelector(".btn");

const toggleOptions = () =>{
    const wrapperEl = document.querySelector(".wrapper");
    const iconEl = btnEl.querySelector('i');

    wrapperEl.classList.toggle('active');

    if (iconEl.classList.contains('fa-solid fa-share-nodes')){
        iconEl.classList.replace('fa-solid fa-share-nodes','ri-close-line');
    }
    else{
        iconEl.classList.replace('ri-close-line','fa-solid fa-share-nodes');
    }
}

btnEl.addEventListener('click',toggleOptions);




