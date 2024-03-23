from fastapi import FastAPI, HTTPException, BackgroundTasks
from .model import generate_response, load_model
from functools import lru_cache

app = FastAPI()

# Global Variable for bootstrapping our model ons tartup
pipe = None

# Load Model at startup
def load_model_at_startup():
    global pipe
    pipe = load_model()

load_model_at_startup()

# Define the endpoint
@app.post("/chat/")
async def generate_response(question: str, background_tasks: BackgroundTasks):
    # Background task for caching
    background_tasks.add_task(cache_question, question)
    response = generate_response(question, pipe)
    return {"response": response}

@lru_cache(maxsize=256)
def cache_question(question: str):
    pass