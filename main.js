let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(e){
    e.addEventListener('click', function(){
        navCollapse.classList.remove("show");
    })
});
