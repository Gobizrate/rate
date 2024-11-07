// Fungsi untuk mendapatkan nilai cookie berdasarkan nama
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Fungsi untuk memeriksa login sebelum mengirimkan komentar/rating
function checkLoginAndSubmit() {
    // Mengecek apakah token login ada di cookie
    const token = getCookie('login'); 

    if (!token) {
        // Jika token tidak ada, arahkan ke halaman login
        alert("Silakan login terlebih dahulu untuk memberikan rating.");
        window.location.href = "https://go.biz.id/login"; // Sesuaikan dengan URL halaman login
    } else {
        // Jika token ada, lanjutkan proses pengiriman rating/komentar
        submitComment(); // Fungsi untuk mengirim komentar, implementasikan sesuai kebutuhan
    }
}

// Event listener untuk tombol submit
document.getElementById('tombol').addEventListener('click', checkLoginAndSubmit);

// Fungsi dummy untuk mengirim komentar, bisa disesuaikan
function submitComment() {
    const commentText = document.querySelector("textarea").value;
    if (commentText) {
        // Kirim komentar ke server atau proses lainnya
        console.log("Komentar terkirim:", commentText);
    }
}
