# Skema ID

| Hal | Pola | Contoh | Dipakai di |
| --- | --- | --- | --- |
| User story | US-xx | US-01 | TB 3.2, RG 2.1 |
| Aktivitas | lihat catatan | ACT01 | RG 2.2 |
| Kebutuhan (pemetaan) | Rxx | R01 | RG 2.3 |
| Kebutuhan fungsional | KFxx | KF01 | RG 2.4 dst. |
| Kebutuhan non-fungsional | KNFxx | KNF01 | RG 2.5 dst. |
| Aktor | Axx | A01 | SKPL 4.1 |
| Use case | UCxx | UC01 | UC 3.2 dst. |
| Kelas | Cxx | C01 | CD 4.1 dst. |
| Layar antarmuka | I-xx | I-01 | DPPL 6 |
| Algoritma | Algo-xxx | Algo-001 | DPPL 5 |
| Query | Q-xxx | Q-001 | DPPL 5 |
| Asumsi/risiko | ASM-xx | ASM-01 | .project/assumptions.md |
| Sumber | S-xx | S-01 | .project/sources.md |
| Keputusan | ADR-xxx | ADR-001 | docs/adr/ |

**Catatan konflik di template:** template Requirement Gathering memakai `A01` untuk **aktivitas**, sedangkan SKPL memakai `AXX` untuk **aktor**. Di Fase 0, tanyakan ke klien mana yang dipakai kelompok. Opsi:
1. Aktivitas `ACTxx`, aktor `Axx` (tidak bentrok).
2. Ikuti template apa adanya, dan nyatakan konteksnya di tabel Aturan Penomoran setiap dokumen.
Jangan memilih sendiri.

## Registry (`docs/00-id-registry.md`)
Satu tabel per jenis ID. Kolom pertama selalu ID, karena `scripts/check-ids.mjs` membaca kolom itu.

```markdown
## Kebutuhan Fungsional
| ID | Ringkasan | Prioritas | Sumber (R/US) | Status |
| --- | --- | --- | --- | --- |
| KF01 | Ketika ..., sistem harus ... | Must | R01 | aktif |
```

ID yang dihapus tidak dipakai ulang. Ubah statusnya menjadi `dihapus` dan catat di Daftar Perubahan.
