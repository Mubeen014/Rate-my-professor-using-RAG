from pinecone import Pinecone, ServerlessSpec
from dotenv import load_dotenv
import os

load_dotenv()

# Initialize Pinecone
api_key = os.environ.get("PINECONE_API_KEY")
if not api_key:
    raise ValueError("PINECONE_API_KEY environment variable not set")
pc = Pinecone(api_key=api_key)

# Ensure index exists
try:
    index = pc.Index("professor")
except Exception as e:
    raise RuntimeError(f"Failed to initialize Pinecone index: {e}")

def pincone_query(embeddings):
    try:
        results = index.query(
            namespace='ns1',
            vector=embeddings,
            top_k=5,
            include_metadata=True
        )
    except Exception as e:
        raise RuntimeError(f"Query failed: {e}")

    result_strings = []
    for match in results.matches:
        result_string = f"""
            Returned Results:
            Professor: {match.id}
            Review: {match.metadata.get('review', 'N/A')}
            Subject: {match.metadata.get('subject', 'N/A')}
            Stars: {match.metadata.get('stars', 'N/A')}
        """
        result_strings.append(result_string)

    return "\n".join(result_strings)
