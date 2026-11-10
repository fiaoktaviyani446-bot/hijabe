document.querySelectorAll(".product-gallery img").forEach(function (foto) {
    foto.addEventListener("click", function () {
        const kartu = foto.closest(".product-card");
        const fotoUtama = kartu.querySelector(":scope > img");

        fotoUtama.src = foto.src;
    });
});