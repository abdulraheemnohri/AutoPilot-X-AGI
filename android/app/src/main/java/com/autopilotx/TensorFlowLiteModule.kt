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
        // Simple mock prediction for now, but linked to real interpreter
        if (interpreter == null) {
            promise.reject("TFLITE_ERROR", "Model not loaded")
            return
        }
        promise.resolve("{\"intent\": \"play_music\", \"confidence\": 0.98}")
    }
}
