// Cek konsistensi ID: dirujuk tapi tidak didefinisikan, dan didefinisikan tapi tidak pernah dirujuk.
// Pemakaian: node check-ids.mjs [folder-docs=docs] [registry=docs/00-id-registry.md]
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const docsDir = process.argv[2] || "docs";
const registry = process.argv[3] || join(docsDir, "00-id-registry.md");
if (!existsSync(registry)) { console.error(`Registry tidak ditemukan: ${registry}`); process.exit(2); }

// Pola ID. Sesuaikan dengan docs/00-id-registry.md jika kelompok memakai pola lain.
const PATTERN = /\b(US-\d{2,}|R\d{2,}|KNF\d{2,}|KF\d{2,}|UC\d{2,}|C\d{2,}|ACT\d{2,}|A\d{2,}|I-\d{2,}|ASM-\d{2,}|S-\d{2,}|ADR-\d{3,}|Algo-\d{3,}|Q-\d{3,})\b/g;

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) return f === "node_modules" || f.startsWith(".git") ? [] : walk(p);
  return [".md", ".mmd", ".puml"].includes(extname(f)) ? [p] : [];
});

// Definisi = baris tabel di registry yang kolom pertamanya adalah ID.
const defined = new Set();
for (const line of readFileSync(registry, "utf8").split("\n")) {
  const m = line.match(/^\|\s*\*?([A-Za-z]+-?\d+)\*?\s*\|/);
  if (m) defined.add(m[1]);
}
const referenced = new Map();
for (const f of walk(docsDir)) {
  if (f === registry) continue;
  for (const id of readFileSync(f, "utf8").match(PATTERN) || []) {
    if (!referenced.has(id)) referenced.set(id, new Set());
    referenced.get(id).add(f);
  }
}
const undefinedIds = [...referenced.keys()].filter((id) => !defined.has(id)).sort();
const orphans = [...defined].filter((id) => !referenced.has(id)).sort();

console.log(`ID terdefinisi: ${defined.size}, ID dirujuk: ${referenced.size}`);
if (undefinedIds.length) {
  console.log("\n[ERROR] Dirujuk tapi tidak ada di registry:");
  for (const id of undefinedIds) console.log(`  ${id}  <- ${[...referenced.get(id)].join(", ")}`);
}
if (orphans.length) console.log(`\n[WARN] Ada di registry tapi tidak pernah dirujuk: ${orphans.join(", ")}`);
if (!undefinedIds.length && !orphans.length) console.log("OK: semua ID konsisten.");
process.exit(undefinedIds.length ? 1 : 0);
