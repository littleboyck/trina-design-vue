// 简单的 schemaObj 联动
const schemaObj = {
  "type": "object",
  "title": "个人信息",
  "properties": {
    "sex": {
      "type": "boolean",
      "default": false,
      "title": "性别",
      "widget": "radio"
    },
    "name": {
      "type": "string",
      "default": "张三",
      "title": "姓名",
      "widget": "input",
      "props": {
        "placeholder": "请输入姓名",
        "hidden": "{{ $form.sex == true }}"
      }
    },
    "classes": {
      "type": "string",
      "widget": "select",
      "title": "所属班级",
      "props": {
        "multiple": true,
        "searchable": true,
        "delay": true,
        "fetch": [
          {
            "ref": "apiRef",
            "api": {
              "host": "https://api.example.com", 
              "url": "/getSuppliers",
              "responseType": "json",
              "method": "get",
              "headers": {
                "Authorization": "Bearer {{ $root.token }}"
              },
              "args": `(ctx) => {
                const formData = ctx.formData;
                return formData;
              }`,
            },
            "resolve": {
              // "fetchRef": "api2Ref"
              
            },
            // "reject": {}
          },
          {
            "ref": "api2Ref"
          }
        ],
        "onDataChange": `(data, ctx) => {}`,
      }
    },
    "scores": {
      "type": "array",
      "title": "历史成绩",
      "items": {
        "type": "object",
        "properties": {
          "subject": {
            "type": "string",
            "title": "科目",
            "widget": "input",
            "props": {
              "placeholder": "请输入科目"
            }
          },
          "score": {
            "type": "number",
            "title": "分数",
            "widget": "input-number",
            "props": {
              "placeholder": "请输入分数"
            }
          },
        }
      }
    },
    "classes": {
      "type": "string",
      "widget": "select",
      "title": "所属班级",
      "props": {
        "multiple": true,
        "searchable": true,
        "delay": true,
        "fetch": [
          {
            "ref": "apiRef",
            "api": {
              "host": "https://api.example.com", 
              "url": "/getSuppliers",
              "responseType": "json",
              "method": "get",
              "headers": {
                "Authorization": "Bearer {{ $root.token }}"
              },
              "args": `(ctx) => {
                const formData = ctx.formData;
                return formData;
              }`,
            },
            "resolve": {
              // "fetchRef": "api2Ref"
              
            },
            // "reject": {}
          },
          {
            "ref": "api2Ref"
          }
        ],
        "onDataChange": `(data, ctx) => {}`,
      }
    },
    "scores": {
      "type": "array",
      "title": "历史成绩",
      "items": {
        "type": "object",
        "properties": {
          "subject": {
            "type": "string",
            "title": "科目",
            "widget": "input",
            "props": {
              "placeholder": "请输入科目"
            }
          },
          "score": {
            "type": "number",
            "title": "分数",
            "widget": "input-number",
            "props": {
              "placeholder": "请输入分数"
            }
          },
        }
      }
    }
  }
};