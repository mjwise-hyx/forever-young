#!/usr/bin/python
# -*- coding: utf-8 -*-
import os
import string

g_files = []


def gci(filepath):
    '''遍历filepath下所有文件，包括子目录'''
    files = os.listdir(filepath)
    for fi in files:
        fi_d = os.path.join(filepath,fi)            
        if os.path.isdir(fi_d):
            gci(fi_d)                  
        else:
            g_files.append(fi_d)
            print(fi_d) 

def file_read():
    count =[]
    count_en = count_dg = count_sp = count_zh = count_pu = 0
    for fi in g_files:
       fileName = open(fi,'r',encoding='utf-8')
       if fileName:
            count=file_count(fileName)
            count_en+=count[0]
            count_dg+=count[1]
            count_sp+=count[2]
            count_zh+=count[3]
            count_pu+=count[4]
    print("-----------------全部-------------")
    print('英文字符：', count_en)
    print('数字：', count_dg)
    print('空格：', count_sp)
    print('中文：', count_zh)
    print('特殊字符：', count_pu)    

def file_count(fileName):
    '''找出文件中的中英文、空格、数字、标点符号个数'''
    count_en = count_dg = count_sp = count_zh = count_pu = 0
    for line in fileName:
        for s in line:
            # 英文
            if s in string.ascii_letters:
                count_en += 1
            # 数字
            elif s.isdigit():
                count_dg += 1
            # 空格
            elif s.isspace():
                count_sp += 1
            # 中文
            elif s.isalpha():
                count_zh += 1
            # 特殊字符
            else:
                count_pu += 1
    print("文件名",fileName.name)
    print('英文字符：', count_en)
    print('数字：', count_dg)
    print('空格：', count_sp)
    print('中文：', count_zh)
    print('特殊字符：', count_pu)
    return [count_en,count_dg,count_sp,count_zh,count_pu]

if __name__ == "__main__":
    gci('.\生活记录')
    file_read()
    
