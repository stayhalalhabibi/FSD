import pandas as pd

data = {
    "employee_id": [1,2,3,4,5],
    "name": ["Sharif","Sam","Waq","Rahman","Abhi"],
    "department": ["IT","AI","HR","ML","DS"],
    "salary": [50000,45000,70000,60000,55000]
}

employees_df = pd.DataFrame(data)

employees_df.to_parquet(
    r"C:\Users\DELL G15\Desktop\FSD\FSD\Apache_Parquet\employees.parquet",
    index=False
)

print("Parquet file created successfully!")