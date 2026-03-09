class GestureController {
  async tap(x, y) {
    console.log(`Simulating tap at: ${x}, ${y}`);
    // Native call to perform gesture
    return true;
  }

  async swipe(x1, y1, x2, y2) {
    console.log(`Simulating swipe from (${x1},${y1}) to (${x2},${y2})`);
    return true;
  }

  async typeText(text) {
    console.log(`Simulating text input: ${text}`);
    return true;
  }
}

export default new GestureController();
