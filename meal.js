const vegMess = {
  Monday: {
    breakfast:
      "Idly, Vada, Sambar, Chutney B, B,J Tea, Coffee, Milk Fried Egg Masala",
    lunch:
      "Phulka, Dal Ajawin, White Rice,Sambar Rasam,  Curd,  Onion rings  Egg Masala,  Poriyal  Sweet:Rava Laddu/Boondhi laddu",
    snack: "Veg Cutlet   COLD COFFEE Tea",
    dinner:
      "Phulka,Dosa, Chutney,Dhal,White Rice  Rasam, Sambar,  Butter Milk  Green Veg Sabzhi,  Seasonal Fruits ",
  },
  Tuesday: {
    breakfast:
      "Idly, Sambar, Chutney, Kitchadi B,B,J Tea, Coffee, Milk French Toast",
    lunch:
      "Phulka, Dal Gujrati, White Rice, Rasam, Curd, Papad Coconut Rice /. Lemon Rice, Thuvayal, Dingri Muttar",
    snack: "Veg Samosa Sauce Tea, Coffee, Milk",
    dinner:
      "Chapathi, Dhal, White Rice, Rasam Sambar, Butter Milk, Dhum Aloo Egg Thai Fried Rice, Garlic Sauce Fruits: Cut Fruits Mixed",
  },
  Wednesday: {
    breakfast: "Masala Uthappam, Sambar, Chutney B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Punjabi, White Rice, Sambar Rasam, Loose Curd, Fryums Panneer Do Piaza, Poriyal",
    snack: "Pani Poori ICE LEMON TEA",
    dinner:
      "Phulka, Dhal fry, White Rice Rasam, Sambar, Curd rice Meal maker peas & capsicum masala",
  },
  Thursday: {
    breakfast:
      "Gobi Paratha, Curd, Pongal, Chutney, Sambar B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Madka, White Rice, Sambar Rasam, Curd, Papad Green Veg Sabzhi, Avaraikai Poriyal",
    snack: "Raw Banana Bajji Tea, Coffee, Milk",
    dinner:
      "Poori, Channa Masala, White Rice Rasam, Sambar, Butter Milk Green Poriyal Fruits: Banana",
  },
  Friday: {
    breakfast: "Masala Dosa, Sambar, Chutney B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Curd, Masala Papad Panneer Tikka Masala, Keerai kootu Sweet: Gulab Jamun",
    snack: "Cake Cold Badam Milk Tea",
    dinner:
      "Phulka, Idly, Chutney, Dhal, White Rice Rasam, Sambar, Butter Milk Aloo Brinjal Drumstick Masala Fruits: Seasonal Fruits",
  },
  Saturday: {
    breakfast:
      "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Thadka, White Rice, Rasam, Dahi vada/Kadi Pakoda, Papad Capsicum Peas Masala, Sambar",
    snack: "Mysore Bonda Chutney Tea, Coffee, Milk",
    dinner:
      "Phulka, Dhal Masala, White Rice Rasam, Sambar, Butter Milk Schezwan Fried Rice, Gobi Manchurian Fruits: Papaya",
  },
  Sunday: {
    breakfast: "Idly, Vada, Sambar, Chutney B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Rajma, White Rice, Sambar Rasam, Curd, Fryums Veg Biryani, Oil Brinjal, Onion Raitha Sweet: Ice Cream",
    snack: "Veg Puffs Tea, Coffee, Milk",
    dinner:
      "Phulka, Dhal Thoor, White Rice Rasam, Sambar, Butter Milk, Lemon Rice Aloo Capsicum Muttar Masala Seasonal Fruits",
  },
};

