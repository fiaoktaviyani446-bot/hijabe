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

// SMOOTH SCROLL STABIL
let scrollFrame = null;

document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();

        if (scrollFrame) {
            cancelAnimationFrame(scrollFrame);
        }

        const startY = window.scrollY;
        const endY = target.getBoundingClientRect().top + startY;
        const startTime = performance.now();
        const duration = 1700;
/** @param {number} now */
function animate(now) {
            const progress = Math.min((now - startTime) / duration, 1);

            const eased = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startY + (endY - startY) * eased);

            if (progress < 1) {
                scrollFrame = requestAnimationFrame(animate);
            } else {
                scrollFrame = null;
            }
        }

        scrollFrame = requestAnimationFrame(animate);
    });
});
