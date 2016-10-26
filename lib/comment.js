module.exports = {
    rules: {
        'comment-empty-line-before': [
            'always',
            {
                except: [
                    'first-nested'
                ],
                ignore: [
                    'between-comments',
                    'stylelint-commands'
                ]
            }
        ],
        'comment-whitespace-inside': 'always'
    }
};
