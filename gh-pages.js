var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/dominikbubu/svelte-todo.git', // Update to point to your repository  
        user: {
            name: 'dominikbubu', // update to use your name
            email: 'czanerdominik@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)