const nonVegMess = {
  Monday: {
    breakfast:
      "Idly, Vada, Sambar, Chutney B, B,J Tea, Coffee, Milk Fried Egg Masala",
    lunch:
      "Phulka, Dal Ajawin, White Rice,Sambar Rasam,  Curd,  Onion rings  Egg Masala,  Poriyal  Sweet:Rava Laddu/Boondhi laddu",
    snack: "Veg Cutlet   COLD COFFEE Tea",
    dinner:
      "Phulka,Dosa, Chutney,Dhal,White Rice  Rasam, Sambar,  Butter Milk  Green Veg Sabzhi,  Seasonal Fruits ",
  },
  Tuesday: {
    breakfast:
      "Idly, Sambar, Chutney, Kitchadi B,B,J Tea, Coffee, Milk French Toast",
    lunch:
      "Phulka, Dal Gujrati, White Rice, Rasam, Curd, Papad Coconut Rice /. Lemon Rice, Thuvayal, Dingri Muttar",
    snack: "Veg Samosa Sauce Tea, Coffee, Milk",
    dinner:
      "Chapathi, Dhal, White Rice, Rasam Sambar, Butter Milk, Dhum Aloo Egg Thai Fried Rice, Garlic Sauce Fruits: Cut Fruits Mixed",
  },
  Wednesday: {
    breakfast: "Masala Uthappam, Sambar, Chutney B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Punjabi, White Rice, Sambar Rasam, Butter Milk, Fryums Chicken Masala, Poriyal",
    snack: "Pani Poori ICE LEMON TEA",
    dinner:
      "Phulka, Dhal fry, White Rice Rasam, Sambar, Curd rice Meal maker peas & capsicum masala",
  },
  Thursday: {
    breakfast:
      "Gobi Paratha, Curd, Pongal, Chutney B,B,J Tea, Coffee, Milk, Scrambeled Egg",
    lunch:
      "Phulka, Dal Madka, White Rice, Sambar Rasam, Curd, Papad Aloo Palak, Avaraikai Poriyal",
    snack: "Raw Banana Bajji Tea, Coffee, Milk",
    dinner:
      "Poori, Channa Masala, White Rice Rasam, Sambar, Butter Milk Green Poriyal Fruits: Banana",
  },
  Friday: {
    breakfast: "Plain Dosa, Sambar, Chutney B,B,J Tea, Coffee, Milk Fried Egg",
    lunch:
      "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Butter Milk, Masala Papad Chicken 65, Keerai Kootu Sweet: Gulab Jamun",
    snack: "Cake Cold Badam Milk Tea",
    dinner:
      "Phulka, Idly, Chutney, Dhal, White Rice Rasam, Sambar, Butter Milk Aloo Brinjal Drumstick Masala Fruits: Seasonal Fruits",
  },
  Saturday: {
    breakfast:
      "Aloo Paratha, Curd, Pongal, Chutney, Sambar B,B,J Tea, Coffee, Milk Egg Burji",
    lunch:
      "Phulka, Dal Thadka, White Rice, Rasam, Dahi vada/Kadi Pakoda, Papad Capsicum Peas Masala, Sambar",
    snack: "Mysore Bonda Chutney Tea, Coffee, Milk",
    dinner:
      "Phulka, Dhal Masala, White Rice Rasam, Sambar, Butter Milk Schezwan Egg Fried Rice, Gobi Manchurian Fruits: Papaya",
  },
  Sunday: {
    breakfast:
      "Vada Paav/ Paav Bhaji, Pongal, Chutney Sambar B,B,J Tea, Coffee, Milk, Masala Omelette",
    lunch:
      "Phulka, Dal Rajma, White Rice, Sambar Rasam, Curd, Papad, Onion Raitha Chicken Biryani, Banaras Baigan, Sweet: Ice Cream",
    snack: "Veg Puffs Tea, Coffee, Milk",
    dinner:
      "Phulka, Dhal, White Rice Rasam, Sambar, Butter Milk Aloo Gobi Capsicum Masala, Fruit Salad",
  },
};

const messTypesData = {
  nonVegMess: nonVegMess,
  vegMess: vegMess,
};

const dayButtons = document.querySelectorAll(".daybtn");
const mealContainers = {
  breakfast: document.getElementById("breakfast"),
  lunch: document.getElementById("lunch"),
  snack: document.getElementById("snack"),
  dinner: document.getElementById("dinner"),
};

