# Garden Planner Database Schema

This document details the database schema for the Garden Planner project. The schema has been designed to be scalable, secure, and flexible, allowing for future expansions and optimizations. Below are the tables, their relationships, and key design considerations.

---

## **1. Users Table**
- **Purpose:** Manage users who interact with the system.
- **Table Name:** `users`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique user identifier.   |
| `username`    | `VARCHAR(255)` | Unique username for the user.     |
| `email`       | `VARCHAR(255)` | Email address of the user, unique. |
| `password`    | `TEXT`     | Hashed password (use bcrypt/Argon2).  |
| `created_at`  | `TIMESTAMP`| Date and time the user was created.    |
| `updated_at`  | `TIMESTAMP`| Date and time the user was last updated.|

---

## **2. Roles Table**
- **Purpose:** Define roles within the system for access control.
- **Table Name:** `roles`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique role identifier.   |
| `role_name`   | `VARCHAR(50)` | Name of the role (e.g., Admin).    |
| `created_at`  | `TIMESTAMP`| Date and time the role was created.    |
| `updated_at`  | `TIMESTAMP`| Date and time the role was last updated.|

---

## **3. Permissions Table**
- **Purpose:** Define specific permissions that can be granted to roles.
- **Table Name:** `permissions`

| Field Name      | Data Type  | Description                            |
|-----------------|------------|----------------------------------------|
| `id`            | `SERIAL`   | Primary key, unique permission identifier. |
| `permission_name` | `VARCHAR(100)` | Name of the permission.          |
| `category`      | `VARCHAR(100)` | (Optional) Permission category.  |
| `created_at`    | `TIMESTAMP`| Date and time the permission was created. |
| `updated_at`    | `TIMESTAMP`| Date and time the permission was last updated.|

---

## **4. Role-Permission Junction Table**
- **Purpose:** Manage the many-to-many relationship between roles and permissions.
- **Table Name:** `role_permissions`

| Field Name      | Data Type  | Description                            |
|-----------------|------------|----------------------------------------|
| `role_id`       | `INTEGER`  | Foreign key, references `roles(id)`.   |
| `permission_id` | `INTEGER`  | Foreign key, references `permissions(id)`. |
| `created_at`    | `TIMESTAMP`| Date and time the role-permission relationship was created. |
| `PRIMARY KEY`   | `(role_id, permission_id)` | Composite primary key. |

---

## **5. User-Roles Junction Table**
- **Purpose:** Manage the many-to-many relationship between users and roles.
- **Table Name:** `user_roles`

| Field Name      | Data Type  | Description                            |
|-----------------|------------|----------------------------------------|
| `user_id`       | `INTEGER`  | Foreign key, references `users(id)`.   |
| `role_id`       | `INTEGER`  | Foreign key, references `roles(id)`.   |
| `created_at`    | `TIMESTAMP`| Date and time the user-role relationship was created. |
| `PRIMARY KEY`   | `(user_id, role_id)` | Composite primary key. |

---

## **6. Gardens Table**
- **Purpose:** Manage gardens associated with users.
- **Table Name:** `gardens`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique garden identifier. |
| `user_id`     | `INTEGER`  | Foreign key, references `users(id)`.   |
| `name`        | `VARCHAR(255)` | Name of the garden.                |
| `created_at`  | `TIMESTAMP`| Date and time the garden was created.  |
| `updated_at`  | `TIMESTAMP`| Date and time the garden was last updated. |
| `UNIQUE`      | `(user_id, name)` | Ensure garden names are unique per user. |

---

## **7. Plants Table**
- **Purpose:** Manage plants within gardens.
- **Table Name:** `plants`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique plant identifier.  |
| `garden_id`   | `INTEGER`  | Foreign key, references `gardens(id)`. |
| `name`        | `VARCHAR(255)` | Name of the plant.                |
| `species`     | `VARCHAR(255)` | Species of the plant.             |
| `planting_date` | `DATE`   | Date the plant was planted.            |
| `attributes`  | `JSONB`    | Flexible storage for plant attributes. |
| `created_at`  | `TIMESTAMP`| Date and time the plant was created.   |
| `updated_at`  | `TIMESTAMP`| Date and time the plant was last updated. |

