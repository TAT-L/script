
from distutils.log import error
from turtle import pos
import pyautogui
import time


pyautogui.FAILSAFE = True


def checkExit():   # 检测是否回到桌面
    exit = pyautogui.locateCenterOnScreen("exit.png")
    if exit is not None:
        print("结束")
        return True


def checkPosted():  # 检测当前图片是否上传
    imagePath = pyautogui.locateOnScreen(
        "imagePath.png", confidence=0.9)
    posted = pyautogui.locateCenterOnScreen(
        "posted.png", confidence=0.9)
    if imagePath is not None:
        print("检测到图片未上传")
        return -1
    elif posted is not None:
        print("检测到图片已上传")
        return 1
    else:
        print("图片未获得焦点")
        return 0  # 图片未获得焦点


def postImage():
    pyautogui.click(
        clicks=1, interval=0.2,
        duration=0.2, button='right')
    print("右键")
    postButton = pyautogui.locateCenterOnScreen(  # 获取上传图片位置
        "post.png", confidence=0.8)  # post图片
    if postButton is not None:
        pyautogui.click(postButton.x, postButton.y, interval=0.2,
                        duration=0.2, button='left')
        print("点击上传")

        while not checkPosting():
            a = 1
        time.sleep(1)
        check = checkPosted()  # 判断是否上传成功
        if check == 1:
            return True
        elif check == -1:
            return False

    else:
        print("未找到上传图片按钮")


def checkPosting():
    posted = pyautogui.locateCenterOnScreen("posting.png", confidence=0.7)
    if posted is None:
        print("上传结束")
        return True
    else:
        False


def changePath():
    imagePath = pyautogui.locateOnScreen(
        "imagePath.png", confidence=0.6)
    print(imagePath)
    if imagePath is not None:
        pyautogui.click(imagePath[0], imagePath[1], interval=0.2,
                        duration=0.2, button='left')
        print("点击地址")
        # pyautogui.dragRel(530, 5, duration=2)
        pyautogui.mouseDown()
        pyautogui.moveRel(570, 0, duration=0.5)
        # pyautogui.mouseUp()
        pyautogui.typewrite(
            'https://gitee.com/li-xianjie/pic-go/raw/master/img')
        pyautogui.mouseUp()
        time.sleep(0.2)
        print("输入地址")
        check = checkPosted()  # 判断是否上传成功
        if check == 1:
            return True
        elif check == -1:
            return False


def scrollAndClick():
    time.sleep(0.2)
    pyautogui.scroll(-200)
    width, height = pyautogui.size()  # 屏幕的宽度和高度
    pyautogui.click(width/2, height/2, interval=0.2,
                    duration=0.2, button='left')
    print("点击屏幕中央")


while True:
    if checkExit():  # 回到桌面退出循环
        break
    posted = checkPosted()

    if posted == 1:  # 已上传
        print("已上传")
        scrollAndClick()
    elif posted == 0:  # 使图片获得焦点
        scrollAndClick()
    elif posted == -1:  # 未上传
        print("上传图片")
        post = postImage()
        if post:  # 上传成功
            print("上传成功")
            scrollAndClick()
        else:  # 上传失败
            print("上传失败，修改地址")
            change = changePath()
            if change:
                print("改地址成功")
                scrollAndClick()
            else:
                print("改地址失败")
