import duckdb

result = duckdb.sql("SELECT 100").df()    #Give me 100  df() = convert sql result -> pandas DataFrame 

print(result)     # 100     ./ 0 100

# FLOW DIAGRAM = .py -> Duck DB -> SQL -> DataFrame -> print