# 5999Cargo Redesign website

- New Hero section ✅
- New Navigation bar and Items ✅
- Improvement responsive design✅
- Add contact form✅

-scrapping web
https://5999cargo.managercargo.com/public/casillero/casillerousuario/casrastreo/puntos/1

# tables

create table
  public.profiles (
    id uuid not null,
    created_at timestamp with time zone not null default now(),
    user_email character varying not null,
    first_name text null,
    last_name text null,
    document_id text null,
    country text null,
    city text null,
    address text null,
    zip_code text null,
    mobile_phone text null,
    second_phone text null,
    is_data_complete boolean not null default false,
    constraint profiles_pkey primary key (id),
    constraint profiles_email_user_key unique (user_email),
    constraint profiles_id_fkey foreign key (id) references auth.users (id) on update cascade on delete cascade
  ) tablespace pg_default;