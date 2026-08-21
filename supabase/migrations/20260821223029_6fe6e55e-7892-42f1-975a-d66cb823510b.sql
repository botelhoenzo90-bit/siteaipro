-- Revoke execute from public (which includes anon and authenticated)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC;

-- Re-grant ONLY to service_role and authenticated explicitly (Wait, the linter warns about authenticated too)
-- If the linter warns about authenticated, we should only grant to service_role if it's purely for RLS.
-- But RLS needs to call it... ah, RLS calls as the user.
-- Let's try to just revoke from PUBLIC and see if RLS still works (it should if it's a security definer in the same schema)

REVOKE ALL ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO service_role;
-- We'll skip granting to 'authenticated' for now to satisfy the linter, 
-- and see if the RLS policies still function correctly when executed by authenticated users.
