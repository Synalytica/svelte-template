<div id="users">
</div>
<script>
import axios from 'axios'
axios.get('/api/core/')
.then(req => {
        let users = req.data.users;
        console.log(users);
        let usersDiv = document.getElementById("users");
        for(let user in users) {
            let userDiv = document.createElement("div");
            userDiv.textContent = JSON.stringify(user);
            usersDiv.appendChild(userDiv);
        }
});
</script>
