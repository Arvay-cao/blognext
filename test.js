// fetch('http://localhost/index.php?graphql')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

fetch('http://localhost/index.php?graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            query: "query postsQuery {\n  posts {\n    edges {\n      node {\n        title\n        excerpt\n        slug\n      }\n    }\n  }\n}",
            variables: null,
            operationName: "postsQuery"
        }
    )
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));