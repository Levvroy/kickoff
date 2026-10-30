# Preflight figma-console

Konfigurasi MCP user (contoh, versi di-pin):
```json
"figma-console": {
  "command": "npx",
  "args": ["-y", "figma-console-mcp@1.39.1"]
}
```
Beberapa fitur butuh environment variable seperti token akses Figma (lihat README figma-console-mcp di GitHub southleft/figma-console-mcp). Jangan menulis token ke repo.

Langkah:
1. Panggil `figma_get_status` (atau `figma_diagnose` jika ada masalah). Pastikan Desktop Bridge terhubung.
2. Jika tidak terhubung, minta klien:
   - Membuka **Figma Desktop** (bukan browser).
   - Membuka file tujuan, lalu menjalankan plugin **Figma Desktop Bridge** (Plugins > Development > Figma Desktop Bridge; cara impor plugin ada di README figma-console-mcp).
   - Setelah itu, panggil `figma_reconnect` atau `figma_get_status` lagi.
3. `figma_list_open_files` untuk memastikan file yang benar sedang aktif. Tanyakan klien: file baru atau file yang sudah ada? Jangan menulis ke file yang tidak dikonfirmasi.
4. Jika nama tool berbeda dari dokumen ini (versi figma-console berubah), lihat daftar tool yang tersedia di sesi dan sesuaikan. Jangan memanggil tool yang tidak ada.
