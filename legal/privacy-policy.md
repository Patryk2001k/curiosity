# Privacy Policy

**Effective Date:** January 1, 2026  
**Last Updated:** January 1, 2026  
**Vendor:** Curiosity ("we", "us", or "our")  

This Privacy Policy applies to all Atlassian Cloud applications, add-ons, and services developed and published by Curiosity on the Atlassian Marketplace (collectively, the "Apps"), including but not limited to **SBAM — Bulk Attachments for Jira (Download & Delete)**.

---

## 1. Zero External Storage Architecture
Curiosity builds cloud-native applications exclusively on the Atlassian Forge platform. 

* **No External Servers:** We do not operate external web servers, databases, or cloud storage instances.
* **No Data Egress:** Your Jira issue contents, metadata, user details, and attachment binaries never leave the official Atlassian Cloud environment or the user's browser session.

---

## 2. Information Processing and Storage

### A. Attachment Files and Binaries
* All file processing, binary stream fetching, and ZIP compression occur client-side within the end-user's web browser session (using JSZip via Atlassian Bridge APIs).
* Attachment binaries are never uploaded to, stored on, or inspected by third-party systems.

### B. Application Preferences and Trash Catalog
* User preferences (e.g., target file extension filters) and virtual Trash Vault records are stored exclusively in Atlassian Forge Key-Value Storage (`@forge/kvs`).
* Storage is strictly partitioned within your own Atlassian Cloud tenant and is inaccessible to any other tenant or third party.

---

## 3. Security and Permission Schemes
All API requests to Jira REST endpoints are executed strictly under the authenticated user's logged-in security context (`api.asUser()` and `requestJira()`). Native Jira permission schemes and project boundaries are strictly enforced.

---

## 4. Third-Party Analytics and Telemetry
Curiosity applications do not embed third-party tracking pixels, analytics SDKs, advertising frameworks, or user behavior trackers.

---

## 5. GDPR and Data Subject Rights
Under the General Data Protection Regulation (GDPR), Curiosity acts as a Data Processor operating purely within the Atlassian Forge ecosystem. Data stored in `@forge/kvs` is automatically erased when retention schedules expire or when the application is uninstalled.

---

## 6. Contact Information
For inquiries regarding this Privacy Policy, please reach out via our [Support Portal](/support/).