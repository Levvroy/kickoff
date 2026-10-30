# Teknik elisitasi

## JTBD
"Ketika [situasi], saya ingin [motivasi], supaya [hasil yang diharapkan]." Gunakan untuk menangkap tujuan sebelum fitur.

## 5 Whys (maks 2-3 tingkat)
Klien: "Saya mau dashboard." -> "Keputusan apa yang ingin diambil dari dashboard itu?" -> "Seberapa sering, dan apa yang terjadi kalau terlambat?"

## MoSCoW
Must (tanpa ini sistem gagal memenuhi tujuan), Should (penting tapi ada jalan lain), Could (nice to have), Won't (bukan rilis ini, tapi dicatat). Heuristik DSDM: Must sekitar 60% effort.

## EARS (untuk KF)
| Pola | Template (ID) | Template (EN) |
| --- | --- | --- |
| Ubiquitous | Sistem harus <respons>. | The system shall <response>. |
| Event-driven | Ketika <pemicu>, sistem harus <respons>. | When <trigger>, the system shall <response>. |
| State-driven | Selama <keadaan>, sistem harus <respons>. | While <state>, the system shall <response>. |
| Unwanted | Jika <kondisi tak diinginkan>, maka sistem harus <respons>. | If <condition>, then the system shall <response>. |
| Optional | Di mana <fitur> tersedia, sistem harus <respons>. | Where <feature>, the system shall <response>. |
| Complex | Gabungan, misalnya "Selama ..., ketika ..., sistem harus ...". | While ..., when ..., the system shall ... |

Satu kalimat = satu kebutuhan. Hindari "dan/atau" yang menyatukan dua perilaku.

## ISO/IEC 25010:2023 (checklist KNF)
Functional suitability, Performance efficiency, Compatibility, Interaction capability (dulu usability), Reliability, Security, Maintainability, Flexibility (dulu portability), Safety.
Template RG IF2150 memakai parameter: Availability, Reliability, Ergonomy, Portability, Memory, Response time, Safety, Security. Untuk alur `rpl`, pakai parameter template; ISO 25010 hanya sebagai checklist agar tidak ada yang terlewat.
Setiap KNF wajib terukur: angka, kondisi uji, dan cara mengukurnya.

## Kesalahan pewawancara (cek sebelum bertanya)
1. Pertanyaan menggiring atau berisi jawaban.
2. Dua pertanyaan dalam satu kalimat.
3. Jargon teknis yang tidak dipahami klien.
4. Langsung membahas solusi sebelum masalah jelas.
5. Tidak menggali jawaban kabur ("biasanya", "cepat", "banyak").
6. Tidak menanyakan pengecualian dan kegagalan.
7. Mengabaikan aktor sekunder (admin, operator, pihak yang menerima laporan).
8. Mengasumsikan volume, frekuensi, atau jumlah pengguna.
9. Tidak memastikan siapa pengambil keputusan.
10. Melompat topik tanpa menutup topik sebelumnya.
11. Tidak melakukan read-back.
12. Menyetujui permintaan yang bertentangan dengan permintaan sebelumnya tanpa menunjukkan konfliknya.
13. Pertanyaan tertutup terlalu dini, sehingga kebutuhan tak terduga tidak muncul.
14. Tidak menanyakan kondisi/sistem saat ini (as-is).

## Read-back
Ringkas dalam bahasa klien: aktor, kebutuhan Must/Should/Could, NFR terukur, batasan, asumsi terbuka. Minta klien menandai yang salah atau kurang. Persetujuan harus eksplisit.
