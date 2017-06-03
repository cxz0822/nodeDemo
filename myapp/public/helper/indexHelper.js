/**
 * Created by admin on 2017/6/2.
 */
var Handlebars = require('hbs');
Handlebars.registerHelper('direction',function(val,options){
    if(val==1){
        return options.fn(this);
    }else{
        return options.inverse(this);
    }
});
Handlebars.registerHelper('hasImg',function(obj){
    if(obj!=null && obj!=""){
        return '<div class="img"><img  src="'+obj+'" /></div>';
    }else{
        return '<div class="aimg" style="background-image:none;"><img   src="/images/load26.gif"/></div>';
    }
});
Handlebars.registerHelper('employmentClass1',function(onlineCourse){
    if(onlineCourse==2){
        return '  <a href="web/html/payCourseDetailPage.html?id={{courseId}}&courseType=1&free=0" class="onlineStudy" target="_blank">����ѧϰ</a>' +
            '<a href="{{offlineCourseUrl}}" class="unlineStudy" target="_blank">����ѧϰ</a>'
    }else{
        if(onlineCourse==0){
            return '<a href="web/html/payCourseDetailPage.html?id={{courseId}}&courseType=1&free=0" class="onlineStudy" target="_blank">����ѧϰ</a>'
        }
        if(onlineCourse==1){
            return '<a href="{{offlineCourseUrl}}" class="unlineStudy" target="_blank">����ѧϰ</a>'
        }
    }
});
Handlebars.registerHelper('employmentClass2',function(onlineCourse){
    if(onlineCourse==2){
        return '  <a href="web/html/payCourseDetailPage.html?id={{courseId}}&courseType=1&free=0" class="onlineStudy" style="margin-top:11px;" target="_blank">����ѧϰ</a>' +
            '<a href="{{offlineCourseUrl}}" class="unlineStudy" style="margin-top:11px;" target="_blank">����ѧϰ</a>'
    }else{
        if(onlineCourse==0){
            return '<a href="web/html/payCourseDetailPage.html?id={{courseId}}&courseType=1&free=0" class="onlineStudy" target="_blank">����ѧϰ</a>'
        }
        if(onlineCourse==1){
            return '<a href="{{offlineCourseUrl}}" class="unlineStudy" target="_blank">����ѧϰ</a>'
        }
    }
});
Handlebars.registerHelper('employmentBigSmallImg',function(num,options){
    if(num==0 || num==5){
        return options.fn(this)
    }else{
        return options.inverse(this)
    }
});
//ѧԱ����ͼƬ�ж��Ƿ����
Handlebars.registerHelper('changeImg',function(num){
    if(num!=null){
        return num;
    }else{
        return '/images/defaultHeadImg.jpg';
    }
});
