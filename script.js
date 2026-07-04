const accessKey = "n8i0cc-EWWZYmbbYcVY_2KInOUvCCi4ANDWUsRuW9aw"
const searchform = document.getElementById("search-form")
const searchbox = document.getElementById("search-box")
const searchresult = document.getElementById("search-result")
const showmorebutton = document.getElementById("show-more-button")
let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    const response = await fetch(url);
    const data = await response.json();
    const result = data.results;
    result.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink= document.createElement("a")
        imagelink.href=result.links.html;
        imagelink.target="_blank";
        
        imagelink.appendChild(image);
        searchresult.appendChild(imagelink)
    })
    showmorebutton.style.display = "block";
}
searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showmorebutton.addEventListener("click", ()=>{
    page++;
    searchImages();
})