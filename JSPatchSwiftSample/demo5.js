defineClass('JSPatchSwiftSample.ViewController', {
            getKm:function(newKm){
                console.log("js get km")
            },
            km:function(newKm){
                console.log("jspatch km"+newKm)
                return 44
            },
            myExtensionTestFunction:function(string){
                console.log('JSPatch classTestFunction output:!!!!!!!!!!!'+string)
            },
        viewDidAppear: function(animated) {
            self.super().viewDidAppear(animated);
            
            
            var data = self.km()
            console.log('km output: ' + data)
        
            self.getKm(5)
            
            self.myExtensionTestFunction("js")
        },
})

/*扩展的计算型属性和实例方法可以被修改和掉用。依次类推计算静态熟悉，类方法，下标，嵌套类型也可以正常使用*/