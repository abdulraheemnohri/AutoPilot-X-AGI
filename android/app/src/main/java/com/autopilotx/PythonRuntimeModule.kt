package com.autopilotx

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.chaquo.python.Python
import com.chaquo.python.PyObject

class PythonRuntimeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "PythonRuntime"

    @ReactMethod
    fun run(scriptPath: String, paramsJson: String, promise: Promise) {
        try {
            val py = Python.getInstance()
            val module = py.getModule("main")
            val result = module.callAttr("execute_from_bridge", scriptPath, paramsJson)
            promise.resolve(result.toString())
        } catch (e: Exception) {
            promise.reject("PYTHON_ERROR", e.message)
        }
    }
}
