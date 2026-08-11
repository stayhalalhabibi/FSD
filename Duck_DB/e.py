import duckdb
result = duckdb.sql("""
SELECT
    'sharif' AS Name,
    'DS' AS course
""").df()
print(result)