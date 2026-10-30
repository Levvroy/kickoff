// Dipanggil oleh hook SessionStart dan oleh /kickoff. Output stdout masuk ke konteks sesi.
// Tidak melakukan apa pun jika proyek belum memakai kickoff (tidak ada .project/state.md).
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const statePath = join(root, ".project", "state.md");
if (!existsSync(statePath)) {
  if (process.argv.includes("--verbose")) console.log("Belum ada .project/state.md. Proyek ini belum di-kickoff.");
  process.exit(0);
}
const state = readFileSync(statePath, "utf8");
const field = (k) => (state.match(new RegExp(`^${k}:\\s*(.*)$`, "m")) || [])[1]?.replace(/\s+#.*$/, "").trim() || "-";

const handoffPath = join(root, ".project", "handoff.md");
const hasHandoff = existsSync(handoffPath);

const lines = [
  "=== KICKOFF: STATUS PROYEK ===",
  `Proyek     : ${field("project")}`,
  `Alur       : ${field("flow")}   Bahasa dokumen: ${field("doc_language")}`,
  `Fase aktif : ${field("phase")}   Gate: ${field("gate_status")}`,
  `Task aktif : ${field("current_task")}`,
  `Langkah berikut: ${field("next_step")}`,
];
if (hasHandoff) {
  lines.push("", "Ada .project/handoff.md dari sesi sebelumnya. BACA FILE ITU DULU sebelum mengerjakan apa pun,");
  lines.push("lalu konfirmasi ke user apa yang akan dikerjakan di sesi ini.");
}
lines.push(
  "",
  "ATURAN SESI (wajib diingatkan ke user):",
  "- Satu sesi = satu fase dokumen ATAU satu task implementasi.",
  "- Setelah gate lolos atau task selesai, jalankan /kickoff:handoff, lalu minta user membuka sesi baru (/clear atau sesi baru).",
  "=============================="
);
console.log(lines.join("\n"));
