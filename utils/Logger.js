class Logger {
  log(message) {
    console.log(`[AutoPilot LOG] ${message}`);
    // Potentially write to database/logsRepo
  }

  error(message, err) {
    console.error(`[AutoPilot ERROR] ${message}`, err);
  }
}

export default new Logger();
