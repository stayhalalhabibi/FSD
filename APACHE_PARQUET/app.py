import pandas as pd

df = pd.read_csv("Emp.csv")

print(df)

department = df.groupby("Department")

print(department)

print(df.groupby("Department")["Salary"].mean())

print(df.groupby("Department")["Salary"].max())

print(df.groupby("Department")["Salary"].min())

print(df.groupby("Department")["Salary"].sum())

print(df.groupby("Department")["Salary"].count())