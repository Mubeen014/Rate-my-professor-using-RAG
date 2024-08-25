from dotenv import load_dotenv
import os
from langchain_huggingface import HuggingFaceEndpointEmbeddings

# Load environment variables
load_dotenv()

# Initialize Hugging Face API key and embeddings model
api_key = os.environ.get("HUGGINGFACE_API_KEY")
embeddings = HuggingFaceEndpointEmbeddings(
    repo_id="sentence-transformers/all-MiniLM-L6-v2",
    huggingfacehub_api_token=api_key
)

# Function to create embeddings
def create_embeddings(text):
    embedding_vector = embeddings.embed_query(text)
    return embedding_vector
