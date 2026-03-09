class TaskPlanner:
    def generate_plan(self, command):
        command = command.lower()
        if "play music" in command:
            return [
                {"action": "open_app", "params": {"app": "youtube"}},
                {"action": "tap", "params": {"x": 540, "y": 200}}, # Search bar
                {"action": "type_text", "params": {"text": "music"}},
                {"action": "tap", "params": {"x": 540, "y": 1200}} # First video
            ]

        if "weather" in command:
            return [
                {"action": "open_app", "params": {"app": "weather"}},
                {"action": "read_screen", "params": {}}
            ]

        return []
