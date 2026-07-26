import pandas as pd

df = pd.read_parquet(
    "large_employees.parquet",
    columns=["name", "salary"]
)

print(df.head())

df.to_parquet(
    "large_employees.parquet",
    index=False
)

print("✅ Converted to Parquet")

high_salary = df[df["salary"] > 80000]

print(high_salary.head())


