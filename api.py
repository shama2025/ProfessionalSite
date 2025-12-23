from flask import Flask, Response, request
from flask_cors import CORS
from util import inference

app = Flask(__name__)
CORS(app)

# API endpoint
@app.route("/ai",methods=['POST'])
def generate_response():
    data = request.get_json()
    query = data.get("query")
    return Response(inference(query), content_type='text/plain')