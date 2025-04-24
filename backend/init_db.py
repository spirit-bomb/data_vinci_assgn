import sqlite3

sql_script = """
DROP TABLE IF EXISTS campaigns;

CREATE TABLE campaigns (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    status TEXT CHECK(status IN ('Active', 'Paused')),
    clicks INTEGER,
    cost REAL,
    impressions INTEGER
);

INSERT INTO campaigns (id, name, status, clicks, cost, impressions) VALUES
(1, 'Summer Sale', 'Active', 150, 45.99, 1000),
(2, 'Black Friday', 'Paused', 320, 89.50, 2500),
(3, 'Christmas', 'Active', 100, 50.99, 1300),
(4, 'Spring Deals', 'Paused', 110, 40.11, 1900),
(5, 'New Year', 'Active', 220, 27.00, 800),
(6, 'Anime special', 'Paused', 300, 75.00, 2200),
(7, 'Football merchandise', 'Active', 370, 55.80, 1700),
(8, 'Cricket special', 'Paused', 290, 90.00, 1900),
(9, 'Holiday Deals', 'Active', 185, 105.00, 2300),
(10, 'Exam specials', 'Paused', 130, 45.00, 800);
"""

conn = sqlite3.connect("campaigns.db")
cursor = conn.cursor()
cursor.executescript(sql_script)
conn.commit()
conn.close()

print("Database created")
