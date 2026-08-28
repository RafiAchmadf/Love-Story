# Alya & Rafi — Birthday & 2nd Anniversary Dinner Invitation Website

Undangan digital interaktif romantis yang didesain khusus seperti surat cinta fisik vintage, yang secara perlahan bertransformasi menjadi undangan makan malam mewah dengan tema malam yang intim.

## Struktur Berkas Proyek

```text
alya-anniversary-invitation/
├── index.html          # Struktur halaman web (HTML5)
├── style.css           # Desain visual, tipografi, & animasi (CSS3)
├── script.js           # Konfigurasi data & logika interaktif (JS)
├── README.md           # Panduan ini
└── assets/
    ├── images/
    │   ├── photo-01-a.jpg   ← Foto 1A (Polaroid)
    │   ├── photo-01-b.jpg   ← Foto 1B (Polaroid, slide ke-2)
    │   ├── photo-01-c.jpg   ← Foto 1C (Polaroid, slide ke-3)
    │   ├── photo-02-a.jpg   ← Foto 2A (Portrait Editorial)
    │   ├── photo-02-b.jpg   ← Foto 2B
    │   ├── photo-02-c.jpg   ← Foto 2C
    │   ├── photo-03-a.jpg   ← Foto 3A (Film Frame)
    │   ├── photo-03-b.jpg   ← Foto 3B
    │   ├── photo-03-c.jpg   ← Foto 3C
    │   ├── photo-04-a.jpg   ← Foto 4A (Vintage Frame)
    │   ├── photo-04-b.jpg   ← Foto 4B
    │   ├── photo-04-c.jpg   ← Foto 4C
    │   ├── photo-05-a.jpg   ← Foto 5A (Cinematic Final)
    │   ├── photo-05-b.jpg   ← Foto 5B
    │   └── photo-05-c.jpg   ← Foto 5C
    ├── music/
    │   └── find-someone-to-love-you.mp3   ← File lagu utama
    └── icons/
```

---

## Panduan Pengaturan (Kustomisasi)

Seluruh konfigurasi utama website tersimpan di [`script.js`](script.js) pada bagian atas berkas.

---

### 1. Memasukkan Foto Kenangan

Setiap section foto kini berupa **carousel 3 slide**. Masukkan foto-foto dengan nama berkas yang tepat ke folder `assets/images/`:

| Nama Berkas | Letak di Halaman | Style Layout |
|---|---|---|
| `photo-01-a.jpg`, `photo-01-b.jpg`, `photo-01-c.jpg` | Setelah "Our Story" | **Polaroid** (berputar sedikit) |
| `photo-02-a.jpg`, `photo-02-b.jpg`, `photo-02-c.jpg` | Setelah "Things I Love About You" | **Portrait Editorial** |
| `photo-03-a.jpg`, `photo-03-b.jpg`, `photo-03-c.jpg` | Setelah "The Little Things" | **Film Frame** (latar hitam) |
| `photo-04-a.jpg`, `photo-04-b.jpg`, `photo-04-c.jpg` | Setelah "For Your New Chapter" | **Vintage Frame** |
| `photo-05-a.jpg`, `photo-05-b.jpg`, `photo-05-c.jpg` | Setelah "And For Us" | **Cinematic** (overlay caption) |

**Catatan:** Jika file foto belum ada, halaman akan otomatis menampilkan kotak placeholder berbingkai emas dengan label nama foto sebagai panduan posisi.

---

### 2. Memasukkan Lagu

Letakkan file audio di:
```
assets/music/find-someone-to-love-you.mp3
```

Jika file ini tidak ditemukan, website akan otomatis beralih ke lagu cadangan (*Clair de Lune* oleh Debussy — instrumen piano lembut).

Untuk mengganti lagu, ubah nilai `music` di `script.js`:
```javascript
music: "assets/music/nama-lagu-baru.mp3"
```

---

### 3. Mengubah Informasi Alya & Rafi

Buka [`script.js`](script.js) dan perbarui nilai pada objek `invitationData`:
```javascript
const invitationData = {
    boyfriendName: "Rafi",         // ← Nama kamu
    girlfriendName: "Alya",        // ← Nama Alya
    nickname: "Sayang",            // ← Panggilan sayang

    relationshipStartDate: "3 September 2024",
    anniversaryNumber: "2nd Anniversary",
    birthdayAge: 24,
    celebrationDate: "3 September 2026",
    ...
```

---

### 4. Mengisi Detail Dinner (setelah konfirmasi)

Ubah nilai-nilai berikut di `script.js` dari `"TBD"` menjadi informasi yang sebenarnya:

```javascript
restaurant: "Nama Restoran",        // ← Isi nama restoran
dinnerDate: "3 September 2026",     // ← Isi tanggal dinner
dinnerTime: "19:00 WIB",            // ← Isi waktu dinner
dressCode: "BLACK",                 // ← Bisa diubah jika perlu
googleMapsUrl: "https://maps.google.com/...", // ← Isi URL Maps
```

---

## Cara Menjalankan Website Secara Lokal

Cara termudah — langsung buka di browser:
1. Buka folder `alya-anniversary-invitation/`.
2. Klik dua kali **`index.html`** untuk membukanya di browser.
3. **(Disarankan)** Gunakan ekstensi **Live Server** di VS Code agar fitur audio berjalan optimal.

---

## Cara Deploy ke Internet (Gratis)

### Opsi A: Netlify (Paling Mudah)
1. Buka [netlify.com](https://www.netlify.com/) → Login.
2. Di halaman Sites, **drag & drop** seluruh folder `alya-anniversary-invitation/`.
3. Tunggu beberapa detik → Website aktif!
4. Ganti nama URL di *Site Settings → Change Site Name* (contoh: `untuk-alya.netlify.app`).

### Opsi B: GitHub Pages
1. Buat repositori baru di GitHub (contoh: `untuk-alya`).
2. Upload semua file ke repositori.
3. Masuk ke **Settings → Pages** → pilih branch `main`, folder `/(root)` → Save.
4. Website aktif dalam 1–2 menit di `https://username.github.io/untuk-alya/`.
