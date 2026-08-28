/**
 * Romantic Birthday & 2nd Anniversary Dinner Invitation
 * Configuration and dynamic logic for Alya & Rafi
 */

"use strict";

const invitationData = {
    boyfriendName: "Rafi",
    girlfriendName: "Alya",
    nickname: "Sayang",

    relationshipStartDate: "3 September 2024",
    anniversaryNumber: "2nd Anniversary",
    birthdayAge: 24,
    celebrationDate: "3 September 2026",

    // Dinner details (can be updated later)
    restaurant: "Emilia Caffe Italiano GBK",
    dinnerDate: "Saturday, 5 September 2026",
    dinnerTime: "19:00 WIB",
    dressCode: "BLACK",
    googleMapsUrl: "https://maps.app.goo.gl/EkSugXVWLFBp1uqF9?g_st=iwb",

    // Asset paths - 5 slots, each containing 3 slides
    photos: {
        slot1: [
            "assets/images/photo-01-a.jpg",
            "assets/images/photo-01-b.jpg",
            "assets/images/photo-01-c.jpg"
        ],
        slot2: [
            "assets/images/photo-02-a.jpg",
            "assets/images/photo-02-b.jpg",
            "assets/images/photo-02-c.jpg"
        ],
        slot3: [
            "assets/images/photo-03-a.jpg",
            "assets/images/photo-03-b.jpg",
            "assets/images/photo-03-c.jpg"
        ],
        slot4: [
            "assets/images/photo-04-a.jpg",
            "assets/images/photo-04-b.jpg",
            "assets/images/photo-04-c.jpg"
        ],
        slot5: [
            "assets/images/photo-05-a.jpg",
            "assets/images/photo-05-b.jpg",
            "assets/images/photo-05-c.jpg"
        ]
    },
    music: "assets/music/find-someone-to-love-you.mp3"
};

