from flask import Flask, request, jsonify
from embedding_utils import create_embeddings  # Import the function
from pinecone_utils import pincone_query
from chat_completion_utils import chat_completion

app = Flask(__name__)

systemPrompt = '''
You are a rate my professor agent to help students find classes, that takes in user questions and answers them.
First part of the prompt is the user's question.
Second part is the returned results.
For every user question, the top 5 professors that match the user question are returned.
Use them to answer the question if needed.
'''

@app.route('/api/process', methods=['POST'])
def process():
    data = request.json
    user_text = data.get('text')
    
    if user_text is None:
        return jsonify({"error": "Invalid input"}), 400

    result = create_embeddings(user_text)  # Use the imported function
    pinecone_result = pincone_query(result)

    lastMessage = user_text+pinecone_result
    llm_answer = chat_completion(systemPrompt,lastMessage)

    return jsonify({"result": llm_answer})

if __name__ == '__main__':
    app.run(debug=True)
