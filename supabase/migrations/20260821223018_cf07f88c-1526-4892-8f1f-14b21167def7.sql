-- Revoke public execution of security definer function
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO service_role;

-- Add missing RLS policies for user_roles
create policy "Users can view their own roles" on public.user_roles for select using (auth.uid() = user_id);
create policy "Admins can manage all roles" on public.user_roles for all using (public.has_role(auth.uid(), 'admin'));
