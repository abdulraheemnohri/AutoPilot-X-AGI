package com.autopilotx

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class BiometricModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "BiometricAuth"

    @ReactMethod
    fun authenticate(promise: Promise) {
        // Mock biometric authentication (stub)
        promise.resolve(true)
    }
}
