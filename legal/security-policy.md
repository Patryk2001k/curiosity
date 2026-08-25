# Security Policy

**Effective Date:** January 1, 2026  
**Last Updated:** August 25, 2026  
**Vendor:** Curiosity  

Curiosity is committed to delivering secure, resilient, and enterprise-ready cloud applications for the Atlassian ecosystem. This Security Policy outlines our security architecture, data handling practices, and vulnerability management standards for **SBAM — Smart Bulk Attachments (Download, Delete & Trash)** and all Curiosity apps.

---

## 1. Cloud-Native Architecture (Atlassian Forge)
Curiosity applications are built exclusively on the **Atlassian Forge platform** and execute entirely within Atlassian's secure cloud infrastructure:

* **Zero External Servers:** We do not operate external web servers, databases, or third-party cloud infrastructure (e.g., AWS, Heroku).
* **Zero Data Egress:** Issue data, attachments, and user metadata never leave the official Atlassian Cloud environment or the user's web browser session.
* **Serverless Execution:** Compute functions run in isolated, stateless containers managed and secured by Atlassian.

---

## 2. Data Storage and Tenant Isolation
* **Storage Location:** Application configurations and virtual Trash Vault metadata are stored strictly in Atlassian Forge Key-Value Storage (`@forge/kvs`).
* **Tenant Isolation:** All data stored in `@forge/kvs` is strictly partitioned within your own Atlassian Cloud tenant and cannot be accessed by any other organization or third party.
* **In-Browser File Processing:** All binary file streaming and ZIP compression (`JSZip`) execute client-side in the end-user's browser memory. File binaries are never persisted on external storage.

---

## 3. Encryption and Network Security
* **Data in Transit:** All network communication between the user's browser, the Forge backend, and Jira REST APIs is encrypted using TLS 1.2/1.3 with strong cipher suites over HTTPS.
* **Authentication and Permissions:** All Jira API requests are executed under the authenticated user's logged-in security context via `api.asUser()` and `@forge/bridge`. Native Jira project permissions and role-based access controls (RBAC) are strictly enforced.

---

## 4. Vulnerability Management and Reporting
We take the security of our applications seriously and encourage responsible reporting of any security concerns.

### How to Report a Vulnerability:
If you discover a potential security vulnerability in any Curiosity app, please report it directly to our security team:

* **Security Contact Email:** `curiosity@curiosity-support.atlassian.net`
* **Support Portal:** [Curiosity Help Center](https://curiosity-support.atlassian.net/servicedesk/customer/portals)

### Response SLA:
* **Initial Acknowledgment:** Within 24 business hours.
* **Severity Assessment & Remediation:** Critical vulnerabilities are prioritized for immediate patching within Atlassian Forge CI/CD deployment pipelines.

---

## 5. Third-Party Tracking and Analytics
Curiosity applications contain **zero third-party tracking scripts, analytics SDKs, or external error-monitoring tools** (such as Sentry, Mixpanel, or Google Analytics). We do not collect or monetize user telemetry.