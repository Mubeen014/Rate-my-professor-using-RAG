import os
from dotenv import load_dotenv
load_dotenv()
from groq import Groq



client = Groq(
    # This is the default and can be omitted
    api_key=os.environ.get("GROQ_API_KEY"),
)
def chat_completion(systemPromt,lastMessage):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": systemPromt
            },
            {
                "role": "user",
                "content": lastMessage,
            }
        ],
        model="llama3-8b-8192",
    )

    return chat_completion.choices[0].message.content

