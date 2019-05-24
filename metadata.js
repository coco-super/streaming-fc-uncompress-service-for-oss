module.exports = {
  "name": "helloworld",                                 //  ① 模板项目名称
  "description": "Print hello world",                     //② 模板项目描述
  "userPrompt": [                                         //③ 提示输入变量（显式变量）
    {
        "type": "input",                               //④ 提示输入类型
        "name": "service",                                 //⑤ 模板变量名
        "message": "Please input serviceName?",                //⑥ 提示信息
        "default": "{{ projectName }}"                 //⑦ 模板变量默认值
      
    },
    {
      "type": "input",                               //④ 提示输入类型
      "name": "bucketName",                                 //⑤ 模板变量名
      "message": "Please input bucketName?",                //⑥ 提示信息
      "default": "{{ projectName }}"                 //⑦ 模板变量默认值
    }
  ],
}