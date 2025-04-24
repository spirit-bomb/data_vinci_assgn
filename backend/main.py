from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

@app.get("/campaigns")
def getCampaigns():
    conn = sqlite3.connect("campaigns.db")
    cursor = conn.cursor()
    rows = cursor.execute("SELECT * FROM campaigns").fetchall()
    columns = [desc[0] for desc in cursor.description]
    campaigns = [dict(zip(columns, row)) for row in rows]
    conn.close()
    return campaigns
