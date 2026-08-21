# Privacy Policy

**Effective Date:** January 1, 2026  
**Last Updated:** January 1, 2026  
**Vendor:** Curiosity ("we", "us", or "our")  

---

## 1. Overview and Scope
Protecting your data and privacy is our highest priority. Curiosity operates in compliance with the General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679) and applicable European Union data protection laws.

This Privacy Policy applies to all cloud applications, add-ons, and services developed and published by Curiosity on the Atlassian Marketplace (collectively, the "Apps"), including **SBAM — Bulk Attachments for Jira (Download & Delete)**.

In this document, all data processed by you within an Atlassian Cloud product through our Apps is defined as **"Customer Data"**.

---

## 2. Controller and Contact Details (Art. 4 No. 7 GDPR)
For any questions regarding data protection or the exercise of your rights:

* **Vendor:** Curiosity
* **Location:** European Union / Poland
* **Support & Privacy Email:** support@curiosity-apps.com *(or your contact email)*
* **Support Portal:** [Curiosity Support](/support/)

---

## 3. Core Architecture: Zero External Storage & Zero Data Egress
Unlike traditional cloud add-ons, Curiosity Apps are built natively on the **Atlassian Forge platform** and run entirely on Atlassian's secure cloud infrastructure:

* **No Third-Party Analytics / Tracking:** We do not embed external tracking tools, telemetry services (e.g., Mixpanel, Google Analytics), or third-party error monitoring platforms (e.g., Sentry) that transmit data outside Atlassian.
* **In-Browser Processing:** All attachment stream handling, binary reading, and ZIP packaging occur purely on the client side inside the end-user's web browser session via Atlassian Bridge APIs (`requestJira`).
* **Tenant-Isolated Storage:** Configuration settings, user preferences, and virtual Trash Vault metadata are stored strictly in Atlassian Forge Key-Value Storage (`@forge/kvs`) within your own Atlassian Cloud instance.

---

## 4. Categories of Data Processed

### A. License and Account Information
License purchases, trials, billing, and tier validation are processed directly by Atlassian Marketplace. We receive only standard transaction metadata from Atlassian (e.g., customer account identifier, instance URL, license status, active user tier) to fulfill contract administration.

### B. Functional Operational Data
Our Apps temporarily access issue details and attachment metadata strictly required to perform the requested user actions (such as generating ZIP archives, displaying category pills, or filtering signature clutter). This data is processed in real time and is never persisted on external infrastructure.

### C. Configuration & Trash Catalog Data
Settings defined in the App (such as custom retention schedules or junk target extensions) are persisted exclusively in Atlassian Forge storage (`@forge/kvs`) within your tenant.

---

## 5. Legal Bases for Processing (GDPR Art. 6)
We process data in accordance with the following legal grounds:

* **Performance of a Contract (Art. 6(1)(b) GDPR):** Processing required to deliver the core functionality of the Apps in accordance with our EULA.
* **Legitimate Interests (Art. 6(1)(f) GDPR):** Processing required to maintain operational stability, ensure role-based security enforcement (3-Tier RBAC), and provide technical support.
* **Legal Obligation (Art. 6(1)(c) GDPR):** Compliance with statutory European and national retention laws where applicable.

---

## 6. Data Retention and Lifecycle
* **Active Installation:** Settings and virtual trash catalog entries remain in `@forge/kvs` for the duration of the app installation or until deleted by authorized users.
* **App Uninstallation:** Upon uninstallation of the App, all data hosted in the Forge environment is automatically scheduled for permanent deletion by Atlassian in accordance with Atlassian Cloud lifecycle policies (typically within 28 days).
* **Website Server Logs:** Our static documentation website processes standard HTTP request logs solely for server reliability and security, deleted within 30 days.

---

## 7. Your Rights under GDPR
As a data subject, you have the following rights:

1. **Right of Access (Art. 15 GDPR)**
2. **Right to Rectification (Art. 16 GDPR)**
3. **Right to Erasure / "Right to be Forgotten" (Art. 17 GDPR)**
4. **Right to Restriction of Processing (Art. 18 GDPR)**
5. **Right to Data Portability (Art. 20 GDPR)**
6. **Right to Object (Art. 21 GDPR)**

To exercise any of these rights, contact us at `support@curiosity-apps.com`. You also have the right to lodge a complaint with a competent Data Protection Supervisory Authority (e.g., the President of the Personal Data Protection Office / UODO in Poland or your local European DPA) [6, 7].