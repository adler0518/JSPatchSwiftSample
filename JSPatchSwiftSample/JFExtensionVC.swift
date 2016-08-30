//
//  JFExtensionVC.swift
//  JSPatchSwiftSample
//
//  Created by qitmac000260 on 16/8/29.
//  Copyright © 2016年 jinfeng.du. All rights reserved.
//

import Foundation

extension ViewController {
    
    var km: Double {
        print("Origin Function: \(#function) Line: \(#line)");
        print("extension vc km: !!!!")
        return 2
    }
    
    dynamic func myExtensionTestFunction(string:String) -> Void {
        print("Origin Function: \(#function) Line: \(#line)");
        print("Static Fucntion output:\(string) !!!!!!!!!!")
    }
    
}
