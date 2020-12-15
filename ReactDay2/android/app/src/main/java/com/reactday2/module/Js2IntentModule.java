package com.reactday2.module;

import android.app.Activity;
import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public class Js2IntentModule extends ReactContextBaseJavaModule {

    public Js2IntentModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "JsIntent";
    }
    @ReactMethod
    public void startActivity(String name){
       Activity activity= getCurrentActivity();
        try {
            Class clas=Class.forName(activity.getPackageName()+"."+name);
            Intent intent=new Intent(activity,clas);
            activity.startActivity(intent);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new JSApplicationIllegalArgumentException("不能打开JSApp:"+e.getMessage());

        }
    }

    @ReactMethod
    public void showToast(String msg){
        Activity activity=getCurrentActivity();
        Toast.makeText(activity.getApplicationContext(),msg,Toast.LENGTH_LONG).show();
    }
}
