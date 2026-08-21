# SBAM — FAQ & Troubleshooting

---

## Frequently Asked Questions

### Why does SBAM download ZIP files so much faster than native Jira?
SBAM uses a high-performance **Client-Side Streaming Architecture** (`JSZip` in the browser). Instead of routing binary files through a slow serverless backend proxy, files stream directly over HTTP/2 into your browser memory. Compression is set to `STORE` mode because PDFs, Office files, and images are already compressed binaries.

### Is there a limit on how many files I can download at once?
SBAM has been stress-tested on over 800+ files (exceeding 2 GB) in a single operation. To prevent browser memory exhaustion, SBAM automatically splits downloads into **400 MB archive parts** (`_Part_1.zip`, `_Part_2.zip`) when processing massive datasets.

### Can standard users see or restore files deleted by other users?
No. SBAM enforces strict **3-Tier Role-Based Access Control (RBAC)**:
* Standard users can only view and restore files they originally uploaded or moved to trash.
* Project Administrators can restore any file within their project.
* Global Administrators can manage all files instance-wide.

### What happens if someone deletes an attachment using Jira's native UI?
SBAM includes a **Self-Healing Reconciliation Engine**. The next time an issue or the Global Navigator is opened, SBAM compares physical attachment records with the virtual trash catalog and silently removes any ghost records.

---

## Troubleshooting

### "You do not have permission to delete these attachment(s)"
* **Cause:** Jira permission schemes require either `DELETE_ALL_ATTACHMENTS` or `DELETE_OWN_ATTACHMENTS` on the issue's project.
* **Resolution:** Contact your Jira Administrator to verify your project role permissions.

### "Empty JQL Query" or "Invalid JQL Syntax"
* **Cause:** Jira Cloud deprecated legacy search syntax.
* **Resolution:** Ensure your JQL includes a valid clause before any ordering statement (e.g., `created IS NOT NULL ORDER BY created DESC` instead of just `ORDER BY created DESC`).

### Dark Mode display issues
SBAM fully supports Jira Cloud Dark Mode natively. If you notice any styling artifacts, ensure your browser is not overriding colors via third-party extensions.