package com.autopilotx

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.WritableNativeArray
import com.facebook.react.bridge.WritableNativeMap

class AccessibilityModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "AccessibilityBridge"

    @ReactMethod
    fun getScreenNodes(promise: Promise) {
        val service = AutoPilotAccessibilityService.instance
        if (service == null) {
            promise.reject("SERVICE_NOT_CONNECTED", "Accessibility Service is not running")
            return
        }

        val nodes = service.getNodes()
        val writableArray = WritableNativeArray()

        for (node in nodes) {
            val map = WritableNativeMap()
            map.putString("text", node["text"] as String)
            map.putString("class", node["class"] as String)
            map.putString("id", node["id"] as String)

            val bounds = node["bounds"] as Map<String, Int>
            val boundsMap = WritableNativeMap()
            boundsMap.putInt("x", bounds["x"]!!)
            boundsMap.putInt("y", bounds["y"]!!)
            boundsMap.putInt("w", bounds["w"]!!)
            boundsMap.putInt("h", bounds["h"]!!)
            map.putMap("bounds", boundsMap)

            writableArray.pushMap(map)
        }

        promise.resolve(writableArray)
    }
}