async function displayCals(query) {
  const resDiv = document.getElementById("calorieResult");
  resDiv.innerHTML = "";
  try {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/nutrition",
      {
        params: { query: query.value },
        headers: { "X-Api-Key": "VxG72FjYQzLwTtPqNHfJAA==7roujWV7g90o3Pyy" },
      }
    );
    console.log(response);
    const result = response.data;
    console.log(result);
    let total_cholesterol_mg = 0,
      total_fat_total_g = 0,
      total_carbohydrates_total_g = 0,
      total_sugar_g = 0;

    result.forEach((dish) => {
      const dishDiv = document.createElement("div");
      dishDiv.classList.add("dish-info");
      dishDiv.innerHTML = `<h3>${dish.name}</h3>
        <p>Cholesterol: ${dish.cholesterol_mg} mg</p>
        <p>Fat: ${dish.fat_total_g} g</p>
        <p>Carbohydrates: ${dish.carbohydrates_total_g} g</p>
        <p>Sugar: ${dish.sugar_g} g</p>`;
      resDiv.appendChild(dishDiv);
      total_cholesterol_mg += dish.cholesterol_mg;
      total_fat_total_g += dish.fat_total_g;
      total_carbohydrates_total_g += dish.carbohydrates_total_g;
      total_sugar_g += dish.sugar_g;
    });

    const totalDiv = document.createElement("div");
    totalDiv.classList.add("dish-info");
    totalDiv.innerHTML = `<p><b>Total Cholestrol:</b> ${total_cholesterol_mg.toFixed(
      2
    )}</p>
      <p><b>Total fats:</b> ${total_fat_total_g.toFixed(2)}</p>
      <p><b>Total carbs:</b> ${total_carbohydrates_total_g.toFixed(2)}</p>
      <p><b>Total sugar:</b> ${total_sugar_g.toFixed(2)}</p>`;
    resDiv.appendChild(totalDiv);

    query.value = "";
  } catch (error) {
    console.error("Error: ", error);
    resDiv.innerHTML = "<p>Error fetching calorie data. Please try again.</p>";
  }
}

function displayMeals(day, messType) {
  dayButtons.forEach((btn) => btn.classList.remove("active"));

  const selectedButton = document.querySelector(`.daybtn[value="${day}"]`);
  selectedButton.classList.add("active");

  const meals = messTypesData[messType][day];
  for (const mealType in meals) {
    mealContainers[mealType].textContent = meals[mealType];
  }
}

dayButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const day = btn.value;
    const selctedMess = localStorage.getItem("messType");
    displayMeals(day, selctedMess);
  });
});

const curdate = new Date();
const curdayindx = curdate.getDay();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const curday = dayNames[curdayindx];
const selctedMess = localStorage.getItem("messType");
displayMeals(curday, selctedMess);

var query = document.getElementById("dishes");
const calbtn = document.getElementById("calcCalbtn");
calbtn.addEventListener("click", () => {
  if (query.value) {
    displayCals(query);
  }
});

// Chatbot
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotWindow = document.getElementById("chatbot-window");
const closeChatbot = document.getElementById("close-chatbot");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");
const sendChatbot = document.getElementById("send-chatbot");

// Toggle chatbot window
chatbotIcon.addEventListener("click", () => {
  chatbotWindow.style.display =
    chatbotWindow.style.display === "flex" ? "none" : "flex";
});

closeChatbot.addEventListener("click", () => {
  chatbotWindow.style.display = "none";
});

window.addEventListener("DOMContentLoaded", () => {
  addMessage(
    "Hello! I'm your nutrition assistant. Ask me anything about diet & nutrition"
  );
});

function addMessage(content, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", isUser ? "user" : "bot");
  messageDiv.textContent = content;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Autoscroll to bottom
}

function showLoading() {
  const loadingDiv = document.createElement("div");
  loadingDiv.classList.add("message", "bot", "loading");
  loadingDiv.textContent = "Thinking...";
  loadingDiv.id = "loading-message";
  chatbotMessages.appendChild(loadingDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function hideLoading() {
  const loadingDiv = document.getElementById("loading-message");
  if (loadingDiv) {
    loadingDiv.remove();
  }
}

// Query
async function getChatbotResponse(query) {
  try {
    showLoading();

    //ngrok URL including /chatbot endpoint
    const response = await axios.post(
      "https://800b-34-125-59-47.ngrok-free.app/chatbot",
      { query: query },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 60000,
      }
    );

    hideLoading();

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    return response.data.response;
  } catch (error) {
    hideLoading();
    console.error("Error fetching response:", error);
    return `Error: ${error.message}. Please check if chatbot server is running.`;
  }
}

// Send message handler
sendChatbot.addEventListener("click", async () => {
  const query = chatbotInput.value.trim();
  if (query) {
    addMessage(query, true);
    chatbotInput.value = "";

    chatbotInput.disabled = true;
    sendChatbot.disabled = true;

    const response = await getChatbotResponse(query); // Fetch response
    addMessage(response);

    chatbotInput.disabled = false;
    sendChatbot.disabled = false;
    chatbotInput.focus();
  }
});

chatbotInput.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    sendChatbot.click();
  }
});
