// Base API URL
const API_BASE_URL = "http://localhost:8000/admin"; // Update with your backend URL

// Utility function for API requests
async function apiRequest(endpoint, method = "GET", body = null) {
    const headers = { "Content-Type": "application/json" };
    const options = {
        method,
        headers,
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "API request failed");
        }
        return data;
    } catch (error) {
        console.error("API Error:", error.message);
        alert(`Error: ${error.message}`);
    }
}

// List all users
async function listUsers() {
    const users = await apiRequest("/users");
    console.log("Users:", users);
    // Display in UI
}

// Add a new user
async function addUser(userData) {
    const result = await apiRequest("/users", "POST", userData);
    console.log("User added:", result);
    // Refresh the user list or update UI
}

// Update an existing user
async function updateUser(userId, updateData) {
    const result = await apiRequest(`/users/${userId}`, "PUT", updateData);
    console.log("User updated:", result);
    // Refresh the user list or update UI
}

// Delete a user
async function deleteUser(userId) {
    const result = await apiRequest(`/users/${userId}`, "DELETE");
    console.log("User deleted:", result);
    // Refresh the user list or update UI
}

// List all departments
async function listDepartments() {
    const departments = await apiRequest("/departments");
    console.log("Departments:", departments);
    // Display in UI
}

// Add a new department
async function addDepartment(departmentName) {
    const result = await apiRequest("/departments", "POST", { D_name: departmentName });
    console.log("Department added:", result);
    // Refresh the department list or update UI
}

// Update a department
async function updateDepartment(departmentId, updateData) {
    const result = await apiRequest(`/departments/${departmentId}`, "PUT", updateData);
    console.log("Department updated:", result);
    // Refresh the department list or update UI
}

// Delete a department
async function deleteDepartment(departmentId) {
    const result = await apiRequest(`/departments/${departmentId}`, "DELETE");
    console.log("Department deleted:", result);
    // Refresh the department list or update UI
}

// List all appointments
async function listAppointments() {
    const appointments = await apiRequest("/appointments");
    console.log("Appointments:", appointments);
    // Display in UI
}

// Example usage
document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display users on page load
    listUsers();

    // Example: Add a new user
    const newUser = {
        employee_id: 12345,
        employee_name: "John",
        employee_surname: "Doe",
        employee_gender: "Male",
        employee_age: 30,
        employee_email: "john.doe@example.com",
        employee_role: "Developer",
        employee_contacts: "123-456-7890",
        Did: 1,
        employee_password: "securepassword",
    };
    addUser(newUser);

    // Example: List departments
    listDepartments();
});
