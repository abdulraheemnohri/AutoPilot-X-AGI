# AutoPilot X AGI Ultra

AutoPilot X AGI Ultra is a self-evolving mobile AI platform that runs directly on Android devices. It enables AI to observe, understand, and control the smartphone environment through multiple AI runtimes and a multi-agent system.

## 🤖 Features

- **Multi-Runtime AI**: Integrated Python (PyTorch/Transformers), TensorFlow Lite, and ONNX Runtime.
- **Autonomous Phone Control**: AI-driven tap, scroll, swipe, and app management via Android Accessibility Service.
- **YouTube Learning Engine**: Automatically learns and generates automation workflows by analyzing YouTube tutorials.
- **Self-Evolving Learning**: Observes user behavior to suggest and create new automations.
- **Hugging Face Integration**: Download and load AI models dynamically from Hugging Face.
- **Modern Dashboard & Widgets**: Includes premium widgets for Quick Actions and real-time AGI Status monitoring.
- **Secure Command Pipeline**: Integrated Allow/Blacklist filtering for command security (e.g., preventing accidental factory resets).
- **Modern UI**: Clean, modern React Native interface with dark-mode support and optimized layouts.

## 📱 Project Structure

- `mobile-app`: React Native UI and business logic.
- `android-native`: Kotlin implementation for Accessibility Service and Gesture Control.
- `ai-runtime`: Python and native models for NLP, Vision, and Learning.
- `automation-engine`: JavaScript-based rule and workflow execution.

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd AutoPilotX
   ```

2. **Install Dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Android Setup**:
   - Ensure Android SDK is installed and `ANDROID_HOME` is set.
   - Connect an Android device or start an emulator.

4. **Run the App**:
   ```bash
   npx react-native run-android
   ```

5. **Build APK**:
   - For manual builds: `cd android && ./gradlew assembleDebug`
   - Generated APK location: `android/app/build/outputs/apk/debug/app-debug.apk`

## ⚙️ Configuration

- **Accessibility Service**: Must be enabled in Android settings for the AI to control the device.
- **AI Models**: Can be configured and downloaded via the Settings panel in the app.
- **Security**: Modify `utils/CommandConfig.js` to update whitelist and blacklist commands.

## 🛡️ Privacy & Security

- All AI processing is performed locally on the device.
- Automation data is encrypted and stored securely.
- Command filtering prevents AI from executing dangerous system actions.
