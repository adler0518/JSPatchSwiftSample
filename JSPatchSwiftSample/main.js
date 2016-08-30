defineClass('JSPatchSwiftSample.ViewController', {
            viewDidAppear: function(animated) {
            self.super().viewDidAppear(animated);
            var data = self.testVariable()
            console.log('testVariable output: ' + data.toJS())
            
            var privateData = self.privateTestVariable()
            console.log('privateTestVariable output: ' + privateData.toJS())
            
            self.setTestVariable('JSPatch')
            self.setPrivateTestVariable('Private JSPatch')
            
            var data = self.testVariable()
            console.log('testVariable output: ' + data.toJS())
            
            var privateData = self.privateTestVariable()
            console.log('privateTestVariable output: ' + privateData.toJS())
            
            self.ORIGviewDidAppear(animated);
            }
            });

/*在继承于NSObject的类中，public变量可以直接修改，而private变量需要加上dynamic*/