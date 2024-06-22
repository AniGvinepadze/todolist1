let input = document.querySelector("input");
let plus = document.querySelector(".Plus");
let p = document.querySelector(".prg");
let infobox = document.querySelector(".infobox");

p.textContent = "Tasks to do - 0";

plus.addEventListener("click", function () {
  let inputvalue = input.value.trim();

  if (inputvalue !== "") {
    let div = document.createElement("div");
    div.classList.add("firstdiv");
    infobox.appendChild(div);

    let p2 = document.createElement("p");
    p2.textContent = inputvalue;
    p2.classList.add("secondprg");
    div.appendChild(p2);

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imgDiv");
    div.appendChild(imgDiv);

    let checkimg = document.createElement("img");
    checkimg.classList.add("checkimg")
    checkimg.src = "assists/Group 1.png";
    imgDiv.appendChild(checkimg);
    checkimg.addEventListener("click", function () {
       if(checkimg.classList.contains("checkimg")){

         checkimg.src = "assists/Group 1 (1).png"
         p2.classList.remove("secondprg");
         p2.classList.add("deletedsecondchild")

         checkimg.classList.remove("checkimg")
       }else{
        checkimg.classList.add("checkimg")
        checkimg.src = "assists/Group 1.png";

        p2.classList.add("secondprg");
        p2.classList.remove("deletedsecondchild")
       }

    });

    let trashimg = document.createElement("img");
    trashimg.src = "assists/Group 2 (1).png";
    imgDiv.appendChild(trashimg);
    trashimg.addEventListener("click", function () {
      infobox.removeChild(div);
    });
  }
});
