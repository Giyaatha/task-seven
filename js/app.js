

let postWrapper = document.querySelector('#post-holder');

let postBox = [];

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    console.log(postBox)
    postBox = data
    let postHolder = '';
    postBox.forEach(post => {
        postHolder += `
        <div class="col-md-3">
            <div class="card gedf-card">
                <div class="card-body">
                    <div class="h5 text-primary">${post.id}</div>
                    <div class="h6 text-muted">${post.title}</div>
                    <div class="h6">${post.body}s</div>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div class="h6 text-muted">Followers</div>
                    <div class="h5">2,450</div>
                </li>
                <li class="list-group-item">
                    <div class="h6 text-muted">Following</div>
                    <div class="h5">758</div>
                </li>
                <li class="list-group-item d-flex">
                <div class="nav-item me-3">
                    <a href="#"><img src="./img/bell.png"></a>
                </div>
                <div class="nav-item me-3">
                    <a href="#"><img src="./img/chat.png"></a>
                </div>
                <div class="nav-item">
                    <a href="#"><img src="./img/friends.png"></a>
                </div>
                </li>
                </ul>
            </div>
        </div>
    
    `
        
    });
    postWrapper.innerHTML = postHolder;
})

}
