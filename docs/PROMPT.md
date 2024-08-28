### **Welcome to the Garden Planner Project**

#### **Project Overview**
Welcome to the Garden Planner project, a comprehensive application designed to help users plan, manage, and track their gardening activities. Our goal is to create an intuitive, feature-rich platform that promotes sustainable gardening practices while providing tools for effective garden management.

As a new contributor, your role is crucial in helping us achieve these goals. This document will guide you through the essential resources you need to understand the project’s scope, your specific tasks, and how to effectively contribute.

#### **Essential Resources**
Before you begin, it’s important to familiarize yourself with the following key documents:

1. **[Project Overview](https://github.com/harisbabic/GardenPlanner/blob/master/docs/PROJECT_OVERVIEW.md)**: Provides a high-level summary of the project, including objectives, key stakeholders, and major milestones.

2. **[Comprehensive Plan](https://github.com/harisbabic/GardenPlanner/blob/master/docs/COMPREHENSIVE_PLAN.md)**: Details the overall strategy for the project, covering timelines, dependencies, and resource allocations.

3. **[Development Guidelines](https://github.com/harisbabic/GardenPlanner/blob/master/docs/DEVELOPMENT_GUIDELINES.md)**: Outlines coding standards, best practices, and processes that ensure consistency and quality across all contributions.

4. **[Garden Planning](https://github.com/harisbabic/GardenPlanner/blob/master/docs/GARDEN_PLANNING.md)**: Describes the specific strategies and methodologies for garden planning within the application.

5. **[Database Schema](https://github.com/harisbabic/GardenPlanner/blob/master/docs/GARDEN_PLANNER_DB.md)**: Provides an overview of the database schema, detailing the structure and relationships between different tables.

6. **[Task Management](https://github.com/harisbabic/GardenPlanner/blob/master/docs/TASK.md)**: A master guide for onboarding, it walks you through the critical paths and next steps, ensuring you’re aligned with the project’s current status.

7. **[Thread Handoff](https://github.com/harisbabic/GardenPlanner/blob/master/docs/THREAD_HANDOFF.md)**: Standardizes the process of handing off project threads, ensuring smooth transitions and continuity.

#### **Your First Task: Implementing the User Management Module**

**Objective**: Your first task is to help implement the User Management module. This module handles user authentication, roles, and permissions. It’s a foundational component that other parts of the project will rely on.

**Task Steps**:
1. **Review the Database Schema**: Start by reviewing the [Garden Planner Database Schema](https://github.com/harisbabic/GardenPlanner/blob/master/docs/GARDEN_PLANNER_DB.md) to understand the existing structure, especially the `users`, `roles`, and `permissions` tables.

2. **Understand the Requirements**: Go through the [Development Guidelines](https://github.com/harisbabic/GardenPlanner/blob/master/docs/DEVELOPMENT_GUIDELINES.md) to align your work with the project’s coding standards and best practices.

3. **Design and Implement API Endpoints**:
   - **Register User**: Create an endpoint that allows new users to register by providing a username, email, and password.
   - **Login**: Implement a login endpoint that verifies credentials and issues a JWT token for session management.
   - **Role Assignment**: Develop functionality that assigns roles to users based on predefined criteria.
   - **Access Control**: Ensure that each role has the appropriate permissions, controlling access to various parts of the application.

4. **Testing**: Write unit tests for each endpoint to ensure they work as expected. Ensure your tests meet the criteria outlined in the [Testing Guidelines](https://github.com/harisbabic/GardenPlanner/blob/master/docs/DEVELOPMENT_GUIDELINES.md).

5. **Document Your Work**: After implementation, document the API endpoints and any decisions made in the process. Update the [Thread Handoff](https://github.com/harisbabic/GardenPlanner/blob/master/docs/THREAD_HANDOFF.md) document with details about your work to ensure the next contributor can pick up where you left off.

#### **Communication and Support**
If you have any questions or need clarification, please reach out to the project lead or other team members listed in the [Contact Information](https://github.com/harisbabic/GardenPlanner/blob/master/docs/THREAD_HANDOFF.md) section. Effective communication is key to our success.

---

### **Conclusion**
By following this guide, you’ll be able to contribute effectively to the Garden Planner project while ensuring that your work aligns with the overall project goals. We’re excited to have you on board and look forward to your contributions!
