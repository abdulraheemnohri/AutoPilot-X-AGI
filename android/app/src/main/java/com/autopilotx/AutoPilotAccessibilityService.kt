package com.autopilotx

import android.accessibilityservice.AccessibilityService
import android.view.accessibility.AccessibilityEvent
import android.view.accessibility.AccessibilityNodeInfo

class AutoPilotAccessibilityService : AccessibilityService() {
    companion object {
        var instance: AutoPilotAccessibilityService? = null
    }

    override fun onServiceConnected() {
        instance = this
    }

    override fun onAccessibilityEvent(event: AccessibilityEvent) {
        // AI observes the screen here
    }

    override fun onInterrupt() {}

    fun getNodes(): List<Map<String, Any>> {
        val root = rootInActiveWindow ?: return emptyList()
        val nodes = mutableListOf<Map<String, Any>>()
        scanNodes(root, nodes)
        return nodes
    }

    private fun scanNodes(node: AccessibilityNodeInfo, list: MutableList<Map<String, Any>>) {
        val map = mutableMapOf<String, Any>()
        map["text"] = node.text?.toString() ?: ""
        map["class"] = node.className?.toString() ?: ""
        map["id"] = node.viewIdResourceName ?: ""

        val rect = android.graphics.Rect()
        node.getBoundsInScreen(rect)
        map["bounds"] = mapOf("x" to rect.left, "y" to rect.top, "w" to rect.width(), "h" to rect.height())

        list.add(map)

        for (i in 0 until node.childCount) {
            val child = node.getChild(i)
            if (child != null) {
                scanNodes(child, list)
            }
        }
    }
}
