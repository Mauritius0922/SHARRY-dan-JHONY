let currentPage = 1;
const totalPages = 6; // Jumlah total halaman

function nextPage() {
    if (currentPage < totalPages) {
        document.getElementById(`page${currentPage}`).classList.remove("active");
        currentPage++;
        document.getElementById(`page${currentPage}`).classList.add("active");
    }
}

function firstPage() {
    document.getElementById(`page${currentPage}`).classList.remove("active");
    currentPage = 1;
    document.getElementById(`page${currentPage}`).classList.add("active");
}

// Pastikan elemen ada sebelum menambahkan event listener
document.addEventListener("DOMContentLoaded", function () {
    let rsvpForm = document.getElementById("rsvp-form");
    let transferForm = document.getElementById("transfer-form");

    if (rsvpForm) {
        rsvpForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let name = document.getElementById("name").value;
            let message = document.getElementById("message").value;
            let newEntry = `<p><strong>${name}:</strong> ${message}</p>`;
            document.getElementById("rsvp-list").innerHTML += newEntry;
            rsvpForm.reset();
        });
    }

    if (transferForm) {
        transferForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let name = document.getElementById("transfer-name").value;
            let amount = document.getElementById("amount").value;
            let newEntry = `<p><strong>${name}:</strong> Rp${amount}</p>`;
            document.getElementById("transfer-list").innerHTML += newEntry;
            transferForm.reset();
        });
    }
});
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw"; // Posisi random
    heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Durasi random
    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Hapus setelah animasi selesai
    }, 5000);
}

// Jalankan efek uluhati setiap 1 detik
setInterval(createHeart, 1000);
