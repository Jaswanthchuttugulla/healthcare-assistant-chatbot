
const Chatbot = {

  getResponse(input) {

    const message = input.toLowerCase();

    // Greetings

    if (
      message.includes('hi') ||
      message.includes('hello') ||
      message.includes('hey')
    ) {
      return 'Hello. Welcome to the Healthcare Assistant Chatbot. How may I help you today?';
    }

    if (message.includes('good morning')) {
      return 'Good Morning. Wishing you a healthy and productive day ahead.';
    }

    if (message.includes('good afternoon')) {
      return 'Good Afternoon. Stay healthy and take care.';
    }

    if (message.includes('good evening')) {
      return 'Good Evening. Feel free to ask any healthcare-related questions.';
    }

    if (message.includes('good night')) {
      return 'Good Night. Proper sleep is important for good health.';
    }

    if (message.includes('how are you')) {
      return 'I am doing well. Thank you for asking. How can I assist you with healthcare information today?';
    }

    // Fever

    if (message.includes('fever')) {
      return 'Fever is usually a sign that the body is fighting an infection. Drink plenty of water, take enough rest, and monitor your temperature regularly. If the fever continues for more than two days, consult a doctor.';
    }

    // Headache

    if (message.includes('headache')) {
      return 'Headaches may occur because of stress, dehydration, lack of sleep, or eye strain. Take proper rest, stay hydrated, and avoid excessive screen usage.';
    }

    // Cold and Cough

    if (
      message.includes('cold') ||
      message.includes('cough')
    ) {
      return 'Cold and cough are commonly caused by viral infections. Drink warm fluids, take proper rest, and avoid cold foods or drinks.';
    }

    // Diabetes

    if (message.includes('diabetes')) {
      return 'Diabetes is a condition where blood sugar levels become high. Maintaining a healthy diet, regular exercise, and routine medical checkups are important.';
    }

    // Blood Pressure

    if (
      message.includes('blood pressure') ||
      message.includes('bp')
    ) {
      return 'High blood pressure can increase the risk of heart disease. Reduce salt intake, exercise regularly, and monitor blood pressure frequently.';
    }

    // Heart

    if (message.includes('heart')) {
      return 'Maintaining heart health requires healthy food habits, exercise, stress management, and regular medical checkups.';
    }

    // Diet

    if (
      message.includes('diet') ||
      message.includes('healthy food')
    ) {
      return 'A balanced diet should include fruits, vegetables, proteins, whole grains, and enough water intake.';
    }

    // Exercise

    if (
      message.includes('exercise') ||
      message.includes('workout')
    ) {
      return 'Regular exercise improves physical fitness, heart health, immunity, and mental wellness.';
    }

    // Stress

    if (
      message.includes('stress') ||
      message.includes('anxiety')
    ) {
      return 'Stress and anxiety can affect both physical and mental health. Proper sleep, relaxation, meditation, and exercise may help reduce stress.';
    }

    // Water

    if (
      message.includes('water') ||
      message.includes('hydration')
    ) {
      return 'Drinking enough water is important for maintaining body temperature, digestion, and overall health.';
    }

    // Emergency

    if (
      message.includes('emergency') ||
      message.includes('ambulance')
    ) {
      return 'If this is a medical emergency, contact emergency healthcare services or visit the nearest hospital immediately.';
    }

    // Thank You

    if (
      message.includes('thank you') ||
      message.includes('thanks')
    ) {
      return 'You are welcome. Stay healthy and take care.';
    }

    // Default

    return 'I am a Healthcare Assistant Chatbot. Please ask only healthcare-related questions.';
  }

};

