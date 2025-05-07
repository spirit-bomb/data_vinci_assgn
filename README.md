# Campaign Analytics Dashboard


## Prerequisites

- Node.js (>=18)
- Python (>=3.9)
- Git
- SQLite3
- (Optional but recommended) Python Virtual Environment

---

## Running Locally

### 1. Backend (FastAPI)

> Navigate to the backend directory:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
### 2. Frontend (Next.js)

> Navigate to the frontend directory:

```bash
cd frontend
npm install
NEXT_PUBLIC_API_URL=http://localhost:8000
npm run dev
```
