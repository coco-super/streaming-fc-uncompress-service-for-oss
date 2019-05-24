module.exports = {
  "name": "helloworld",                                 
  "description": "Print hello world",                    
  "userPrompt": [                                         
    {
        "type": "input",                              
        "name": "service",                                 
        "message": "Please input serviceName?",              
        "default": "{{ projectName }}"                 
      
    },
    {
      "type": "input",                             
      "name": "bucketName",                                 
      "message": "Please input bucketName?",               
      "default": "{{ projectName }}"                
    },
    {
      "type": "input",                             
      "name": "prefix",                                 
      "message": "Please input prefix?"
    },
    {
      "type": "input",                             
      "name": "suffix",                                 
      "message": "Please input suffix?"
    }
  ],
  'vars': {
    'service': '{{ projectName }}'
  }
}