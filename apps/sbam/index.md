# SBAM — Overview & Quick Start

**Smart Bulk Attachment Manager (SBAM)** is an enterprise-grade Jira Cloud app designed to solve attachment clutter, streamline bulk downloads into structured ZIP archives, and provide safe attachment recovery via a virtual Trash Vault.

---

## Where to Find SBAM in Jira

SBAM provides two primary interfaces directly inside your Jira workspace:

### 1. Single Issue Panel ("Smart Attachments")
Located in the main content area of any Jira issue. It enables you to manage, rename, filter, and bulk-download attachments specific to that issue.

### 2. Global Cross-Project Navigator ("SBAM — Smart Attachment Manager")
Accessible from the Jira top navigation bar or the Issue Navigator actions menu. It allows you to search across multiple issues and projects using text filters or JQL queries, explore project folder hierarchies, and perform bulk multi-issue operations.

---

## 3-Minute Quick Start Guide

### Step 1: Filter Out Signature Clutter
Open any issue with attachments. If email-to-Jira integration added small logo images and social icons, ensure **Smart Anti-Junk Filter** is checked. SBAM automatically hides image files under 20 KB.

### Step 2: Organize by Category or Search
Click on the category pills (**PDF**, **Office**, **Images**, **Archives**, **Data**) to instantly filter files by extension, or type a keyword in the search bar.

### Step 3: Configure ZIP Folders & Download
In the bottom action bar:
* Check **Per-issue folder (`[ISSUE-KEY]/`)** to package files inside an issue-named directory in the ZIP.
* Check **Category subfolders** to sort files into `PDFs/`, `Office/`, `Images/`, etc.
* Click **Download Selected (.ZIP)**. The download starts immediately in your browser with zero server latency.

### Step 4: Soft-Delete with Trash Vault
Select files and click **Move to Trash**. Files are placed in the **Trash Vault** for safe keeping during the organization-defined retention window, protecting your team against accidental data loss.

---

## Next Steps
* [Read the Complete User Guide](/apps/sbam/features) to master single-issue and cross-project operations.
* [Explore the Administrator Guide](/apps/sbam/admin-guide) to configure retention schedules and RBAC permissions.