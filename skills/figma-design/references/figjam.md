# FigJam: user flow dan sitemap

Tool figma-console yang relevan: `figjam_create_section`, `figjam_create_shape_with_text`, `figjam_create_connector`, `figjam_create_stickies`, `figjam_create_table`, `figjam_auto_arrange`, `figjam_get_board_contents`.

Pola:
- Section per aktor (`A01 Pelanggan`) atau per alur utama (`UC03 Pembayaran`).
- Shape persegi untuk layar (`I-05 Ringkasan Pesanan`), diamond untuk keputusan sistem, rounded untuk start/end.
- Connector diberi label aksi pengguna ("tekan Bayar") atau hasil sistem ("gagal: saldo kurang").
- Sticky kuning untuk pertanyaan terbuka/ASM-xx, sticky merah untuk risiko.
- Setelah selesai, `figjam_auto_arrange`, lalu screenshot untuk review.

Alternatif: tulis alurnya sebagai Mermaid flowchart di `docs/` terlebih dahulu (mudah direvisi), lalu bangun di FigJam setelah disetujui.
