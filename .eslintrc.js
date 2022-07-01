{
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": { "project": ["./tsconfig.json"] },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString" : false,
                "allowNumber" : false
            }
        ],
        "arrow-parens": [
          "error", 
          {
            "always", 
            "requireForBlockBody": true
          }
        ], 
        "arrow-spacing": [ 
          "error",
          { 
            "before": true, 
            "after": true 
          }
        ], 
        "block-scoped-var": "error",
        "camelcase": [
          "error", 
          {
            "ignoreDestructuring": false,
            "ignoreGlobals": false, 
            "ignoreImports", false
          }
         ]
       },
         "complexity": ["error", { "max": 4 }],
         "curly": "error" ,
         "eqeqeq": ["error", "smart"],
         "generator-star-spacing": "error", 
         "guard-for-in": "error", 
         "new-cap": ["error", {
           "capIsNew": true,
           "newIsCap": true,
           "properties": true
         }],
        "no-caller": "error",
        "no-class-assign": "error",
        "no-cond-assign": ["error", "except-parens"],
        "no-console": "error",
        "no-const-assign": "error", 
        "no-constant-condition": ["error", {"checkLoops": true}],   
        "no-control-regex": "error",   
        "no-debugger": "error", 
        "no-delete-var": "error", 
        "no-dupe-args": "error", 
        "no-dupe-class-members": "error", 
        "no-dupe-keys": "error", 
        "no-duplicate-case": "error", 
        "no-empty": ["error", {"allowEmptyCatch": false}], 
        "no-empty-character-class": "error", 
        "no-eval": ["error", {"allowIndirect": false}],
        "no-ex-assign": "error", 
        "no-extend-native": "error", 
        "no-extra-boolean-cast": ["error", {"enforceForLogicalOperands":false}],
        "no-extra-semi": "error", 
        "no-fallthrough": "error", 
        "no-func-assign": "error",   
        "no-inner-declarations": ["error", "functions"],
        "no-invalid-regexp": "error", 
        "no-irregular-whitespace": ["error", {"skipComments": false, "skipRegExps": false, "skipStrings": true, "skipTemplates": false}]
        "no-iterator": "error", 
        "no-loop-func": "error", 
        "no-mixed-spaces-and-tabs": "error", 
        "no-multi-str": "error",   
        "no-negated-in-lhs": "error", 
        "no-new": "error",  
        "no-obj-calls": "error", 
        "no-octal": "error", 
        "no-redeclare": ["error", {"builtinGlobals": true}],
        "no-regex-spaces": "error", 
        "no-script-url": "error", 
        "no-sparse-arrays": "error", 
        "no-this-before-super": "error", 
        "no-undef": ["error", {"typeof": false}],
        "no-undefined": "error", 
        "no-unreachable": "error", 
        "no-use-before-define": "error", 
        "object-shorthand": "error", 
        "quotes": ["error", {
          "allowTemplateLiterals": false,
          "avoidEscape": false,
          "double"
        }],
        "require-yield": "error", 
        "semi": ["error", "always"], 
        "use-isnan": ["error", {"enforceForIndexOf": false, "enforceForSwitchCase": true}],
        "valid-typeof": ["error", {"requireStringLiterals": false}],
        "wrap-iife": ["error", {"outside", "functionPrototypeMethods": false}]
    "ignorePatterns": ["src/frontend/generated/*"]
}
