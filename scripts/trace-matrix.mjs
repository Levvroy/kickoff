// Bangun matriks traceability kode dari komentar "trace:" di source code.
// Contoh komentar:  // trace: UC03, KF05, C04     atau   # trace: UC01, C02
// Pemakaian: node trace-matrix.mjs [folder-src=src] > docs/trace-code.md
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const srcDir = process.argv[2] || "src";
if (!existsSync(srcDir)) { console.error(`Folder tidak ditemukan: ${srcDir}`); process.exit(2); }
const SKIP = new Set(["node_modules", ".git", "dist", "build", "target", "venv", ".venv", ".next"]);
const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  if (SKIP.has(f)) return [];
  return statSync(p).isDirectory() ? walk(p) : [p];
});

const rows = [];
for (const file of walk(srcDir)) {
  let text;
  try { text = readFileSync(file, "utf8"); } catch { continue; }
  text.split("\n").forEach((line, i) => {
    const m = line.match(/trace:\s*([A-Za-z0-9,\s-]+)/);
    if (!m) return;
    const ids = m[1].split(/[,\s]+/).filter(Boolean);
    // Cari nama simbol di beberapa baris berikutnya.
    const next = text.split("\n").slice(i + 1, i + 4).join(" ");
    const sym = (next.match(/(?:class|function|def|interface|const|export\s+(?:default\s+)?function)\s+([A-Za-z_][\w]*)/) || [])[1] || "-";
    rows.push({ file: relative(process.cwd(), file).replaceAll("\\", "/"), line: i + 1, sym, ids });
  });
}
const byId = new Map();
for (const r of rows) for (const id of r.ids) {
  if (!byId.has(id)) byId.set(id, []);
  byId.get(id).push(`\`${r.file}:${r.line}\` - \`${r.sym}\``);
}
console.log("| ID | Lokasi implementasi |\n| :--- | :--- |");
for (const id of [...byId.keys()].sort()) console.log(`| ${id} | ${byId.get(id).join("<br>")} |`);
if (!rows.length) console.error("Tidak ada komentar trace: ditemukan.");
