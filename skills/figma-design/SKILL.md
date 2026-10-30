---
name: figma-design
description: Membuat user flow di FigJam, design token (Variables), komponen, dan wireframe/screen di Figma lewat MCP figma-console, lalu mengecek parity desain dengan kode. Gunakan di fase desain UI kickoff, atau saat klien meminta wireframe, design system, atau mockup di Figma.
---

# Desain di Figma (via figma-console MCP)

Plugin ini memakai **figma-console-mcp** (Southleft, open source) yang terhubung ke Figma Desktop lewat plugin *Desktop Bridge*. Tool-nya bernama `mcp__figma-console__*`. Server MCP resmi Figma **tidak** dipakai.

Eksekusi berat (membuat banyak node) didelegasikan ke subagent `designer`. Keputusan desain dan persetujuan tetap dibahas di thread utama dengan klien.

## 0. Preflight (wajib)
Ikuti `references/preflight.md`. Jika figma-console tidak terhubung, **berhenti dan beri tahu klien** cara menyambungkannya. Jika klien memilih lanjut tanpa Figma, buat wireframe Mermaid/ASCII di `docs/wireframes.md` sebagai fallback dan catat di state.

## 1. Input dari elisitasi
Kumpulkan sebelum membuat apa pun:
- Daftar UCxx/REQ dan layar yang dibutuhkan, beri ID `I-xx`.
- Brand: warna, logo, font. Jika tidak ada, tawarkan 2-3 arah visual lewat AskUserQuestion. Jangan memilih sendiri.
- KNF aksesibilitas/ergonomi (kontras, ukuran target sentuh, mode gelap).
- Platform: web (breakpoint), mobile (ukuran frame), desktop.

## 2. Urutan kerja
1. **FigJam: user flow dan sitemap.** Satu section per aktor/alur, satu shape per layar `I-xx`, connector berlabel aksi. Detail di `references/figjam.md`. Review dengan klien.
2. **Token.** Collection `primitives` (warna mentah, spacing, radius, font size) dan `semantic` (mode Light/Dark) yang mereferensikan primitives. Detail di `references/tokens.md`. Review dengan klien.
3. **Komponen.** Button, Input, Card, Navigation, dll. sebagai component set dengan variant, semua nilai terikat ke variable (tidak boleh hex mentah). Detail di `references/components.md`.
4. **Wireframe (lo-fi) lalu screen (hi-fi).** Satu frame per layar, dinamai `I-03 UC03-Checkout / Default`. Isi deskripsi frame dengan ID requirement terkait (traceability). Mulai lo-fi grayscale, naikkan ke hi-fi setelah klien setuju alurnya.
5. **Review klien** dengan screenshot (`figma_capture_screenshot` / `figma_take_screenshot`). Catat revisi di interview-log.
6. **Handoff ke kode**: `figma_export_tokens` ke format stack yang dipilih (CSS variables / Tailwind / dll.), simpan di repo. Catat nama file Figma di `state.md` (`figma_file`).
7. **Parity check** setelah implementasi UI: lihat `references/parity.md`.

## Aturan
- Kerjakan per bagian kecil (satu komponen/satu layar per panggilan besar) supaya tidak timeout dan mudah direvisi.
- Selalu screenshot setelah membuat sesuatu untuk memverifikasi hasil. Jangan mengklaim berhasil hanya dari respons tool.
- Gambar/foto: gunakan placeholder berlabel. Jangan mengambil gambar orang nyata dari internet.
- Untuk alur `rpl`, screen yang final dipakai di DPPL Bab 6 (Rancangan Antarmuka). Ekspor screenshot ke `docs/assets/ui/I-xx.png` dan isi tabel spesifikasi objek antarmuka.
