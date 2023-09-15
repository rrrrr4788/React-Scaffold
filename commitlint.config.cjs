module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'type-enum': [2, 'always', ['bug', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert', 'merge']],
  },
};
