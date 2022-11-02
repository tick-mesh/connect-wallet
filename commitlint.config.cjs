// git commit -m <type>: <subject>
module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['release', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'debug']
    ]
  }
}
