//
//  JFProtocolDemo.swift
//  JSPatchSwiftSample
//
//  Created by qitmac000260 on 16/8/29.
//  Copyright © 2016年 jinfeng.du. All rights reserved.
//

import Foundation

protocol FullyNamed {
    var fullName: String  { get set }
    static var someTypeProperty: Int { get }
    
    func play()
}


class Person: NSObject, FullyNamed {
    var fullName: String = "jinfeng.du"
    
    static var someTypeProperty: Int {
        return 10
    }
    
    dynamic func play(){
        print("Origin Function: \(#function) Line: \(#line)");
        print("protocol data output: \(self.fullName)")
        
    }
    
    dynamic class func cPlay(){
        print("origin class function: \(#function) Line: \(#line)")
    }
    
}


