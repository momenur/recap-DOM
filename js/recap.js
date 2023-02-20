document.getElementById('bg-change').addEventListener('click', function(){
    const styleElement = document.getElementsByClassName('friend');
    for(const element of styleElement){
        element.style.backgroundColor = 'skyblue';
        element.style.padding = '7px';
        element.style.margin = '5px';
        element.style.borderRadius = '10px';
    }
})
document.getElementById('add-child').addEventListener('click', function(){
    console.log('Add Element is Clicked');
})