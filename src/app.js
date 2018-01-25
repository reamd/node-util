/**
 * Created by reamd on 2018/1/10.
 */
let cmd=require('node-cmd')
let apkPackageName_zushou = 'com.kingsunedu.ik' // 要卸载的学生端教师助手包名
let apkPackageName_student = 'com.kingsunedu.ik.student' // 要卸载的学生端包名
let apk_student = 'appPackage/student.apk' //要安装的apk

// let apk_teacher = '/data/app/com.kingsunedu.ik-1/base.apk'

let adbCMD = [
    'adb uninstall ' + apkPackageName_zushou,  // 卸载教师助手
    'adb uninstall ' + apkPackageName_student, // 卸载学生端
    'adb install ' + apk_student, // 安装学生端
    'adb shell am start -n ' + apkPackageName_student + '/com.clovsoft.ik.MainActivity' // 启动学生端
]

// 'adb shell input swipe 100 100 100 100 20'滑动
// 'adb shell input tap 250 250' //点击

let tcmd = [
    'adb devices',
    'adb shell screencap -p /sdcard/autojump.png',
    'adb pull /sdcard/autojump.png .',
    'adb shell input tap '
]

let point = [
    '1395 1050', // 右边点击 安装教师助手
    '465 1050', // 左边点击 完成教师助手
    '1125 640' // 删除教师助手安装包
]

/*
* 后续优化流程 （不打开学生端，安装教师端，然后删除安装包）
* */

/*let login = (name, pwd)=>{
    cmd.get('adb shell input keyevent 55 59', ()=>{
        cmd.get('adb shell input text ' + name, ()=>{
            console.log('输入用户名:', name)
            cmd.get('adb shell input keyevent 61', ()=>{ // tab键
                cmd.get('adb shell input text ' + pwd, ()=>{
                    console.log('输入密码:', pwd)
                    /!*cmd.get('adb shell input text ' + pwd, ()=>{
                        console.log('登录完成')

                    })*!/
                })
            })

        })
    })
}


login('zy50', '123456')*/

cmd.get(adbCMD[0], ()=>{
    console.log('卸载教师助手完成')
        cmd.get(adbCMD[1], ()=>{
            console.log('卸载学生端完成\n')
            cmd.get(adbCMD[2], ()=>{
                console.log('安装新版本学生端完成')
                cmd.get(adbCMD[3], ()=>{
                    console.log('启动学生端完成\n')
                    setTimeout(()=>{
                        cmd.get(tcmd[3] + point[0], ()=>{
                            console.log('点击安装教师助手')
                            setTimeout(()=>{
                                console.log('安装教师助手完成\n')
                                cmd.get(tcmd[3] + point[1], ()=>{
                                    console.log('点击完成')
                                    setTimeout(()=>{
                                        cmd.get(tcmd[3] + point[2], ()=>{
                                            console.log('删除教师助手安装包')

                                        })
                                    }, 1000)
                                })
                            }, 6000)
                        })
                    }, 2000)

                })
            })
        })
    }
)