---

## **8. Tasks Table**
- **Purpose:** Manage tasks associated with gardens and plants.
- **Table Name:** `tasks`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique task identifier.   |
| `garden_id`   | `INTEGER`  | Foreign key, references `gardens(id)`. |
| `task_type`   | `VARCHAR(100)` | Type of task (e.g., Watering).    |
| `description` | `TEXT`     | Description of the task.               |
| `scheduled_start` | `TIMESTAMP` | (Optional) Scheduled start time. |
| `scheduled_end` | `TIMESTAMP` | (Optional) Scheduled end time.    |
| `completed`   | `BOOLEAN`  | Whether the task has been completed.   |
| `created_at`  | `TIMESTAMP`| Date and time the task was created.    |
| `updated_at`  | `TIMESTAMP`| Date and time the task was last updated. |

---

## **9. Scheduling Table**
- **Purpose:** Manage task scheduling for plants.
- **Table Name:** `scheduling`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique schedule identifier. |
| `user_id`     | `INTEGER`  | Foreign key, references `users(id)`.   |
| `plant_id`    | `INTEGER`  | Foreign key, references `plants(id)`.  |
| `task_id`     | `INTEGER`  | Foreign key, references `tasks(id)`.   |
| `frequency`   | `VARCHAR(50)` | Frequency of the task (e.g., Daily). |
| `start_time`  | `TIME`     | Start time of the task.                |
| `start_date`  | `DATE`     | Start date of the task.                |
| `end_date`    | `DATE`     | (Optional) End date of the task.       |
| `active`      | `BOOLEAN`  | Whether the schedule is currently active. |
| `created_at`  | `TIMESTAMP`| Date and time the schedule was created. |
| `updated_at`  | `TIMESTAMP`| Date and time the schedule was last updated. |

---

## **10. Reminders Table**
- **Purpose:** Manage reminders for tasks and events.
- **Table Name:** `reminders`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique reminder identifier. |
| `user_id`     | `INTEGER`  | Foreign key, references `users(id)`.   |
| `task_id`     | `INTEGER`  | Foreign key, references `tasks(id)`.   |
| `reminder_date` | `TIMESTAMP` | Date and time the reminder triggers. |
| `message`     | `TEXT`     | Message to be displayed with the reminder. |
| `sent`        | `BOOLEAN`  | Whether the reminder has been sent.    |
| `created_at`  | `TIMESTAMP`| Date and time the reminder was created. |
| `updated_at`  | `TIMESTAMP`| Date and time the reminder was last updated. |

---

## **11. Reports Table**
- **Purpose:** Store generated reports based on garden activities.
- **Table Name:** `reports`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique report identifier. |
| `user_id`     | `INTEGER`  | Foreign key, references `users(id)`.   |
| `report_type` | `VARCHAR(100)` | Type of report (e.g., Monthly).   |
| `content`     | `JSONB`    | Content of the report in JSON format.  |
| `created_at`  | `TIMESTAMP`| Date and time the report was created.  |
| `updated_at`  | `TIMESTAMP`| Date and time the report was last updated. |

---

## **12. Financial Management Tables**

### **Invoices Table**
- **Purpose:** Manage invoices for services rendered.
- **Table Name:** `invoices`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique invoice identifier. |
| `user_id`     | `INTEGER`  | Foreign key, references `users(id)`.   |
| `client_id`   | `INTEGER`  | Foreign key, references `clients(id)`. |
| `amount`      | `DECIMAL(10, 2)` | Amount due on the invoice.      |
| `status`      | `VARCHAR(50)` | Status of the invoice (e.g., Paid). |
| `due_date`    | `DATE`     | Due date for the payment.              |
| `paid_date`   | `DATE`     | Date the payment was made.             |
| `created_at`  | `TIMESTAMP`| Date and time the invoice was created. |
| `updated_at`  | `TIMESTAMP`| Date and time the invoice was last updated. |

