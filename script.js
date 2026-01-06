// --- Efek Mengetik (Typing Effect) di Hero Section ---
const typingText = document.querySelector('.typing-text');
// Ganti kata-kata di bawah ini sesuai keahlian Anda
const words = ['Web Developer', 'UI/UX Enthusiast', 'Freelancer', 'Problem Solver', 'Guru Informatika dan SIMDIG'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        // Menghapus karakter
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Mengetik karakter
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Mengatur kecepatan mengetik dan menghapus
    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
        // Jeda setelah selesai mengetik satu kata
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Pindah ke kata berikutnya setelah selesai menghapus
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Jalankan efek mengetik saat halaman dimuat
document.addEventListener('DOMContentLoaded', type);


// --- Menu Hamburger untuk Mobile ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    // Toggle kelas 'nav-active' untuk menampilkan/menyembunyikan menu
    navLinks.classList.toggle('nav-active');

    // Animasi ikon burger
    hamburger.classList.toggle('toggle');
});

// Menutup menu saat salah satu link diklik (untuk mobile)
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
        }
    });
});


// --- Menandai Link Navigasi yang Aktif saat di-scroll ---
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // 150px adalah offset agar active state berubah sedikit sebelum mencapai section
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.classList.contains(current)) {
            // Jika menggunakan href="#home", kita perlu mencocokkannya
            document.querySelector('nav ul li a[href*=' + current + ']').classList.add('active');
        }
    });
});