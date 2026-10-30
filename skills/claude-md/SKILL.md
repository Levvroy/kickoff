---
name: claude-md
description: Membuat atau memperbarui CLAUDE.md dan .claude/rules/ untuk proyek yang dirancang dengan kickoff. Gunakan setelah stack dan arsitektur disetujui (fase 6), atau ketika perintah build/test/struktur proyek berubah.
---

# Generator CLAUDE.md

## Prinsip
- Target **80-150 baris**, maksimal 200. Isinya fakta yang berlaku di setiap sesi.
- Masukkan hal yang **tidak bisa ditebak dari kode**: perintah build/test/lint/dev, konvensi yang berbeda dari default, skema ID dan trace tag, aturan proses (sesi per task, gate).
- Jangan masukkan: hal yang terlihat dari membaca kode, konvensi standar bahasa, tutorial, isi dokumen panjang.
- Perintah hanya ditulis setelah **benar-benar dijalankan dan berhasil** di proyek ini. Jika belum bisa dijalankan (proyek belum di-scaffold), tandai `<!-- TODO: verifikasi setelah scaffold -->` dan perbarui di task implementasi pertama.
- Rujuk dokumen dengan path biasa, bukan `@import`, karena import tetap memuat seluruh isi file ke konteks.
- Detail per area dipindah ke `.claude/rules/*.md` dengan frontmatter `paths:` supaya hanya dimuat saat file terkait disentuh.
- CLAUDE.md bukan alat pemaksa. Untuk larangan keras (misalnya commit ke `main`), sarankan hook atau permission ke klien.

## Langkah
1. Baca `state.md`, ADR stack, tech-plan/APL+DPPL (bagian struktur), dan struktur folder aktual.
2. Isi `assets/CLAUDE.md.tmpl`. Hapus bagian yang tidak relevan.
3. Salin rules yang relevan dari `assets/rules/` ke `.claude/rules/`, lalu sesuaikan glob `paths`.
4. Jika repo juga dipakai agent lain (Codex, Gemini CLI, Cursor), tanyakan klien apakah perlu `AGENTS.md`. Jika ya, buat `AGENTS.md` sebagai isi utama dan jadikan `CLAUDE.md` berisi `@AGENTS.md` ditambah bagian khusus Claude.
5. Hitung baris (`wc -l`). Jika lebih dari 200, pindahkan detail ke rules.
6. Tunjukkan diff ke klien sebelum menyimpan.
