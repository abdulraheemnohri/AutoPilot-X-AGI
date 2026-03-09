class TaskPlanner {
    async plan(objective) {
        console.log(`Planning for: ${objective}`);
        return { steps: [] };
    }
}
export default new TaskPlanner();
