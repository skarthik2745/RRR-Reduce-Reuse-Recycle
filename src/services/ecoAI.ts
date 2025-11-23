const faq = [
  { question: "What are the best ways to reduce daily waste?", answer: "Try reusable bags, steel bottles, avoid plastic covers, compost food waste, and buy only what you truly need." },
  { question: "How can I reuse items at home?", answer: "Use jars for storage, old T-shirts for cleaning, bottles as planters, and boxes for organizing shelves." },
  { question: "How can I prevent food items from expiring?", answer: "Store properly, track expiry dates weekly, and follow FIFO (First In, First Out)." },
  { question: "What is the Reduce tab used for?", answer: "It helps you track eco-activities, get tips, earn points, and improve sustainability habits." },
  { question: "What is the FoodExpiry Logger?", answer: "It lets you record food items, expiry dates, and storage locations to reduce food wastage." },
  { question: "How are points calculated in Reduce section?", answer: "Points come from daily challenges, FoodExpiry Logger, and Green Hall posts." },
  { question: "What is the Green Hall feature?", answer: "It's like an eco-friendly Instagram where users post sustainability activities and earn points." },
  { question: "How does the leaderboard work?", answer: "It shows total points from challenges, FoodExpiry Logger, and Green Hall interactions." },
  { question: "Why should I avoid plastic use?", answer: "Plastic takes hundreds of years to decompose and harms soil, water, and wildlife." },
  { question: "How can I make my home eco-friendly?", answer: "Use LED bulbs, conserve water, grow plants, reduce AC usage, and avoid single-use plastics." }
];

export async function generateResponse(userMessage: string): Promise<string> {
  // Simulate typing delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const lowerMessage = userMessage.toLowerCase();
  
  // Find matching FAQ
  for (const item of faq) {
    const lowerQuestion = item.question.toLowerCase();
    const keywords = lowerQuestion.split(' ').filter(word => word.length > 3);
    
    if (keywords.some(keyword => lowerMessage.includes(keyword))) {
      return item.answer;
    }
  }
  
  // Fallback answer
  return "I'm still learning! Ask me something related to Reduce, Reuse, Recycling or sustainability.";
}