module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true,
		"commonjs": true,
		"amd": true

	},
	"extends": "eslint:recommended",
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": { 
		"indent": [ "error", "tab"],
		"linebreak-style": [ "error", "unix" ],
		"quotes": [ "error", "double" ],
		"semi": [ "error", "always" ],
		"keyword-spacing": [ "error", { "before": true } ],
		"comma-spacing": [ "error", { "before": false, "after": true }],
		"no-unused-vars": ["error", { "vars": "local", "args": "after-used", "ignoreRestSiblings": false }],
		"object-curly-spacing": ["error", "always", { "arraysInObjects": false }],
		"eslint space-before-blocks": ["error", { "functions": "never", "keywords": "always", "classes": "never" }]
	}
};
