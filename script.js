// GANTI FOTO UTAMA SAAT FOTO KECIL DIKLIK
document.querySelectorAll(".product-card").forEach(function(card) {
    const fotoUtama = card.querySelector(":scope > img");
    const fotoKecil = card.querySelectorAll(".product-gallery img");

    fotoKecil.forEach(function(foto) {
        foto.addEventListener("click", function() {
            fotoUtama.src = foto.src;
        });
    });
});

// CUSTOM SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(e) {
        const tujuan = document.querySelector(this.getAttribute("href"));

        if (tujuan) {
            e.preventDefault();

            const awal = window.scrollY;
            const akhir = tujuan.getBoundingClientRect().top + window.scrollY;
            const jarak = akhir - awal;
            const durasi = Math.min(1800, Math.max(700, Math.abs(jarak) * 0.45));
            let mulai = null;
/** @param {number} waktu */
            function animasi(waktu) {
                if (!mulai) mulai = waktu;

                const progres = Math.min((waktu - mulai) / durasi, 1);
               const halus = progres;

                window.scrollTo(0, awal + jarak * halus);

                if (progres < 1) {
                    requestAnimationFrame(animasi);
                }
            }

            requestAnimationFrame(animasi);
        }
    });
});