package com.autopilotx

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import java.io.File
import java.net.URL

class ModelDownloaderModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "ModelDownloader"

    @ReactMethod
    fun downloadModel(url: String, fileName: String, promise: Promise) {
        Thread {
            try {
                val destination = File(reactApplicationContext.filesDir, fileName)
                URL(url).openStream().use { input ->
                    destination.outputStream().use { output ->
                        input.copyTo(output)
                    }
                }
                promise.resolve(destination.absolutePath)
            } catch (e: Exception) {
                promise.reject("DOWNLOAD_ERROR", e.message)
            }
        }.start()
    }
}