const letterContent = {
    story: [
        "Bandung di sore itu mungkin terlihat seperti sore-sore biasa. Tapi buat aku, hari itu adalah salah satu hari yang sampai sekarang masih sering aku putar ulang di kepala. Karena di Kota Kembang itulah, tanpa kita sadari, cerita kita dimulai.",
        "Hari itu kamu baru saja melewati salah satu momen paling penting dalam hidupmu: sidang skripsi. Setelah semua perjuangan, revisi, begadang, dan rasa capek yang mungkin cuma kamu sendiri yang benar-benar tahu, akhirnya kamu sampai di titik itu.",
        "Dan di tengah hari bahagiamu itu, ada aku yang datang dengan sedikit keterlambatan. Sampai sekarang kalau ingat itu masih suka merasa bersalah karena sudah bikin kamu menunggu. Maaf ya, sayang. 🥺 Tapi lucunya, begitu akhirnya aku melihat kamu... Entah kenapa semuanya terasa worth it.",
        "Aku masih ingat bagaimana kamu hari itu. Cantik banget. Senyummu, tatapanmu, cara kamu ngobrol, sampai genggaman tanganmu. Ada sesuatu dari kamu yang waktu itu bikin aku berhenti sejenak dan berpikir, 'Wah... kayaknya gue bakal suka banget sama cewek ini.' Dan ternyata benar. Dari pertemuan yang awalnya mungkin terasa sederhana dan sedikit penuh keraguan, ternyata Tuhan sedang mempertemukan aku dengan seseorang yang nantinya menjadi salah satu bagian paling penting dalam hidupku.",
        "Thank you for choosing to meet me that day. Thank you karena di hari yang seharusnya kamu habiskan untuk merayakan pencapaianmu sendiri, kamu masih mau meluangkan waktu untuk bertemu denganku. Dan yang paling aku syukuri... Thank you karena setelah hari itu, kamu nggak cuma datang sebagai seseorang yang aku kenal. Kamu datang dan perlahan menjadi rumah.",
        "Waktu ternyata berjalan cepat banget. Dari yang awalnya cuma dua orang yang baru ketemu, sekarang kita sudah melewati begitu banyak hal bersama. Ada hari-hari yang menyenangkan, ada hari-hari yang melelahkan, ada hari ketika kita ketawa sampai lupa waktu, dan ada juga hari ketika kita cuma butuh duduk berdua dan nggak melakukan apa-apa. Dan justru dari hal-hal sederhana itu, aku sadar kalau ternyata kebahagiaan aku banyak banget bentuknya dalam diri kamu.",
        "Aku suka sarapan bareng kamu. Aku suka makan siang bareng kamu di sela-sela kesibukan. Aku suka duduk berjam-jam sambil minum kopi dan ngobrol random sampai topiknya sudah ke mana-mana. Aku suka duduk di sebelah kamu di bioskop. Aku suka night ride bareng kamu, ketika jalanan malam terasa jauh lebih menyenangkan hanya karena kamu ada di belakangku. Dan aku suka semua perjalanan yang pernah kita lakukan: Garut–Bandung, Jakarta–Bandung, Jakarta–Garut, Garut–Jakarta, BSD–Jakarta, Bogor–Jakarta. Kalau dipikir-pikir, kita ternyata sudah lumayan jauh ya, wkwk.",
        "Tapi buat aku, yang paling berharga bukan seberapa jauh jarak yang sudah kita tempuh. Melainkan siapa yang selalu ada di perjalanan itu. Karena sejauh apa pun jalannya, kalau sama kamu, rasanya selalu worth it."
    ],
    thingsILove: [
        "Aku suka senyummu yang punya kemampuan aneh buat bikin hari aku yang tadinya berat jadi terasa sedikit lebih ringan.",
        "Aku suka kalau kamu ketawa, apalagi kalau aku yang berhasil bikin kamu ketawa.",
        "Aku suka ketika kamu perhatian sama hal-hal kecil, caramu memperhatikan aku, peduli, dan selalu berusaha ada.",
        "Aku suka kamu yang centil, manja, clingy, dan selalu mencari-cari aku ketika ingin dekat.",
        "Aku suka kamu dalam hampir semua versi kamu: lagi cantik, ngantuk, capek, manja, centil, kesel, random, atau lagi diem."
    ],
    thingsThatMakeMeFeelLoved: [
        "Waktu kamu tetap sabar menghadapi sifat jail dan keusilan aku tanpa pernah bosan.",
        "Waktu kamu selalu menemani aku di saat aku sedang senang maupun ketika semuanya terasa berat.",
        "Perhatian-perhatian kecil kamu, cara kamu bertanya apakah aku sudah makan, mengingat hal-hal kecil tentang aku, serta manjanya kamu yang bikin aku merasa benar-benar disayang."
    ],
    birthdayWish: [
        "Semoga kamu selalu sehat, selalu bahagia, dan semua urusan kamu dimudahkan.",
        "Semoga semua impian dan cita-cita yang sedang kamu perjuangkan satu per satu menemukan jalannya.",
        "Semoga dunia selalu memperlakukan kamu dengan baik, kamu dikelilingi orang-orang tulus, dan selalu punya alasan untuk tersenyum."
    ],
    relationshipWish: [
        "Aku harap hubungan kita terus tumbuh, semakin dewasa, semakin kuat, semakin sabar, dan semakin mengerti satu sama lain.",
        "Semoga kita bisa belajar menerima kekurangan masing-masing, menjadi tempat pulang, dan menghadapi masalah tanpa saling meninggalkan.",
        "Semoga kalau Tuhan mengizinkan, hubungan ini suatu hari nanti benar-benar melangkah ke sesuatu yang lebih serius dan kita bisa melewati segalanya bersama."
    ]
};

// Global audio state management
let audioInstance = null;
let isAudioPlaying = false;

// Initialize the elements on DOM ready
document.addEventListener("DOMContentLoaded", () => {
    populateDynamicContent();
    setupAudioController();
    setupEnvelopeInteraction();
    setupScrollEffects();
    setupDinnerReveal();
    setupCarousels();
});

/**
 * Populate dynamic content from configuration
 */
