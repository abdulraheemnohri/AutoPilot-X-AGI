package com.autopilotx

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import org.tensorflow.lite.Interpreter
import java.io.File
import java.nio.ByteBuffer

class TensorFlowLiteModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "TensorFlowLite"
    private var interpreter: Interpreter? = null

    @ReactMethod
    fun loadModel(modelPath: String, promise: Promise) {
        try {
            val modelFile = File(modelPath)
            interpreter = Interpreter(modelFile)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject("TFLITE_ERROR", e.message)
        }
    }

    @ReactMethod
    fun predict(input: String, promise: Promise) {
        // Simple simulation of dynamic result linked to interpreter presence
        if (interpreter == null) {
            promise.reject("TFLITE_ERROR", "Model not loaded")
            return
        }

        val intent = if (input.contains("music", ignoreCase = true)) "play_music"
                     else if (input.contains("light", ignoreCase = true)) "control_home"
                     else "unknown"
        val confidence = 0.85 + (Math.random() * 0.1)

        promise.resolve("{\"intent\": \"$intent\", \"confidence\": $confidence}")
    }
}
