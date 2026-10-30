---
name: docs-industry
description: Menyusun dokumen alur industri yang ringan (PRD, ADR, tech plan, tasks) untuk proyek pribadi, klien, atau startup. Gunakan saat state flow = industry atau klien meminta PRD/spec/plan.
---

# Dokumen alur industri

Template di `assets/templates/`. Hasil disimpan di `docs/`.

| Dokumen | Fase | Isi inti |
| --- | --- | --- |
| `docs/PRD.md` | 1-2 | masalah, tujuan, pengguna, requirement EARS + MoSCoW, NFR terukur, scope out, metrik sukses |
| `docs/adr/ADR-xxx-*.md` | 3 | keputusan stack dan arsitektur, minimal 2 opsi + sumber |
| `docs/tech-plan.md` | 4-5 | arsitektur, model data, API, struktur folder, strategi test, risiko |
| `docs/tasks.md` | 5c | task kecil berurutan, tiap task merujuk ID requirement dan punya kriteria selesai |

## Aturan
- PRD fokus pada **apa dan mengapa**, tanpa tech stack. Stack masuk ADR dan tech plan.
- ID requirement: `REQ-xx` untuk fungsional, `NFR-xx` untuk non-fungsional, kecuali klien ingin memakai skema RPL (KF/KNF).
- Setiap task di `tasks.md` berukuran satu sesi kerja (kira-kira kurang dari 1-2 jam kerja manusia atau satu PR kecil). Jika lebih besar, pecah.
- Task punya bagian: tujuan, requirement terkait, file yang kemungkinan disentuh, kriteria selesai yang bisa diuji, dan dependensi.
- Presentasikan PRD per bagian ke klien dan minta persetujuan. Jangan menulis seluruh PRD lalu meminta persetujuan sekaligus.
- Sebelum implementasi, jalankan `/kickoff:gate` (memanggil subagent `reviewer` untuk analisis konsistensi PRD, ADR, plan, dan tasks).
