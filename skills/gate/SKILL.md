---
name: gate
description: Memeriksa apakah fase kickoff saat ini sudah memenuhi kriteria untuk lanjut (gate). Gunakan setelah menyelesaikan dokumen/fase, sebelum implementasi, atau saat user bertanya apakah sudah boleh lanjut.
---

# Gate fase

1. Baca `phase` dan `flow` dari `.project/state.md`.
2. Delegasikan pemeriksaan ke subagent `reviewer` dengan daftar kriteria di bawah untuk fase tersebut. Jika `docs/00-id-registry.md` ada, minta reviewer menjalankan `node "${CLAUDE_PLUGIN_ROOT}/scripts/check-ids.mjs" docs`.
3. Tampilkan hasil ke user sebagai tabel: kriteria, status (lolos/gagal), bukti/lokasi.
4. Jika ada yang gagal: usulkan perbaikan, tanyakan klien jika butuh keputusan. Jangan menandai gate lolos.
5. Jika semua lolos **dan** klien menyetujui: set `gate_status: passed`, majukan `phase`, isi `next_step`, lalu jalankan `/kickoff:handoff`.

## Kriteria per fase
| Fase | Kriteria |
| --- | --- |
| 0 Setup | flow, doc_language, project_type terisi. Untuk rpl: identitas kelompok dan konvensi ID aktivitas/aktor sudah diputuskan. |
| 1 Discovery | Masalah, kondisi saat ini, JTBD, aktor terdokumentasi. Klien menyetujui read-back. |
| 2 Elisitasi | Kriteria berhenti di skill `interview` terpenuhi. Semua ID terdaftar di registry. |
| 3 Riset | Setiap pilihan stack punya ADR dengan minimal 2 opsi dan sumber S-xx. Tidak ada versi tanpa sumber. |
| 4 Analisis | Setiap KF tercakup minimal satu UC. Setiap UC punya skenario normal (dan alternatif jika ada). Setiap kelas terkait minimal satu UC. Tabel traceability lengkap. check-ids tanpa error. |
| 5a Arsitektur | Semua kelas tercakup komponen. Nama komponen identik di tabel dan diagram. Lingkungan operasi sama dengan SKPL 2.5. |
| 5b Desain UI | Flow, token, komponen, dan semua layar I-xx ada di Figma (atau fallback tercatat). Klien menyetujui. Token diekspor. |
| 5c Desain rinci | Setiap skenario UC punya sequence diagram. Operasi di sequence ada di kelas. Matriks kelas-UC lengkap. tasks.md (industry) siap. |
| 6 CLAUDE.md | Maksimal 200 baris. Perintah teruji atau ditandai TODO. Rules dengan paths dibuat. |
| 7 Implementasi (per task) | Test lulus, lint bersih, trace tag ada, status task diperbarui. |
| 8 Verifikasi | Semua UC Must terimplementasi atau tercatat alasannya. Matriks kelas ke kode lengkap. Profiling (rpl) tercatat. Parity Figma dicek. |
