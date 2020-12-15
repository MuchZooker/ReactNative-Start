package com.reactday2.module;

import android.Manifest;
import android.app.Activity;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothManager;
import android.bluetooth.le.BluetoothLeScanner;
import android.bluetooth.le.ScanCallback;
import android.bluetooth.le.ScanResult;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;

public class JsBlueToothModule extends ReactContextBaseJavaModule {
    Activity activity;
    public JsBlueToothModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "JsBlueTooth";
    }

    BluetoothAdapter bluetoothAdapter;
    BluetoothLeScanner bluetoothLeScanner;
    Callback callback;
    @ReactMethod
    public void startScanBueTooth(Callback callback){
        this.callback=callback;
        bluetoothDeviceList.clear();
        activity=getCurrentActivity();
        if (ActivityCompat.checkSelfPermission(activity.getApplicationContext(), Manifest.permission.ACCESS_COARSE_LOCATION)
                != PackageManager.PERMISSION_GRANTED
                || ActivityCompat.checkSelfPermission(activity.getApplicationContext(), Manifest.permission.ACCESS_FINE_LOCATION)
                != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.ACCESS_COARSE_LOCATION, Manifest.permission.ACCESS_FINE_LOCATION}, 100);
        }else {
            BluetoothManager bluetoothManager = (BluetoothManager) activity.getApplicationContext().getSystemService(Context.BLUETOOTH_SERVICE);
            bluetoothAdapter = bluetoothManager.getAdapter();
            if (bluetoothAdapter == null) {
                Toast.makeText(activity.getApplicationContext(), "不支持BLE", Toast.LENGTH_SHORT).show();
                return;
            }
            if (!bluetoothAdapter.isEnabled()) {
                Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
                activity.getApplicationContext().startActivity(enableBtIntent);
            } else {
                bluetoothLeScanner = bluetoothAdapter.getBluetoothLeScanner();
                bluetoothLeScanner.startScan(bleScan);
            }
        }
    }
    List<BluetoothDevice> bluetoothDeviceList=new ArrayList<>();
    ScanCallback bleScan= new ScanCallback() {

        @Override
        public void onScanResult(int callbackType, ScanResult result) {
            super.onScanResult(callbackType, result);
            if(result.getDevice()!=null&&result.getDevice().getName()!=null&&!bluetoothDeviceList.contains(result.getDevice())){
            bluetoothDeviceList.add(result.getDevice());
            }

        }

        @Override
        public void onScanFailed(int errorCode) {
            super.onScanFailed(errorCode);
            Toast.makeText(activity.getApplicationContext(), "错误码:"+errorCode, Toast.LENGTH_SHORT).show();
        }

        @Override
        public void onBatchScanResults(List<ScanResult> results) {
            super.onBatchScanResults(results);
            Log.d("测试","onBatchScanResults");

        }
    };

    @ReactMethod
    public void stopScanBueTooth(){
        if (bluetoothAdapter.isEnabled()){
            bluetoothLeScanner.stopScan(bleScan);
            if (callback!=null){
                StringBuilder stringBuilder=new StringBuilder();

                stringBuilder.append("[");
                for (int i = 0; i < bluetoothDeviceList.size(); i++) {

                    stringBuilder.append("{");
                    stringBuilder.append("\""+"name"+"\":"+"\""+bluetoothDeviceList.get(i).getName()+"\"");
                    stringBuilder.append(",");
                    stringBuilder.append("\""+"address"+"\":"+"\""+bluetoothDeviceList.get(i).getAddress()+"\"");
                    stringBuilder.append("}");
                    if (i!=bluetoothDeviceList.size()-1) {
                        stringBuilder.append(",");
                    }

                }
                stringBuilder.append("]");

                String ble=stringBuilder.toString();
                Log.d("测试",ble);
                callback.invoke(ble);
            }
        }
    }
}
