class IntentDetector:
    def detect(self, text):
        if "play" in text.lower():
            return "play_music"
        if "weather" in text.lower():
            return "check_weather"
        return "unknown"
