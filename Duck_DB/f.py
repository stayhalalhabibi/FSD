import duckdb

result = duckdb.sql("""
SELECT 
     10 + 20 AS total
""").df()
print(result)