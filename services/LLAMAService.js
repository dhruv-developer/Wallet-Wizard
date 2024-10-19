import Groq from "groq-sdk";

// Expanded list of financial keywords to detect financial queries
const financialKeywords = [
  // Personal Finance
  'budget', 'savings', 'debt', 'credit', 'loan', 'mortgage', 'expenses', 'income', 'credit card', 'interest rate', 
  'balance', 'net worth', 'cash flow', 'emergency fund', 'financial plan', 'spending', 'personal finance',

  // Investing
  'investment', 'stocks', 'bonds', 'mutual funds', 'etfs', 'dividends', 'capital gains', 'equity', 'portfolio', 
  'asset allocation', 'risk tolerance', 'stock market', 'shares', 'return on investment (ROI)', 'bull market', 
  'bear market', 'hedge funds', 'commodities', 'cryptocurrency', 'bitcoin', 'forex', 'options trading', 'real estate',

  // Retirement Planning
  'retirement', '401k', 'IRA', 'Roth IRA', 'pension', 'annuity', 'retirement savings', 'social security', 
  'retirement plan', 'retirement account', 'retirement age', 'early retirement', 'required minimum distribution (RMD)',

  // Taxation
  'taxes', 'tax return', 'tax refund', 'income tax', 'capital gains tax', 'estate tax', 'property tax', 'sales tax', 
  'tax deduction', 'tax credit', 'tax filing', 'withholding',

  // Banking and Insurance
  'bank', 'savings account', 'checking account', 'certificate of deposit (CD)', 'money market account', 
  'auto loan', 'home loan', 'refinancing', 'insurance', 'life insurance', 'health insurance', 'disability insurance', 
  'insurance premium', 'deductible', 'claim', 'liability insurance', 'homeowners insurance', 'auto insurance', 'policy',

  // Financial Planning and Consulting
  'financial advisor', 'wealth management', 'estate planning', 'financial goals', 'financial strategy', 
  'debt consolidation', 'financial independence', 'passive income', 'asset management',

  // Economic and Business Terms
  'inflation', 'deflation', 'interest rates', 'unemployment rate', 'GDP', 'economic growth', 'recession', 
  'economic indicators', 'business loan', 'business finance', 'venture capital', 'angel investor', 'small business loan',

  // International Finance
  'currency exchange', 'forex trading', 'foreign investment', 'trade balance', 'import/export', 'international markets',
];

// Initialize Groq SDK with your API key from environment variables
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Main function to handle user input and query LLAMA API for financial advice
export async function main(userInput) {
  if (!isFinancialQuery(userInput)) {
    // Respond with a specific message if the query is not related to financial topics
    return "Please stick to the motive of the app and ask financial-related questions.";
  }

  try {
    const chatCompletion = await getGroqChatCompletion(userInput);
    
    // Return the completion from the LLM or handle empty response
    return chatCompletion.choices[0]?.message?.content || "No financial advice available.";
  } catch (error) {
    console.error("Error querying LLAMA for financial advice:", error);
    throw new Error('Failed to fetch financial advice from LLAMA.');
  }
}

// Function to determine if the user input is related to financial topics
function isFinancialQuery(input) {
  const lowerCaseInput = input.toLowerCase();
  return financialKeywords.some(keyword => lowerCaseInput.includes(keyword));
}

// Function to get financial advice completion from Groq's API
export async function getGroqChatCompletion(userInput) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: userInput,  // User's financial-related question is passed here
      },
    ],
    model: "llama3-8b-8192",  // Example model, change as needed
  });
}