### **Payments Table**
- **Purpose:** Manage payments made towards invoices.
- **Table Name:** `payments`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique payment identifier. |
| `invoice_id`  | `INTEGER`  | Foreign key, references `invoices(id)`. |
| `payment_date` | `TIMESTAMP` | Date and time the payment was made.  |
| `amount`      | `DECIMAL(10, 2)` | Amount paid.                     |
| `payment_method` | `VARCHAR(50)` | Payment method used.           |
| `created_at`  | `TIMESTAMP`| Date and time the payment was created. |
| `updated_at`  | `TIMESTAMP`| Date and time the payment was last updated. |

---

## **13. Security Access Table**
- **Purpose:** Manage security access for users.
- **Table Name:** `security_access`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique access identifier. |
| `user_id`     | `INTEGER`  | Foreign key, references `users(id)`.   |
| `role_id`     | `INTEGER`  | Foreign key, references `roles(id)`.   |
| `permissions` | `TEXT`     | Permissions granted to the user.       |
| `created_at`  | `TIMESTAMP`| Date and time the access was granted.  |
| `updated_at`  | `TIMESTAMP`| Date and time the access was last updated. |

---

## **14. Audit Logs Table**
- **Purpose:** Track changes and actions within the system.
- **Table Name:** `audit_logs`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique log identifier.    |
| `user_id`     | `INTEGER`  | Foreign key, references `users(id)`.   |
| `table_name`  | `VARCHAR(255)` | Name of the table affected.        |
| `action`      | `VARCHAR(50)` | Type of action (e.g., INSERT).     |
| `description` | `TEXT`     | Detailed description of the action.   |
| `changed_at`  | `TIMESTAMP`| Date and time the change was made.     |
| `ip_address`  | `INET`     | IP address of the user performing the action. |
| `session_id`  | `UUID`     | Session ID associated with the action. |
| `created_at`  | `TIMESTAMP`| Date and time the log entry was created. |

---

## **15. API Keys Table**
- **Purpose:** Manage API keys for external services.
- **Table Name:** `api_keys`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique API key identifier. |
| `user_id`     | `INTEGER`  | Foreign key, references `users(id)`.   |
| `service_name` | `VARCHAR(255)` | Name of the external service.    |
| `api_key`     | `TEXT`     | Hashed API key.                        |
| `created_at`  | `TIMESTAMP`| Date and time the API key was created. |
| `updated_at`  | `TIMESTAMP`| Date and time the API key was last updated. |
| `expires_at`  | `TIMESTAMP`| (Optional) Expiration date for the API key. |
| `usage_count` | `INTEGER`  | (Optional) Track the number of times the API key is used. |

---

## **16. Notifications Table**
- **Purpose:** Manage notifications for users about tasks, payments, etc.
- **Table Name:** `notifications`

| Field Name    | Data Type  | Description                            |
|---------------|------------|----------------------------------------|
| `id`          | `SERIAL`   | Primary key, unique notification identifier. |
| `user_id`     | `INTEGER`  | Foreign key, references `users(id)`.   |
| `type`        | `VARCHAR(100)` | Type of notification (e.g., Task). |
| `message`     | `TEXT`     | Notification message.                  |
| `read`        | `BOOLEAN`  | Whether the notification has been read. |
| `created_at`  | `TIMESTAMP`| Date and time the notification was created. |
| `updated_at`  | `TIMESTAMP`| Date and time the notification was last updated. |

---

### **Summary**

This updated database schema for the Garden Planner project integrates tables for managing users, gardens, plants, tasks, scheduling, reminders, reports, analytics, financial management, security, and more. The schema is designed to be scalable, secure, and flexible, allowing for future expansions such as API integration, advanced reporting, and audit logging. This robust structure supports the project's goals of providing valuable gardening insights while enabling potential monetization through client and financial management features.
