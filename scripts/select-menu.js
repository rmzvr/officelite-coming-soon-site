const selectMenu=document.querySelector(".select-menu"),selectMenuHeader=document.querySelector(".select-menu__header-title"),selectMenuItem=document.querySelectorAll(".select-menu__item");for(let e=0;e<selectMenuItem.length;e++){const b=selectMenuItem[e];b.addEventListener("click",()=>{removeAllSelects(),b.classList.add("select-menu__item--active"),selectMenuHeader.innerHTML=b.innerHTML,selectMenu.removeAttribute("open")})}function removeAllSelects(){for(let e=0;e<selectMenuItem.length;e++){const t=selectMenuItem[e];t.classList.remove("select-menu__item--active")}}