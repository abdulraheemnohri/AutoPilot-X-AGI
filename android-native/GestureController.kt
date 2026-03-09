package com.autopilotx

import android.accessibilityservice.GestureDescription
import android.graphics.Path

class GestureController(private val service: AutoPilotAccessibilityService) {
    fun tap(x: Float, y: Float) {
        val path = Path()
        path.moveTo(x, y)
        val gesture = GestureDescription.Builder()
            .addStroke(GestureDescription.StrokeDescription(path, 0, 100))
            .build()
        service.dispatchGesture(gesture, null, null)
    }
}
