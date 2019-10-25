create table helo_users (
    helo_users_id serial primary key,
    helo_users_username varchar(20) not null,
    helo_users_password varchar(250) not null,
    helo_users_profile_pic text not null
);

create table helo_posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    helo_users_id int references helo_users(helo_users_id)
);