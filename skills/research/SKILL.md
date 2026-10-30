---
name: research
description: Riset berbasis sumber sebelum merekomendasikan teknologi, versi library, API, harga, atau praktik. Gunakan setiap kali akan menulis versi/perintah instalasi/nama API, membandingkan stack, atau membuat ADR.
---

# Research-first

## Aturan keras
- **Dilarang** menulis versi library, perintah instalasi, nama fungsi/API, harga, atau kebijakan dari ingatan. Verifikasi dulu di sesi yang sama.
- Urutan sumber: (1) Context7 MCP (`resolve-library-id` lalu `query-docs`) untuk dokumentasi library, (2) WebFetch ke dokumentasi resmi, (3) WebSearch untuk perbandingan, isu, dan berita terbaru. Blog dan forum hanya pendukung, bukan sumber tunggal.
- Jika Context7 tidak terpasang, pakai WebFetch/WebSearch dan sebutkan ke klien bahwa Context7 belum aktif.
- Jika sumber saling bertentangan, tampilkan keduanya dan jelaskan mana yang dipilih serta alasannya.
- Jika tidak ditemukan sumber: katakan tidak tahu, lalu tanya klien atau catat `ASM-xx`.

## Pencatatan
Tambahkan ke `.project/sources.md`:
`[S-xx] Judul - URL - diakses YYYY-MM-DD - temuan/kutipan singkat`

Setiap klaim faktual di dokumen merujuk `[S-xx]`. Klaim tanpa rujukan diberi label `[ASUMSI]`.

## Keputusan teknologi: ADR
Untuk setiap keputusan yang mahal diubah (bahasa, framework, database, hosting, auth, pola arsitektur), tulis `docs/adr/ADR-xxx-<judul>.md` dengan template `docs-industry/assets/templates/ADR.md`. Wajib minimal 2 opsi, trade-off, dan sumber. Presentasikan ke klien dengan AskUserQuestion (rekomendasi di urutan pertama, tiap opsi dengan trade-off), lalu catat pilihan klien.

Untuk alur `rpl`, cek juga batasan tugas (misalnya template Implementasi mewajibkan aplikasi bisa dijalankan ulang lokal dan dependensi lewat file standar). Pilihan stack harus memenuhi batasan itu.

## Delegasi
Riset yang panjang (membandingkan lebih dari 2 opsi, membaca banyak halaman) didelegasikan ke subagent `researcher` supaya konteks utama tetap ringkas. Minta hasilnya dalam format: temuan, sumber S-xx, konflik antar-sumber, rekomendasi beserta risikonya.
