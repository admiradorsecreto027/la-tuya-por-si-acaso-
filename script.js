<script>
const book = document.querySelector(".book");
const cover = document.getElementById("cover");
const spread1 = document.getElementById("spread1");
const spread2 = document.getElementById("spread2");
const closeScreen = document.getElementById("close");

function openBook() {
  cover.classList.add("open");
  book.classList.add("opened"); // muestra el lomo
}

function nextSpread() {
  spread1.classList.remove("active");
  spread2.classList.add("active");
}

function closeBook() {
  spread2.classList.remove("active");
  closeScreen.classList.add("show");
  book.classList.remove("opened"); // oculta el lomo
}
</script>
