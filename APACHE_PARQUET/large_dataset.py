import pandas as pd
import random

departments = ["IT", "HR", "Finance", "Marketing", "Sales"]

employees = []

for i in range(1, 10001):

    employees.append({

        "employee_id": i,
        "name": f"Employee_{i}",
        "department": random.choice(departments),
        "salary": random.randint(30000, 100000)

    })

df = pd.DataFrame(employees)

print(df.head())

df.to_csv("large_employees.csv", index=False)

print("\n✅ large_employees.csv created successfully!")