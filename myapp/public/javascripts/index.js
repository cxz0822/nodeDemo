/**
 * Created by admin on 2017/6/2.
 */
var request = require('request');
exports.getBannerList = function (callback) {
    request({
        url:'http://onlineweb-2.boxuegu.com/banner/getBannerList',
        method:'get',
        form:{
        }
    },function(error,response,body){
        var arry=[] ;
        if(!error){
            var userInfo = eval('(' + body + ')');
            if(userInfo.success){
                arry.push(userInfo.resultObject);
            }else{
                console.log("获取轮播图失败")
            }
            request({
                url:'http://onlineweb-2.boxuegu.com/courseIntroduction/getCourseIntroductionList',
                method:'get',
                form:{
                }
            },function(error,response,body){
                if(!error){
                    var userInfo1 = eval('(' + body + ')');
                    if(userInfo1.success){
                        arry.push(userInfo1.resultObject);
                    }else{
                        arry.push(null);
                        console.log("获取课程类型介绍失败")
                    }
                    request({
                        url:'http://onlineweb-2.boxuegu.com/online/live/getOpenCourse?num=4',
                        method:'get',
                        form:{
                        }
                    },function(error,response,body){
                        if(!error){
                            var userInfo2 = eval('(' + body + ')');
                            if(userInfo2.success){
                                arry.push(userInfo2.resultObject);
                            }else{
                                arry.push(null);
                                console.log("获取公开课直播失败")
                            }
                            request({
                                url:'http://onlineweb-2.boxuegu.com/home/infomation/list',
                                method:'get',
                                form:{
                                }
                            },function(error,response,body){
                                if(!error){
                                    var userInfo3 = eval('(' + body + ')');
                                    if(userInfo3.success){
                                        arry.push(userInfo3.resultObject);
                                    }else{
                                        arry.push(null);
                                        console.log("获取资讯公告失败")
                                    }
                                }
                                request({
                                    url:'http://onlineweb-2.boxuegu.com/studentStory/listByIndex',
                                    method:'get',
                                    form:{
                                    }
                                },function(error,response,body){
                                    if(!error){
                                        var userInfo4 = eval('(' + body + ')');
                                        if(userInfo4.success){
                                            arry.push(userInfo4.resultObject);
                                        }else{
                                            arry.push(null);
                                            console.log("获取学员故事失败")
                                        }
                                    }
                                    request({
                                        url:'http://onlineweb-2.boxuegu.com/otherlink/getOtherLink',
                                        method:'get',
                                        form:{
                                        }
                                    },function(error,response,body){
                                        if(!error){
                                            var userInfo5 = eval('(' + body + ')');
                                            if(userInfo5.success){
                                                arry.push(userInfo5.resultObject);

                                            }else{
                                                arry.push(null);
                                                console.log("获取友情链接失败")
                                            }
                                            request({
                                                url:'http://onlineweb-2.boxuegu.com/index/getIndexCareerCourse',
                                                method:'get',
                                                form:{
                                                }
                                            },function(error,response,body){
                                                if(!error){
                                                    var userInfo6 = eval('(' + body + ')');
                                                    arry.push(userInfo6);
                                                    if(userInfo6.success){

                                                    }else{
                                                        arry.push(null);
                                                        console.log("获取就业课失败")
                                                    }
                                                }
                                                request({
                                                    url:'http://onlineweb-2.boxuegu.com/index/selectMicroCourses',
                                                    method:'get',
                                                    form:{
                                                    }
                                                },function(error,response,body){
                                                    if(!error){
                                                        var userInfo7 = eval('(' + body + ')');
                                                        arry.push(userInfo7);
                                                        callback&&callback(arry);
                                                        if(userInfo7.success){

                                                        }else{
                                                            arry.push(null);
                                                            console.log("获取微课堂失败")
                                                            callback&&callback(arry);
                                                        }
                                                    }
                                                })
                                            })
                                        }
                                    })
                                })
                            })
                        }
                    })
                }
            })
        }
    })}