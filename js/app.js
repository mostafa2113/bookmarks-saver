let id = 1;
let del = 1;
let urls = document.querySelector("#urls");
let bookmarks = [];
let = createBookmark = () => {
  let url = document.querySelector("#url-in");
  let toAdd = { id, url: url.value };
  bookmarks.push(toAdd);
  window.localStorage.setItem("bookmark", JSON.stringify(bookmarks));
  id++;
  retrieveBookmark();
};
let = deleteBookmark = (id) => {
  bookmarks.splice(id - del, 1);
  //to delete the right index
  del++;
  window.localStorage.setItem("bookmark", JSON.stringify(bookmarks));
  retrieveBookmark();
};
let = updateBookmark = (id) => {
  console.log(id);
  let url = document.querySelector("#url-in");
  url.value = bookmarks[id - del].url;
  let addbtn = document.querySelector("#btn-control");
  addbtn.innerHTML = "update bookmark";
  addbtn.onclick = () => {
    bookmarks[id - del].url = url.value;
    window.localStorage.setItem("bookmark", JSON.stringify(bookmarks));
    retrieveBookmark();
    addbtn.innerHTML = "add bookmark";
    addbtn.onclick= ()=>createBookmark();
  };
};
let = retrieveBookmark = () => {
  let str = "";
  for (let i = 0; i < bookmarks.length; i++) {
    let { id, url } = bookmarks[i];
    str += `
            <tr>
                <th scope="row">#${id}</th>
                <td>${url}</td>
                <td><button class="btn btn-success" onclick="updateBookmark(${id})">update</button></td>
                <td><button class="btn btn-danger" onclick="deleteBookmark(${id})">delete</button></td>
            </tr>
                    `;
  }
  urls.innerHTML = str;
};
let searchBookmark = ()=>{
    let search = document.querySelector("#search");
    let str ="";
    for(let i = 0; i< bookmarks.length; i++){
        if(bookmarks[i].url.includes(search.value)){
            str += `
            <tr>
                <th scope="row">#${bookmarks[i].id}</th>
                <td>${bookmarks[i].url}</td>
                <td><button class="btn btn-success" onclick="updateBookmark(${bookmarks[i].id})">update</button></td>
                <td><button class="btn btn-danger" onclick="deleteBookmark(${bookmarks[i].id})">delete</button></td>
            </tr>
            `;
        }
    }
    urls.innerHTML = str;
};
document.addEventListener("DOMContentLoaded", () => {
  retrieveBookmark();
  window.localStorage.setItem("bookmarks", "[]");
  retrieveBookmark();
});
