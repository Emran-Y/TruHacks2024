from transformers import pipeline
import torch
from functools import lru_cache

# Load the model
@lru_cache(maxsize=1)
def load_model():
    return pipeline("text-generation", model="TinyLlama/TinyLlama-1.1B-Chat-v1.0", torch_dtype=torch.bfloat16, device_map="auto")

def format_msg(question, context=None):
    name = "Bekalu"
    developers = "Munim, Abraham, and Emran"
    purpose = "Contributing to UN Sustainable Development Goal #4 Quality Education."
    ROLE = f"You are a friendly chatbot who helps user discover books of various topics. Your name is {name}. You are developed by {developers} for {purpose}"

    message = [
      {
          "role": "system",
          "content": ROLE,
      },
      {"role": "user", "content": f"{question}"},
    ]

    return message

def generate_response(question, pipe, context=None):
    message = format_msg(question, context)
    prompt = pipe.tokenizer.apply_chat_template(message, tokenize=False, add_generation_prompt=True)
    outputs = pipe(prompt, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
    response =  outputs[0]["generated_text"].split("<|assistant|>\n")[-1].strip()
    return response
