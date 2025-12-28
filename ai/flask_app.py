from flask import Flask, Response, request
from flask_cors import CORS
from ai.util import get_answer_stream

app = Flask(__name__)
CORS(app)

# API endpoint
@app.route("/ai",methods=['POST'])
def generate_response():
    data = request.get_json()
    query = data.get("query")
    return Response(get_answer_stream(query), content_type='text/plain')

if __name__ == "__main__":
    app.run()