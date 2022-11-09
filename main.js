let icon_phone = document.getElementById("icon");
let nav = document.getElementById("nav");
let head = document.getElementById("head");

icon_phone.addEventListener("click", () => {
  head.style.display = "block";
  icon_phone.style.display = "none";
});

let cancel = document.getElementById("cancel");

cancel.onclick = () => {
  head.style.display = "none";
  icon_phone.style.display = "block";
};
