 const btn_menu = document.querySelector(".btn_menu");
 const menu_items= document.querySelector(".menu_items");
  
    btn_menu.addEventListener("click", () => {
       menu_items.classList.toggle('show');
    });
  