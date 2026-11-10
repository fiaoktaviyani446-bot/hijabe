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

