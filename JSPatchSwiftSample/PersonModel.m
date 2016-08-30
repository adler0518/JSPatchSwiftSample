//
//  PersonModel.m
//  JSPatchSwiftSample
//
//  Created by qitmac000260 on 16/8/29.
//  Copyright © 2016年 jinfeng.du. All rights reserved.
//

#import "PersonModel.h"

#define LogTrace() NSLog(@"<[TRACE] %s, Line: %d> ", __PRETTY_FUNCTION__, __LINE__);

@interface PersonModel()
@property (nonatomic, strong) NSString *dis;

-(void) printDis;
@end

@implementation PersonModel

-(instancetype)init {
    if (self = [super init]) {
        _name = @"oc public property name";
        _dis = @"oc private property dis";
    }
    
    return self;
}

-(void) printName {
    LogTrace();
    NSLog(@"Test data output:%@", self.name);
}

-(void) printDis {
    LogTrace();
    NSLog(@"Test data output:%@", self.dis);
}

+(void) TestFucntion {
    PersonModel *person = [[PersonModel alloc] init];
    [person printName];
    [person printDis];
}

@end
