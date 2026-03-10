import json
import sys
from nlp.task_planner import TaskPlanner
from vision.screen_analyzer import ScreenAnalyzer

def main():
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No input provided"}))
        return

    try:
        input_data = json.loads(sys.argv[1])
        action = input_data.get("action")

        if action == "plan_task":
            command = input_data.get("command")
            planner = TaskPlanner()
            plan = planner.generate_plan(command)
            print(json.dumps({"status": "success", "data": plan}))

        elif action == "analyze_screen":
            analyzer = ScreenAnalyzer()
            analysis = analyzer.analyze({})
            print(json.dumps({"status": "success", "data": analysis}))

        else:
            print(json.dumps({"error": f"Unknown action: {action}"}))

    except Exception as e:
        print(json.dumps({"status": "error", "message": str(e)}))

def execute_from_bridge(script_path, params_json):
    try:
        params = json.loads(params_json)
        # Logic to route based on script_path or params
        if "plan_task" in script_path or params.get("action") == "plan_task":
            planner = TaskPlanner()
            plan = planner.generate_plan(params.get("command", ""))
            return json.dumps({"status": "success", "data": plan})
        return json.dumps({"status": "success", "data": {}})
    except Exception as e:
        return json.dumps({"status": "error", "message": str(e)})

if __name__ == "__main__":
    main()
