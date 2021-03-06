module.exports = {
	extends: 'stylelint-config-standard',
	rules: {
		"selector-class-pattern": null,
		"selector-id-pattern": null,
		"block-closing-brace-empty-line-before": [
			"never", { "severity": "warning" }
		],
		"at-rule-empty-line-before": [
			"always", { "severity": "warning" }
		],
		"number-leading-zero": [
			"always", { "severity": "warning" }
		],
		"selector-descendant-combinator-no-non-space": [
			true, { "severity": "warning" }
		],
		"length-zero-no-unit": null,
		"color-hex-length": null,
		"color-hex-case": null,
		"selector-list-comma-newline-after": null,
		"max-empty-lines": null,
		"comment-whitespace-inside": null,
		"no-descending-specificity": null,
		"indentation": [
			"tab", { "severity": "warning" }
		],
		"rule-empty-line-before": null,
		"comment-empty-line-before": null,
		"declaration-colon-space-after": null,
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
