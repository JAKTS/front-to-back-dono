create table products(
  id serial primary key not null,
  name varchar(30),
  description varchar(180),
  price money,
  type varchar(20)
);

create table cart (
  id serial primary key not null,
  prodcts_id int references products
);
