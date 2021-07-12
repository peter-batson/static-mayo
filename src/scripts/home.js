

document.addEventListener("DOMContentLoaded", function(event) {
    const navItems = [
        {
            name: "Program Features",
            url: "https://someurl.com/program-features"
        },
        {
            name: "Group Support",
            url: "https://someurl.com/group-support"
        },
        {
            name: "About Our Company",
            url: "https://someurl.com/about"
        },
        {
            name: "Resources",
            url: "https://someurl.com/resources"
        },
        {
            name: "Contact Us",
            url: "https://someurl.com/contact"
        }
    ]
    
    const nav = document.getElementById('topnav-ol');
    const sidenav = document.getElementsByClassName("home__header-sidenav");
    
    navItems.map((item) => {
        const el = document.createElement("a");
        el.innerText = item.name
        el.href = item.url

        const li = document.createElement("li")

        li.appendChild(el)

        nav.appendChild(li)
    })

    document.getElementById('toggle-sidenav-open').addEventListener("click", function() {
        sidenav[0].classList.add("active")
    })

    document.getElementById('toggle-sidenav-close').addEventListener("click", function() {
        sidenav[0].classList.remove("active")
    })


    

});