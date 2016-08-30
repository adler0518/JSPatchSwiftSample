//
//  Pure.swift
//  JSPatchSwiftSample
//
//  Created by qitmac000260 on 16/8/29.
//  Copyright © 2016年 jinfeng.du. All rights reserved.
//

import Foundation

class Pure {
    
    var a = "a"
    dynamic private var pa = "pa"
    
    func call() {
        self.fun()
        self.pfun()
    }
    
    dynamic func fun() {
        print("ORIG fun self.a: \(self.a)")
    }
    
    dynamic private func pfun() {
        print("ORIG pfun self.pa: \(self.pa)")
    }
    
}
