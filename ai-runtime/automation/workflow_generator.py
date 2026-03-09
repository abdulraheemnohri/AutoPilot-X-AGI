class WorkflowGenerator:
    def generate(self, intent):
        if intent == "play_music":
            return [
                {"action": "open_app", "params": {"app": "spotify"}},
                {"action": "tap", "params": {"x": 500, "y": 500}}
            ]
        return []
