(function($){
  $.fn.extend({
    forkme: function(text,url,text1){
      var htmlTemplate = "<div id='forkme_banner_box'>" +
                         "<div id='forkme_banner_content_box'>" +
                         "<a href='@url' id='forkme_banner_content'>@text</a>" +
                         "</div>" +
                         "<div id='forkme_banner_tool_box'>" +
                         "<a href='javascript:void(0);' id='forkme_banner_tool' hidefocus='true'><span id='icoContainer' class='drop drop-down-ico'>Click</span></a>" +
                         "</div>" +
                         "</div>";
      //防止不传参数
      text = text || "Baidu";
      url = url || "https://www.baidu.com";
      // text1 = "Pull";
      
      //构造html
      htmlTemplate = htmlTemplate.replace("@text",text);
      htmlTemplate = htmlTemplate.replace("@url",url);
      // htmlTemplate = htmlTemplate.replace("@text",text1);
      //添加html到body中
      this.append(htmlTemplate);
      
      //注册事件
      $("#forkme_banner_tool").click(function(){
    		$("#forkme_banner_content_box").slideToggle("slow",function(){
          //效果完毕，更改箭头样式
          $("#icoContainer").toggleClass("drop-up-ico");
    		});
    	});
    }
  });
})(jQuery);
