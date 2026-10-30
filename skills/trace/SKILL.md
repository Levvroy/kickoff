---
name: trace
description: Membuat ulang matriks traceability (requirement, use case, kelas, kode, test) dari registry ID dan komentar trace di kode. Gunakan saat mengisi tabel traceability SKPL/DPPL/Implementasi B.5 atau sebelum gate verifikasi.
---

# Traceability

1. Konsistensi dokumen: `node "${CLAUDE_PLUGIN_ROOT}/scripts/check-ids.mjs" docs`
2. Pemetaan ID ke kode: `node "${CLAUDE_PLUGIN_ROOT}/scripts/trace-matrix.mjs" src` (output tabel Markdown, simpan ke `docs/trace-code.md`).
3. Gabungkan menjadi matriks yang diminta dokumen:
   - SKPL Bab 6: ID Kelas | ID Use Case | ID KF
   - DPPL Bab 7/5: Kelas | Use Case Terkait
   - Implementasi B.5: ID Kelas | Nama Kelas Perancangan | Bentuk Implementasi | Lokasi | Keterangan
   - Industry: REQ | Task | File | Test
4. Laporkan celah: requirement tanpa UC, kelas tanpa implementasi, kode tanpa trace tag, requirement Must tanpa test.

Jangan mengarang lokasi file. Semua lokasi harus berasal dari output script atau dari file yang benar-benar dibaca.
