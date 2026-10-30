---
name: handoff
description: Menutup sesi kerja kickoff dengan menulis .project/handoff.md dan mengingatkan user membuka sesi baru. Gunakan setelah gate fase lolos, setelah satu task implementasi selesai, atau saat konteks sesi sudah panjang.
argument-hint: "[selesai | sebagian]"
---

# Handoff antar-sesi

Tujuan: sesi berikutnya bisa lanjut hanya dengan membaca `.project/state.md` dan `.project/handoff.md`, tanpa mengandalkan percakapan ini.

## Langkah
1. Update `.project/state.md`: `phase`, `gate_status`, `current_task`, `next_step`, `updated`, dan tambah baris di "Riwayat fase".
2. Tulis ulang (overwrite) `.project/handoff.md` dengan format di bawah. Maksimal sekitar 60 baris. Jangan menyalin isi dokumen, cukup rujuk path-nya.
3. Akhiri balasan dengan blok pengingat sesi baru dari skill `kickoff` (bagian "Pengingat sesi baru").

## Format handoff.md
```markdown
# Handoff - [YYYY-MM-DD HH:MM]
Status sesi: [selesai | sebagian]
Fase/task yang dikerjakan: ...

## Yang sudah selesai
- ... (path file yang dibuat/diubah)

## Keputusan klien di sesi ini
- ... (rujuk entri interview-log atau ADR-xxx)

## Belum selesai / pertanyaan terbuka
- ... (rujuk ASM-xx yang masih open)

## Langkah pertama sesi berikutnya
1. Baca: [daftar file yang WAJIB dibaca, sesedikit mungkin]
2. Kerjakan: ...

## Jangan lakukan
- ... (hal yang sudah ditolak klien, pendekatan yang sudah gagal)
```

Jika argumen `sebagian`, jelaskan tepat di titik mana pekerjaan berhenti supaya sesi berikutnya tidak mengulang.
