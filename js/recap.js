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
    const friendsContainer = document.getElementById('friends-container');
    const friend =document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>New Friend is Added in my list.</p>
    `
    friendsContainer.appendChild(friend);
})