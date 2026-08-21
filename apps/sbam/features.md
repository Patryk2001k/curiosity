# SBAM — In-Depth Features & Architecture

---

## 1. Smart Anti-Junk Filter
Email-to-Jira integrations frequently clutter issues with tiny social icons, signature banners, and tracking pixels.
* **Automatic Detection:** Identifies image files under 20 KB (customizable threshold).
* **Target Extensions:** Configurable per-user for `.png`, `.jpg`, `.svg`, `.webp`, `.ico`, `.docx`, and more.
* **One-Click Cleanup:** Move all detected signature clutter across an issue or project directly to the Trash Vault.

---

## 2. Client-Side Streaming ZIP Engine
* **Zero-Server Bottleneck:** File binaries stream directly over HTTP/2 into browser RAM, bypassing the 25-second serverless execution limits.
* **Adaptive Concurrency:** Dynamically balances 4 to 10 concurrent streams to maximize throughput without triggering rate limits.
* **Structured ZIP Archives:** Supports independent folder configurations:
  * `Per-project folder`: `[PROJ-KEY]/`
  * `Per-issue folder`: `[ISSUE-KEY]/`
  * `Category subfolders`: `PDFs/`, `Office/`, `Images/`, `Archives/`, `Data/`

---

## 3. Virtual Trash Vault & Self-Healing Sync
* **Configurable Retention:** Jira Administrators configure retention periods from 0 to 9999 days.
* **3-Tier Permission Control (RBAC):**
  * *Global Administrators:* Can restore or permanently purge any file.
  * *Project Administrators:* Can manage attachments within their project scope.
  * *Standard Users:* Can only restore files they originally uploaded or moved to trash.
* **Self-Healing Engine:** If an attachment is deleted or renamed natively outside SBAM, the trash catalog automatically reconciles state without ghost records.

---

## 4. Administrator Configuration
Accessible via **Jira Settings → Apps → SBAM Settings**:
* Set organization-wide trash retention schedules.
* Enable or disable Project Administrator permanent deletion authority.
* Policy recalibration options for existing files when retention schedules are modified.