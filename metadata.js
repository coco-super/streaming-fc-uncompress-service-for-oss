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
    }
  ],
  'vars': {
    'service': '{{ projectName }}'
  }
}