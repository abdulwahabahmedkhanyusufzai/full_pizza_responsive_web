from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow your Vite Frontend (running on port 5173) to talk to this Backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Your Vite URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello from your AI Backend!"}

@app.get("/api/menu")
def get_menu():
    # In the future, this comes from PostgreSQL
    return [
        {"id": 1, "name": "Pepperoni", "price": 15, "ai_score": "High Demand"},
        {"id": 2, "name": "Veggie", "price": 12, "ai_score": "Low Waste Risk"}
    ]