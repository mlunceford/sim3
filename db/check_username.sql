--todo dont know if this is right f me

select a.helo_users_id, a.helo_users_username, a.helo_users_password, b.
from helo_users a
join helo_posts b on a.helo_users_id = a.helo_users_id
where a.helo_users_id = $1;