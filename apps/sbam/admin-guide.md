# SBAM — Administrator Guide

This guide covers organization-wide settings, retention schedules, and permission configurations for Jira Administrators.

---

## Accessing SBAM Settings

1. Navigate to **Jira Settings** (cog icon in the top right).
2. Select **Apps** → **SBAM Settings — Curiosity**.

---

## Configuration Options

### 1. Trash Retention Policy

Defines how many days deleted attachments remain in the virtual Trash Vault before being permanently erased from Jira Cloud storage.

* **Default:** `30 days`.
* **Range:** `0` to `9999 days`.
* **Immediate Purge Mode (`0 days`):** Bypasses the Trash Vault entirely. Attachments moved to trash are permanently deleted immediately via Jira REST APIs.
* **Perpetual Retention Mode (`9999 days`):** Disables automatic cleanup. Files remain in the Trash Vault indefinitely until manually purged by an administrator.

---

### 2. Schedule Recalibration Options

When an administrator changes the retention period, SBAM prompts with a policy resolution modal to determine how existing files in the Trash Vault should be handled:

#### If Decreasing Retention (e.g., 60 days → 14 days):
1. **Recalculate Schedule (Recommended):** Adjusts expiration dates to match the new 14-day limit. Files that already exceed 14 days receive a **24-hour grace period** before cleanup.
2. **Apply to New Deletions Only:** Preserves existing expiration dates for currently trashed files.
3. **Clean Up Overdue Files Now:** Immediately deletes any files older than the new retention threshold.

#### If Increasing Retention (e.g., 14 days → 90 days):
1. **Extend Expiration Dates (Recommended):** Extends all current files in the Trash Vault to the new 90-day schedule.
2. **Apply to New Deletions Only:** Applies the new schedule only to future deletions.

---

### 3. Permanent Deletion Permissions

* **Checkbox: Allow Project Administrators to permanently purge files in their projects**
  * **Disabled (Default):** Only Jira Global Administrators (`ADMINISTER`, `SYSTEM_ADMIN`) can execute permanent hard-deletion.
  * **Enabled:** Project Administrators (`ADMINISTER_PROJECTS`) can permanently delete attachments within issues belonging to their respective projects.

---

## Daily Scheduled Background Job

SBAM registers a daily scheduled trigger in Atlassian Forge:
* Runs automatically once every 24 hours.
* Scans the virtual trash catalog for items where `expiresAt <= now`.
* Executes concurrent, rate-limited permanent deletions using Jira REST APIs (`DELETE /rest/api/3/attachment/{id}`).
* Automatically removes purged records from `@forge/kvs`.