# util.py
import json
from rapidfuzz import fuzz, process
import time
import threading
import random

# Global variables
questions = []
qa_map = {}

# Load dataset
def prepare_data():
    global questions, qa_map
    with open("dataset.json") as f:
        data = json.load(f)

    questions = [item["question"] for item in data]
    qa_map = {item["question"]: item["answer"] for item in data}

# Call this once on startup
prepare_data()

# Retrieve the closest matching answer
def get_answer(user_query, threshold=75):
    """
    Returns the best matching answer as a string.
    """
    match, score, _ = process.extractOne(
        user_query, questions, scorer=fuzz.token_sort_ratio
    )
    if score >= threshold:
        return qa_map.get(match, "I don’t have that information yet.")
    else:
        return "I don’t know the answer to that yet."

# Stream the answer in small chunks for frontend
def get_answer_stream(user_query, chunk_size=10, delay=0.02):
    """
    Streams the retrieved answer in small chunks with optional delay.
    Useful for a typing effect on the frontend.
    """
    answer = get_answer(user_query)

    for i in range(0, len(answer), chunk_size):
        chunk = answer[i:i+chunk_size]
        yield chunk
        time.sleep(random.uniform(0.03, 0.10))

threading.Thread(target=prepare_data).start()

if __name__ == "__main__":
    time.sleep(10)
    # for token in get_answer("Where did Marcus go to college?"):
    #     print(token)
    # get_answer("Where did Marcus go to college?")