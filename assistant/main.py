from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from poe_model import PoeApiModel
import asyncio

app = FastAPI()
poe_api_model = PoeApiModel()

class Message(BaseModel):
    msg: str

@app.on_event("startup")
async def startup_event():
    await poe_api_model.create_client()

@app.post("/chat")
async def ask_question(message: Message):
    try:
        answer = await poe_api_model.send_message(bot="BotWBIX9D9R75", message=message.msg)
        return {"response": answer, "msg": msg}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)