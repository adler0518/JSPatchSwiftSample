//
//  ViewController.swift
//  JSPatchSwiftSample
//
//  Created by qitmac000260 on 16/8/29.
//  Copyright © 2016年 jinfeng.du. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet var testView:UIView?
    var testVariable = "testVariable"
    dynamic private var privateTestVariable = "privateTestVariable"

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
//        self.testView!.backgroundColor = UIColor .redColor()
        
    }
    
    override func viewDidAppear(animated: Bool) {
        super.viewDidAppear(animated)
        
//        PersonModel.TestFucntion();//demo1.js or demo1_1.js
//        self.testFunction(""); self.privateTestFunction("")    //demo2.js
//        ViewController.staticTestFunction("demo3"); ViewController.classTestFunction("demo3");  //demo3.js
//        self.km; self.myExtensionTestFunction("swift eeeee")  //demo5.js
        
        //demo6.js
        print("Person someTypeProperty: \(Person.someTypeProperty)")
        let p = Person();
        print("Person fullName: \(p.fullName)")
        p.play()
        Person.cPlay()
        
        //访问js中新增的方法
        let control:UIControl = UIControl()
        control.sendAction(Selector("newTestFunc"), to: p, forEvent: nil)
        
        //demo7.js
//        Pure().call()
        
        
        let delay = dispatch_time(DISPATCH_TIME_NOW, Int64(3 * Double(NSEC_PER_SEC)))
        dispatch_after(delay, dispatch_get_main_queue()) {
            UIView.animateWithDuration(4, animations: {
                self.testView!.transform = CGAffineTransformMakeTranslation(100, 100);
                }, completion: { (finished:Bool) in
                    print("Origin Function: \(#function) Line: \(#line)");
                    print("Test data output: \(self.testVariable)")
                    print("Test data output: \(self.privateTestVariable)")
            })
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    //MARK: - 自定义方法 demo2.js
    dynamic func testFunction(string:String) -> Void {
        print("Origin Function: \(#function) Line: \(#line)");
        print("Test data output: \(self.testVariable)")
    }
    
    dynamic private func privateTestFunction(string:String) -> Void {
        print("Origin Function: \(#function) Line: \(#line)");
        print("Test data output: \(self.privateTestVariable)")
    }
    
    //MARK: - 静态方法 demo3.js
    dynamic static func staticTestFunction(string:String) -> Void {
        print("Origin Function: \(#function) Line: \(#line)");
        print("Static Fucntion output:\(string) !!!!!!!!!!")
    }
    
    dynamic class func classTestFunction(string:String) -> Void {
        print("Origin Function: \(#function) Line: \(#line)");
        print("Class Fucntion output: \(string) !!!!!!!!!!")
    }


}

