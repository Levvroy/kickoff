// Membuat kerangka .project/ di proyek target. Tidak menimpa file yang sudah ada.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const dir = join(root, ".project");
mkdirSync(dir, { recursive: true });
const today = new Date().toISOString().slice(0, 10);
const files = {
  "state.md": `# State Proyek (sumber kebenaran fase)
project: -
flow: -            # rpl | industry
doc_language: -    # mengikuti bahasa klien
project_type: -    # web | mobile | desktop | api | data-ai | lainnya
phase: 0-setup
gate_status: open  # open | passed
current_task: -
next_step: Jalankan wawancara awal (Fase 0)
figma_file: -
updated: ${today}

## Riwayat fase
| Tanggal | Fase | Status | Catatan |
| --- | --- | --- | --- |
| ${today} | 0-setup | mulai | dibuat oleh /kickoff |

## Penghitung ID (nomor terakhir yang dipakai)
US: 0 | R: 0 | KF: 0 | KNF: 0 | A: 0 | UC: 0 | C: 0 | I: 0 | ASM: 0 | S: 0 | ADR: 0
`,
  "interview-log.md": `# Log Wawancara\nFormat: **[YYYY-MM-DD] Q:** pertanyaan / **A:** jawaban klien (kutip apa adanya) / **Catatan:** inferensi agen diberi label [INFERENSI].\n`,
  "assumptions.md": `# Asumsi & Risiko\n| ID | Asumsi / Risiko | Sumber | Dampak jika salah | Status | Cara verifikasi |\n| --- | --- | --- | --- | --- | --- |\n`,
  "sources.md": `# Sumber Riset\nFormat: [S-xx] Judul - URL - diakses YYYY-MM-DD - kutipan/temuan singkat\n`,
};
for (const [name, body] of Object.entries(files)) {
  const p = join(dir, name);
  if (existsSync(p)) { console.log(`skip (sudah ada): .project/${name}`); continue; }
  writeFileSync(p, body);
  console.log(`dibuat: .project/${name}`);
}
