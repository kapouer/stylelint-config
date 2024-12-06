export default {
	plugins: [
		"@stylistic/stylelint-plugin"
	],
	extends: 'stylelint-config-standard',
	rules: {
		"selector-class-pattern": null,
		"selector-id-pattern": null,
		"@stylistic/block-closing-brace-empty-line-before": [
			"never", { "severity": "warning" }
		],
		"at-rule-empty-line-before": [
			"always", { "severity": "warning" }
		],
		"@stylistic/number-leading-zero": [
			"always", { "severity": "warning" }
		],
		"@stylistic/selector-descendant-combinator-no-non-space": [
			true, { "severity": "warning" }
		],
		"length-zero-no-unit": null,
		"color-hex-length": null,
		"@stylistic/color-hex-case": null,
		"@stylistic/selector-list-comma-newline-after": null,
		"@stylistic/max-empty-lines": null,
		"comment-whitespace-inside": null,
		"no-descending-specificity": null,
		"@stylistic/indentation": [
			"tab", { "severity": "warning" }
		],
		"rule-empty-line-before": null,
		"comment-empty-line-before": null,
		"@stylistic/declaration-colon-space-after": null,
		"selector-type-no-unknown": [
			true, { "ignore": ["custom-elements"] }
		]
	},
	ignoreFiles: [ // this is probably ignored
		"node_modules/",
		"**",
		"!**/*.{css,scss,sass}"
	]
};
