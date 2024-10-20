import Groq from "groq-sdk";

// Initialize Groq SDK with your API key from environment variables
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Main function to handle user input and query LLAMA API for financial advice
export async function main(userInput) {
  try {
    // Create a prompt that asks LLAMA whether it's a financial query and, if yes, provides financial advice
    const chatCompletion = await getGroqChatCompletion(userInput);

    // Return LLAMA's response, or handle empty output
    return chatCompletion.choices[0]?.message?.content || "No financial advice available.";
  } catch (error) {
    console.error("Error querying LLAMA for financial advice:", error);
    throw new Error('Failed to fetch financial advice from LLAMA.');
  }
}

// Function to get financial advice completion from Groq's API
export async function getGroqChatCompletion(userInput) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are an expert financial advisor. The user will ask a question. First, determine if it is a financial question. If yes, answer the question with appropriate financial advice. If not, respond with "Please stick to the motive of the app and ask financial-related questions."`,
      },
      {
        role: "user",
        content: userInput,  // User's question is passed here
      },
    ],
    model: "llama3-8b-8192",  // Example model, change as needed
  });
}
