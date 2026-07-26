import pandas as pd

# -----------------------------
# Task 1: Create a DataFrame
# -----------------------------

data = {
    "employee_id": [1, 2, 3, 4, 5],
    "name": ["Asha", "Rahul", "Neha", "Vikram", "Priya"],
    "department": ["IT", "HR", "IT", "Finance", "HR"],
    "salary": [60000, 45000, 70000, 55000, 48000]
}

employees_df = pd.DataFrame(data)

print("========== Employee Data ==========")
print(employees_df)

# -----------------------------
# Task 2: Save as Parquet
# -----------------------------

employees_df.to_parquet(
    "employees.parquet",
    index=False
)

print("\n✅ employees.parquet created successfully!")

# -----------------------------
# Task 3: Read Parquet File
# -----------------------------

loaded_df = pd.read_parquet("employees.parquet")

print("\n========== Reading employees.parquet ==========")
print(loaded_df)

# -----------------------------
# Task 4.1
# Employees with salary > 50000
# -----------------------------

high_salary = loaded_df[loaded_df["salary"] > 50000]

print("\n========== Employees with Salary > 50000 ==========")
print(high_salary)

# -----------------------------
# Task 4.2
# Average Salary
# -----------------------------

average_salary = loaded_df["salary"].mean()

print("\nAverage Salary =", average_salary)

# -----------------------------
# Task 4.3
# Employees in each department
# -----------------------------

department_count = loaded_df.groupby("department")["employee_id"].count()

print("\n========== Employees in Each Department ==========")
print(department_count)

# -----------------------------
# Task 5
# Save Filtered Data
# -----------------------------

high_salary.to_parquet(
    "high_salary_employees.parquet",
    index=False
)

print("\n✅ high_salary_employees.parquet created successfully!")

# -----------------------------
# Bonus Task
# Read only name and salary
# -----------------------------

bonus_df = pd.read_parquet(
    "employees.parquet",
    columns=["name", "salary"]
)

print("\n========== Bonus Task ==========")
print(bonus_df)