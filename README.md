# Ruang Baca — Perpustakaan Digital

Antarmuka statis berbahasa Indonesia untuk koleksi perpustakaan digital ini. Situs dapat diterbitkan langsung melalui GitHub Pages; tidak memerlukan backend, framework, proses build, atau dependensi JavaScript.

## Menjalankan

Buka `index.html` di peramban, atau jalankan server file statis dari direktori repo, misalnya `python3 -m http.server 8000`, lalu buka `http://localhost:8000/`. Untuk GitHub Pages pada repo `perpusdigger`, halaman dan stylesheet memakai URL relatif agar tetap berfungsi pada alamat proyek seperti `/perpusdigger/`.

## Berkas

- `index.html` — halaman katalog, isi koleksi, dan navigasi.
- `styles.css` — desain responsif, tanpa aset eksternal.
- `app.js` — pencarian judul/penulis dan filter kategori di sisi peramban.
- `index.md` dan `metadata/metadata.csv` — sumber katalog yang sudah ada.
- `ebook/` — 11 PDF asli; jangan ubah atau hapus berkas-berkas tersebut.

Pencarian menerima judul atau nama penulis. Filter membantu menelusuri koleksi fiksi klasik maupun panduan dan teknologi. Tanpa JavaScript, daftar buku dan tautan PDF tetap tampil.
