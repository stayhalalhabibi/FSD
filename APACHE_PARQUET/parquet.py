import os

files = [
    "students.csv",
    "students_snappy.parquet",
    "students_gzip.parquet",
    "students_brotli.parquet",
    "students_zstd.parquet"
]

for file in files:
    print(file, ":", os.path.getsize(file), "bytes")