require('UIView,UIColor')

defineClass('JSPatchSwiftSample.ViewController', {
    viewDidAppear: function(animated) {
        self.super().viewDidAppear(animated);
            

        console.log('!!!!!!!!!!!!!!!!!!!!')
    
        var slf = self
        dispatch_after(1.0, function(){
           console.log('222')
            slf.testView().setCenter({x: 100, y: 100})
           UIView.animateWithDuration_animations_completion(1.0,block("",function(){
                                                                      var red = Math.floor(Math.random() * ( 255 +0.1))/255;
                                                                      var green = Math.floor(Math.random() * ( 255 +0.1))/255;
                                                                      var blue = Math.floor(Math.random() * ( 255 +0.1))/255;
                                                                      var color = UIColor.colorWithRed_green_blue_alpha(red,green,blue,1)
                                                                      slf.testView().setBackgroundColor(color)
                                                                      
                                                                      })
                                                            ,block("BOOL",function(finished){
                                                                   slf.testView().setCenter({x: 200, y: 400})
                                                                   }));
        })
    }
})

/*对通用性的测试：block的使用，view的简单动画, block体中如果使用self，比如用var来重新定义变量。GCD,animation在swift和oc中都不需要，但在js中则需要将其self重新定义*/