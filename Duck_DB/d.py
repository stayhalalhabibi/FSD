import duckdb
result = duckdb.sql("SELECT 500").df()
print(result)