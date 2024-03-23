FROM python:3.11-slim

WORKDIR /app

# Dependency installation
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the applciation code
COPY . .

# Comamnd to run the assitant application
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "8000"]
