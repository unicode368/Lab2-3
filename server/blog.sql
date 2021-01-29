CREATE TABLE posts (
	id SERIAL,
	user VARCHAR(255),
	
);

create function check_role(p_input text)
  returns boolean
as
$$
declare
  l_allowed text[] := array['me', 'user'];
begin
  if p_input = any(l_allowed) then 
    return true;
  end if;
  raise 'The only allowed values are: %', array_to_string(l_allowed, ', ');
end;
$$
language plpgsql
immutable;


CREATE TABLE users (
	id SERIAL NOT NULL,
	login VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	role VARCHAR(255) CHECK(check_role(role)) NOT NULL
);