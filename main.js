let button = document.querySelector("#tombol_form");
let input = document.querySelector("#input_form");
let listContainer = document.querySelector("#list-container");
let ul = document.querySelector("#list-container");

ul.style.listStyleType = "none"; // Menghilangkan bulatan hitam dari daftar

button.addEventListener('click', function(){
    let isi = input.value;
    console.log(isi);

    // Buat elemen list item
    let listItem = document.createElement("li");

    // Buat elemen checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Buat label untuk checkbox dengan spasi
    let label = document.createElement("label");
    label.textContent = " " + isi;

    // Buat tombol "x" untuk menghapus tugas dengan spasi
    let deleteButton = document.createElement("button");
    deleteButton.textContent = " x";

    // Tambahkan event listener ke checkbox untuk mengatur teks sebagai bergaris
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    });

    deleteButton.className = "delete-button";

    // Buat event listener untuk menghapus tugas saat tombol "x" diklik
    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });

    // Gabungkan elemen-elemen ke dalam list item
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    // Tambahkan list item ke dalam daftar
    listContainer.appendChild(listItem);

    // Reset input field
    input.value = "";
});