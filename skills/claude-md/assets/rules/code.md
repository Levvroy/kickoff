---
paths:
  - "src/**"
---
# Aturan kode
- Ikuti pola arsitektur yang dipilih ({{pola}}): {{aturan lapisan, misalnya View tidak mengakses Repository langsung}}.
- Tambahkan komentar `trace: ...` pada unit yang mewujudkan kelas desain atau use case.
- Jangan commit rahasia. Konfigurasi lewat environment variable.
- Fungsi baru untuk logika inti harus disertai test.
