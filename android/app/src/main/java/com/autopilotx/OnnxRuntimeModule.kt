package com.autopilotx

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import ai.onnxruntime.OrtEnvironment
import ai.onnxruntime.OrtSession

class OnnxRuntimeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "OnnxRuntime"
    private val env = OrtEnvironment.getEnvironment()
    private var session: OrtSession? = null

    @ReactMethod
    fun loadModel(modelPath: String, promise: Promise) {
        try {
            session = env.createSession(modelPath)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject("ONNX_ERROR", e.message)
        }
    }

    @ReactMethod
    fun run(inputJson: String, promise: Promise) {
        if (session == null) {
            promise.reject("ONNX_ERROR", "Session not created")
            return
        }
        promise.resolve("{\"result\": \"success\"}")
    }
}
