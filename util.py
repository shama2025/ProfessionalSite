from rapidfuzz import fuzz, process
import json
import threading
import time
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

model_id = "HuggingFaceTB/SmolLM3-3B-Base"
questions = ""
qa_map = ""
tokenizer = ""
model = ""

def stream_inference(prompt):
    # Encode input
    inputs = tokenizer(prompt, return_tensors="pt")
    input_ids = inputs["input_ids"]
    attention_mask = inputs["attention_mask"]

    # Generate full output
    outputs = model.generate(
        input_ids=input_ids,
        attention_mask=attention_mask,
        max_new_tokens=50,
        do_sample=True,
        pad_token_id=tokenizer.eos_token_id
    )

    for i in range(1, outputs.shape[1]):
        token_id = outputs[:, i]
        text = tokenizer.decode(token_id, skip_special_tokens=True)
        print(text, end="", flush=True)
    print()

def prepare_data():
    global questions
    global qa_map
    global model
    global tokenizer
    with open("dataset.json") as f:
        data = json.load(f)

    questions = [item["question"] for item in data]
    qa_map = {item["question"]: item["answer"] for item in data}

    model = AutoModelForSeq2SeqLM.from_pretrained(model_id)
    tokenizer = AutoTokenizer.from_pretrained(model_id)
    print("Questions: ", questions)
    print("Map: ", qa_map)

def get_answer(user_query, threshold=75):
    match, score, _ = process.extractOne(
        user_query,
        questions,
        scorer=fuzz.token_sort_ratio
    )
    if score >= threshold:
        answer = qa_map.get(match) or "I don’t have that information yet."
        # Stream the answer
        stream_inference(answer)
        return answer
    else:
        print("I don’t know the answer to that yet.")
        return None

# Load model/data in a separate thread
threading.Thread(target=prepare_data).start()

if __name__ == "__main__":
    time.sleep(10)
    get_answer("Where did Marcus go to college?")
