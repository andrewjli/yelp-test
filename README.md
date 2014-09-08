yelp-test
=========
You are given an input in the form below.
```js
{
    'Amy': {
        'Chen': '555-555-5555',
        'Franklin': '111-111-1111'
    },
    'Frank': {
        'Chen': '666-666-6666'
    },
    ...
}
```

Write a function `invert_name_map(input)` that gives output in the form below.
```js
{
    'Chen': {
        'Amy': '555-555-5555',
        'Frank': '666-666-6666'
    },
    'Franklin': {
        'Amy': '111-111-1111'
    },
    ...
}
```
