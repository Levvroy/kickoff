# Design token (Figma Variables)

Tool utama: `figma_setup_design_tokens` (membuat collection + mode + variable sekaligus dan mendukung referensi gaya `{color.blue.600}`). Untuk penambahan massal pakai `figma_batch_create_variables`. Untuk perubahan pakai `figma_batch_update_variables`. Lihat skema parameter aktual dari tool di sesi sebelum memanggil.

Struktur yang direkomendasikan:
- `primitives` (1 mode): `color/neutral/0..950`, `color/brand/50..950`, `color/red|green|amber/...`, `space/0,1,2,3,4,6,8,12,16` (kelipatan 4px), `radius/none,sm,md,lg,full`, `font/size/xs..3xl`, `font/weight/regular,medium,bold`.
- `semantic` (mode Light dan Dark): `bg/default`, `bg/subtle`, `fg/default`, `fg/muted`, `border/default`, `action/primary/bg`, `action/primary/fg`, `action/primary/hover`, `feedback/success|warning|danger/...`, semuanya alias ke primitives.

Aturan:
- Kontras teks terhadap latar minimal 4.5:1 (WCAG AA) untuk teks normal. Verifikasi dengan `figma_audit_component_accessibility` atau hitung manual.
- Nama token konsisten dengan nama di kode setelah ekspor (`figma_export_tokens`).
- Brand dari klien. Jika klien belum punya, tawarkan 2-3 palet lewat AskUserQuestion, lengkap dengan screenshot contoh jika memungkinkan.
