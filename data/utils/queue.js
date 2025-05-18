function processQueue(notification) {
  console.log(" Processing notification via fake queue...");
  console.log(" Notification Type:", notification.type);
  console.log(" Message:", notification.message);
  // Retry simulation (dummy)
  setTimeout(() => {
    console.log(" Retry mechanism: Delivered successfully (mock)");
  }, 1000);
}

module.exports = { processQueue };