function populateDynamicContent() {
    // Fill names and titles
    document.querySelectorAll(".bf-name").forEach(el => el.textContent = invitationData.boyfriendName);
    document.querySelectorAll(".gf-name").forEach(el => el.textContent = invitationData.girlfriendName);
    document.querySelectorAll(".gf-nickname").forEach(el => el.textContent = invitationData.nickname);
    document.querySelectorAll(".relationship-duration").forEach(el => el.textContent = `${invitationData.relationshipStartDate} — ${invitationData.celebrationDate}`);
    document.querySelectorAll(".anniversary-num").forEach(el => el.textContent = invitationData.anniversaryNumber);
    document.querySelectorAll(".gf-age").forEach(el => el.textContent = invitationData.birthdayAge);

    // Dinner Details Card
    const restEl = document.getElementById("dinner-restaurant");
    const dateEl = document.getElementById("dinner-date");
    const timeEl = document.getElementById("dinner-time");
    const dressEl = document.getElementById("dinner-dress");
    const mapsBtn = document.getElementById("maps-btn");
    const mapsMsg = document.getElementById("maps-msg");

    if (restEl) restEl.textContent = invitationData.restaurant;
    if (dateEl) dateEl.textContent = invitationData.dinnerDate;
    if (timeEl) timeEl.textContent = invitationData.dinnerTime;
    if (dressEl) dressEl.textContent = invitationData.dressCode;

    if (mapsBtn) {
        if (invitationData.googleMapsUrl === "TBD") {
            mapsBtn.style.display = "none";
            if (mapsMsg) mapsMsg.style.display = "block";
        } else {
            mapsBtn.href = invitationData.googleMapsUrl;
            if (mapsMsg) mapsMsg.style.display = "none";
        }
    }

    // Dynamic Lists
    populateList("story-container", letterContent.story, "story-para");
    populateList("things-love-container", letterContent.thingsILove, "love-item", true);
    populateList("things-feel-loved-container", letterContent.thingsThatMakeMeFeelLoved, "feel-loved-item", true);
    populateList("birthday-wish-container", letterContent.birthdayWish, "wish-para");
    populateList("relationship-wish-container", letterContent.relationshipWish, "wish-para");

    // Dynamic Photos & Placeholders
    setupPhotos();
}

/**
 * Utility to populate HTML lists dynamically
 */
function populateList(containerId, listData, itemClass, isNumbered = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    const fragment = document.createDocumentFragment();

    listData.forEach((text, index) => {
        const item = document.createElement("div");
        item.className = `${itemClass} reveal-on-scroll`;

        if (isNumbered) {
            const num = (index + 1).toString().padStart(2, '0');
            item.innerHTML = `
                <span class="item-number">${num}</span>
                <p class="item-text">${text}</p>
            `;
        } else {
            item.innerHTML = `<p>${text}</p>`;
        }

        fragment.appendChild(item);
    });

    container.appendChild(fragment);
}

/**
 * Handle image loading checks for 15 slots (5 carousels x 3 slides)
 */
