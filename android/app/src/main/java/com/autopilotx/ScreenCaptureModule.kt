package com.autopilotx

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.graphics.Bitmap
import android.graphics.PixelFormat
import android.hardware.display.DisplayManager
import android.hardware.display.VirtualDisplay
import android.media.ImageReader
import android.media.projection.MediaProjection
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.BaseActivityEventListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import java.io.ByteArrayOutputStream
import android.util.Base64

class ScreenCaptureModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "ScreenCapture"
    private var mediaProjection: MediaProjection? = null
    private var projectionManager: android.media.projection.MediaProjectionManager? = null
    private var capturePromise: Promise? = null

    init {
        projectionManager = reactApplicationContext.getSystemService(Context.MEDIA_PROJECTION_SERVICE) as android.media.projection.MediaProjectionManager
        reactApplicationContext.addActivityEventListener(object : BaseActivityEventListener() {
            override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
                if (requestCode == 1001 && resultCode == Activity.RESULT_OK && data != null) {
                    mediaProjection = projectionManager?.getMediaProjection(resultCode, data)
                    performCapture()
                } else if (requestCode == 1001) {
                    capturePromise?.reject("CAPTURE_ERROR", "User denied permission")
                }
            }
        })
    }

    @ReactMethod
    fun capture(promise: Promise) {
        capturePromise = promise
        if (mediaProjection == null) {
            currentActivity?.startActivityForResult(projectionManager?.createScreenCaptureIntent(), 1001)
        } else {
            performCapture()
        }
    }

    private fun performCapture() {
        val display = currentActivity?.windowManager?.defaultDisplay
        val metrics = android.util.DisplayMetrics()
        display?.getRealMetrics(metrics)

        val imageReader = ImageReader.newInstance(metrics.widthPixels, metrics.heightPixels, PixelFormat.RGBA_8888, 2)
        mediaProjection?.createVirtualDisplay("Capture", metrics.widthPixels, metrics.heightPixels, metrics.densityDpi,
            DisplayManager.VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR, imageReader.surface, null, null)

        imageReader.setOnImageAvailableListener({ reader ->
            val image = reader.acquireLatestImage()
            if (image != null) {
                val plane = image.planes[0]
                val buffer = plane.buffer
                val pixelStride = plane.pixelStride
                val rowStride = plane.rowStride
                val rowPadding = rowStride - pixelStride * metrics.widthPixels

                val bitmap = Bitmap.createBitmap(metrics.widthPixels + rowPadding / pixelStride, metrics.heightPixels, Bitmap.Config.ARGB_8888)
                bitmap.copyPixelsFromBuffer(buffer)
                image.close()
                reader.close()

                val outputStream = ByteArrayOutputStream()
                bitmap.compress(Bitmap.CompressFormat.PNG, 100, outputStream)
                val base64 = Base64.encodeToString(outputStream.toByteArray(), Base64.DEFAULT)
                capturePromise?.resolve(base64)
            }
        }, null)
    }
}
