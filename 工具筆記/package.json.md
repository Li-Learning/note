--save-dev：被寫入到devDependencies  

--save：被寫入到dependencies 

devDependencies 裡面的插件只用於開發環境 。（構建工具比如glup、webpack這些只是在開發中使用的）

dependencies 是需要發佈到生產環境。比如我們寫一個項目要依賴jQuery，沒有這個包的依賴運行就會報錯，這時候就把這個依賴寫入dependencies，會被打包進最終的js文件裡。