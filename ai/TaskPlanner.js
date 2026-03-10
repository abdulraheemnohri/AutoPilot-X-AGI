import PythonRuntimeBridge from './PythonRuntimeBridge';
import OnnxRuntimeBridge from './OnnxRuntimeBridge';

class TaskPlanner {
    async plan(objective) {
        console.log(`Planning for: ${objective}`);

        // 1. Try complex planning with Python
        const pythonPlan = await PythonRuntimeBridge.execute('automation/workflow_generator.py', { objective });
        if (pythonPlan.status === 'success' && pythonPlan.steps) {
            return pythonPlan;
        }

        // 2. Fallback to ONNX based fast planner
        const onnxPlan = await OnnxRuntimeBridge.runModel('planner.onnx', { objective });
        return onnxPlan;
    }

    async generateYouTubeLearnedWorkflow(videoUrl) {
        console.log(`Learning task from: ${videoUrl}`);
        // This would call a specialized vision/nlp script in Python
        return await PythonRuntimeBridge.execute('learning/video_task_learner.py', { url: videoUrl });
    }
}
export default new TaskPlanner();
