// SessionStart: yalnız bulut oturumunda (CLAUDE_CODE_REMOTE=true) kurallar.md'yi bağlama basar.
// Yerelde global ~/.claude/CLAUDE.md zaten yüklendiği için hiçbir şey basmaz. Hata olursa sessizce exit 0.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

try {
  if (process.env.CLAUDE_CODE_REMOTE === "true") {
    const dir = path.dirname(fileURLToPath(import.meta.url));
    process.stdout.write(fs.readFileSync(path.join(dir, "..", "kurallar.md"), "utf8"));
  }
} catch {
  // Oturumu asla bozma.
}
process.exit(0);
