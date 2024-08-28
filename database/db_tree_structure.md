Tree structure representing the relationships between some of the database tables:

```plaintext
Users
├── User_Roles
│   └── Roles
│       └── Role_Permissions
│           └── Permissions
├── Gardens
│   ├── Plants
│   │   └── Scheduling
│   │       ├── Tasks
│   │       └── Reminders
│   └── Tasks
│       └── Scheduling
│           └── Reminders
├── Tasks
│   └── Scheduling
│       └── Reminders
├── Reports
├── Invoices
│   ├── Payments
│   └── Clients (related but not directly mentioned in the schema)
├── Security_Access
│   └── Roles (from User_Roles table)
├── Audit_Logs
├── API_Keys
└── Notifications
```

### **Explanation:**

- **Users Table:** The root of the tree, representing the main entity that branches out to different related tables.
- **User_Roles and Roles:** The connection between users and their roles, which further connects to permissions via `Role_Permissions`.
- **Gardens and Related Tables:** Gardens are linked to plants, which in turn are connected to scheduling, tasks, and reminders.
- **Tasks Table:** Tasks are connected to scheduling and reminders, and tasks themselves are also directly connected to the users.
- **Invoices and Payments:** Invoices are linked to payments, with the potential for clients being involved.
- **Security, Audit, API, and Notifications:** Additional tables that manage security, logging, API keys, and user notifications.

This structure should help visualize how the database tables relate to one another in a clear, directory-like format.
