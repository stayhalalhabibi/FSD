
import pandas as pd

data = {
    "employee_id":[1,2,3,4,5,6],

    "name":[
        "sharif",
        "waq",
        "sam",
        "pinky",
        "abhi",
        "saim"
        ],

        "dept": [
            "AI",
            "robo",
            "cse",
            "AI",
            "DS",
            "ML"
        ],
        "salary": [
            3000,
            4330,
            6504,
            6780,
            789,
            8900
        ]
}

employees_df = pd.DataFrame(data)

print(employees_df)

print("Employee total info")

employees_df.to_parquet(

    "A.pyemployees.parquet",

    index=False
)
print( "____________ ")
print("Employees.parquet")

loaded_df = pd.read_parquet(

    "employees.parquet"

)
print( "____________ ")
print(loaded_df)
print("loaded_df")



print("Slaary of the employees > 5k")
high_salary = loaded_df[
    loaded_df["salary"] > 5000
]
print( "____________ ")
print(high_salary)


print("average salary of the employees")
average_salary = loaded_df["salary"].mean()

print(average_salary)


print("department count")

print( "____________ ")

dept_count = loaded_df.groupby(

    "dept"

)["employee_id"].count()

print(dept_count)


print( "____________ ")
print("bonuds of the employees")
bonus = pd.read_parquet(

    "employees.parquet",

    columns=[
        "name",
        "salary"
    ]

)

print(bonus)