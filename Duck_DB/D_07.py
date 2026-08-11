import duckdb   # "Load the DuckDB library so I can use its features."

# Create/Open database
connection = duckdb.connect("company.duckdb") # It stores the connection to the database. 

# Create employees table from Parquet
connection.execute("""
CREATE OR REPLACE TABLE employees AS
SELECT *
FROM read_parquet('employees.parquet')
""")

# Read the table
result = connection.execute("""
SELECT *
FROM employees
""").df()

# Display data
print(result)

# Close database
connection.close()



"""
kughkljklluilu
]LINE _01[
  Line 1
import duckdb
What is import?

import tells Python:

"Bring another library into my program."

Think of it like borrowing a toolbox.

Without import, Python doesn't know what DuckDB is.

What is duckdb?

DuckDB is a Python library that lets you:

Create databases
Create tables
Run SQL queries
Read Parquet files
Export data

So,

import duckdb

means:

"Load the DuckDB library so I can use its features."

]LINE _02 [
    Line 2
connection = duckdb.connect("company.duckdb")

This is one of the most important lines.

Let's split it.

connection
connection

This is a variable.

It stores the connection to the database.

Think of it like:

Connection

↓

Door

↓

Database
=

Assignment operator.

Means

Store the result

inside

connection
duckdb

We imported it earlier.

Now we're using it.

. (Dot Operator)

Means:

Access something inside DuckDB.

Example:

duckdb.connect()

means

Use the connect() function from the DuckDB library.

connect()

This function:

Opens a database
Creates it if it doesn't exist

If

company.duckdb

doesn't exist

↓

DuckDB creates it.

If it exists

↓

DuckDB opens it.

"company.duckdb"

This is the database filename.

After running the code, you'll see:

company.duckdb

inside your folder.

After this line

Memory looks like:

connection

↓

company.duckdb

Now Python can talk to the database.

]LINE _03 [
 Line 3
connection.execute(
execute()

Means

Run SQL commands.

Everything inside the triple quotes is SQL.

Triple Quotes


These allow multi-line strings.

Instead of

"SELECT * FROM employees"

you can write


SELECT *
FROM employees


Much cleaner.

SQL Part
CREATE OR REPLACE TABLE employees AS

Let's understand every word.

CREATE

Means

Make something new.
OR REPLACE

If the table already exists,

Delete it

↓

Create it again.

Without this, you'll get:

Table already exists
TABLE

Means

Create a table.

Exactly like Excel.

Example:

Employees
employees

Table name.

Now the database contains:

company.duckdb

↓

employees
AS

Means

Create the table using the following query.

Next SQL
SELECT *

Means

Select every column.

*

The star means

Everything

Instead of writing

SELECT employee_id,
name,
Department,
Salary,
City

we simply write

SELECT *
Next
FROM read_parquet('employees.parquet')

Let's split it.

FROM

Means

Take data from...

read_parquet()

DuckDB function.

It opens a Parquet file.

'employees.parquet'

The file name.

So

FROM read_parquet('employees.parquet')

means

Read all rows from employees.parquet.

Whole SQL
CREATE OR REPLACE TABLE employees AS

SELECT *

FROM read_parquet('employees.parquet')

Translation:

Create a table named employees

inside company.duckdb

using every record

from employees.parquet.
Next
result = connection.execute(
SELECT *
FROM employees
).df()

Again

Split it.

result

Variable.

Stores the output.

connection.execute()

Run SQL.

SQL
SELECT *
FROM employees

Meaning

Read everything

from the

employees

table.

Notice

There is NO

read_parquet()

Because

the data is already inside

company.duckdb
.df()

This is very important.

DuckDB normally returns its own result object.

.df() converts it into a

Pandas DataFrame.

Think:

DuckDB Result

↓

Pandas DataFrame

Now you can use Pandas functions like:

head()

tail()

describe()

mean()

groupby()
Next
print(result)

Displays the DataFrame on the screen.

Output:

employee_id

name

Department

Salary

City
Last Line
connection.close()

Means

Disconnect from the database.

Imagine:

Open Door

↓

Work

↓

Close Door

Always close the connection when finished.

Complete Flow
import duckdb
        │
        ▼
Load DuckDB library
        │
        ▼
Connect to company.duckdb
        │
        ▼
Run SQL
        │
        ▼
Read employees.parquet
        │
        ▼
Create employees table
        │
        ▼
Read employees table
        │
        ▼
Convert to Pandas DataFrame
        │
        ▼
Print output
        │
        ▼
Close database connection
]
"""