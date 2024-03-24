from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
from .llama_model import generate_response, load_model
from functools import lru_cache

<<<<<<< HEAD
# Create FastAPI instance
=======
"""
This endpoint is for manually finetuned model from huggingface.
Due to limited resources, we will use Poe API instead of local finetuned model

"""

>>>>>>> refs/remotes/origin/main
app = FastAPI()

# Global Variable for bootstrapping our model ons tartup
pipe = None

# Load Model at startup
def load_model_at_startup():
    global pipe
    pipe = load_model()

# call the function to load the model at startup
load_model_at_startup()


# Define the request body
class ChatRequest(BaseModel):
    msg: str

# Define the endpoint
@app.post("/chat/")
async def respond(request_body: ChatRequest, background_tasks: BackgroundTasks):
    try:
        question = request_body.msg
        # Background task for caching
        background_tasks.add_task(cache_question, question)
        response = generate_response(question, pipe)
        return {"response": response, "msg": question}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@lru_cache(maxsize=256)
def cache_question(question: str):
    pass