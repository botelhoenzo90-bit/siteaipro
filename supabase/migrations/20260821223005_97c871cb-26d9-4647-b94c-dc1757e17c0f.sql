-- Create enum for app roles
create type public.app_role as enum ('admin', 'user');

-- Create profiles table
create table public.profiles (
    id uuid references auth.users(id) on delete cascade primary key,
    full_name text,
    avatar_url text,
    plan_type text default 'free',
    updated_at timestamp with time zone default now()
);

-- Create projects table (AI generated sites/prompts)
create table public.projects (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    name text not null,
    business_type text,
    city text,
    objective text,
    target_audience text,
    services text,
    visual_style text,
    colors text,
    sections text,
    generated_prompt text,
    generated_structure jsonb,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

-- Create leads table (CRM)
create table public.leads (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    company_name text not null,
    niche text,
    city text,
    instagram text,
    whatsapp text,
    current_site text,
    status text default 'new_contact',
    notes text,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

-- Create proposals table
create table public.proposals (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    lead_id uuid references public.leads(id) on delete set null,
    client_name text,
    business_type text,
    project_value numeric,
    deadline text,
    services_included text,
    content jsonb,
    status text default 'draft',
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

-- User roles table
create table public.user_roles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    role app_role not null default 'user',
    unique (user_id, role)
);

-- GRANTS
grant select, insert, update on public.profiles to authenticated;
grant select, insert, update, delete on public.projects to authenticated;
grant select, insert, update, delete on public.leads to authenticated;
grant select, insert, update, delete on public.proposals to authenticated;
grant select on public.user_roles to authenticated;

grant all on public.profiles to service_role;
grant all on public.projects to service_role;
grant all on public.leads to service_role;
grant all on public.proposals to service_role;
grant all on public.user_roles to service_role;

-- RLS
alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.leads enable row level security;
alter table public.proposals enable row level security;
alter table public.user_roles enable row level security;

-- POLICIES
create policy "Users can view their own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update their own profile" on public.profiles for update using (auth.uid() = id);

create policy "Users can manage their own projects" on public.projects for all using (auth.uid() = user_id);
create policy "Users can manage their own leads" on public.leads for all using (auth.uid() = user_id);
create policy "Users can manage their own proposals" on public.proposals for all using (auth.uid() = user_id);

-- Security Definer Function for Roles
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;
