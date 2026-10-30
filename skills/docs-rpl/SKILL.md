---
name: docs-rpl
description: Menyusun dokumen alur akademik RPL IF2150 ITB (Topic Brainstorming, Requirement Gathering, Use Case, Class Diagram, SKPL, APL, DPPL, Implementasi) dengan ID dan traceability yang konsisten. Gunakan saat state flow = rpl atau klien menyebut SKPL/APL/DPPL/use case/class diagram.
---

# Dokumen alur RPL (IF2150)

Template asli ada di `assets/templates/` (salinan dari spesifikasi tugas). **Ikuti struktur, judul bab, nama tabel, dan petunjuk di template apa adanya.** Jika spesifikasi tugas terbaru dari asisten berbeda, minta klien memberikan versi terbarunya dan pakai itu.

| No | Template | Fase | Sumber utama |
| --- | --- | --- | --- |
| 1 | 01-TopicBrainstorming.md | 1 | wawancara |
| 2 | 02-RequirementGathering.md | 2 | wawancara + dok. 1 |
| 3 | 03-UseCase.md | 4 | dok. 2 |
| 4 | 04-ClassDiagram.md | 4 | dok. 3 |
| 5 | 05-SKPL.md | 4 | gabungan 1-4 versi final |
| 6 | 06-APL.md | 5a | SKPL + `references/architecture-cheatsheet.md` |
| 7 | 07-DPPL.md / 08-DPPL-Lengkap.md | 5c | SKPL + APL + desain Figma |
| 8 | 09-Implementasi.md | 7-8 | kode + DPPL |

## Cara kerja per dokumen
1. Salin template ke `docs/KXX_GYY_<Nama>.md` (ganti KXX/GYY dengan kelas dan kelompok dari state). Isi identitas dari state.
2. Isi bab demi bab. Bagian yang bisa disalin dari dokumen sebelumnya disalin dari **versi final**, bukan ditulis ulang.
3. Hapus blok "Petunjuk pengerjaan" hanya jika klien setuju.
4. Setiap ID baru didaftarkan dulu di `docs/00-id-registry.md` (format di `references/id-scheme.md`), baru dipakai di dokumen.
5. Diagram: ikuti `references/uml-mermaid.md`. Untuk dokumen besar (DPPL), delegasikan draf diagram dan tabel kelas ke subagent `architect`, lalu review sendiri.
6. Tunjukkan ke klien per bab atau per kelompok bab, minta persetujuan, lalu lanjut.
7. Jalankan `/kickoff:gate` setelah dokumen selesai.

## Aturan konsistensi
- Nama aktor, use case, dan kelas **harus identik** di semua dokumen, diagram, dan kemudian di kode.
- Semua KF ditulis dalam EARS (lihat skill `interview`, `references/techniques.md`).
- Aktor hanya manusia yang berinteraksi langsung. Sistem eksternal ditulis di "Reaksi Perangkat Lunak".
- Skenario use case: nomor langkah aksi aktor dan reaksi sistem harus berpasangan.
- Komponen (APL) bukan kelas. Satu komponen boleh mewadahi beberapa kelas, dan semua kelas harus tercakup oleh minimal satu komponen.
- Tabel 2.5 SKPL disalin persis ke Tabel 1.1 APL.
- Di DPPL, semua operasi yang dipanggil di sequence diagram harus ada di kelas terkait.
- Setiap perubahan dari dokumen sebelumnya dicatat di tabel "Daftar Perubahan".

## Referensi
- `references/id-scheme.md`: skema ID dan format registry.
- `references/uml-mermaid.md`: cara membuat diagram yang dirender GitHub.
- `references/architecture-cheatsheet.md`: pola arsitektur, atribut kualitas, kohesi/kopling, rumus ketersediaan.
