defineClass('JSPatchSwiftSample.ViewController', {
            
            testFunction: function(string) {
            
            var data = self.testVariable()
            console.log('testVariable output: ' + data.toJS())
            
            self.setTestVariable('JSPatch')
            
            var data = self.testVariable()
            console.log('testVariable output: ' + data.toJS())
            
            self.ORIGtestFunction(string);
            
            },
            
            privateTestFunction: function(string) {
            
            var privateData = self.privateTestVariable()
            console.log('privateTestVariable output: ' + privateData.toJS())
            
            self.setPrivateTestVariable('Private JSPatch')
            
            var privateData = self.privateTestVariable()
            console.log('privateTestVariable output: ' + privateData.toJS())
            
            self.ORIGprivateTestFunction(string);
            }
            });

/*继承自NSObject的Swift类，其继承自父类的方法具有动态性，其他自定义方法、属性需要加dynamic修饰才可以获得动态性，自定义public属性也具备了动态性*/