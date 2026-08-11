import duckdb

result = duckdb.sql("""
SELECT 
    'sharif' AS Name,
    21 AS Age
""").df()
print(result)