function setupPhotos() {
    Object.keys(invitationData.photos).forEach(slotKey => {
        const slotNum = slotKey.replace("slot", "");
        const imagePaths = invitationData.photos[slotKey];

        imagePaths.forEach((src, idx) => {
            const slideChar = String.fromCharCode(97 + idx); // a, b, c
            const imgId = `photo-${slotNum}-${slideChar}-img`;
            const imgEl = document.getElementById(imgId);
            const wrapperEl = imgEl ? imgEl.closest('.photo-wrapper') : null;

            if (!imgEl || !wrapperEl) return;

            let placeholder = wrapperEl.querySelector('.photo-placeholder-card');
            if (!placeholder) {
                placeholder = document.createElement('div');
                placeholder.className = 'photo-placeholder-card';

                let label = `Foto ${slotNum}${slideChar.toUpperCase()}`;
                if (slotNum === "1") label = `Foto 01 (${slideChar.toUpperCase()}) - Polaroid`;
                else if (slotNum === "2") label = `Foto 02 (${slideChar.toUpperCase()}) - Portrait`;
                else if (slotNum === "3") label = `Foto 03 (${slideChar.toUpperCase()}) - Film Frame`;
                else if (slotNum === "4") label = `Foto 04 (${slideChar.toUpperCase()}) - Vintage`;
                else if (slotNum === "5") label = `Foto 05 (${slideChar.toUpperCase()}) - Cinematic`;

                placeholder.innerHTML = `
                    <span class="placeholder-star">✦</span>
                    <span class="placeholder-label">${label}</span>
                `;
                wrapperEl.appendChild(placeholder);
            }

            const tempImg = new Image();
            tempImg.onload = () => {
                imgEl.src = src;
                imgEl.style.display = "block";
                placeholder.style.display = "none";
            };
            tempImg.onerror = () => {
                imgEl.style.display = "none";
                placeholder.style.display = "flex";
            };

            if (src.includes("photo-") && !src.includes("PHOTO_") && !src.includes("TBD")) {
                tempImg.src = src;
            } else {
                imgEl.style.display = "none";
                placeholder.style.display = "flex";
            }
        });
    });
}

/**
 * Audio background music player and control setup
 * Updated for smooth control, state handling, and fallback support
 */
function setupAudioController() {
    const audioBtn = document.getElementById("audio-toggle");

    // Inisialisasi Audio Instance
    audioInstance = new Audio(invitationData.music);
    audioInstance.loop = true;
    audioInstance.preload = "auto";

    // Fallback URL jika berkas lokal tidak ditemukan atau gagal dimuat
    audioInstance.addEventListener("error", () => {
        console.warn("Berkas audio lokal tidak ditemukan/gagal dimuat. Beralih ke musik cadangan.");
        audioInstance.src = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3";
        audioInstance.load();

        if (isAudioPlaying) {
            audioInstance.play().catch(err => {
                console.warn("Pemutaran audio cadangan terhalang kebijakan browser:", err);
                updateAudioUI(false);
            });
        }
    });

    // Pasang Event Listener pada Tombol Audio Toggle
    if (audioBtn) {
        audioBtn.addEventListener("click", () => {
            if (isAudioPlaying) {
                pauseAudio();
            } else {
                playAudio();
            }
        });
    }
}

/**
 * Memutar audio dan memperbarui status UI
 */
function playAudio() {
    if (!audioInstance) return;

    const playPromise = audioInstance.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                isAudioPlaying = true;
                updateAudioUI(true);
            })
            .catch(err => {
                console.warn("Pemutaran audio dicegah oleh kebijakan browser (Autoplay Policy):", err);
                isAudioPlaying = false;
                updateAudioUI(false);
            });
    }
}

/**
 * Menghentikan sementara (pause) audio dan memperbarui status UI
 */
function pauseAudio() {
    if (!audioInstance) return;

    audioInstance.pause();
    isAudioPlaying = false;
    updateAudioUI(false);
}

/**
 * Helper untuk memperbarui tampilan tombol Audio Control di UI
 */
function updateAudioUI(isPlaying) {
    const audioBtn = document.getElementById("audio-toggle");
    if (!audioBtn) return;

    const label = audioBtn.querySelector(".audio-label");

    if (isPlaying) {
        audioBtn.classList.add("playing");
        if (label) label.textContent = "♪ ON";
    } else {
        audioBtn.classList.remove("playing");
        if (label) label.textContent = "♪ OFF";
    }
}

/**
 * Envelope opening animation & trigger automatic audio play
 */
