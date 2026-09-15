# claude-ortak

Hakan'ın Claude Code plugin marketplace'i (`hakan-ortak`).

| Plugin | Ne yapar |
|---|---|
| `hakan-cekirdek` | Bulut oturumlarında (`CLAUDE_CODE_REMOTE=true`) `kurallar.md`'yi SessionStart'ta bağlama ekler. Yerelde sessizdir; yerelde kurallar `~/.claude/CLAUDE.md`'den gelir. |

## Kural güncellemek

`plugins/hakan-cekirdek/kurallar.md` dosyasını düzenle, commit'le, push'la. Kaynak kural dosyası yerelde `~/.claude/CLAUDE.md`; bu dosya onun bulut için kısaltılmış özetidir. Secret, müşteri verisi veya değişen proje durumu yazılmaz.

## Yerel test

```bash
CLAUDE_CODE_REMOTE=true node plugins/hakan-cekirdek/hooks/bulut-kurallar.mjs
```
