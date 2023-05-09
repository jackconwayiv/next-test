//allows us to run some code for every route of our application
//we need a way to set and delete a cookie (because we can only edit otherwise)

import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });
  await supabase.auth.getSession();
  return res;
}