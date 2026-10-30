---
name: implement
description: Mengimplementasikan satu task/use case dari dokumen kickoff yang sudah disetujui, dengan branching, conventional commit, trace tag, dan test. Gunakan di fase 7 setelah CLAUDE.md dibuat, satu task per sesi.
argument-hint: "[ID task, misalnya T-03 atau UC02]"
---

# Implementasi satu task

## Sebelum mulai
1. Pastikan ini **sesi baru**. Jika percakapan sebelumnya di sesi ini sudah panjang atau membahas task lain, hentikan dan minta user membuka sesi baru (`/clear`), lalu jalankan `/kickoff:implement <task>`.
2. Baca hanya: `CLAUDE.md` (otomatis), `.project/state.md`, `.project/handoff.md`, dan bagian dokumen yang dirujuk task ini (bukan seluruh dokumen).
3. Konfirmasi ke user: task apa, requirement mana, kriteria selesai apa. Jika task belum ditentukan, usulkan task berikutnya dari `tasks.md` (industry) atau use case dengan prioritas tertinggi yang belum diimplementasi (rpl).

## Saat mengerjakan
- Buat branch sesuai konvensi di CLAUDE.md. **Jangan commit, push, merge, atau membuat PR kecuali user memintanya.** Default: siapkan perubahan dan usulkan pesan commit.
- Rencanakan dulu (daftar file yang akan diubah dan pendekatannya). Untuk perubahan yang lebih dari sekadar kecil, tunjukkan rencana ke user sebelum menulis kode.
- Library baru: verifikasi versi dan API lewat skill `research` sebelum menambahkannya.
- Tulis test untuk logika inti, lalu jalankan test. Jangan mengklaim selesai sebelum test benar-benar lulus.
- Tambahkan komentar `trace: UCxx, KFxx, Cxx` di unit yang relevan.
- UI: implementasikan dari token/komponen Figma yang sudah diekspor. Setelah selesai, lakukan parity check (skill `figma-design`, `references/parity.md`).
- Jika ternyata desain tidak bisa diikuti, jangan diam-diam menyimpang. Catat di DPPL B.1 (rpl) atau tech-plan (industry) dan beri tahu user.

## Selesai
1. Jalankan test dan lint. Tampilkan hasilnya.
2. Update status task (`tasks.md` atau tabel di 09-Implementasi) dan `state.md`.
3. Usulkan pesan commit: `<tipe>(<scope>): <deskripsi> [KFxx]`.
4. Jalankan `/kickoff:handoff`, lalu tampilkan pengingat pengingat sesi baru untuk task berikutnya.

## Khusus alur rpl (Tugas 9)
Patuhi `docs-rpl/assets/templates/09-Implementasi.md`: kode di `src/`, `src/README.md` dengan isi minimal A.5, `.env.example`, tanpa rahasia di repo publik, release dengan tag `v9.x`. Isi tabel B.5 (traceability kelas ke implementasi) memakai `/kickoff:trace`.