function setupEnvelopeInteraction() {
    const envelope = document.getElementById("envelope");
    const openBtn = document.getElementById("open-btn");
    const envScreen = document.getElementById("envelope-screen");
    const welcomeScreen = document.getElementById("welcome-screen");
    const startReadingBtn = document.getElementById("start-reading-btn");
    const letterExperience = document.getElementById("letter-experience");

    const triggerOpen = () => openEnvelope();

    if (envelope) envelope.addEventListener("click", triggerOpen);
    if (openBtn) openBtn.addEventListener("click", triggerOpen);

    function openEnvelope() {
        if (envelope && !envelope.classList.contains("opened")) {
            envelope.classList.add("opened");

            // Direct user interaction event satisfies Browser Autoplay Policy
            playAudio();

            setTimeout(() => {
                if (envScreen) {
                    envScreen.classList.add("fade-out");
                    setTimeout(() => envScreen.classList.add("hidden"), 800);
                }
                if (welcomeScreen) {
                    welcomeScreen.classList.remove("hidden");
                    welcomeScreen.classList.add("fade-in");
                }
            }, 1200);
        }
    }

    if (startReadingBtn) {
        startReadingBtn.addEventListener("click", () => {
            if (welcomeScreen) {
                welcomeScreen.classList.add("fade-out");
                if (envScreen) envScreen.classList.add("hidden");

                setTimeout(() => {
                    welcomeScreen.classList.add("hidden");
                    if (letterExperience) {
                        letterExperience.classList.remove("hidden");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                }, 800);
            }
        });
    }
}

/**
 * Scroll reveal animations
 */
function setupScrollEffects() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll(".reveal-on-scroll, .polaroid, .editorial-photo, .film-frame, .cinematic-photo");
    elementsToReveal.forEach(el => scrollObserver.observe(el));
}

/**
 * Transition from daylight letter to dark romantic evening
 */
function setupDinnerReveal() {
    const revealBtn = document.getElementById("reveal-dinner-btn");
    const body = document.body;
    const dinnerDetails = document.getElementById("dinner-details-wrapper");

    if (revealBtn) {
        revealBtn.addEventListener("click", () => {
            // Aktifkan mode suasana malam romantis
            body.classList.add("dark-atmosphere");

            if (dinnerDetails) {
                dinnerDetails.classList.remove("hidden-dinner");
                dinnerDetails.classList.add("reveal-dinner-info");

                setTimeout(() => {
                    dinnerDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 400);
            }

            const teaser = document.querySelector(".teaser-content");
            if (teaser) teaser.classList.add("deactivated");
        });
    }
}

/**
 * Setup Carousel slide logic, button navigations, dots click, and swipe gestures
 */
function setupCarousels() {
    const carousels = document.querySelectorAll(".photo-carousel");

    carousels.forEach(carousel => {
        const track = carousel.querySelector(".carousel-track");
        if (!track) return;

        const slides = Array.from(track.children);
        const nextButton = carousel.querySelector(".btn-next");
        const prevButton = carousel.querySelector(".btn-prev");
        const dotsContainer = carousel.querySelector(".carousel-nav");
        const dots = dotsContainer ? Array.from(dotsContainer.children) : [];

        let currentIndex = 0;

        const moveToSlide = (targetIndex) => {
            if (targetIndex < 0) targetIndex = slides.length - 1;
            if (targetIndex >= slides.length) targetIndex = 0;

            track.style.transform = `translateX(-${targetIndex * 100}%)`;

            slides[currentIndex].classList.remove("current-slide");
            slides[targetIndex].classList.add("current-slide");

            if (dots.length > 0) {
                dots[currentIndex].classList.remove("current-dot");
                dots[targetIndex].classList.add("current-dot");
            }

            currentIndex = targetIndex;
        };

        if (nextButton) {
            nextButton.addEventListener("click", (e) => {
                e.stopPropagation();
                moveToSlide(currentIndex + 1);
            });
        }

        if (prevButton) {
            prevButton.addEventListener("click", (e) => {
                e.stopPropagation();
                moveToSlide(currentIndex - 1);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener("click", (e) => {
                e.stopPropagation();
                moveToSlide(index);
            });
        });

        // Optimized Swipe Gestures
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeDistance = touchEndX - touchStartX;
            if (Math.abs(swipeDistance) > 40) {
                if (swipeDistance < 0) moveToSlide(currentIndex + 1);
                else moveToSlide(currentIndex - 1);
            }
        }, { passive: true });
    });
}